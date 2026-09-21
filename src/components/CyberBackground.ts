interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    color: string;
    alpha: number;
    pulseSpeed: number;
}

export class CyberBackground {
    private canvas: HTMLCanvasElement | null = null;
    private ctx: CanvasRenderingContext2D | null = null;
    private particles: Particle[] = [];
    private animationFrameId: number | null = null;
    private width = 0;
    private height = 0;
    private mouse = { x: -1000, y: -1000, radius: 170 };
    private mouseGlow: HTMLElement | null = null;
    private isVisible = true;

    private readonly colors = [
        'rgba(88, 166, 255, ',   // Cyber Blue
        'rgba(35, 134, 54, ',    // Accent Green
        'rgba(163, 113, 247, ',  // Purple
        'rgba(0, 212, 255, ',    // Cyan
        'rgba(56, 189, 248, '    // Sky Blue
    ];

    constructor(canvasId = 'cyber-canvas', mouseGlowId = 'mouse-glow') {
        this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this.mouseGlow = document.getElementById(mouseGlowId);

        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        if (!this.ctx) return;

        this.init();
    }

    private init(): void {
        this.resize();
        this.createParticles();
        this.bindEvents();
        this.animate();
    }

    private resize(): void {
        if (!this.canvas) return;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    private createParticles(): void {
        this.particles = [];
        // Responsive particle count based on screen resolution
        const particleCount = Math.floor(Math.min(Math.max((this.width * this.height) / 16000, 40), 85));

        for (let i = 0; i < particleCount; i++) {
            const baseColor = this.colors[Math.floor(Math.random() * this.colors.length)];
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                vx: (Math.random() - 0.5) * 0.7,
                vy: (Math.random() - 0.5) * 0.7,
                radius: Math.random() * 2.2 + 1.2,
                color: baseColor,
                alpha: Math.random() * 0.5 + 0.35,
                pulseSpeed: Math.random() * 0.02 + 0.01
            });
        }
    }

    private bindEvents(): void {
        let resizeTimer: number;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(() => {
                this.resize();
                this.createParticles();
            }, 150);
        });

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;

            if (this.mouseGlow) {
                this.mouseGlow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
                this.mouseGlow.style.opacity = '1';
            }
        });

        window.addEventListener('mouseleave', () => {
            this.mouse.x = -1000;
            this.mouse.y = -1000;
            if (this.mouseGlow) {
                this.mouseGlow.style.opacity = '0';
            }
        });

        // Touch interaction for mobile devices
        window.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                this.mouse.x = e.touches[0].clientX;
                this.mouse.y = e.touches[0].clientY;
            }
        }, { passive: true });

        window.addEventListener('touchend', () => {
            this.mouse.x = -1000;
            this.mouse.y = -1000;
        });

        // Pause rendering when tab is inactive to save CPU/battery
        document.addEventListener('visibilitychange', () => {
            this.isVisible = document.visibilityState === 'visible';
            if (this.isVisible && !this.animationFrameId) {
                this.animate();
            }
        });
    }

    private animate = (): void => {
        if (!this.isVisible) {
            this.animationFrameId = null;
            return;
        }

        this.render();
        this.animationFrameId = requestAnimationFrame(this.animate);
    };

    private render(): void {
        if (!this.ctx || !this.canvas) return;

        this.ctx.clearRect(0, 0, this.width, this.height);

        const connectionDist = 135;
        const mouseConnectionDist = this.mouse.radius;

        // Render particle connections
        for (let i = 0; i < this.particles.length; i++) {
            const p1 = this.particles[i];

            // Connect to other particles
            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < connectionDist) {
                    const lineAlpha = (1 - dist / connectionDist) * 0.22;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = `rgba(88, 166, 255, ${lineAlpha})`;
                    this.ctx.lineWidth = 0.85;
                    this.ctx.stroke();
                }
            }

            // Connect to mouse cursor
            const mdx = p1.x - this.mouse.x;
            const mdy = p1.y - this.mouse.y;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

            if (mdist < mouseConnectionDist) {
                const mouseAlpha = (1 - mdist / mouseConnectionDist) * 0.5;
                this.ctx.beginPath();
                this.ctx.moveTo(p1.x, p1.y);
                this.ctx.lineTo(this.mouse.x, this.mouse.y);
                this.ctx.strokeStyle = `rgba(0, 212, 255, ${mouseAlpha})`;
                this.ctx.lineWidth = 1.3;
                this.ctx.stroke();

                // Gentle interactive push / pull
                const angle = Math.atan2(mdy, mdx);
                p1.x -= Math.cos(angle) * 0.45;
                p1.y -= Math.sin(angle) * 0.45;
            }

            // Update particle position
            p1.x += p1.vx;
            p1.y += p1.vy;

            // Bounce on canvas edges
            if (p1.x < 0 || p1.x > this.width) p1.vx *= -1;
            if (p1.y < 0 || p1.y > this.height) p1.vy *= -1;

            // Draw particle node with glow
            this.ctx.beginPath();
            this.ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `${p1.color}${p1.alpha})`;
            this.ctx.shadowBlur = 8;
            this.ctx.shadowColor = `${p1.color}0.8)`;
            this.ctx.fill();
            this.ctx.shadowBlur = 0;
        }
    }
}
