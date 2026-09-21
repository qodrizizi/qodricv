var b=Object.defineProperty;var E=(m,e,i)=>e in m?b(m,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):m[e]=i;var r=(m,e,i)=>E(m,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=i(t);fetch(t.href,a)}})();const l={name:"AHMAD AL QODRI AZIZI DALIMUNTHE",titles:["Software Engineer","System Administrator","Digital Forensic Investigator"],about:["I am a multi-disciplinary technology professional correcting the balance between building secure systems and investigating their breaches. My expertise spans the full lifecycle of digital infrastructure—from architecting robust software solutions to managing complex server environments and conducting forensic investigations when security incidents occur.","As a Software Engineer, I build scalable applications with a security-first mindset, utilizing frameworks like CodeIgniter 4, Laravel and modern TypeScript. My background in System Administration ensures these applications run on optimized, hardened infrastructure (Linux/Debian).","In the realm of Digital Forensics, I apply analytical rigor to uncover digital evidence, supported by my deep understanding of how systems are built and maintained. This unique convergence of skills allows me to not just solve problems, but anticipate and prevent them."],skills:[{name:"TypeScript",icon:"fab fa-js",level:85,category:"software-engineer"},{name:"PHP",icon:"fab fa-php",level:88,category:"software-engineer"},{name:"CodeIgniter 4",icon:"fas fa-fire",level:90,category:"software-engineer"},{name:"Laravel",icon:"fab fa-laravel",level:95,category:"software-engineer"},{name:"UI/UX Design",icon:"fas fa-paint-brush",level:85,category:"software-engineer"},{name:"Linux (Debian/Ubuntu)",icon:"fab fa-linux",level:92,category:"sys-admin"},{name:"Network Admin",icon:"fas fa-network-wired",level:85,category:"sys-admin"},{name:"Database Mgmt",icon:"fas fa-database",level:88,category:"sys-admin"},{name:"IoT Engineering",icon:"fas fa-microchip",level:85,category:"sys-admin"},{name:"Digital Investigation",icon:"fas fa-search",level:90,category:"forensics"},{name:"Incident Response",icon:"fas fa-shield-alt",level:88,category:"forensics"},{name:"CSI Linux",icon:"fas fa-user-secret",level:90,category:"forensics"},{name:"Computer Forensics",icon:"fas fa-laptop",level:90,category:"forensics"}],certifications:[{name:"Digital Forensic",issuer:"PT Analis Forensic Digital",image:"/img/certification1.png",icon:"fas fa-certificate",description:"Expertise in Digital Forensic Analysis and Investigation."},{name:"CSIL-CI",issuer:"CSI-Linux",image:"/img/certification3.jpg",icon:"fas fa-shield-alt",description:"Certified Computer Investigator by CSI Linux."},{name:"Junior Web Developer",issuer:"BNSP",image:"/img/web.jpg",icon:"fas fa-code",description:"National professional certification for Front-End and Back-End development."},{name:"Junior Network Administrator",issuer:"BNSP",image:"/img/network.jpg",icon:"fas fa-network-wired",description:"National certification for Network Topology and IP Management."},{name:"IT and Database",issuer:"Bakrie Center Foundation",image:"/img/certification2.jpg",icon:"fas fa-database",description:"Internship program certification focusing on Database Management."},{name:"Operator Komputer Madya",issuer:"BNSP",image:"/img/komputer.jpg",icon:"fas fa-desktop",description:"National certification for office competence (Word, Excel, PowerPoint)."}],experience:[{role:"Software Engineer / IT Developer",company:"Dinas Kominfostan Deli Serdang",period:"Januari 2026 - Sekarang",logo:"/img/kominfo.jpg",type:"work",description:"Developed and maintained regional government information systems, web applications, and digital services to support e-government initiatives in Deli Serdang."},{role:"Software Engineer",company:"PT Willy Dwi Perkasa",period:"Desember 2025 - Sekarang",logo:"/img/wdp.png",type:"work",description:"Developed and maintained scalable software solutions, web applications, and backend systems."},{role:"Programmer",company:"Telkomsel",period:"Juni 2025 - September 2025",logo:"/img/telkomsel.png",type:"work",description:"Developed a comprehensive system using python, implementing secure authentication and optimizing performance."},{role:"Web Developer",company:"Jeumpa SIKMRS",period:"Januari 2024 - December 2024",logo:"/img/sikmrs.jpg",type:"work",description:"Developed a comprehensive hospital management system using CodeIgniter 4, implementing secure authentication and optimizing performance."},{role:"IT and Database Division",company:"Bakrie Center Foundation",period:"Aug 2023 - Dec 2023",logo:"/img/BCF.png",type:"work",description:"Developed a website and database to accelerate TB elimination by 2030. Implemented robust data management systems."}],education:[{degree:"Bachelor Degree in Information Technology (S1 Teknologi Informasi)",institution:"Universitas Muhammadiyah Sumatera Utara (UMSU)",period:"2021 - 2025",logo:"/img/umsu.png",gpa:"3.88 / 4.00",description:"Graduated with a Bachelor's Degree in Information Technology achieving a GPA of 3.88/4.00 (Distinction/Cum Laude). Specialized in Software Engineering, Network Administration, and Digital Forensics."}],organizations:[{role:"Leader of Cyber Security Community",organization:"CSC UMSU",period:"2023",logo:"/img/csc.png",description:"Led the Cyber Security Community, organizing activities to increase knowledge and skills in cybersecurity."},{role:"Education and Research Division",organization:"HIMATIF",period:"2023",logo:"/img/himatif.jpg",description:"Conducted studies and provided solutions for various IT-related challenges in the student association."}],projects:[{title:"Jeumpa SIKMRS",description:"Sistem Informasi Rekam Medis Rumah Sakit komprehensif dengan role-based access control, integrasi modul medis pasien, dan keamanan data.",technologies:["CodeIgniter 4","PHP","MySQL","Bootstrap","jQuery"],imageUrl:"/img/sikmrs.jpg",category:"health"},{title:"WDP Finance",description:"Sistem informasi manajemen keuangan dan akuntansi perusahaan untuk pencatatan transaksi, invoicing, dan laporan kas operasional.",technologies:["Laravel","PHP","MySQL","TailwindCSS","JavaScript"],imageUrl:"/img/webfinance.png",category:"enterprise"},{title:"Web Dinaskominfostan Deliserdang",description:"Portal resmi Dinas Komunikasi, Informatika, Statistik dan Persandian Kabupaten Deli Serdang untuk layanan informasi publik dan e-government.",technologies:["Laravel","PHP","PostgreSQL","Bootstrap","REST API"],imageUrl:"/img/kominfo.png",category:"government",demoUrl:"https://dinaskominfostan-ds.deliserdangkab.go.id/"},{title:"Pusaka Deli",description:"Platform sistem informasi layanan terpadu kebudayaan dan arsip daerah Kabupaten Deli Serdang.",technologies:["Laravel","PHP","MySQL","JavaScript","Bootstrap"],imageUrl:"/img/pusaka.png",category:"government",demoUrl:"https://pusakadeli.deliserdangkab.go.id/"},{title:"SI- Informan",description:"Sistem Informasi dan Pelayanan Perizinan DPMPTSP Kabupaten Deli Serdang untuk transparansi dan kemudahan layanan masyarakat.",technologies:["Laravel","PHP","PostgreSQL","JavaScript","Bootstrap"],imageUrl:"/img/siinforman.png",category:"government",demoUrl:"https://dpmptsp.deliserdangkab.go.id/si-informan/"},{title:"Website Setwan Deliserdang",description:"Portal resmi Sekretariat DPRD Kabupaten Deli Serdang untuk transparansi aspirasi publik dan dokumentasi kegiatan kedewanan.",technologies:["Laravel","PHP","PostgreSQL","Bootstrap","JavaScript"],imageUrl:"/img/setwan.png",category:"government",demoUrl:"https://setwan.deliserdangkab.go.id/"},{title:"Website Setdakab Deliserdang",description:"Website resmi Sekretariat Daerah Kabupaten Deli Serdang yang memuat regulasi daerah, profil birokrasi, dan berita pemerintahan.",technologies:["Laravel","PHP","PostgreSQL","Bootstrap","JavaScript"],imageUrl:"/img/setdakab.png",category:"government",demoUrl:"https://setdakab.deliserdangkab.go.id/"},{title:"DAKL",description:"Sistem Data Analisis Kebutuhan Lembaga / Pendidikan pada Dinas Pendidikan Kabupaten Deli Serdang berbasis web.",technologies:["Laravel","PHP","PostgreSQL","Chart.js","Bootstrap"],imageUrl:"/img/dakl.png",category:"government",demoUrl:"https://dakl-pendidikan.deliserdangkab.go.id/"},{title:"Website Perpustakaan & Arsip",description:"Sistem manajemen katalog buku digital, kearsipan daerah, dan otomasi peminjaman literatur Dinas Perpustakaan & Arsip.",technologies:["Laravel","PHP","PostgreSQL","JavaScript","Bootstrap"],imageUrl:"/img/kominfo.png",category:"government"},{title:"SiPOSTES",description:"Sistem Informasi Pos Pelayanan Terpadu Elektronik untuk optimalisasi pelaporan data dan monitoring kesehatan masyarakat.",technologies:["Laravel","PHP","PostgreSQL","REST API","Bootstrap"],imageUrl:"/img/sipostes.png",category:"government",demoUrl:"https://sipostes.deliserdangkab.go.id/"},{title:"API Website Sidisko",description:"Backend RESTful API dan mikroservis data untuk integrasi aplikasi Dinas Koperasi dan UKM (Sidisko) Deli Serdang.",technologies:["Laravel","PHP","PostgreSQL","REST API","JWT"],imageUrl:"/img/kominfo.jpg",category:"backend"},{title:"Website Project Management Deliserdang",description:"Sistem terpusat manajemen proyek dan tracking progres tugas teknis serta aplikasi di lingkungan Pemkab Deli Serdang.",technologies:["Laravel","PHP","PostgreSQL","TailwindCSS","JavaScript"],imageUrl:"/img/pm.png",category:"government",demoUrl:"https://pm.deliserdangkab.go.id"}],contact:{address:"Medan, Sumatera Utara, Indonesia",phone:"+62 812 6012 1852",email:"ahmadalqodridalimunthe@gmail.com",linkedin:"https://www.linkedin.com/in/ahmad-al-qodri-azizi-dalimunthe-8628072b8",mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.9114335103145!2d98.66453187473243!3d3.6077428963663696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131c4dfc6c409%3A0xa447d2b1d5c2d53d!2sKhaidir%20Florist!5e0!3m2!1sid!2sid!4v1739291953030!5m2!1sid!2sid"}};class w{constructor(e,i){r(this,"container");r(this,"skills");r(this,"currentFilter","all");const s=document.getElementById(e);if(!s)throw new Error(`Element #${e} not found`);this.container=s,this.skills=i}render(){document.getElementById("skill-filters")||this.renderFilters(),this.renderGrid()}renderFilters(){var s;const e=document.createElement("div");e.id="skill-filters",e.className="skill-filters",[{id:"all",label:"ALL SYSTEMS"},{id:"software-engineer",label:"SOFTWARE ENG"},{id:"sys-admin",label:"SYS ADMIN"},{id:"forensics",label:"FORENSICS"}].forEach(t=>{const a=document.createElement("button");a.className=`filter-btn ${t.id===this.currentFilter?"active":""}`,a.dataset.filter=t.id,a.textContent=t.label,a.addEventListener("click",()=>this.handleFilter(t.id)),e.appendChild(a)}),(s=this.container.parentNode)==null||s.insertBefore(e,this.container)}handleFilter(e){this.currentFilter=e,document.querySelectorAll(".filter-btn").forEach(i=>{i.dataset.filter===e?i.classList.add("active"):i.classList.remove("active")}),this.renderGrid()}renderGrid(){this.container.innerHTML="",(this.currentFilter==="all"?this.skills:this.skills.filter(i=>i.category===this.currentFilter)).forEach((i,s)=>{const t=document.createElement("div");t.className="skill-card",t.style.animationDelay=`${s*.1}s`,t.innerHTML=`
        <div class="skill-header">
          <i class="${i.icon}"></i>
          <h3>${i.name}</h3>
        </div>
        <div class="skill-meter-container">
           <div class="skill-meter-bar" style="width: ${i.level}%">
              <span class="skill-percent">${i.level}%</span>
           </div>
        </div>
        <div class="skill-category-tag">${i.category.replace("-"," ").toUpperCase()}</div>
      `,this.container.appendChild(t)})}}class h{static init(){if(this.isInitialized)return;const e=document.createElement("div");e.id="cyber-image-modal",e.className="cyber-image-modal",e.innerHTML=`
            <div class="modal-backdrop"></div>
            <div class="modal-window">
                <div class="modal-header">
                    <div class="modal-title-box">
                        <span class="modal-dot"></span>
                        <span class="modal-title" id="modal-title">IMAGE_VIEWER.EXE</span>
                        <span class="modal-subtitle" id="modal-subtitle"></span>
                    </div>
                    <button class="modal-close-btn" id="modal-close-btn" title="Close Viewer">
                        <i class="fas fa-times"></i> [ESC]
                    </button>
                </div>
                <div class="modal-body">
                    <div class="modal-scanner-line"></div>
                    <img id="modal-img" src="" alt="Preview">
                </div>
            </div>
        `,document.body.appendChild(e),this.modalElement=e,this.imgElement=e.querySelector("#modal-img"),this.titleElement=e.querySelector("#modal-title"),this.subtitleElement=e.querySelector("#modal-subtitle");const i=e.querySelector("#modal-close-btn"),s=e.querySelector(".modal-backdrop");i==null||i.addEventListener("click",()=>this.close()),s==null||s.addEventListener("click",()=>this.close()),window.addEventListener("keydown",t=>{var a;t.key==="Escape"&&((a=this.modalElement)!=null&&a.classList.contains("active"))&&this.close()}),this.isInitialized=!0}static open(e,i="IMAGE VIEWER",s=""){var t;this.init(),this.imgElement&&(this.imgElement.src=e),this.titleElement&&(this.titleElement.textContent=i),this.subtitleElement&&(this.subtitleElement.textContent=s?` // ${s}`:""),(t=this.modalElement)==null||t.classList.add("active"),document.body.style.overflow="hidden"}static close(){var e;(e=this.modalElement)==null||e.classList.remove("active"),document.body.style.overflow=""}}r(h,"modalElement",null),r(h,"imgElement",null),r(h,"titleElement",null),r(h,"subtitleElement",null),r(h,"isInitialized",!1);class v{static getContainer(){return this.container||(this.container=document.createElement("div"),this.container.id="cyber-toast-container",this.container.className="cyber-toast-container",document.body.appendChild(this.container)),this.container}static show(e,i="success"){const s=this.getContainer(),t=document.createElement("div");t.className=`cyber-toast ${i}`;const a=i==="success"?"fa-check-circle":i==="alert"?"fa-exclamation-triangle":"fa-info-circle";t.innerHTML=`
            <div class="toast-prefix">>_</div>
            <i class="fas ${a} toast-icon"></i>
            <div class="toast-message">${e}</div>
        `,s.appendChild(t),setTimeout(()=>{t.classList.add("fade-out"),setTimeout(()=>{t.remove()},300)},3200)}}r(v,"container",null);class u{static renderProjects(e,i){var t;const s=document.getElementById(e);if(s){if(this.allProjects=i,!document.getElementById("project-filter-controls")){const a=document.createElement("div");a.id="project-filter-controls",a.className="project-filter-controls",a.innerHTML=`
        <div class="project-search-bar">
          <span class="search-prompt">$ grep -i</span>
          <input type="text" id="project-search-input" class="project-search-input" placeholder="search projects / tech stack..." autocomplete="off">
          <i class="fas fa-search search-icon"></i>
        </div>
        <div class="project-filter-buttons" id="project-filter-buttons">
          <button class="filter-btn active" data-filter="all">ALL [${i.length}]</button>
          <button class="filter-btn" data-filter="government">GOV & E-GOV</button>
          <button class="filter-btn" data-filter="enterprise">ENTERPRISE & FINANCE</button>
          <button class="filter-btn" data-filter="backend">API & BACKEND</button>
          <button class="filter-btn" data-filter="health">HEALTHCARE</button>
        </div>
      `,(t=s.parentNode)==null||t.insertBefore(a,s);const o=document.getElementById("project-search-input");o==null||o.addEventListener("input",c=>{this.searchKeyword=c.target.value.toLowerCase().trim(),this.renderProjectsGrid(e)});const n=a.querySelectorAll(".filter-btn");n.forEach(c=>{c.addEventListener("click",d=>{n.forEach(g=>g.classList.remove("active"));const p=d.currentTarget;p.classList.add("active"),this.currentProjectFilter=p.dataset.filter||"all",this.renderProjectsGrid(e)})})}this.renderProjectsGrid(e)}}static renderProjectsGrid(e){const i=document.getElementById(e);if(!i)return;let s=this.allProjects;if(this.currentProjectFilter!=="all"&&(s=s.filter(t=>t.category===this.currentProjectFilter)),this.searchKeyword&&(s=s.filter(t=>t.title.toLowerCase().includes(this.searchKeyword)||t.description.toLowerCase().includes(this.searchKeyword)||t.technologies.some(a=>a.toLowerCase().includes(this.searchKeyword)))),s.length===0){i.innerHTML=`
        <div class="projects-empty-state">
          <i class="fas fa-search-minus"></i>
          <p>> No matching projects found for query "<span class="term-cyan">${this.escapeHtml(this.searchKeyword)}</span>"</p>
        </div>
      `;return}i.innerHTML=s.map(t=>`
          <div class="project-card" data-category="${t.category||"all"}">
            <div class="project-img" data-img="${t.imageUrl}" data-title="${t.title}">
              <img src="${t.imageUrl}" alt="${t.title}" loading="lazy">
              <div class="project-zoom-badge"><i class="fas fa-search-plus"></i> PREVIEW</div>
              <div class="project-overlay">
                 <button class="btn preview-btn" data-img="${t.imageUrl}" data-title="${t.title}" data-desc="${t.description}"><i class="fas fa-eye"></i> View</button>
                 ${t.demoUrl&&t.demoUrl!=="#"?`<a href="${t.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn primary-btn"><i class="fas fa-external-link-alt"></i> Visit</a>`:""}
                 ${t.repoUrl&&t.repoUrl!=="#"?`<a href="${t.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn secondary-btn"><i class="fab fa-github"></i> Code</a>`:""}
              </div>
            </div>
            <div class="project-content">
              <div class="project-header-row">
                <h3>${t.title}</h3>
                ${t.demoUrl&&t.demoUrl!=="#"?`<a href="${t.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-ext-icon" title="Visit live site"><i class="fas fa-external-link-alt"></i></a>`:""}
              </div>
              <p>${t.description}</p>
              <div class="project-tech">
                 ${t.technologies.map(a=>`<span>${a}</span>`).join("")}
              </div>
            </div>
          </div>
        `).join(""),i.querySelectorAll(".project-img, .preview-btn").forEach(t=>{t.addEventListener("click",a=>{const o=a.currentTarget,n=o.getAttribute("data-img"),c=o.getAttribute("data-title")||"Project Preview",d=o.getAttribute("data-desc")||"";n&&h.open(n,c,d)})})}static renderCertifications(e,i){const s=document.getElementById(e);s&&(s.innerHTML=i.map(t=>`
      <div class="certification-box" data-img="${t.image}" data-name="${t.name}" data-issuer="${t.issuer}">
        <div class="cert-img-wrapper">
            <img src="${t.image}" alt="${t.name}" loading="lazy">
            <div class="cert-hover-zoom"><i class="fas fa-expand-alt"></i> VIEW CREDENTIAL</div>
        </div>
        <div class="certification-content">
          <h3><i class="${t.icon}"></i> ${t.name}</h3>
          <span class="cert-issuer"><i class="fas fa-check-circle"></i> ${t.issuer}</span>
          <p>${t.description}</p>
        </div>
      </div>
    `).join(""),s.querySelectorAll(".certification-box").forEach(t=>{t.addEventListener("click",a=>{const o=a.currentTarget,n=o.getAttribute("data-img"),c=o.getAttribute("data-name")||"Certification",d=o.getAttribute("data-issuer")||"BNSP / Organization";n&&h.open(n,c,d)})}))}static renderExperience(e,i,s,t){const a=document.getElementById(e);if(!a)return;let o="";i&&i.length>0&&(o+=`
        <div class="experience-group">
          <div class="experience-group-header">
            <i class="fas fa-briefcase"></i>
            <span>PENGALAMAN KERJA (WORK EXPERIENCE)</span>
          </div>
          <div class="experience-list">
            ${i.map(n=>`
              <div class="experience-item" data-type="work">
                <div class="exp-logo">
                    <img src="${n.logo}" alt="${n.company}" loading="lazy">
                </div>
                <div class="experience-content">
                  <div class="exp-header-row">
                    <h3><i class="fas fa-laptop-code"></i> ${n.role}</h3>
                    <span class="exp-badge work-badge">WORK</span>
                  </div>
                  <h4><i class="fas fa-building"></i> ${n.company} &nbsp;|&nbsp; <i class="fas fa-calendar-alt"></i> ${n.period}</h4>
                  <p>${n.description}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `),t&&t.length>0&&(o+=`
        <div class="experience-group edu-group">
          <div class="experience-group-header edu-header">
            <i class="fas fa-graduation-cap"></i>
            <span>PENDIDIKAN FORMAL (FORMAL EDUCATION)</span>
          </div>
          <div class="experience-list">
            ${t.map(n=>`
              <div class="experience-item" data-type="education">
                <div class="exp-logo">
                    <img src="${n.logo}" alt="${n.institution}" loading="lazy">
                </div>
                <div class="experience-content">
                  <div class="exp-header-row">
                    <h3><i class="fas fa-user-graduate"></i> ${n.degree}</h3>
                    <div class="badge-group">
                      ${n.gpa?`<span class="exp-badge gpa-badge"><i class="fas fa-award"></i> GPA ${n.gpa}</span>`:""}
                      <span class="exp-badge edu-badge">EDUCATION</span>
                    </div>
                  </div>
                  <h4><i class="fas fa-university"></i> ${n.institution} &nbsp;|&nbsp; <i class="fas fa-calendar-alt"></i> ${n.period}</h4>
                  <p>${n.description}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `),s&&s.length>0&&(o+=`
        <div class="experience-group org-group">
          <div class="experience-group-header org-header">
            <i class="fas fa-users"></i>
            <span>PENGALAMAN ORGANISASI (ORGANIZATIONAL EXPERIENCE)</span>
          </div>
          <div class="experience-list">
            ${s.map(n=>`
              <div class="experience-item" data-type="community">
                <div class="exp-logo">
                    <img src="${n.logo}" alt="${n.organization}" loading="lazy">
                </div>
                <div class="experience-content">
                  <div class="exp-header-row">
                    <h3><i class="fas fa-user-shield"></i> ${n.role}</h3>
                    <span class="exp-badge org-badge">ORGANIZATION</span>
                  </div>
                  <h4><i class="fas fa-sitemap"></i> ${n.organization} &nbsp;|&nbsp; <i class="fas fa-calendar-alt"></i> ${n.period}</h4>
                  <p>${n.description}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `),a.innerHTML=o}static renderContact(e){const i=document.getElementById("contact-address"),s=document.getElementById("contact-phone"),t=document.getElementById("contact-email");i&&(i.innerHTML=`${e.address} <button class="copy-btn" data-copy="${e.address}" title="Copy Address"><i class="fas fa-copy"></i></button>`),s&&(s.innerHTML=`${e.phone} <button class="copy-btn" data-copy="${e.phone}" title="Copy Phone"><i class="fas fa-copy"></i></button>`),t&&(t.innerHTML=`${e.email} <button class="copy-btn" data-copy="${e.email}" title="Copy Email"><i class="fas fa-copy"></i></button>`),document.querySelectorAll(".copy-btn").forEach(o=>{o.addEventListener("click",n=>{const c=n.currentTarget.getAttribute("data-copy")||"";c&&navigator.clipboard.writeText(c).then(()=>{v.show(`COPIED TO CLIPBOARD: ${c}`,"success")}).catch(()=>{v.show("COPIED TO CLIPBOARD","success")})})});const a=document.querySelector(".contact-map");a&&(a.src=e.mapEmbedUrl)}static escapeHtml(e){const i=document.createElement("div");return i.textContent=e,i.innerHTML}}r(u,"allProjects",[]),r(u,"currentProjectFilter","all"),r(u,"searchKeyword","");class k{constructor(e="cyber-canvas",i="mouse-glow"){r(this,"canvas",null);r(this,"ctx",null);r(this,"particles",[]);r(this,"animationFrameId",null);r(this,"width",0);r(this,"height",0);r(this,"mouse",{x:-1e3,y:-1e3,radius:170});r(this,"mouseGlow",null);r(this,"isVisible",!0);r(this,"colors",["rgba(88, 166, 255, ","rgba(35, 134, 54, ","rgba(163, 113, 247, ","rgba(0, 212, 255, ","rgba(56, 189, 248, "]);r(this,"animate",()=>{if(!this.isVisible){this.animationFrameId=null;return}this.render(),this.animationFrameId=requestAnimationFrame(this.animate)});this.canvas=document.getElementById(e),this.mouseGlow=document.getElementById(i),this.canvas&&(this.ctx=this.canvas.getContext("2d"),this.ctx&&this.init())}init(){this.resize(),this.createParticles(),this.bindEvents(),this.animate()}resize(){this.canvas&&(this.width=window.innerWidth,this.height=window.innerHeight,this.canvas.width=this.width,this.canvas.height=this.height)}createParticles(){this.particles=[];const e=Math.floor(Math.min(Math.max(this.width*this.height/16e3,40),85));for(let i=0;i<e;i++){const s=this.colors[Math.floor(Math.random()*this.colors.length)];this.particles.push({x:Math.random()*this.width,y:Math.random()*this.height,vx:(Math.random()-.5)*.7,vy:(Math.random()-.5)*.7,radius:Math.random()*2.2+1.2,color:s,alpha:Math.random()*.5+.35})}}bindEvents(){let e;window.addEventListener("resize",()=>{clearTimeout(e),e=window.setTimeout(()=>{this.resize(),this.createParticles()},150)}),window.addEventListener("mousemove",i=>{this.mouse.x=i.clientX,this.mouse.y=i.clientY,this.mouseGlow&&(this.mouseGlow.style.transform=`translate3d(${i.clientX}px, ${i.clientY}px, 0)`,this.mouseGlow.style.opacity="1")}),window.addEventListener("mouseleave",()=>{this.mouse.x=-1e3,this.mouse.y=-1e3,this.mouseGlow&&(this.mouseGlow.style.opacity="0")}),window.addEventListener("touchmove",i=>{i.touches.length>0&&(this.mouse.x=i.touches[0].clientX,this.mouse.y=i.touches[0].clientY)},{passive:!0}),window.addEventListener("touchend",()=>{this.mouse.x=-1e3,this.mouse.y=-1e3}),document.addEventListener("visibilitychange",()=>{this.isVisible=document.visibilityState==="visible",this.isVisible&&!this.animationFrameId&&this.animate()})}render(){if(!this.ctx||!this.canvas)return;this.ctx.clearRect(0,0,this.width,this.height);const e=135,i=this.mouse.radius;for(let s=0;s<this.particles.length;s++){const t=this.particles[s];for(let c=s+1;c<this.particles.length;c++){const d=this.particles[c],p=t.x-d.x,g=t.y-d.y,f=Math.sqrt(p*p+g*g);if(f<e){const y=(1-f/e)*.22;this.ctx.beginPath(),this.ctx.moveTo(t.x,t.y),this.ctx.lineTo(d.x,d.y),this.ctx.strokeStyle=`rgba(88, 166, 255, ${y})`,this.ctx.lineWidth=.85,this.ctx.stroke()}}const a=t.x-this.mouse.x,o=t.y-this.mouse.y,n=Math.sqrt(a*a+o*o);if(n<i){const c=(1-n/i)*.5;this.ctx.beginPath(),this.ctx.moveTo(t.x,t.y),this.ctx.lineTo(this.mouse.x,this.mouse.y),this.ctx.strokeStyle=`rgba(0, 212, 255, ${c})`,this.ctx.lineWidth=1.3,this.ctx.stroke();const d=Math.atan2(o,a);t.x-=Math.cos(d)*.45,t.y-=Math.sin(d)*.45}t.x+=t.vx,t.y+=t.vy,(t.x<0||t.x>this.width)&&(t.vx*=-1),(t.y<0||t.y>this.height)&&(t.vy*=-1),this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.radius,0,Math.PI*2),this.ctx.fillStyle=`${t.color}${t.alpha})`,this.ctx.shadowBlur=8,this.ctx.shadowColor=`${t.color}0.8)`,this.ctx.fill(),this.ctx.shadowBlur=0}}}class L{constructor(e,i){r(this,"element");r(this,"words");r(this,"wordIndex",0);r(this,"charIndex",0);r(this,"isDeleting",!1);r(this,"typingSpeed",90);r(this,"deleteSpeed",45);r(this,"delayBetweenWords",2200);r(this,"type",()=>{const e=this.words[this.wordIndex];this.isDeleting?(this.charIndex--,this.element.innerHTML=`<span class="typewriter-prefix">> </span><span class="typewriter-text">${e.substring(0,this.charIndex)}</span><span class="typewriter-cursor">_</span>`):(this.charIndex++,this.element.innerHTML=`<span class="typewriter-prefix">> </span><span class="typewriter-text">${e.substring(0,this.charIndex)}</span><span class="typewriter-cursor">_</span>`);let i=this.isDeleting?this.deleteSpeed:this.typingSpeed;!this.isDeleting&&this.charIndex===e.length?(i=this.delayBetweenWords,this.isDeleting=!0):this.isDeleting&&this.charIndex===0&&(this.isDeleting=!1,this.wordIndex=(this.wordIndex+1)%this.words.length,i=400),setTimeout(this.type,i)});this.element=e,this.words=i,this.start()}start(){this.type()}}class S{constructor(e,i){r(this,"containerId");r(this,"stats");this.containerId=e,this.stats=i,this.render(),this.initObserver()}render(){const e=document.getElementById(this.containerId);e&&(e.innerHTML=`
            <div class="stats-grid">
                ${this.stats.map(i=>`
                    <div class="stat-card">
                        <div class="stat-icon"><i class="${i.icon}"></i></div>
                        <div class="stat-number-wrapper">
                            <span class="stat-counter" data-target="${i.value}" data-decimals="${i.decimals||0}">0</span>
                            <span class="stat-suffix">${i.suffix||""}</span>
                        </div>
                        <div class="stat-label">${i.label}</div>
                    </div>
                `).join("")}
            </div>
        `)}initObserver(){const e=document.getElementById(this.containerId);if(!e)return;let i=!1;const s=new IntersectionObserver(t=>{t.forEach(a=>{a.isIntersecting&&!i&&(i=!0,this.startCounting(),s.disconnect())})},{threshold:.25});s.observe(e)}startCounting(){document.querySelectorAll(".stat-counter").forEach(i=>{const s=parseFloat(i.getAttribute("data-target")||"0"),t=parseInt(i.getAttribute("data-decimals")||"0",10),a=1800,o=performance.now(),n=c=>{const d=c-o,p=Math.min(d/a,1),g=p===1?1:1-Math.pow(2,-10*p),f=(s*g).toFixed(t);i.textContent=f,p<1?requestAnimationFrame(n):i.textContent=s.toFixed(t)};requestAnimationFrame(n)})}}class I{constructor(){r(this,"isOpen",!1);r(this,"outputContainer",null);r(this,"inputElement",null);r(this,"history",[]);r(this,"historyIndex",-1);this.render(),this.bindEvents()}render(){const e=document.createElement("div");e.id="cyber-terminal-widget",e.className="cyber-terminal-widget",e.innerHTML=`
            <!-- Floating Launcher Button -->
            <button id="terminal-launcher-btn" class="terminal-launcher-btn" title="Open Interactive CLI">
                <i class="fas fa-terminal"></i>
                <span class="launcher-text">CLI_TERMINAL</span>
                <span class="launcher-pulse"></span>
            </button>

            <!-- Floating CLI Terminal Window -->
            <div id="terminal-modal" class="terminal-modal">
                <div class="terminal-window-header">
                    <div class="terminal-traffic-lights">
                        <span class="dot close-dot" id="terminal-close-btn"></span>
                        <span class="dot min-dot"></span>
                        <span class="dot max-dot"></span>
                    </div>
                    <div class="terminal-header-title">
                        <i class="fas fa-shield-alt"></i> root@qodri-sec-node:~ (bash)
                    </div>
                    <div class="terminal-header-status">LIVE</div>
                </div>
                <div class="terminal-window-body" id="terminal-output">
                    <div class="term-line welcome-line">
                        <span class="term-highlight">===================================================</span><br>
                        <span class="term-cyan">QODRI DIGITAL FORENSIC & DEV SHELL v2.4.0</span><br>
                        <span class="term-dim">Type <span class="term-green">'help'</span> for available system commands.</span><br>
                        <span class="term-highlight">===================================================</span>
                    </div>
                </div>
                <div class="terminal-input-row">
                    <span class="term-prompt">root@qodri:~#</span>
                    <input type="text" id="terminal-cli-input" class="terminal-cli-input" placeholder="type a command..." autocomplete="off" spellcheck="false">
                </div>
            </div>
        `,document.body.appendChild(e),this.outputContainer=e.querySelector("#terminal-output"),this.inputElement=e.querySelector("#terminal-cli-input")}bindEvents(){var s;const e=document.getElementById("terminal-launcher-btn"),i=document.getElementById("terminal-close-btn");e==null||e.addEventListener("click",()=>{this.toggleTerminal()}),i==null||i.addEventListener("click",()=>{this.closeTerminal()}),(s=this.inputElement)==null||s.addEventListener("keydown",t=>{var a;if(t.key==="Enter"){const o=((a=this.inputElement)==null?void 0:a.value.trim())||"";o&&(this.history.push(o),this.historyIndex=this.history.length,this.executeCommand(o),this.inputElement&&(this.inputElement.value=""))}else t.key==="ArrowUp"?(t.preventDefault(),this.historyIndex>0&&(this.historyIndex--,this.inputElement&&(this.inputElement.value=this.history[this.historyIndex]))):t.key==="ArrowDown"&&(t.preventDefault(),this.historyIndex<this.history.length-1?(this.historyIndex++,this.inputElement&&(this.inputElement.value=this.history[this.historyIndex])):(this.historyIndex=this.history.length,this.inputElement&&(this.inputElement.value="")))})}toggleTerminal(){this.isOpen?this.closeTerminal():this.openTerminal()}openTerminal(){const e=document.getElementById("terminal-modal");e==null||e.classList.add("active"),this.isOpen=!0,setTimeout(()=>{var i;return(i=this.inputElement)==null?void 0:i.focus()},100)}closeTerminal(){const e=document.getElementById("terminal-modal");e==null||e.classList.remove("active"),this.isOpen=!1}appendLine(e){if(!this.outputContainer)return;const i=document.createElement("div");i.className="term-line",i.innerHTML=e,this.outputContainer.appendChild(i),this.outputContainer.scrollTop=this.outputContainer.scrollHeight}executeCommand(e){switch(this.appendLine(`<span class="term-prompt">root@qodri:~#</span> <span class="term-user-cmd">${this.escapeHtml(e)}</span>`),e.toLowerCase().trim()){case"help":this.appendLine(`
                    <div class="term-help">
                        <span class="term-cyan">AVAILABLE COMMANDS:</span><br>
                        • <span class="term-green">whoami</span>    : Display candidate profile & summary<br>
                        • <span class="term-green">skills</span>    : List technical competencies & stack<br>
                        • <span class="term-green">projects</span>  : Show 12 deployed production applications<br>
                        • <span class="term-green">edu</span>       : Show formal university degree & GPA<br>
                        • <span class="term-green">certs</span>     : Display professional certifications<br>
                        • <span class="term-green">contact</span>   : Print verified communication channels<br>
                        • <span class="term-green">clear</span>     : Clear terminal display<br>
                        • <span class="term-green">sudo hire</span> : Direct priority contact via WhatsApp<br>
                        • <span class="term-green">exit</span>      : Minimize terminal window
                    </div>
                `);break;case"whoami":this.appendLine(`
                    <div class="term-box">
                        <span class="term-cyan">${l.name}</span><br>
                        <span class="term-dim">Titles:</span> ${l.titles.join(" | ")}<br>
                        <span class="term-dim">Specialization:</span> Digital Forensic Analysis, High-Security Web Dev, Linux Hardening.
                    </div>
                `);break;case"skills":this.appendLine(`
                    <div class="term-box">
                        <span class="term-cyan">TECHNICAL COMPETENCE:</span><br>
                        ${l.skills.map(s=>`• <span class="term-green">${s.name}</span>: [${s.level}% proficiency] (${s.category})`).join("<br>")}
                    </div>
                `);break;case"projects":this.appendLine(`
                    <div class="term-box">
                        <span class="term-cyan">12 PRODUCTION PROJECTS:</span><br>
                        ${l.projects.map((s,t)=>`${t+1}. <span class="term-green">${s.title}</span> - ${s.technologies.join(", ")} ${s.demoUrl?`<a href="${s.demoUrl}" target="_blank" class="term-link">[VISIT]</a>`:""}`).join("<br>")}
                    </div>
                `);break;case"edu":case"education":if(l.education&&l.education.length>0){const s=l.education[0];this.appendLine(`
                        <div class="term-box">
                            <span class="term-cyan">${s.degree}</span><br>
                            <span class="term-dim">Institution:</span> ${s.institution}<br>
                            <span class="term-dim">Period:</span> ${s.period}<br>
                            <span class="term-dim">GPA:</span> <span class="term-green">${s.gpa} (Distinction/Cum Laude)</span>
                        </div>
                    `)}break;case"certs":case"certifications":this.appendLine(`
                    <div class="term-box">
                        <span class="term-cyan">VERIFIED CREDENTIALS:</span><br>
                        ${l.certifications.map(s=>`• <span class="term-green">${s.name}</span> by ${s.issuer}`).join("<br>")}
                    </div>
                `);break;case"contact":this.appendLine(`
                    <div class="term-box">
                        <span class="term-cyan">COMMUNICATION CHANNELS:</span><br>
                        • Email: <span class="term-green">${l.contact.email}</span><br>
                        • Phone: <span class="term-green">${l.contact.phone}</span><br>
                        • LinkedIn: <a href="${l.contact.linkedin}" target="_blank" class="term-link">[PROFILE]</a><br>
                        • Location: ${l.contact.address}
                    </div>
                `);break;case"sudo hire":case"hire":case"sudo hire me":this.appendLine(`
                    <div class="term-box">
                        <span class="term-green">[ACCESS GRANTED]</span> Initializing secure recruiter dispatch...<br>
                        Redirecting to WhatsApp (+62 812 6012 1852)...
                    </div>
                `),v.show("REDIRECTING TO WHATSAPP DISPATCH...","success"),setTimeout(()=>{window.open("https://wa.me/6281260121852?text=Halo%20Ahmad%20Al%20Qodri,%20saya%20tertarik%20dengan%20portofolio%20Anda.","_blank")},1e3);break;case"clear":case"cls":this.outputContainer&&(this.outputContainer.innerHTML="");break;case"exit":case"quit":this.closeTerminal();break;default:this.appendLine(`<span class="term-alert">bash: command not found: ${this.escapeHtml(e)}. Type <span class="term-green">'help'</span> for list of commands.</span>`);break}}escapeHtml(e){const i=document.createElement("div");return i.textContent=e,i.innerHTML}}class x{constructor(){this.init()}init(){new k("cyber-canvas","mouse-glow"),h.init(),this.renderContent(),this.initTypewriter(),this.initStats(),new I,this.setupEventListeners(),this.handleLoading(),this.initScrollToTop()}initTypewriter(){const e=document.getElementById("hero-typewriter-text");if(e){const i=[...l.titles,"Full-Stack Laravel & PostgreSQL Engineer","Linux Server & Infrastructure Hardener","CSIL Certified Computer Investigator"];new L(e,i)}}initStats(){new S("stats-counter-container",[{value:12,suffix:"+",label:"Production Systems Deployed",icon:"fas fa-rocket"},{value:6,suffix:"+",label:"Verified Certifications (BNSP/CSI)",icon:"fas fa-award"},{value:3.88,suffix:" / 4.00",decimals:2,label:"Bachelor Degree GPA (Cum Laude)",icon:"fas fa-graduation-cap"},{value:2,suffix:"+ Years",label:"Software Engineering Experience",icon:"fas fa-code-branch"}])}renderContent(){const e=document.getElementById("hero-title");e&&(e.innerHTML=l.name);const i=document.querySelector(".about-text");i&&(i.innerHTML=l.about.map(t=>`<p>${t}</p>`).join("")),new w("skill-grid",l.skills).render(),u.renderProjects("projects-grid",l.projects),u.renderCertifications("certification-grid",l.certifications),u.renderExperience("experience-container",l.experience,l.organizations,l.education),u.renderContact(l.contact)}setupEventListeners(){const e=document.querySelector(".hamburger-menu"),i=document.getElementById("navList");e&&i&&(e.addEventListener("click",()=>{i.classList.toggle("active"),e.classList.toggle("active")}),document.querySelectorAll(".nav-link").forEach(s=>{s.addEventListener("click",()=>{i.classList.remove("active"),e.classList.remove("active")})})),document.querySelectorAll('a[href^="#"]').forEach(s=>{s.addEventListener("click",function(t){var n;t.preventDefault();const a=(n=this.getAttribute("href"))==null?void 0:n.substring(1);if(!a)return;const o=document.getElementById(a);if(o){const p=o.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:p,behavior:"smooth"})}})}),window.addEventListener("scroll",this.handleScroll.bind(this))}handleScroll(){const e=document.getElementById("navbar");window.scrollY>50?e==null||e.classList.add("scrolled"):e==null||e.classList.remove("scrolled");const i=document.querySelectorAll("section"),s=document.querySelectorAll(".nav-link");let t="";i.forEach(a=>{const o=a.offsetTop;window.scrollY>=o-150&&(t=a.getAttribute("id")||"")}),s.forEach(a=>{a.classList.remove("active"),a.getAttribute("href")===`#${t}`&&a.classList.add("active")})}handleLoading(){const e=document.getElementById("loading");e&&setTimeout(()=>{e.classList.add("hidden")},800)}initScrollToTop(){const e=document.getElementById("scrollTopBtn");e&&(window.addEventListener("scroll",()=>{window.scrollY>300?e.classList.add("visible"):e.classList.remove("visible")}),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}))}}document.addEventListener("DOMContentLoaded",()=>{new x});
