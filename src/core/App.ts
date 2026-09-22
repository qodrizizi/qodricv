import { profileData } from '../data/content';
import { SkillRenderer } from '../components/SkillRenderer';
import { SectionRenderer } from '../components/SectionRenderer';
import { CyberBackground } from '../components/CyberBackground';
import { Typewriter } from '../components/Typewriter';
import { StatsCounter } from '../components/StatsCounter';
import { TerminalWidget } from '../components/TerminalWidget';
import { ImageModal } from '../components/ImageModal';

export class App {
    private revealObserver: IntersectionObserver | null = null;

    constructor() {
        this.init();
    }

    private init(): void {
        new CyberBackground('cyber-canvas', 'mouse-glow');
        ImageModal.init();
        this.renderContent();
        this.initTypewriter();
        this.initStats();
        new TerminalWidget();
        this.setupEventListeners();
        this.initScrollReveal();
        this.handleLoading();
        this.initScrollToTop();
    }

    private initTypewriter(): void {
        const typewriterEl = document.getElementById('hero-typewriter-text');
        if (typewriterEl) {
            new Typewriter(typewriterEl, profileData.titles);
        }
    }

    private initStats(): void {
        new StatsCounter('stats-counter-container', [
            {
                value: 12,
                suffix: '+',
                label: 'Production Systems Deployed',
                icon: 'fas fa-rocket'
            },
            {
                value: 6,
                suffix: '+',
                label: 'Verified Certifications (BNSP/CSI)',
                icon: 'fas fa-award'
            },
            {
                value: 3.88,
                suffix: ' / 4.00',
                decimals: 2,
                label: 'Bachelor Degree GPA (Cum Laude)',
                icon: 'fas fa-graduation-cap'
            },
            {
                value: 2,
                suffix: '+ Years',
                label: 'Software Engineering Experience',
                icon: 'fas fa-code-branch'
            }
        ]);
    }

    private renderContent(): void {
        // Render Hero Name
        const heroTitle = document.getElementById('hero-title');
        if (heroTitle) heroTitle.innerHTML = profileData.name;

        // Render About
        const aboutText = document.querySelector('.about-text');
        if (aboutText) {
            aboutText.innerHTML = profileData.about.map(p => `<p>${p}</p>`).join('');
        }

        // Render Skills
        const skillRenderer = new SkillRenderer('skill-grid', profileData.skills);
        skillRenderer.render();

        // Render Projects with search and filtering
        SectionRenderer.renderProjects('projects-grid', profileData.projects);

        // Render Certifications with preview modal
        SectionRenderer.renderCertifications('certification-grid', profileData.certifications);

        // Render Experience, Organizations & Education
        SectionRenderer.renderExperience('experience-container', profileData.experience, profileData.organizations, profileData.education);

        // Render Contact with copy-to-clipboard
        SectionRenderer.renderContact(profileData.contact);
    }

    private initScrollReveal(): void {
        this.revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    this.revealObserver?.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        this.observeRevealElements();

        // Re-observe when dynamic content renders
        document.addEventListener('contentUpdated', () => {
            this.observeRevealElements();
        });
    }

    private observeRevealElements(): void {
        if (!this.revealObserver) return;

        const targets = document.querySelectorAll(
            '.reveal-on-scroll, .section-header, .about-content, .stat-card, .contact-terminal, .contact-map'
        );

        targets.forEach(target => {
            if (!target.classList.contains('is-revealed')) {
                target.classList.add('reveal-on-scroll');
                this.revealObserver?.observe(target);
            }
        });
    }

    private setupEventListeners(): void {
        // Mobile Navbar Toggling & Body Scroll Lock
        const hamburger = document.querySelector('.hamburger-menu');
        const navList = document.getElementById('navList');

        if (hamburger && navList) {
            hamburger.addEventListener('click', () => {
                const isActive = navList.classList.toggle('active');
                hamburger.classList.toggle('active');
                document.body.classList.toggle('nav-open', isActive);
            });

            // Close on link click
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navList.classList.remove('active');
                    hamburger.classList.remove('active');
                    document.body.classList.remove('nav-open');
                });
            });
        }

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (this: HTMLAnchorElement, e) {
                e.preventDefault();
                const targetId = this.getAttribute('href')?.substring(1);
                if (!targetId) return;

                const target = document.getElementById(targetId);
                if (target) {
                    const headerOffset = 70;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            });
        });

        // Scroll Observer for Active State
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    private handleScroll(): void {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 40) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }

        // ScrollSpy Logic
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 140)) {
                currentSection = section.getAttribute('id') || '';
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    private handleLoading(): void {
        const loading = document.getElementById('loading');
        if (loading) {
            setTimeout(() => {
                loading.classList.add('hidden');
            }, 600);
        }
    }

    private initScrollToTop(): void {
        const scrollBtn = document.getElementById('scrollTopBtn');

        if (scrollBtn) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    scrollBtn.classList.add('visible');
                } else {
                    scrollBtn.classList.remove('visible');
                }
            });

            scrollBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
}
