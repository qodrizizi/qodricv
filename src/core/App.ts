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
    private isScrollTicking = false;
    private navbarEl: HTMLElement | null = null;
    private scrollBtnEl: HTMLElement | null = null;
    private sections: HTMLElement[] = [];
    private navLinks: HTMLElement[] = [];

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
        this.cacheDOMElements();
        this.setupEventListeners();
        this.initScrollReveal();
        this.handleLoading();
        this.initScrollToTop();
    }

    private cacheDOMElements(): void {
        this.navbarEl = document.getElementById('navbar');
        this.scrollBtnEl = document.getElementById('scrollTopBtn');
        this.sections = Array.from(document.querySelectorAll('section'));
        this.navLinks = Array.from(document.querySelectorAll('.nav-link'));
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
            threshold: 0.08,
            rootMargin: '0px 0px -20px 0px'
        });

        this.observeRevealElements();

        // Re-observe when dynamic content renders
        document.addEventListener('contentUpdated', () => {
            this.observeRevealElements();
            this.sections = Array.from(document.querySelectorAll('section'));
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

        // Optimized RAF Scroll Listener (Zero jank)
        window.addEventListener('scroll', () => {
            if (!this.isScrollTicking) {
                this.isScrollTicking = true;
                requestAnimationFrame(() => {
                    this.handleScroll();
                    this.isScrollTicking = false;
                });
            }
        }, { passive: true });
    }

    private handleScroll(): void {
        const scrollY = window.scrollY;

        // Navbar scrolled state
        if (scrollY > 40) {
            this.navbarEl?.classList.add('scrolled');
        } else {
            this.navbarEl?.classList.remove('scrolled');
        }

        // Scroll to top button visibility
        if (scrollY > 300) {
            this.scrollBtnEl?.classList.add('visible');
        } else {
            this.scrollBtnEl?.classList.remove('visible');
        }

        // ScrollSpy Logic using cached arrays
        let currentSection = '';
        for (let i = 0; i < this.sections.length; i++) {
            const sec = this.sections[i];
            if (scrollY >= (sec.offsetTop - 140)) {
                currentSection = sec.getAttribute('id') || '';
            }
        }

        for (let j = 0; j < this.navLinks.length; j++) {
            const link = this.navLinks[j];
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    }

    private handleLoading(): void {
        const loading = document.getElementById('loading');
        if (loading) {
            setTimeout(() => {
                loading.classList.add('hidden');
            }, 500);
        }
    }

    private initScrollToTop(): void {
        if (this.scrollBtnEl) {
            this.scrollBtnEl.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
}
