import { Certification, Experience, Project } from '../types';

export class SectionRenderer {

  static renderProjects(containerId: string, projects: Project[]): void {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = projects.map(proj => `
          <div class="project-card">
            <div class="project-img">
              <img src="${proj.imageUrl}" alt="${proj.title}" loading="lazy">
              <div class="project-overlay">
                 ${proj.demoUrl ? `<a href="${proj.demoUrl}" target="_blank" class="btn primary-btn"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
                 ${proj.repoUrl ? `<a href="${proj.repoUrl}" target="_blank" class="btn secondary-btn"><i class="fab fa-github"></i> Code</a>` : ''}
              </div>
            </div>
            <div class="project-content">
              <h3>${proj.title}</h3>
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

  static renderExperience(containerId: string, experiences: Experience[]): void {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = experiences.map(exp => `
      <div class="experience-item" data-type="${exp.type}">
        <div class="exp-logo">
            <img src="${exp.logo}" alt="${exp.company}" loading="lazy">
        </div>
        <div class="experience-content">
          <h3><i class="fas fa-briefcase"></i> ${exp.role}</h3>
          <h4><i class="fas fa-calendar-alt"></i> ${exp.company} | ${exp.period}</h4>
          <p>${exp.description}</p>
        </div>
      </div>
    `).join('');
  }
}
