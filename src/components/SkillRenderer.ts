import { Skill } from '../types';

export class SkillRenderer {
    private container: HTMLElement;
    private skills: Skill[];
    private currentFilter: string = 'all';

    constructor(containerId: string, skills: Skill[]) {
        const el = document.getElementById(containerId);
        if (!el) throw new Error(`Element #${containerId} not found`);
        this.container = el;
        this.skills = skills;
    }

    public render(): void {
        // Create filter buttons if they don't exist
        if (!document.getElementById('skill-filters')) {
            this.renderFilters();
        }
        this.renderGrid();
    }

    private renderFilters(): void {
        const filterContainer = document.createElement('div');
        filterContainer.id = 'skill-filters';
        filterContainer.className = 'skill-filters';

        const categories = [
            { id: 'all', label: 'ALL SYSTEMS' },
            { id: 'software-engineer', label: 'SOFTWARE ENG' },
            { id: 'sys-admin', label: 'SYS ADMIN' },
            { id: 'forensics', label: 'FORENSICS' }
        ];

        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `filter-btn ${cat.id === this.currentFilter ? 'active' : ''}`;
            btn.dataset.filter = cat.id;
            btn.textContent = cat.label; // Using textContent is safe here
            btn.addEventListener('click', () => this.handleFilter(cat.id));
            filterContainer.appendChild(btn);
        });

        this.container.parentNode?.insertBefore(filterContainer, this.container);
    }

    private handleFilter(category: string): void {
        this.currentFilter = category;

        // Update buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            if ((btn as HTMLElement).dataset.filter === category) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Re-render grid with animation
        this.renderGrid();
    }

    private renderGrid(): void {
        this.container.innerHTML = '';

        const filteredSkills = this.currentFilter === 'all'
            ? this.skills
            : this.skills.filter(s => s.category === this.currentFilter);

        filteredSkills.forEach((skill, index) => {
            const card = document.createElement('div');
            card.className = 'skill-card';
            // Staggered animation delay
            card.style.animationDelay = `${index * 0.1}s`;

            card.innerHTML = `
        <div class="skill-header">
          <i class="${skill.icon}"></i>
          <h3>${skill.name}</h3>
        </div>
        <div class="skill-meter-container">
           <div class="skill-meter-bar" style="width: ${skill.level}%">
              <span class="skill-percent">${skill.level}%</span>
           </div>
        </div>
        <div class="skill-category-tag">${skill.category.replace('-', ' ').toUpperCase()}</div>
      `;
            this.container.appendChild(card);
        });
    }
}
