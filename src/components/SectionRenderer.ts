import { Certification, Education, Experience, Organization, Project } from '../types';

export class SectionRenderer {

  static renderProjects(containerId: string, projects: Project[]): void {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = projects.map(proj => `
          <div class="project-card">
            <div class="project-img">
              <img src="${proj.imageUrl}" alt="${proj.title}" loading="lazy">
              <div class="project-overlay">
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
  }

  static renderCertifications(containerId: string, certs: Certification[]): void {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = certs.map(cert => `
      <div class="certification-box">
        <div class="cert-img-wrapper">
            <img src="${cert.image}" alt="${cert.name}" loading="lazy">
        </div>
        <div class="certification-content">
          <h3><i class="${cert.icon}"></i> ${cert.name}</h3>
          <span class="cert-issuer">${cert.issuer}</span>
          <p>${cert.description}</p>
        </div>
      </div>
    `).join('');
  }

  static renderExperience(containerId: string, experiences: Experience[], organizations?: Organization[], educations?: Education[]): void {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';

    // Work Experience Group
    if (experiences && experiences.length > 0) {
      html += `
        <div class="experience-group">
          <div class="experience-group-header">
            <i class="fas fa-briefcase"></i>
            <span>PENGALAMAN KERJA (WORK EXPERIENCE)</span>
          </div>
          <div class="experience-list">
            ${experiences.map(exp => `
              <div class="experience-item" data-type="work">
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
        <div class="experience-group edu-group">
          <div class="experience-group-header edu-header">
            <i class="fas fa-graduation-cap"></i>
            <span>PENDIDIKAN FORMAL (FORMAL EDUCATION)</span>
          </div>
          <div class="experience-list">
            ${educations.map(edu => `
              <div class="experience-item" data-type="education">
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
        <div class="experience-group org-group">
          <div class="experience-group-header org-header">
            <i class="fas fa-users"></i>
            <span>PENGALAMAN ORGANISASI (ORGANIZATIONAL EXPERIENCE)</span>
          </div>
          <div class="experience-list">
            ${organizations.map(org => `
              <div class="experience-item" data-type="community">
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
  }
}
