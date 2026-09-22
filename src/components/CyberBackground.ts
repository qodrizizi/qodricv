interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    color: string;
    alpha: number;
    isAnchor?: boolean;
    ringPulse?: number;
}

interface DataPacket {
    fromIndex: number;
    toIndex: number;
    progress: number;
    speed: number;
    color: string;
}

interface TouchRipple {
    x: number;
    y: number;
    radius: number;
    maxRadius: number;
    alpha: number;
}

interface FloatingGlyph {
    x: number;
    y: number;
    text: string;
    vx: number;
    vy: number;
    alpha: number;
}

export class CyberBackground {
    private canvas: HTMLCanvasElement | null = null;
    private ctx: CanvasRenderingContext2D | null = null;
    private particles: Particle[] = [];
    private packets: DataPacket[] = [];
    private ripples: TouchRipple[] = [];
    private glyphs: FloatingGlyph[] = [];
    private animationFrameId: number | null = null;
    private width = 0;
    private height = 0;
    private dpr = 1;
    private mouse = { x: -1000, y: -1000, radius: 150, isDown: false };
    private mouseGlow: HTMLElement | null = null;
    private isVisible = true;
    private lastPacketTime = 0;

    private readonly colors = [
        'rgba(88, 166, 255, ',   // Cyber Blue
        'rgba(0, 242, 254, ',    // Neon Cyan
        'rgba(168, 85, 247, ',   // Neon Purple
        'rgba(16, 185, 129, ',   // Emerald Green
        'rgba(56, 189, 248, '    // Sky Blue
    ];

    private readonly glyphStrings = [
        '0x7F', '0xFA', 'SEC_NODE', 'SHA256', '0x1A4', 'CSI_NET',
        'STATUS::OK', 'PORT::443', 'AES-256', '0x9C', 'SYS::OK', 'DFIR'
    ];

    constructor(canvasId = 'cyber-canvas', mouseGlowId = 'mouse-glow') {
        this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this.mouseGlow = document.getElementById(mouseGlowId);

        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d', { alpha: true });
        if (!this.ctx) return;

        this.init();
    }

    private init(): void {
        this.resize();
        this.createParticles();
        this.createGlyphs();
        this.bindEvents();
        this.animate();
    }

    private resize(): void {
        if (!this.canvas || !this.ctx) return;

        // Cap DPR at 2 for optimal balance between sharpness and 60fps performance
        this.dpr = Math.min(window.devicePixelRatio || 1, 2);
        this.width = window.innerWidth || document.documentElement.clientWidth || 1920;
        this.height = window.innerHeight || document.documentElement.clientHeight || 1080;

        this.canvas.width = Math.floor(this.width * this.dpr);
        this.canvas.height = Math.floor(this.height * this.dpr);
        this.canvas.style.width = `${this.width}px`;
        this.canvas.style.height = `${this.height}px`;

        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.scale(this.dpr, this.dpr);
    }

