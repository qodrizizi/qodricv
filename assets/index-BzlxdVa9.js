var w=Object.defineProperty;var E=(p,e,i)=>e in p?w(p,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):p[e]=i;var o=(p,e,i)=>E(p,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(s){if(s.ep)return;s.ep=!0;const t=i(s);fetch(s.href,t)}})();const c={name:"AHMAD AL QODRI AZIZI DALIMUNTHE",titles:["Software Engineer","System Administrator","Digital Forensic Incident Response (DFIR)"],about:["I am a multi-disciplinary technology professional correcting the balance between building secure systems and investigating their breaches. My expertise spans the full lifecycle of digital infrastructure—from architecting robust software solutions to managing complex server environments and conducting forensic investigations when security incidents occur.","As a Software Engineer, I build scalable applications with a security-first mindset, utilizing frameworks like CodeIgniter 4, Laravel and modern TypeScript. My background in System Administration ensures these applications run on optimized, hardened infrastructure (Linux/Debian).","In the realm of Digital Forensics, I apply analytical rigor to uncover digital evidence, supported by my deep understanding of how systems are built and maintained. This unique convergence of skills allows me to not just solve problems, but anticipate and prevent them."],skills:[{name:"TypeScript",icon:"fab fa-js",level:85,category:"software-engineer"},{name:"PHP",icon:"fab fa-php",level:88,category:"software-engineer"},{name:"CodeIgniter 4",icon:"fas fa-fire",level:90,category:"software-engineer"},{name:"Laravel",icon:"fab fa-laravel",level:95,category:"software-engineer"},{name:"UI/UX Design",icon:"fas fa-paint-brush",level:85,category:"software-engineer"},{name:"Linux (Debian/Ubuntu)",icon:"fab fa-linux",level:92,category:"sys-admin"},{name:"Network Admin",icon:"fas fa-network-wired",level:85,category:"sys-admin"},{name:"Database Mgmt",icon:"fas fa-database",level:88,category:"sys-admin"},{name:"IoT Engineering",icon:"fas fa-microchip",level:85,category:"sys-admin"},{name:"Digital Investigation",icon:"fas fa-search",level:90,category:"forensics"},{name:"Incident Response",icon:"fas fa-shield-alt",level:88,category:"forensics"},{name:"CSI Linux",icon:"fas fa-user-secret",level:90,category:"forensics"},{name:"Computer Forensics",icon:"fas fa-laptop",level:90,category:"forensics"}],certifications:[{name:"Digital Forensic",issuer:"PT Analis Forensic Digital",image:"/img/certification1.png",icon:"fas fa-certificate",description:"Expertise in Digital Forensic Analysis and Investigation."},{name:"CSIL-CI",issuer:"CSI-Linux",image:"/img/certification3.jpg",icon:"fas fa-shield-alt",description:"Certified Computer Investigator by CSI Linux."},{name:"Junior Web Developer",issuer:"BNSP",image:"/img/web.jpg",icon:"fas fa-code",description:"National professional certification for Front-End and Back-End development."},{name:"Junior Network Administrator",issuer:"BNSP",image:"/img/network.jpg",icon:"fas fa-network-wired",description:"National certification for Network Topology and IP Management."},{name:"IT and Database",issuer:"Bakrie Center Foundation",image:"/img/certification2.jpg",icon:"fas fa-database",description:"Internship program certification focusing on Database Management."},{name:"Operator Komputer Madya",issuer:"BNSP",image:"/img/komputer.jpg",icon:"fas fa-desktop",description:"National certification for office competence (Word, Excel, PowerPoint)."}],experience:[{role:"Software Engineer / IT Developer",company:"Dinas Kominfostan Deli Serdang",period:"Januari 2026 - Sekarang",logo:"/img/kominfo.jpg",type:"work",description:"Developed and maintained regional government information systems, web applications, and digital services to support e-government initiatives in Deli Serdang."},{role:"Software Engineer",company:"PT Willy Dwi Perkasa",period:"Desember 2025 - Sekarang",logo:"/img/wdp.png",type:"work",description:"Developed and maintained scalable software solutions, web applications, and backend systems."},{role:"Programmer",company:"Telkomsel",period:"Juni 2025 - September 2025",logo:"/img/telkomsel.png",type:"work",description:"Developed a comprehensive system using python, implementing secure authentication and optimizing performance."},{role:"Web Developer",company:"Jeumpa SIKMRS",period:"Januari 2024 - December 2024",logo:"/img/sikmrs.jpg",type:"work",description:"Developed a comprehensive hospital management system using CodeIgniter 4, implementing secure authentication and optimizing performance."},{role:"IT and Database Division",company:"Bakrie Center Foundation",period:"Aug 2023 - Dec 2023",logo:"/img/BCF.png",type:"work",description:"Developed a website and database to accelerate TB elimination by 2030. Implemented robust data management systems."}],education:[{degree:"Bachelor Degree in Information Technology (S1 Teknologi Informasi)",institution:"Universitas Muhammadiyah Sumatera Utara (UMSU)",period:"2021 - 2025",logo:"/img/umsu.png",gpa:"3.88 / 4.00",description:"Graduated with a Bachelor's Degree in Information Technology achieving a GPA of 3.88/4.00 (Distinction/Cum Laude). Specialized in Software Engineering, Network Administration, and Digital Forensics."}],organizations:[{role:"Leader of Cyber Security Community",organization:"CSC UMSU",period:"2023",logo:"/img/csc.png",description:"Led the Cyber Security Community, organizing activities to increase knowledge and skills in cybersecurity."},{role:"Education and Research Division",organization:"HIMATIF",period:"2023",logo:"/img/himatif.jpg",description:"Conducted studies and provided solutions for various IT-related challenges in the student association."}],projects:[{title:"Jeumpa SIKMRS",description:"Sistem Informasi Rekam Medis Rumah Sakit komprehensif dengan role-based access control, integrasi modul medis pasien, dan keamanan data.",technologies:["CodeIgniter 4","PHP","MySQL","Bootstrap","jQuery"],imageUrl:"/img/sikmrs.jpg",category:"health"},{title:"WDP Finance",description:"Sistem informasi manajemen keuangan dan akuntansi perusahaan untuk pencatatan transaksi, invoicing, dan laporan kas operasional.",technologies:["Laravel","PHP","MySQL","TailwindCSS","JavaScript"],imageUrl:"/img/webfinance.png",category:"enterprise"},{title:"Web Dinaskominfostan Deliserdang",description:"Portal resmi Dinas Komunikasi, Informatika, Statistik dan Persandian Kabupaten Deli Serdang untuk layanan informasi publik dan e-government.",technologies:["Laravel","PHP","PostgreSQL","Bootstrap","REST API"],imageUrl:"/img/kominfo.png",category:"government",demoUrl:"https://dinaskominfostan-ds.deliserdangkab.go.id/"},{title:"Pusaka Deli",description:"Platform sistem informasi layanan terpadu kebudayaan dan arsip daerah Kabupaten Deli Serdang.",technologies:["Laravel","PHP","MySQL","JavaScript","Bootstrap"],imageUrl:"/img/pusaka.png",category:"government",demoUrl:"https://pusakadeli.deliserdangkab.go.id/"},{title:"SI- Informan",description:"Sistem Informasi dan Pelayanan Perizinan DPMPTSP Kabupaten Deli Serdang untuk transparansi dan kemudahan layanan masyarakat.",technologies:["Laravel","PHP","PostgreSQL","JavaScript","Bootstrap"],imageUrl:"/img/siinforman.png",category:"government",demoUrl:"https://dpmptsp.deliserdangkab.go.id/si-informan/"},{title:"Website Setwan Deliserdang",description:"Portal resmi Sekretariat DPRD Kabupaten Deli Serdang untuk transparansi aspirasi publik dan dokumentasi kegiatan kedewanan.",technologies:["Laravel","PHP","PostgreSQL","Bootstrap","JavaScript"],imageUrl:"/img/setwan.png",category:"government",demoUrl:"https://setwan.deliserdangkab.go.id/"},{title:"Website Setdakab Deliserdang",description:"Website resmi Sekretariat Daerah Kabupaten Deli Serdang yang memuat regulasi daerah, profil birokrasi, dan berita pemerintahan.",technologies:["Laravel","PHP","PostgreSQL","Bootstrap","JavaScript"],imageUrl:"/img/setdakab.png",category:"government",demoUrl:"https://setdakab.deliserdangkab.go.id/"},{title:"DAKL",description:"Sistem Data Analisis Kebutuhan Lembaga / Pendidikan pada Dinas Pendidikan Kabupaten Deli Serdang berbasis web.",technologies:["Laravel","PHP","PostgreSQL","Chart.js","Bootstrap"],imageUrl:"/img/dakl.png",category:"government",demoUrl:"https://dakl-pendidikan.deliserdangkab.go.id/"},{title:"Website Perpustakaan & Arsip",description:"Sistem manajemen katalog buku digital, kearsipan daerah, dan otomasi peminjaman literatur Dinas Perpustakaan & Arsip.",technologies:["Laravel","PHP","PostgreSQL","JavaScript","Bootstrap"],imageUrl:"/img/kominfo.png",category:"government"},{title:"SiPOSTES",description:"Sistem Informasi Pos Pelayanan Terpadu Elektronik untuk optimalisasi pelaporan data dan monitoring kesehatan masyarakat.",technologies:["Laravel","PHP","PostgreSQL","REST API","Bootstrap"],imageUrl:"/img/sipostes.png",category:"government",demoUrl:"https://sipostes.deliserdangkab.go.id/"},{title:"API Website Sidisko",description:"Backend RESTful API dan mikroservis data untuk integrasi aplikasi Dinas Koperasi dan UKM (Sidisko) Deli Serdang.",technologies:["Laravel","PHP","PostgreSQL","REST API","JWT"],imageUrl:"/img/kominfo.jpg",category:"backend"},{title:"Website Project Management Deliserdang",description:"Sistem terpusat manajemen proyek dan tracking progres tugas teknis serta aplikasi di lingkungan Pemkab Deli Serdang.",technologies:["Laravel","PHP","PostgreSQL","TailwindCSS","JavaScript"],imageUrl:"/img/pm.png",category:"government",demoUrl:"https://pm.deliserdangkab.go.id"}],contact:{address:"Medan, Sumatera Utara, Indonesia",phone:"+62 812 6012 1852",email:"ahmadalqodridalimunthe@gmail.com",linkedin:"https://www.linkedin.com/in/ahmad-al-qodri-azizi-dalimunthe-8628072b8",mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.9114335103145!2d98.66453187473243!3d3.6077428963663696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131c4dfc6c409%3A0xa447d2b1d5c2d53d!2sKhaidir%20Florist!5e0!3m2!1sid!2sid!4v1739291953030!5m2!1sid!2sid"}};class x{constructor(e,i){o(this,"container");o(this,"skills");o(this,"currentFilter","all");const a=document.getElementById(e);if(!a)throw new Error(`Element #${e} not found`);this.container=a,this.skills=i}render(){document.getElementById("skill-filters")||this.renderFilters(),this.renderGrid()}renderFilters(){var a;const e=document.createElement("div");e.id="skill-filters",e.className="skill-filters",[{id:"all",label:"ALL SYSTEMS"},{id:"software-engineer",label:"SOFTWARE ENG"},{id:"sys-admin",label:"SYS ADMIN"},{id:"forensics",label:"FORENSICS"}].forEach(s=>{const t=document.createElement("button");t.className=`filter-btn ${s.id===this.currentFilter?"active":""}`,t.dataset.filter=s.id,t.textContent=s.label,t.addEventListener("click",()=>this.handleFilter(s.id)),e.appendChild(t)}),(a=this.container.parentNode)==null||a.insertBefore(e,this.container)}handleFilter(e){this.currentFilter=e,document.querySelectorAll(".filter-btn").forEach(i=>{i.dataset.filter===e?i.classList.add("active"):i.classList.remove("active")}),this.renderGrid()}renderGrid(){this.container.innerHTML="",(this.currentFilter==="all"?this.skills:this.skills.filter(i=>i.category===this.currentFilter)).forEach((i,a)=>{const s=document.createElement("div");s.className="skill-card reveal-on-scroll",s.style.animationDelay=`${a*.06}s`,s.innerHTML=`
                <div class="skill-header">
                    <i class="${i.icon}"></i>
                    <h3>${i.name}</h3>
                </div>
                <div class="skill-meter-container">
                    <div class="skill-meter-bar" data-level="${i.level}" style="width: 0%">
                        <span class="skill-percent">${i.level}%</span>
                    </div>
                </div>
                <div class="skill-category-tag">${i.category.replace("-"," ").toUpperCase()}</div>
            `,this.container.appendChild(s)}),requestAnimationFrame(()=>{setTimeout(()=>{this.container.querySelectorAll(".skill-meter-bar").forEach(i=>{const a=i.dataset.level||"0";i.style.width=`${a}%`})},100)})}}class u{static init(){if(this.isInitialized)return;const e=document.createElement("div");e.id="cyber-image-modal",e.className="cyber-image-modal",e.innerHTML=`
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
        `,document.body.appendChild(e),this.modalElement=e,this.imgElement=e.querySelector("#modal-img"),this.titleElement=e.querySelector("#modal-title"),this.subtitleElement=e.querySelector("#modal-subtitle");const i=e.querySelector("#modal-close-btn"),a=e.querySelector(".modal-backdrop");i==null||i.addEventListener("click",()=>this.close()),a==null||a.addEventListener("click",()=>this.close()),window.addEventListener("keydown",s=>{var t;s.key==="Escape"&&((t=this.modalElement)!=null&&t.classList.contains("active"))&&this.close()}),this.isInitialized=!0}static open(e,i="IMAGE VIEWER",a=""){var s;this.init(),this.imgElement&&(this.imgElement.src=e),this.titleElement&&(this.titleElement.textContent=i),this.subtitleElement&&(this.subtitleElement.textContent=a?` // ${a}`:""),(s=this.modalElement)==null||s.classList.add("active"),document.body.style.overflow="hidden"}static close(){var e;(e=this.modalElement)==null||e.classList.remove("active"),document.body.style.overflow=""}}o(u,"modalElement",null),o(u,"imgElement",null),o(u,"titleElement",null),o(u,"subtitleElement",null),o(u,"isInitialized",!1);class v{static getContainer(){return this.container||(this.container=document.createElement("div"),this.container.id="cyber-toast-container",this.container.className="cyber-toast-container",document.body.appendChild(this.container)),this.container}static show(e,i="success"){const a=this.getContainer(),s=document.createElement("div");s.className=`cyber-toast ${i}`;const t=i==="success"?"fa-check-circle":i==="alert"?"fa-exclamation-triangle":"fa-info-circle";s.innerHTML=`
            <div class="toast-prefix">>_</div>
            <i class="fas ${t} toast-icon"></i>
            <div class="toast-message">${e}</div>
        `,a.appendChild(s),setTimeout(()=>{s.classList.add("fade-out"),setTimeout(()=>{s.remove()},300)},3200)}}o(v,"container",null);class f{static renderProjects(e,i){var s;const a=document.getElementById(e);if(a){if(this.allProjects=i,!document.getElementById("project-filter-controls")){const t=document.createElement("div");t.id="project-filter-controls",t.className="project-filter-controls reveal-on-scroll",t.innerHTML=`
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
      `,(s=a.parentNode)==null||s.insertBefore(t,a);const n=document.getElementById("project-search-input");n==null||n.addEventListener("input",l=>{this.searchKeyword=l.target.value.toLowerCase().trim(),this.renderProjectsGrid(e)});const r=t.querySelectorAll(".filter-btn");r.forEach(l=>{l.addEventListener("click",d=>{r.forEach(h=>h.classList.remove("active"));const m=d.currentTarget;m.classList.add("active"),this.currentProjectFilter=m.dataset.filter||"all",this.renderProjectsGrid(e)})})}this.renderProjectsGrid(e)}}static renderProjectsGrid(e){const i=document.getElementById(e);if(!i)return;let a=this.allProjects;if(this.currentProjectFilter!=="all"&&(a=a.filter(s=>s.category===this.currentProjectFilter)),this.searchKeyword&&(a=a.filter(s=>s.title.toLowerCase().includes(this.searchKeyword)||s.description.toLowerCase().includes(this.searchKeyword)||s.technologies.some(t=>t.toLowerCase().includes(this.searchKeyword)))),a.length===0){i.innerHTML=`
        <div class="projects-empty-state">
          <i class="fas fa-search-minus"></i>
          <p>> No matching projects found for query "<span class="term-cyan">${this.escapeHtml(this.searchKeyword)}</span>"</p>
        </div>
      `;return}i.innerHTML=a.map(s=>`
          <div class="project-card reveal-on-scroll" data-category="${s.category||"all"}">
            <div class="project-img" data-img="${s.imageUrl}" data-title="${s.title}">
              <img src="${s.imageUrl}" alt="${s.title}" loading="lazy">
              <div class="project-zoom-badge"><i class="fas fa-search-plus"></i> PREVIEW</div>
              <div class="project-overlay">
                 <button class="btn preview-btn" data-img="${s.imageUrl}" data-title="${s.title}" data-desc="${s.description}"><i class="fas fa-eye"></i> View</button>
                 ${s.demoUrl&&s.demoUrl!=="#"?`<a href="${s.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn primary-btn"><i class="fas fa-external-link-alt"></i> Visit</a>`:""}
                 ${s.repoUrl&&s.repoUrl!=="#"?`<a href="${s.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn secondary-btn"><i class="fab fa-github"></i> Code</a>`:""}
              </div>
            </div>
            <div class="project-content">
              <div class="project-header-row">
                <h3>${s.title}</h3>
                ${s.demoUrl&&s.demoUrl!=="#"?`<a href="${s.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-ext-icon" title="Visit live site"><i class="fas fa-external-link-alt"></i></a>`:""}
              </div>
              <p>${s.description}</p>
              <div class="project-tech">
                 ${s.technologies.map(t=>`<span>${t}</span>`).join("")}
              </div>
            </div>
          </div>
        `).join(""),i.querySelectorAll(".project-img, .preview-btn").forEach(s=>{s.addEventListener("click",t=>{const n=t.currentTarget,r=n.getAttribute("data-img"),l=n.getAttribute("data-title")||"Project Preview",d=n.getAttribute("data-desc")||"";r&&u.open(r,l,d)})}),document.dispatchEvent(new CustomEvent("contentUpdated"))}static renderCertifications(e,i){const a=document.getElementById(e);a&&(a.innerHTML=i.map(s=>`
      <div class="certification-box reveal-on-scroll" data-img="${s.image}" data-name="${s.name}" data-issuer="${s.issuer}">
        <div class="cert-img-wrapper">
            <img src="${s.image}" alt="${s.name}" loading="lazy">
            <div class="cert-hover-zoom"><i class="fas fa-expand-alt"></i> VIEW CREDENTIAL</div>
        </div>
        <div class="certification-content">
          <h3><i class="${s.icon}"></i> ${s.name}</h3>
          <span class="cert-issuer"><i class="fas fa-check-circle"></i> ${s.issuer}</span>
          <p>${s.description}</p>
        </div>
      </div>
    `).join(""),a.querySelectorAll(".certification-box").forEach(s=>{s.addEventListener("click",t=>{const n=t.currentTarget,r=n.getAttribute("data-img"),l=n.getAttribute("data-name")||"Certification",d=n.getAttribute("data-issuer")||"BNSP / Organization";r&&u.open(r,l,d)})}),document.dispatchEvent(new CustomEvent("contentUpdated")))}static renderExperience(e,i,a,s){const t=document.getElementById(e);if(!t)return;let n="";i&&i.length>0&&(n+=`
        <div class="experience-group reveal-on-scroll">
          <div class="experience-group-header">
            <i class="fas fa-briefcase"></i>
            <span>PENGALAMAN KERJA (WORK EXPERIENCE)</span>
          </div>
          <div class="experience-list">
            ${i.map(r=>`
              <div class="experience-item reveal-on-scroll" data-type="work">
                <div class="exp-logo">
                    <img src="${r.logo}" alt="${r.company}" loading="lazy">
                </div>
                <div class="experience-content">
                  <div class="exp-header-row">
                    <h3><i class="fas fa-laptop-code"></i> ${r.role}</h3>
                    <span class="exp-badge work-badge">WORK</span>
                  </div>
                  <h4><i class="fas fa-building"></i> ${r.company} &nbsp;|&nbsp; <i class="fas fa-calendar-alt"></i> ${r.period}</h4>
                  <p>${r.description}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `),s&&s.length>0&&(n+=`
        <div class="experience-group edu-group reveal-on-scroll">
          <div class="experience-group-header edu-header">
            <i class="fas fa-graduation-cap"></i>
            <span>PENDIDIKAN FORMAL (FORMAL EDUCATION)</span>
          </div>
          <div class="experience-list">
            ${s.map(r=>`
              <div class="experience-item reveal-on-scroll" data-type="education">
                <div class="exp-logo">
                    <img src="${r.logo}" alt="${r.institution}" loading="lazy">
                </div>
                <div class="experience-content">
                  <div class="exp-header-row">
                    <h3><i class="fas fa-user-graduate"></i> ${r.degree}</h3>
                    <div class="badge-group">
                      ${r.gpa?`<span class="exp-badge gpa-badge"><i class="fas fa-award"></i> GPA ${r.gpa}</span>`:""}
                      <span class="exp-badge edu-badge">EDUCATION</span>
                    </div>
                  </div>
                  <h4><i class="fas fa-university"></i> ${r.institution} &nbsp;|&nbsp; <i class="fas fa-calendar-alt"></i> ${r.period}</h4>
                  <p>${r.description}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `),a&&a.length>0&&(n+=`
        <div class="experience-group org-group reveal-on-scroll">
          <div class="experience-group-header org-header">
            <i class="fas fa-users"></i>
            <span>PENGALAMAN ORGANISASI (ORGANIZATIONAL EXPERIENCE)</span>
          </div>
          <div class="experience-list">
            ${a.map(r=>`
              <div class="experience-item reveal-on-scroll" data-type="community">
                <div class="exp-logo">
                    <img src="${r.logo}" alt="${r.organization}" loading="lazy">
                </div>
                <div class="experience-content">
                  <div class="exp-header-row">
                    <h3><i class="fas fa-user-shield"></i> ${r.role}</h3>
                    <span class="exp-badge org-badge">ORGANIZATION</span>
                  </div>
                  <h4><i class="fas fa-sitemap"></i> ${r.organization} &nbsp;|&nbsp; <i class="fas fa-calendar-alt"></i> ${r.period}</h4>
                  <p>${r.description}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `),t.innerHTML=n,document.dispatchEvent(new CustomEvent("contentUpdated"))}static renderContact(e){const i=document.getElementById("contact-address"),a=document.getElementById("contact-phone"),s=document.getElementById("contact-email");i&&(i.innerHTML=`${e.address} <button class="copy-btn" data-copy="${e.address}" title="Copy Address"><i class="fas fa-copy"></i></button>`),a&&(a.innerHTML=`${e.phone} <button class="copy-btn" data-copy="${e.phone}" title="Copy Phone"><i class="fas fa-copy"></i></button>`),s&&(s.innerHTML=`${e.email} <button class="copy-btn" data-copy="${e.email}" title="Copy Email"><i class="fas fa-copy"></i></button>`),document.querySelectorAll(".copy-btn").forEach(n=>{n.addEventListener("click",r=>{const l=r.currentTarget.getAttribute("data-copy")||"";l&&navigator.clipboard.writeText(l).then(()=>{v.show(`COPIED TO CLIPBOARD: ${l}`,"success")}).catch(()=>{v.show("COPIED TO CLIPBOARD","success")})})});const t=document.querySelector(".contact-map");t&&(t.src=e.mapEmbedUrl),document.dispatchEvent(new CustomEvent("contentUpdated"))}static escapeHtml(e){const i=document.createElement("div");return i.textContent=e,i.innerHTML}}o(f,"allProjects",[]),o(f,"currentProjectFilter","all"),o(f,"searchKeyword","");class k{constructor(e="cyber-canvas",i="mouse-glow"){o(this,"canvas",null);o(this,"ctx",null);o(this,"particles",[]);o(this,"packets",[]);o(this,"ripples",[]);o(this,"glyphs",[]);o(this,"animationFrameId",null);o(this,"width",0);o(this,"height",0);o(this,"dpr",1);o(this,"mouse",{x:-1e3,y:-1e3,radius:190,isDown:!1});o(this,"mouseGlow",null);o(this,"isVisible",!0);o(this,"lastPacketTime",0);o(this,"colors",["rgba(88, 166, 255, ","rgba(0, 242, 254, ","rgba(168, 85, 247, ","rgba(16, 185, 129, ","rgba(56, 189, 248, "]);o(this,"glyphStrings",["0x7F","0xFA","SEC_NODE","HASH::SHA256","0x1A4","CSI_NET","STATUS::OK","PORT::443","AUTH::VERIFIED","0x00FF","AES-256","0x9C","SYS::HARDENED","DFIR::LOG","0x3D","SSL_TLS_v1.3"]);o(this,"animate",()=>{if(!this.isVisible){this.animationFrameId=null;return}this.render(),this.animationFrameId=requestAnimationFrame(this.animate)});this.canvas=document.getElementById(e),this.mouseGlow=document.getElementById(i),this.canvas&&(this.ctx=this.canvas.getContext("2d"),this.ctx&&this.init())}init(){this.resize(),this.createParticles(),this.createGlyphs(),this.bindEvents(),this.animate()}resize(){!this.canvas||!this.ctx||(this.dpr=Math.min(window.devicePixelRatio||1,2.5),this.width=window.innerWidth||document.documentElement.clientWidth||1920,this.height=window.innerHeight||document.documentElement.clientHeight||1080,this.canvas.width=Math.floor(this.width*this.dpr),this.canvas.height=Math.floor(this.height*this.dpr),this.canvas.style.width=`${this.width}px`,this.canvas.style.height=`${this.height}px`,this.ctx.setTransform(1,0,0,1,0,0),this.ctx.scale(this.dpr,this.dpr))}createParticles(){this.particles=[],this.packets=[];const e=this.width<768,i=e?50:85;for(let a=0;a<i;a++){const s=this.colors[Math.floor(Math.random()*this.colors.length)],t=a%7===0,n=t?Math.random()*.35+.65:Math.random()*.4+.45;this.particles.push({x:Math.random()*this.width,y:Math.random()*this.height,vx:(Math.random()-.5)*(e?.5:.75),vy:(Math.random()-.5)*(e?.5:.75),radius:t?Math.random()*1.6+3:Math.random()*1.8+1.5,color:s,alpha:n,baseAlpha:n,isAnchor:t,ringPulse:Math.random()*Math.PI*2})}}createGlyphs(){this.glyphs=[];const e=this.width<768?8:16;for(let i=0;i<e;i++)this.glyphs.push({x:Math.random()*this.width,y:Math.random()*this.height,text:this.glyphStrings[Math.floor(Math.random()*this.glyphStrings.length)],vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,alpha:Math.random()*.2+.12,size:Math.random()*2+10})}addRipple(e,i){this.ripples.length>6&&this.ripples.shift(),this.ripples.push({x:e,y:i,radius:5,maxRadius:this.width<768?100:150,alpha:.8})}bindEvents(){let e;window.addEventListener("resize",()=>{clearTimeout(e),e=window.setTimeout(()=>{this.resize(),this.createParticles(),this.createGlyphs()},150)}),window.addEventListener("mousemove",i=>{this.mouse.x=i.clientX,this.mouse.y=i.clientY,this.mouseGlow&&(this.mouseGlow.style.transform=`translate3d(${i.clientX}px, ${i.clientY}px, 0)`,this.mouseGlow.style.opacity="1")}),window.addEventListener("mousedown",i=>{this.mouse.isDown=!0,this.addRipple(i.clientX,i.clientY)}),window.addEventListener("mouseup",()=>{this.mouse.isDown=!1}),window.addEventListener("mouseleave",()=>{this.mouse.x=-1e3,this.mouse.y=-1e3,this.mouseGlow&&(this.mouseGlow.style.opacity="0")}),window.addEventListener("touchstart",i=>{if(i.touches.length>0){const a=i.touches[0];this.mouse.x=a.clientX,this.mouse.y=a.clientY,this.addRipple(a.clientX,a.clientY),this.mouseGlow&&(this.mouseGlow.style.transform=`translate3d(${a.clientX}px, ${a.clientY}px, 0)`,this.mouseGlow.style.opacity="0.85")}},{passive:!0}),window.addEventListener("touchmove",i=>{if(i.touches.length>0){const a=i.touches[0];this.mouse.x=a.clientX,this.mouse.y=a.clientY,this.mouseGlow&&(this.mouseGlow.style.transform=`translate3d(${a.clientX}px, ${a.clientY}px, 0)`,this.mouseGlow.style.opacity="0.85")}},{passive:!0}),window.addEventListener("touchend",()=>{this.mouse.x=-1e3,this.mouse.y=-1e3,this.mouseGlow&&(this.mouseGlow.style.opacity="0")}),document.addEventListener("visibilitychange",()=>{this.isVisible=document.visibilityState==="visible",this.isVisible&&!this.animationFrameId&&this.animate()})}spawnDataPacket(e,i){this.packets.length>20||this.packets.push({fromIndex:e,toIndex:i,progress:0,speed:Math.random()*.015+.01,color:"#00f2fe"})}render(){if(!this.ctx||!this.canvas)return;this.ctx.clearRect(0,0,this.width,this.height);const e=this.width<768?130:160,i=this.mouse.radius,a=performance.now();this.ctx.save(),this.ctx.font='11px "JetBrains Mono", monospace';for(let s=0;s<this.glyphs.length;s++){const t=this.glyphs[s];t.x+=t.vx,t.y+=t.vy,t.x<-70&&(t.x=this.width+70),t.x>this.width+70&&(t.x=-70),t.y<-30&&(t.y=this.height+30),t.y>this.height+30&&(t.y=-30),this.ctx.fillStyle=`rgba(88, 166, 255, ${t.alpha})`,this.ctx.fillText(t.text,t.x,t.y)}if(this.ctx.restore(),a-this.lastPacketTime>500&&this.particles.length>2){const s=Math.floor(Math.random()*this.particles.length),t=this.particles[s];let n=-1,r=e;for(let l=0;l<this.particles.length;l++){if(s===l)continue;const d=this.particles[l],m=t.x-d.x,h=t.y-d.y,g=Math.sqrt(m*m+h*h);g<r&&(r=g,n=l)}n!==-1&&(this.spawnDataPacket(s,n),this.lastPacketTime=a)}for(let s=0;s<this.particles.length;s++){const t=this.particles[s];for(let d=s+1;d<this.particles.length;d++){const m=this.particles[d],h=t.x-m.x,g=t.y-m.y,y=Math.sqrt(h*h+g*g);if(y<e){const b=(1-y/e)*.35;this.ctx.beginPath(),this.ctx.moveTo(t.x,t.y),this.ctx.lineTo(m.x,m.y),this.ctx.strokeStyle=`rgba(88, 166, 255, ${b})`,this.ctx.lineWidth=1,this.ctx.stroke()}}const n=t.x-this.mouse.x,r=t.y-this.mouse.y,l=Math.sqrt(n*n+r*r);if(l<i){const d=(1-l/i)*.7;this.ctx.beginPath(),this.ctx.moveTo(t.x,t.y),this.ctx.lineTo(this.mouse.x,this.mouse.y),this.ctx.strokeStyle=`rgba(0, 242, 254, ${d})`,this.ctx.lineWidth=1.5,this.ctx.stroke();const m=Math.atan2(r,n),h=this.mouse.isDown?1.4:.55;t.x+=Math.cos(m)*h,t.y+=Math.sin(m)*h}if(t.x+=t.vx,t.y+=t.vy,t.x<0?(t.x=0,t.vx*=-1):t.x>this.width&&(t.x=this.width,t.vx*=-1),t.y<0?(t.y=0,t.vy*=-1):t.y>this.height&&(t.y=this.height,t.vy*=-1),t.isAnchor){t.ringPulse=(t.ringPulse||0)+.04;const d=t.radius+(Math.sin(t.ringPulse)+1)*4,m=(Math.sin(t.ringPulse)+1)*.28+.15;this.ctx.beginPath(),this.ctx.arc(t.x,t.y,d,0,Math.PI*2),this.ctx.strokeStyle=`rgba(0, 242, 254, ${m})`,this.ctx.lineWidth=1.3,this.ctx.stroke()}this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.radius,0,Math.PI*2),this.ctx.fillStyle=`${t.color}${t.alpha})`,this.ctx.shadowBlur=12,this.ctx.shadowColor=`${t.color}0.95)`,this.ctx.fill(),this.ctx.shadowBlur=0}for(let s=this.packets.length-1;s>=0;s--){const t=this.packets[s];if(t.progress+=t.speed,t.progress>=1||!this.particles[t.fromIndex]||!this.particles[t.toIndex]){this.packets.splice(s,1);continue}const n=this.particles[t.fromIndex],r=this.particles[t.toIndex],l=n.x+(r.x-n.x)*t.progress,d=n.y+(r.y-n.y)*t.progress;this.ctx.beginPath(),this.ctx.arc(l,d,2.8,0,Math.PI*2),this.ctx.fillStyle=t.color,this.ctx.shadowBlur=14,this.ctx.shadowColor="#00f2fe",this.ctx.fill(),this.ctx.shadowBlur=0}for(let s=this.ripples.length-1;s>=0;s--){const t=this.ripples[s];if(t.radius+=3.4,t.alpha-=.024,t.alpha<=0||t.radius>=t.maxRadius){this.ripples.splice(s,1);continue}this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.radius,0,Math.PI*2),this.ctx.strokeStyle=`rgba(0, 242, 254, ${t.alpha})`,this.ctx.lineWidth=1.8,this.ctx.shadowBlur=10,this.ctx.shadowColor="#00f2fe",this.ctx.stroke(),this.ctx.shadowBlur=0}}}class S{constructor(e,i){o(this,"element");o(this,"words");o(this,"wordIndex",0);o(this,"charIndex",0);o(this,"isDeleting",!1);o(this,"typingSpeed",90);o(this,"deleteSpeed",45);o(this,"delayBetweenWords",2200);o(this,"type",()=>{const e=this.words[this.wordIndex];this.isDeleting?(this.charIndex--,this.element.innerHTML=`<span class="typewriter-prefix">> </span><span class="typewriter-text">${e.substring(0,this.charIndex)}</span><span class="typewriter-cursor">_</span>`):(this.charIndex++,this.element.innerHTML=`<span class="typewriter-prefix">> </span><span class="typewriter-text">${e.substring(0,this.charIndex)}</span><span class="typewriter-cursor">_</span>`);let i=this.isDeleting?this.deleteSpeed:this.typingSpeed;!this.isDeleting&&this.charIndex===e.length?(i=this.delayBetweenWords,this.isDeleting=!0):this.isDeleting&&this.charIndex===0&&(this.isDeleting=!1,this.wordIndex=(this.wordIndex+1)%this.words.length,i=400),setTimeout(this.type,i)});this.element=e,this.words=i,this.start()}start(){this.type()}}class L{constructor(e,i){o(this,"containerId");o(this,"stats");this.containerId=e,this.stats=i,this.render(),this.initObserver()}render(){const e=document.getElementById(this.containerId);e&&(e.innerHTML=`
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
        `)}initObserver(){const e=document.getElementById(this.containerId);if(!e)return;let i=!1;const a=new IntersectionObserver(s=>{s.forEach(t=>{t.isIntersecting&&!i&&(i=!0,this.startCounting(),a.disconnect())})},{threshold:.25});a.observe(e)}startCounting(){document.querySelectorAll(".stat-counter").forEach(i=>{const a=parseFloat(i.getAttribute("data-target")||"0"),s=parseInt(i.getAttribute("data-decimals")||"0",10),t=1800,n=performance.now(),r=l=>{const d=l-n,m=Math.min(d/t,1),h=m===1?1:1-Math.pow(2,-10*m),g=(a*h).toFixed(s);i.textContent=g,m<1?requestAnimationFrame(r):i.textContent=a.toFixed(s)};requestAnimationFrame(r)})}}class I{constructor(){o(this,"isOpen",!1);o(this,"outputContainer",null);o(this,"inputElement",null);o(this,"history",[]);o(this,"historyIndex",-1);this.render(),this.bindEvents()}render(){const e=document.createElement("div");e.id="cyber-terminal-widget",e.className="cyber-terminal-widget",e.innerHTML=`
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
        `,document.body.appendChild(e),this.outputContainer=e.querySelector("#terminal-output"),this.inputElement=e.querySelector("#terminal-cli-input")}bindEvents(){var a;const e=document.getElementById("terminal-launcher-btn"),i=document.getElementById("terminal-close-btn");e==null||e.addEventListener("click",()=>{this.toggleTerminal()}),i==null||i.addEventListener("click",()=>{this.closeTerminal()}),(a=this.inputElement)==null||a.addEventListener("keydown",s=>{var t;if(s.key==="Enter"){const n=((t=this.inputElement)==null?void 0:t.value.trim())||"";n&&(this.history.push(n),this.historyIndex=this.history.length,this.executeCommand(n),this.inputElement&&(this.inputElement.value=""))}else s.key==="ArrowUp"?(s.preventDefault(),this.historyIndex>0&&(this.historyIndex--,this.inputElement&&(this.inputElement.value=this.history[this.historyIndex]))):s.key==="ArrowDown"&&(s.preventDefault(),this.historyIndex<this.history.length-1?(this.historyIndex++,this.inputElement&&(this.inputElement.value=this.history[this.historyIndex])):(this.historyIndex=this.history.length,this.inputElement&&(this.inputElement.value="")))})}toggleTerminal(){this.isOpen?this.closeTerminal():this.openTerminal()}openTerminal(){const e=document.getElementById("terminal-modal");e==null||e.classList.add("active"),this.isOpen=!0,setTimeout(()=>{var i;return(i=this.inputElement)==null?void 0:i.focus()},100)}closeTerminal(){const e=document.getElementById("terminal-modal");e==null||e.classList.remove("active"),this.isOpen=!1}appendLine(e){if(!this.outputContainer)return;const i=document.createElement("div");i.className="term-line",i.innerHTML=e,this.outputContainer.appendChild(i),this.outputContainer.scrollTop=this.outputContainer.scrollHeight}executeCommand(e){switch(this.appendLine(`<span class="term-prompt">root@qodri:~#</span> <span class="term-user-cmd">${this.escapeHtml(e)}</span>`),e.toLowerCase().trim()){case"help":this.appendLine(`
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
                        <span class="term-cyan">${c.name}</span><br>
                        <span class="term-dim">Titles:</span> ${c.titles.join(" | ")}<br>
                        <span class="term-dim">Specialization:</span> Digital Forensic Analysis, High-Security Web Dev, Linux Hardening.
                    </div>
                `);break;case"skills":this.appendLine(`
                    <div class="term-box">
                        <span class="term-cyan">TECHNICAL COMPETENCE:</span><br>
                        ${c.skills.map(a=>`• <span class="term-green">${a.name}</span>: [${a.level}% proficiency] (${a.category})`).join("<br>")}
                    </div>
                `);break;case"projects":this.appendLine(`
                    <div class="term-box">
                        <span class="term-cyan">12 PRODUCTION PROJECTS:</span><br>
                        ${c.projects.map((a,s)=>`${s+1}. <span class="term-green">${a.title}</span> - ${a.technologies.join(", ")} ${a.demoUrl?`<a href="${a.demoUrl}" target="_blank" class="term-link">[VISIT]</a>`:""}`).join("<br>")}
                    </div>
                `);break;case"edu":case"education":if(c.education&&c.education.length>0){const a=c.education[0];this.appendLine(`
                        <div class="term-box">
                            <span class="term-cyan">${a.degree}</span><br>
                            <span class="term-dim">Institution:</span> ${a.institution}<br>
                            <span class="term-dim">Period:</span> ${a.period}<br>
                            <span class="term-dim">GPA:</span> <span class="term-green">${a.gpa} (Distinction/Cum Laude)</span>
                        </div>
                    `)}break;case"certs":case"certifications":this.appendLine(`
                    <div class="term-box">
                        <span class="term-cyan">VERIFIED CREDENTIALS:</span><br>
                        ${c.certifications.map(a=>`• <span class="term-green">${a.name}</span> by ${a.issuer}`).join("<br>")}
                    </div>
                `);break;case"contact":this.appendLine(`
                    <div class="term-box">
                        <span class="term-cyan">COMMUNICATION CHANNELS:</span><br>
                        • Email: <span class="term-green">${c.contact.email}</span><br>
                        • Phone: <span class="term-green">${c.contact.phone}</span><br>
                        • LinkedIn: <a href="${c.contact.linkedin}" target="_blank" class="term-link">[PROFILE]</a><br>
                        • Location: ${c.contact.address}
                    </div>
                `);break;case"sudo hire":case"hire":case"sudo hire me":this.appendLine(`
                    <div class="term-box">
                        <span class="term-green">[ACCESS GRANTED]</span> Initializing secure recruiter dispatch...<br>
                        Redirecting to WhatsApp (+62 812 6012 1852)...
                    </div>
                `),v.show("REDIRECTING TO WHATSAPP DISPATCH...","success"),setTimeout(()=>{window.open("https://wa.me/6281260121852?text=Halo%20Ahmad%20Al%20Qodri,%20saya%20tertarik%20dengan%20portofolio%20Anda.","_blank")},1e3);break;case"clear":case"cls":this.outputContainer&&(this.outputContainer.innerHTML="");break;case"exit":case"quit":this.closeTerminal();break;default:this.appendLine(`<span class="term-alert">bash: command not found: ${this.escapeHtml(e)}. Type <span class="term-green">'help'</span> for list of commands.</span>`);break}}escapeHtml(e){const i=document.createElement("div");return i.textContent=e,i.innerHTML}}class P{constructor(){o(this,"revealObserver",null);this.init()}init(){new k("cyber-canvas","mouse-glow"),u.init(),this.renderContent(),this.initTypewriter(),this.initStats(),new I,this.setupEventListeners(),this.initScrollReveal(),this.handleLoading(),this.initScrollToTop()}initTypewriter(){const e=document.getElementById("hero-typewriter-text");e&&new S(e,c.titles)}initStats(){new L("stats-counter-container",[{value:12,suffix:"+",label:"Production Systems Deployed",icon:"fas fa-rocket"},{value:6,suffix:"+",label:"Verified Certifications (BNSP/CSI)",icon:"fas fa-award"},{value:3.88,suffix:" / 4.00",decimals:2,label:"Bachelor Degree GPA (Cum Laude)",icon:"fas fa-graduation-cap"},{value:2,suffix:"+ Years",label:"Software Engineering Experience",icon:"fas fa-code-branch"}])}renderContent(){const e=document.getElementById("hero-title");e&&(e.innerHTML=c.name);const i=document.querySelector(".about-text");i&&(i.innerHTML=c.about.map(s=>`<p>${s}</p>`).join("")),new x("skill-grid",c.skills).render(),f.renderProjects("projects-grid",c.projects),f.renderCertifications("certification-grid",c.certifications),f.renderExperience("experience-container",c.experience,c.organizations,c.education),f.renderContact(c.contact)}initScrollReveal(){this.revealObserver=new IntersectionObserver(e=>{e.forEach(i=>{var a;i.isIntersecting&&(i.target.classList.add("is-revealed"),(a=this.revealObserver)==null||a.unobserve(i.target))})},{threshold:.1,rootMargin:"0px 0px -40px 0px"}),this.observeRevealElements(),document.addEventListener("contentUpdated",()=>{this.observeRevealElements()})}observeRevealElements(){if(!this.revealObserver)return;document.querySelectorAll(".reveal-on-scroll, .section-header, .about-content, .stat-card, .contact-terminal, .contact-map").forEach(i=>{var a;i.classList.contains("is-revealed")||(i.classList.add("reveal-on-scroll"),(a=this.revealObserver)==null||a.observe(i))})}setupEventListeners(){const e=document.querySelector(".hamburger-menu"),i=document.getElementById("navList");e&&i&&(e.addEventListener("click",()=>{const a=i.classList.toggle("active");e.classList.toggle("active"),document.body.classList.toggle("nav-open",a)}),document.querySelectorAll(".nav-link").forEach(a=>{a.addEventListener("click",()=>{i.classList.remove("active"),e.classList.remove("active"),document.body.classList.remove("nav-open")})})),document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener("click",function(s){var r;s.preventDefault();const t=(r=this.getAttribute("href"))==null?void 0:r.substring(1);if(!t)return;const n=document.getElementById(t);if(n){const m=n.getBoundingClientRect().top+window.pageYOffset-70;window.scrollTo({top:m,behavior:"smooth"})}})}),window.addEventListener("scroll",this.handleScroll.bind(this))}handleScroll(){const e=document.getElementById("navbar");window.scrollY>40?e==null||e.classList.add("scrolled"):e==null||e.classList.remove("scrolled");const i=document.querySelectorAll("section"),a=document.querySelectorAll(".nav-link");let s="";i.forEach(t=>{const n=t.offsetTop;window.scrollY>=n-140&&(s=t.getAttribute("id")||"")}),a.forEach(t=>{t.classList.remove("active"),t.getAttribute("href")===`#${s}`&&t.classList.add("active")})}handleLoading(){const e=document.getElementById("loading");e&&setTimeout(()=>{e.classList.add("hidden")},600)}initScrollToTop(){const e=document.getElementById("scrollTopBtn");e&&(window.addEventListener("scroll",()=>{window.scrollY>300?e.classList.add("visible"):e.classList.remove("visible")}),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}))}}document.addEventListener("DOMContentLoaded",()=>{new P});
