export interface StatItem {
    value: number;
    suffix?: string;
    decimals?: number;
    label: string;
    icon: string;
}

export class StatsCounter {
    private containerId: string;
    private stats: StatItem[];

    constructor(containerId: string, stats: StatItem[]) {
        this.containerId = containerId;
        this.stats = stats;
        this.render();
        this.initObserver();
    }

    private render(): void {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        container.innerHTML = `
            <div class="stats-grid">
                ${this.stats.map(stat => `
                    <div class="stat-card">
                        <div class="stat-icon"><i class="${stat.icon}"></i></div>
                        <div class="stat-number-wrapper">
                            <span class="stat-counter" data-target="${stat.value}" data-decimals="${stat.decimals || 0}">0</span>
                            <span class="stat-suffix">${stat.suffix || ''}</span>
                        </div>
                        <div class="stat-label">${stat.label}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    private initObserver(): void {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        let animated = false;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;
                    this.startCounting();
                    observer.disconnect();
                }
            });
        }, { threshold: 0.25 });

        observer.observe(container);
    }

    private startCounting(): void {
        const counters = document.querySelectorAll('.stat-counter');
        counters.forEach(counter => {
            const target = parseFloat(counter.getAttribute('data-target') || '0');
            const decimals = parseInt(counter.getAttribute('data-decimals') || '0', 10);
            const duration = 1800; // ms
            const startTime = performance.now();

            const updateCount = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out expo
                const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                const currentVal = (target * easeOut).toFixed(decimals);

                counter.textContent = currentVal;

                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                } else {
                    counter.textContent = target.toFixed(decimals);
                }
            };

            requestAnimationFrame(updateCount);
        });
    }
}
