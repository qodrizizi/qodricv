        // Loading screen
        window.addEventListener('load', function() {
            const loading = document.getElementById('loading');
            setTimeout(() => {
                loading.classList.add('hidden');
                createParticles();
                animateOnScroll();
            }, 1500);
        });

        // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Mobile menu toggle
        function toggleMenu() {
            const navList = document.getElementById('navList');
            navList.classList.toggle('active');
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navList = document.getElementById('navList');
                    navList.classList.remove('active');
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            const scrollTop = window.pageYOffset;
            
            if (scrollTop > 100) {
                navbar.style.background = 'rgba(10, 10, 10, 0.95)';
                navbar.style.backdropFilter = 'blur(20px)';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0.9)';
                navbar.style.backdropFilter = 'blur(20px)';
            }

            // Show/hide scroll to top button
            const scrollTopBtn = document.getElementById('scrollTop');
            if (scrollTop > 300) {
                scrollTopBtn.style.display = 'flex';
            } else {
                scrollTopBtn.style.display = 'none';
            }

            // Update active navigation item
            updateActiveNavItem();
        });

        // Update active navigation item based on scroll position
        function updateActiveNavItem() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        }

        // Scroll to top function
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Animate elements on scroll
        function animateOnScroll() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        
                        // Animate skill bars
                        if (entry.target.classList.contains('skill-card')) {
                            const progressBar = entry.target.querySelector('.skill-progress');
                            if (progressBar) {
                                progressBar.style.animation = 'skillLoad 2s ease-in-out';
                            }
                        }
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            });

            // Observe all animated elements
            const animatedElements = document.querySelectorAll('.skill-card, .certification-box, .experience-item, .info-item');
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'all 0.6s ease';
                observer.observe(el);
            });
        }

        // Add typing effect to hero text
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        // Add glitch effect on hover for certain elements
        document.querySelectorAll('.nav-logo a, .section-title').forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.animation = 'glitch 0.3s ease-in-out';
            });
            
            element.addEventListener('animationend', function() {
                this.style.animation = '';
            });
        });

        // Add CSS for glitch effect
        const style = document.createElement('style');
        style.textContent = `
            @keyframes glitch {
                0% { transform: translate(0); }
                20% { transform: translate(-2px, 2px); }
                40% { transform: translate(-2px, -2px); }
                60% { transform: translate(2px, 2px); }
                80% { transform: translate(2px, -2px); }
                100% { transform: translate(0); }
            }
            
            .nav-link.active {
                color: var(--cyber-green) !important;
                text-shadow: 0 0 10px var(--cyber-green);
            }
            
            .nav-link.active::before {
                width: 100% !important;
            }
        `;
        document.head.appendChild(style);

        // Add parallax effect to background
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('body::before');
            const speed = scrolled * 0.5;
        });

        // Add mouse trail effect
        let mouseTrail = [];
        const maxTrailLength = 20;

        document.addEventListener('mousemove', function(e) {
            mouseTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
            
            if (mouseTrail.length > maxTrailLength) {
                mouseTrail.shift();
            }
            
            updateMouseTrail();
        });

        function updateMouseTrail() {
            const existingTrails = document.querySelectorAll('.mouse-trail');
            existingTrails.forEach(trail => trail.remove());
            
            mouseTrail.forEach((point, index) => {
                const trail = document.createElement('div');
                trail.className = 'mouse-trail';
                trail.style.cssText = `
                    position: fixed;
                    left: ${point.x}px;
                    top: ${point.y}px;
                    width: ${4 - index * 0.2}px;
                    height: ${4 - index * 0.2}px;
                    background: var(--cyber-green);
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9998;
                    opacity: ${0.8 - index * 0.04};
                    transform: translate(-50%, -50%);
                    transition: opacity 0.1s ease;
                `;
                document.body.appendChild(trail);
                
                setTimeout(() => {
                    if (trail.parentNode) {
                        trail.remove();
                    }
                }, 500);
            });
        }

        // Add cursor glow effect
        const cursor = document.createElement('div');
        cursor.className = 'cursor-glow';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, var(--cyber-green) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9997;
            opacity: 0.3;
            transform: translate(-50%, -50%);
            transition: opacity 0.3s ease;
        `;
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        document.addEventListener('mouseenter', function() {
            cursor.style.opacity = '0.3';
        });

        document.addEventListener('mouseleave', function() {
            cursor.style.opacity = '0';
        });

        // Console message for developers
        console.log(`
    ╔══════════════════════════════════════════════════════════════╗
    ║                                                              ║
    ║   🚀 CV QODRI - Digital Forensic Expert                     ║
    ║                                                              ║
    ║   Built with modern web technologies:                       ║
    ║   • Advanced CSS animations & effects                       ║
    ║   • Interactive JavaScript features                         ║
    ║   • Responsive design principles                            ║
    ║   • Cyber-themed aesthetic                                  ║
    ║                                                              ║
    ║   Developer: Ahmad Al Qodri Azizi Dalimunthe                ║
    ║   Contact: ahmadalqodridalimunthe@gmail.com                 ║
    ║                                                              ║
    ╚══════════════════════════════════════════════════════════════╝
        `);
