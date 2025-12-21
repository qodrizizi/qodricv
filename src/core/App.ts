import { profileData } from '../data/content';
import { SkillRenderer } from '../components/SkillRenderer';
import { SectionRenderer } from '../components/SectionRenderer';

export class App {
    constructor() {
        this.init();
    }

    private init(): void {
        this.renderContent();
        this.setupEventListeners();
        this.handleLoading();
        this.initScrollToTop();
        this.initParticles();
    }

    private renderContent(): void {
        // Render Hero
        const heroTitle = document.querySelector('.hero-text h1');
        const heroSubtitle = document.querySelector('.hero-text p');
        if (heroTitle) heroTitle.innerHTML = profileData.name;
        if (heroSubtitle) heroSubtitle.textContent = profileData.titles.join(' | ');

        // Render About
        const aboutText = document.querySelector('.about-text');
        if (aboutText) {
            aboutText.innerHTML = profileData.about.map(p => `<p>${p}</p>`).join('');
        }

        // Render Skills
        const skillRenderer = new SkillRenderer('skill-grid', profileData.skills);
        skillRenderer.render();

        // Render Projects
        SectionRenderer.renderProjects('projects-grid', profileData.projects);

        // Render Certifications
        SectionRenderer.renderCertifications('certification-grid', profileData.certifications);

        // Render Experience
        SectionRenderer.renderExperience('experience-container', profileData.experience);

        // Render Contact
        this.renderContact();
    }

    private renderContact(): void {
        const contact = profileData.contact;
        document.getElementById('contact-address')!.textContent = contact.address;
        document.getElementById('contact-phone')!.textContent = contact.phone;
        document.getElementById('contact-email')!.textContent = contact.email;
        const iframe = document.querySelector('.contact-map') as HTMLIFrameElement;
        if (iframe) iframe.src = contact.mapEmbedUrl;
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
            // -100 to offset the navbar height + padding
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
            // Accessing window to ensure we wait for load, but since we are in module
            // we might just timeout for effect if load is already done.
            setTimeout(() => {
                loading.classList.add('hidden');
            }, 1000);
        }
    }

    private initParticles(): void {
        // Simple particle implementation without external lib dependency
        const container = document.getElementById('particles');
        if (!container) return;

        const particleCount = 30;
        for (let i = 0; i < particleCount; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            p.style.left = `${Math.random() * 100}%`;
            p.style.animationDelay = `${Math.random() * 5}s`;
            p.style.opacity = `${Math.random() * 0.5 + 0.1}`;
            container.appendChild(p);
        }
    }

    private initScrollToTop(): void {
        const scrollBtn = document.getElementById('scrollTopBtn');

        if (scrollBtn) {
            // Show/Hide Logic
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    scrollBtn.classList.add('visible');
                } else {
                    scrollBtn.classList.remove('visible');
                }
            });

            // Smooth Scroll Logic
            scrollBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
}
