import { profileData } from '../data/content';
import { SkillRenderer } from '../components/SkillRenderer';
import { SectionRenderer } from '../components/SectionRenderer';
import { CyberBackground } from '../components/CyberBackground';
import { Typewriter } from '../components/Typewriter';
import { StatsCounter } from '../components/StatsCounter';
import { TerminalWidget } from '../components/TerminalWidget';
import { ImageModal } from '../components/ImageModal';

export class App {
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
        this.handleLoading();
        this.initScrollToTop();
    }

    private initTypewriter(): void {
        const typewriterEl = document.getElementById('hero-typewriter-text');
        if (typewriterEl) {
            const roles = [
                ...profileData.titles,
                "Full-Stack Laravel & PostgreSQL Engineer",
                "Linux Server & Infrastructure Hardener",
                "CSIL Certified Computer Investigator"
            ];
            new Typewriter(typewriterEl, roles);
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

    private setupEventListeners(): void {
        // Navbar Toggling
        const hamburger = document.querySelector('.hamburger-menu');
        const navList = document.getElementById('navList');

        if (hamburger && navList) {
            hamburger.addEventListener('click', () => {
                navList.classList.toggle('active');
                hamburger.classList.toggle('active');
            });

            // Close on link click
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navList.classList.remove('active');
                    hamburger.classList.remove('active');
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
                    const headerOffset = 80;
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
        if (window.scrollY > 50) {
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
            if (window.scrollY >= (sectionTop - 150)) {
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
            }, 800);
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