    private createParticles(): void {
        this.particles = [];
        this.packets = [];

        // Lightweight particle count for buttery-smooth scrolling
        const isMobile = this.width < 768;
        const particleCount = isMobile ? 32 : 55;

        for (let i = 0; i < particleCount; i++) {
            const baseColor = this.colors[i % this.colors.length];
            const isAnchor = i % 6 === 0;
            const alpha = isAnchor ? 0.85 : 0.55;

            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                vx: (Math.random() - 0.5) * (isMobile ? 0.4 : 0.6),
                vy: (Math.random() - 0.5) * (isMobile ? 0.4 : 0.6),
                radius: isAnchor ? 2.8 : 1.6,
                color: baseColor,
                alpha: alpha,
                isAnchor: isAnchor,
                ringPulse: Math.random() * Math.PI * 2
            });
        }
    }

    private createGlyphs(): void {
        this.glyphs = [];
        const isMobile = this.width < 768;
        const glyphCount = isMobile ? 6 : 10;

        for (let i = 0; i < glyphCount; i++) {
            this.glyphs.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                text: this.glyphStrings[i % this.glyphStrings.length],
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
                alpha: 0.18
            });
        }
    }

    private addRipple(x: number, y: number): void {
        if (this.ripples.length > 3) {
            this.ripples.shift();
        }
        this.ripples.push({
            x,
            y,
            radius: 6,
            maxRadius: this.width < 768 ? 90 : 130,
            alpha: 0.8
        });
    }

    private bindEvents(): void {
        let resizeTimer: number;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(() => {
                this.resize();
                this.createParticles();
                this.createGlyphs();
            }, 200);
        }, { passive: true });

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;

            if (this.mouseGlow) {
                this.mouseGlow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
                this.mouseGlow.style.opacity = '1';
            }
        }, { passive: true });

        window.addEventListener('mousedown', (e) => {
            this.mouse.isDown = true;
            this.addRipple(e.clientX, e.clientY);
        }, { passive: true });

        window.addEventListener('mouseup', () => {
            this.mouse.isDown = false;
        }, { passive: true });

        window.addEventListener('mouseleave', () => {
            this.mouse.x = -1000;
            this.mouse.y = -1000;
            if (this.mouseGlow) {
                this.mouseGlow.style.opacity = '0';
            }
        }, { passive: true });

        // Mobile touch interaction
        window.addEventListener('touchstart', (e) => {
            if (e.touches.length > 0) {
                const touch = e.touches[0];
                this.mouse.x = touch.clientX;
                this.mouse.y = touch.clientY;
                this.addRipple(touch.clientX, touch.clientY);
            }
        }, { passive: true });

        window.addEventListener('touchend', () => {
            this.mouse.x = -1000;
            this.mouse.y = -1000;
        }, { passive: true });

        // Freeze animations when tab is inactive to save battery
        document.addEventListener('visibilitychange', () => {
            this.isVisible = document.visibilityState === 'visible';
            if (this.isVisible && !this.animationFrameId) {
                this.animate();
            }
        });
    }

    private spawnDataPacket(fromIndex: number, toIndex: number): void {
        if (this.packets.length > 10) return;
        this.packets.push({
            fromIndex,
            toIndex,
            progress: 0,
            speed: 0.014,
            color: '#00f2fe'
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

        const connectionDist = this.width < 768 ? 110 : 135;
        const connectionDistSq = connectionDist * connectionDist;
        const mouseDistThreshold = this.mouse.radius;
        const mouseDistThresholdSq = mouseDistThreshold * mouseDistThreshold;
        const now = performance.now();

        // 1. Draw Floating Cyber Matrix Glyphs (Lightweight batch)
        this.ctx.font = '10px "JetBrains Mono", monospace';
        this.ctx.fillStyle = 'rgba(88, 166, 255, 0.16)';
        for (let i = 0; i < this.glyphs.length; i++) {
            const g = this.glyphs[i];
            g.x += g.vx;
            g.y += g.vy;

            if (g.x < -60) g.x = this.width + 60;
            else if (g.x > this.width + 60) g.x = -60;
            if (g.y < -30) g.y = this.height + 30;
            else if (g.y > this.height + 30) g.y = -30;

            this.ctx.fillText(g.text, g.x, g.y);
        }

        // 2. Spawn Data Packets intermittently
        if (now - this.lastPacketTime > 600 && this.particles.length > 2) {
            const i1 = Math.floor(Math.random() * this.particles.length);
            const p1 = this.particles[i1];

            let closestIndex = -1;
            let closestDistSq = connectionDistSq;
            for (let j = 0; j < this.particles.length; j++) {
                if (i1 === j) continue;
                const p2 = this.particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dSq = dx * dx + dy * dy;
                if (dSq < closestDistSq) {
                    closestDistSq = dSq;
                    closestIndex = j;
                }
            }

            if (closestIndex !== -1) {
                this.spawnDataPacket(i1, closestIndex);
                this.lastPacketTime = now;
            }
        }

        // 3. Render Particle Connections with Distance-Squared (Zero shadowBlur overhead)
        for (let i = 0; i < this.particles.length; i++) {
            const p1 = this.particles[i];

            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distSq = dx * dx + dy * dy;

                if (distSq < connectionDistSq) {
                    const dist = Math.sqrt(distSq);
                    const lineAlpha = (1 - dist / connectionDist) * 0.32;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = `rgba(88, 166, 255, ${lineAlpha})`;
                    this.ctx.lineWidth = 0.85;
                    this.ctx.stroke();
                }
            }

            // Mouse Interactive Connection
            const mdx = p1.x - this.mouse.x;
            const mdy = p1.y - this.mouse.y;
            const mdistSq = mdx * mdx + mdy * mdy;

            if (mdistSq < mouseDistThresholdSq) {
                const mdist = Math.sqrt(mdistSq);
                const mouseAlpha = (1 - mdist / mouseDistThreshold) * 0.6;
                this.ctx.beginPath();
                this.ctx.moveTo(p1.x, p1.y);
                this.ctx.lineTo(this.mouse.x, this.mouse.y);
                this.ctx.strokeStyle = `rgba(0, 242, 254, ${mouseAlpha})`;
                this.ctx.lineWidth = 1.2;
                this.ctx.stroke();

                const angle = Math.atan2(mdy, mdx);
                p1.x += Math.cos(angle) * 0.5;
                p1.y += Math.sin(angle) * 0.5;
            }

            // Update particle position
            p1.x += p1.vx;
            p1.y += p1.vy;

            if (p1.x < 0) { p1.x = 0; p1.vx *= -1; }
            else if (p1.x > this.width) { p1.x = this.width; p1.vx *= -1; }
            if (p1.y < 0) { p1.y = 0; p1.vy *= -1; }
            else if (p1.y > this.height) { p1.y = this.height; p1.vy *= -1; }

            // 4. Anchor Node Pulsing Rings
            if (p1.isAnchor) {
                p1.ringPulse = (p1.ringPulse || 0) + 0.04;
                const ringRadius = p1.radius + (Math.sin(p1.ringPulse) + 1) * 3.5;
                const ringAlpha = (Math.sin(p1.ringPulse) + 1) * 0.2 + 0.12;

                this.ctx.beginPath();
                this.ctx.arc(p1.x, p1.y, ringRadius, 0, Math.PI * 2);
                this.ctx.strokeStyle = `rgba(0, 242, 254, ${ringAlpha})`;
                this.ctx.lineWidth = 1.1;
                this.ctx.stroke();
            }

            // 5. Draw Particle Node
            this.ctx.beginPath();
            this.ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `${p1.color}${p1.alpha})`;
            this.ctx.fill();
        }

        // 6. Draw Traveling Data Packets
        for (let k = this.packets.length - 1; k >= 0; k--) {
            const pkt = this.packets[k];
            pkt.progress += pkt.speed;

            if (pkt.progress >= 1 || !this.particles[pkt.fromIndex] || !this.particles[pkt.toIndex]) {
                this.packets.splice(k, 1);
                continue;
            }

            const pStart = this.particles[pkt.fromIndex];
            const pEnd = this.particles[pkt.toIndex];
            const px = pStart.x + (pEnd.x - pStart.x) * pkt.progress;
            const py = pStart.y + (pEnd.y - pStart.y) * pkt.progress;

            this.ctx.beginPath();
            this.ctx.arc(px, py, 2.2, 0, Math.PI * 2);
            this.ctx.fillStyle = pkt.color;
            this.ctx.fill();
        }

        // 7. Draw Touch Ripples
        for (let r = this.ripples.length - 1; r >= 0; r--) {
            const rip = this.ripples[r];
            rip.radius += 3.2;
            rip.alpha -= 0.026;

            if (rip.alpha <= 0 || rip.radius >= rip.maxRadius) {
                this.ripples.splice(r, 1);
                continue;
            }

            this.ctx.beginPath();
            this.ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
            this.ctx.strokeStyle = `rgba(0, 242, 254, ${rip.alpha})`;
            this.ctx.lineWidth = 1.4;
            this.ctx.stroke();
        }
    }
}
