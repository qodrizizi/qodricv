import { Certification, Education, Experience, Organization, Project } from '../types';
import { ImageModal } from './ImageModal';
import { Toast } from './Toast';

export class SectionRenderer {
  private static allProjects: Project[] = [];
  private static currentProjectFilter = 'all';
  private static searchKeyword = '';

  static renderProjects(containerId: string, projects: Project[]): void {
    const container = document.getElementById(containerId);
    if (!container) return;

    this.allProjects = projects;

    // Inject filter controls above the grid if not already present
    if (!document.getElementById('project-filter-controls')) {
      const controls = document.createElement('div');
      controls.id = 'project-filter-controls';
      controls.className = 'project-filter-controls reveal-on-scroll';

      controls.innerHTML = `
        <div class="project-search-bar">
          <span class="search-prompt">$ grep -i</span>
          <input type="text" id="project-search-input" class="project-search-input" placeholder="search projects / tech stack..." autocomplete="off">
          <i class="fas fa-search search-icon"></i>
        </div>
        <div class="project-filter-buttons" id="project-filter-buttons">
          <button class="filter-btn active" data-filter="all">ALL [${projects.length}]</button>
          <button class="filter-btn" data-filter="government">GOV & E-GOV</button>
          <button class="filter-btn" data-filter="enterprise">ENTERPRISE & FINANCE</button>
          <button class="filter-btn" data-filter="backend">API & BACKEND</button>
          <button class="filter-btn" data-filter="health">HEALTHCARE</button>
        </div>
      `;

      container.parentNode?.insertBefore(controls, container);

      // Bind search input
      const searchInput = document.getElementById('project-search-input') as HTMLInputElement;
      searchInput?.addEventListener('input', (e) => {
        this.searchKeyword = (e.target as HTMLInputElement).value.toLowerCase().trim();
        this.renderProjectsGrid(containerId);
      });

      // Bind filter buttons
      const buttons = controls.querySelectorAll('.filter-btn');
      buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          buttons.forEach(b => b.classList.remove('active'));
          const target = e.currentTarget as HTMLElement;
          target.classList.add('active');
          this.currentProjectFilter = target.dataset.filter || 'all';
          this.renderProjectsGrid(containerId);
        });
      });
    }

    this.renderProjectsGrid(containerId);
  }

  private static renderProjectsGrid(containerId: string): void {
    const container = document.getElementById(containerId);
    if (!container) return;

    let filtered = this.allProjects;

    // Filter by category
    if (this.currentProjectFilter !== 'all') {
      filtered = filtered.filter(p => p.category === this.currentProjectFilter);
    }

    // Filter by search keyword
    if (this.searchKeyword) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(this.searchKeyword) ||
        p.description.toLowerCase().includes(this.searchKeyword) ||
        p.technologies.some(t => t.toLowerCase().includes(this.searchKeyword))
      );
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="projects-empty-state">
          <i class="fas fa-search-minus"></i>
          <p>> No matching projects found for query "<span class="term-cyan">${this.escapeHtml(this.searchKeyword)}</span>"</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(proj => `
          <div class="project-card reveal-on-scroll" data-category="${proj.category || 'all'}">
            <div class="project-img" data-img="${proj.imageUrl}" data-title="${proj.title}">
              <img src="${proj.imageUrl}" alt="${proj.title}" loading="lazy">
              <div class="project-zoom-badge"><i class="fas fa-search-plus"></i> PREVIEW</div>
              <div class="project-overlay">
                 <button class="btn preview-btn" data-img="${proj.imageUrl}" data-title="${proj.title}" data-desc="${proj.description}"><i class="fas fa-eye"></i> View</button>
                 ${proj.demoUrl && proj.demoUrl !== '#' ? `<a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn primary-btn"><i class="fas fa-external-link-alt"></i> Visit</a>` : ''}
                 ${proj.repoUrl && proj.repoUrl !== '#' ? `<a href="${proj.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn secondary-btn"><i class="fab fa-github"></i> Code</a>` : ''}
              </div>
            </div>
            <div class="project-content">
              <div class="project-header-row">
                <h3>${proj.title}</h3>
                ${proj.demoUrl && proj.demoUrl !== '#' ? `<a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-ext-icon" title="Visit live site"><i class="fas fa-external-link-alt"></i></a>` : ''}
              </div>
              <p>${proj.description}</p>
              <div class="project-tech">
                 ${proj.technologies.map(tech => `<span>${tech}</span>`).join('')}
              </div>
            </div>
          </div>
        `).join('');

    // Bind ImageModal triggers on project images & preview buttons
    container.querySelectorAll('.project-img, .preview-btn').forEach(el => {
      el.addEventListener('click', (e) => {
        const target = (e.currentTarget as HTMLElement);
        const imgSrc = target.getAttribute('data-img');
        const title = target.getAttribute('data-title') || 'Project Preview';
        const desc = target.getAttribute('data-desc') || '';
        if (imgSrc) {
          ImageModal.open(imgSrc, title, desc);
        }
      });
    });

    document.dispatchEvent(new CustomEvent('contentUpdated'));
  }

  static renderCertifications(containerId: string, certs: Certification[]): void {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = certs.map(cert => `
      <div class="certification-box reveal-on-scroll" data-img="${cert.image}" data-name="${cert.name}" data-issuer="${cert.issuer}">
        <div class="cert-img-wrapper">
            <img src="${cert.image}" alt="${cert.name}" loading="lazy">
            <div class="cert-hover-zoom"><i class="fas fa-expand-alt"></i> VIEW CREDENTIAL</div>
        </div>
        <div class="certification-content">
          <h3><i class="${cert.icon}"></i> ${cert.name}</h3>
          <span class="cert-issuer"><i class="fas fa-check-circle"></i> ${cert.issuer}</span>
          <p>${cert.description}</p>
        </div>
      </div>
    `).join('');

    // Bind ImageModal for certifications
    container.querySelectorAll('.certification-box').forEach(box => {
      box.addEventListener('click', (e) => {
        const target = (e.currentTarget as HTMLElement);
        const imgSrc = target.getAttribute('data-img');
        const name = target.getAttribute('data-name') || 'Certification';
        const issuer = target.getAttribute('data-issuer') || 'BNSP / Organization';
        if (imgSrc) {
          ImageModal.open(imgSrc, name, issuer);
        }
      });
    });

    document.dispatchEvent(new CustomEvent('contentUpdated'));
  }

  static renderExperience(containerId: string, experiences: Experience[], organizations?: Organization[], educations?: Education[]): void {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';

    // Work Experience Group
    if (experiences && experiences.length > 0) {
      html += `
        <div class="experience-group reveal-on-scroll">
          <div class="experience-group-header">
            <i class="fas fa-briefcase"></i>
            <span>PENGALAMAN KERJA (WORK EXPERIENCE)</span>
          </div>
          <div class="experience-list">
            ${experiences.map(exp => `
              <div class="experience-item reveal-on-scroll" data-type="work">
                <div class="exp-logo">
                    <img src="${exp.logo}" alt="${exp.company}" loading="lazy">
                </div>
                <div class="experience-content">
                  <div class="exp-header-row">
                    <h3><i class="fas fa-laptop-code"></i> ${exp.role}</h3>
                    <span class="exp-badge work-badge">WORK</span>
                  </div>
                  <h4><i class="fas fa-building"></i> ${exp.company} &nbsp;|&nbsp; <i class="fas fa-calendar-alt"></i> ${exp.period}</h4>
                  <p>${exp.description}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Formal Education Group
    if (educations && educations.length > 0) {
      html += `
        <div class="experience-group edu-group reveal-on-scroll">
          <div class="experience-group-header edu-header">
            <i class="fas fa-graduation-cap"></i>
            <span>PENDIDIKAN FORMAL (FORMAL EDUCATION)</span>
          </div>
          <div class="experience-list">
            ${educations.map(edu => `
              <div class="experience-item reveal-on-scroll" data-type="education">
                <div class="exp-logo">
                    <img src="${edu.logo}" alt="${edu.institution}" loading="lazy">
                </div>
                <div class="experience-content">
                  <div class="exp-header-row">
                    <h3><i class="fas fa-user-graduate"></i> ${edu.degree}</h3>
                    <div class="badge-group">
                      ${edu.gpa ? `<span class="exp-badge gpa-badge"><i class="fas fa-award"></i> GPA ${edu.gpa}</span>` : ''}
                      <span class="exp-badge edu-badge">EDUCATION</span>
                    </div>
                  </div>
                  <h4><i class="fas fa-university"></i> ${edu.institution} &nbsp;|&nbsp; <i class="fas fa-calendar-alt"></i> ${edu.period}</h4>
                  <p>${edu.description}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Organization Experience Group
    if (organizations && organizations.length > 0) {
      html += `
        <div class="experience-group org-group reveal-on-scroll">
          <div class="experience-group-header org-header">
            <i class="fas fa-users"></i>
            <span>PENGALAMAN ORGANISASI (ORGANIZATIONAL EXPERIENCE)</span>
          </div>
          <div class="experience-list">
            ${organizations.map(org => `
              <div class="experience-item reveal-on-scroll" data-type="community">
                <div class="exp-logo">
                    <img src="${org.logo}" alt="${org.organization}" loading="lazy">
                </div>
                <div class="experience-content">
                  <div class="exp-header-row">
                    <h3><i class="fas fa-user-shield"></i> ${org.role}</h3>
                    <span class="exp-badge org-badge">ORGANIZATION</span>
                  </div>
                  <h4><i class="fas fa-sitemap"></i> ${org.organization} &nbsp;|&nbsp; <i class="fas fa-calendar-alt"></i> ${org.period}</h4>
                  <p>${org.description}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    container.innerHTML = html;
    document.dispatchEvent(new CustomEvent('contentUpdated'));
  }

  static renderContact(contact: any): void {
    const addressEl = document.getElementById('contact-address');
    const phoneEl = document.getElementById('contact-phone');
    const emailEl = document.getElementById('contact-email');

    if (addressEl) {
      addressEl.innerHTML = `${contact.address} <button class="copy-btn" data-copy="${contact.address}" title="Copy Address"><i class="fas fa-copy"></i></button>`;
    }
    if (phoneEl) {
      phoneEl.innerHTML = `${contact.phone} <button class="copy-btn" data-copy="${contact.phone}" title="Copy Phone"><i class="fas fa-copy"></i></button>`;
    }
    if (emailEl) {
      emailEl.innerHTML = `${contact.email} <button class="copy-btn" data-copy="${contact.email}" title="Copy Email"><i class="fas fa-copy"></i></button>`;
    }

    // Bind clipboard copying
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const text = (e.currentTarget as HTMLElement).getAttribute('data-copy') || '';
        if (text) {
          navigator.clipboard.writeText(text).then(() => {
            Toast.show(`COPIED TO CLIPBOARD: ${text}`, 'success');
          }).catch(() => {
            Toast.show('COPIED TO CLIPBOARD', 'success');
          });
        }
      });
    });

    const iframe = document.querySelector('.contact-map') as HTMLIFrameElement;
    if (iframe) iframe.src = contact.mapEmbedUrl;

    document.dispatchEvent(new CustomEvent('contentUpdated'));
  }

  private static escapeHtml(str: string): string {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
}
