var v=Object.defineProperty;var y=(l,i,t)=>i in l?v(l,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[i]=t;var o=(l,i,t)=>y(l,typeof i!="symbol"?i+"":i,t);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const c={name:"AHMAD AL QODRI AZIZI DALIMUNTHE",titles:["Software Engineer","System Administrator","Digital Forensic Investigator"],about:["I am a multi-disciplinary technology professional correcting the balance between building secure systems and investigating their breaches. My expertise spans the full lifecycle of digital infrastructure—from architecting robust software solutions to managing complex server environments and conducting forensic investigations when security incidents occur.","As a Software Engineer, I build scalable applications with a security-first mindset, utilizing frameworks like CodeIgniter 4, Laravel and modern TypeScript. My background in System Administration ensures these applications run on optimized, hardened infrastructure (Linux/Debian).","In the realm of Digital Forensics, I apply analytical rigor to uncover digital evidence, supported by my deep understanding of how systems are built and maintained. This unique convergence of skills allows me to not just solve problems, but anticipate and prevent them."],skills:[{name:"TypeScript",icon:"fab fa-js",level:85,category:"software-engineer"},{name:"PHP",icon:"fab fa-php",level:88,category:"software-engineer"},{name:"CodeIgniter 4",icon:"fas fa-fire",level:90,category:"software-engineer"},{name:"Laravel",icon:"fab fa-laravel",level:95,category:"software-engineer"},{name:"UI/UX Design",icon:"fas fa-paint-brush",level:85,category:"software-engineer"},{name:"Linux (Debian/Ubuntu)",icon:"fab fa-linux",level:92,category:"sys-admin"},{name:"Network Admin",icon:"fas fa-network-wired",level:85,category:"sys-admin"},{name:"Database Mgmt",icon:"fas fa-database",level:88,category:"sys-admin"},{name:"IoT Engineering",icon:"fas fa-microchip",level:85,category:"sys-admin"},{name:"Digital Investigation",icon:"fas fa-search",level:90,category:"forensics"},{name:"Incident Response",icon:"fas fa-shield-alt",level:88,category:"forensics"},{name:"CSI Linux",icon:"fas fa-user-secret",level:90,category:"forensics"},{name:"Computer Forensics",icon:"fas fa-laptop",level:90,category:"forensics"}],certifications:[{name:"Digital Forensic",issuer:"PT Analis Forensic Digital",image:"/img/certification1.png",icon:"fas fa-certificate",description:"Expertise in Digital Forensic Analysis and Investigation."},{name:"CSIL-CI",issuer:"CSI-Linux",image:"/img/certification3.jpg",icon:"fas fa-shield-alt",description:"Certified Computer Investigator by CSI Linux."},{name:"Junior Web Developer",issuer:"BNSP",image:"/img/web.jpg",icon:"fas fa-code",description:"National professional certification for Front-End and Back-End development."},{name:"Junior Network Administrator",issuer:"BNSP",image:"/img/network.jpg",icon:"fas fa-network-wired",description:"National certification for Network Topology and IP Management."},{name:"IT and Database",issuer:"Bakrie Center Foundation",image:"/img/certification2.jpg",icon:"fas fa-database",description:"Internship program certification focusing on Database Management."},{name:"Operator Komputer Madya",issuer:"BNSP",image:"/img/komputer.jpg",icon:"fas fa-desktop",description:"National certification for office competence (Word, Excel, PowerPoint)."}],experience:[{role:"Software Engineer / IT Developer",company:"Dinas Kominfostan Deli Serdang",period:"Januari 2026 - Sekarang",logo:"/img/kominfo.jpg",type:"work",description:"Developed and maintained regional government information systems, web applications, and digital services to support e-government initiatives in Deli Serdang."},{role:"Software Engineer",company:"PT Willy Dwi Perkasa",period:"Desember 2025 - Sekarang",logo:"/img/wdp.png",type:"work",description:"Developed and maintained scalable software solutions, web applications, and backend systems."},{role:"Programmer",company:"Telkomsel",period:"Juni 2025 - September 2025",logo:"/img/telkomsel.png",type:"work",description:"Developed a comprehensive system using python, implementing secure authentication and optimizing performance."},{role:"Web Developer",company:"Jeumpa SIKMRS",period:"Januari 2024 - December 2024",logo:"/img/sikmrs.jpg",type:"work",description:"Developed a comprehensive hospital management system using CodeIgniter 4, implementing secure authentication and optimizing performance."},{role:"IT and Database Division",company:"Bakrie Center Foundation",period:"Aug 2023 - Dec 2023",logo:"/img/BCF.png",type:"work",description:"Developed a website and database to accelerate TB elimination by 2030. Implemented robust data management systems."}],education:[{degree:"Bachelor Degree in Information Technology (S1 Teknologi Informasi)",institution:"Universitas Muhammadiyah Sumatera Utara (UMSU)",period:"2021 - 2025",logo:"/img/umsu.png",gpa:"3.88 / 4.00",description:"Graduated with a Bachelor's Degree in Information Technology achieving a GPA of 3.88/4.00 (Distinction/Cum Laude). Specialized in Software Engineering, Network Administration, and Digital Forensics."}],organizations:[{role:"Leader of Cyber Security Community",organization:"CSC UMSU",period:"2023",logo:"/img/csc.png",description:"Led the Cyber Security Community, organizing activities to increase knowledge and skills in cybersecurity."},{role:"Education and Research Division",organization:"HIMATIF",period:"2023",logo:"/img/himatif.jpg",description:"Conducted studies and provided solutions for various IT-related challenges in the student association."}],projects:[{title:"Jeumpa SIKMRS",description:"Sistem Informasi Rekam Medis Rumah Sakit komprehensif dengan role-based access control, integrasi modul medis pasien, dan keamanan data.",technologies:["CodeIgniter 4","PHP","MySQL","Bootstrap","jQuery"],imageUrl:"/img/sikmrs.jpg"},{title:"WDP Finance",description:"Sistem informasi manajemen keuangan dan akuntansi perusahaan untuk pencatatan transaksi, invoicing, dan laporan kas operasional.",technologies:["Laravel","PHP","MySQL","TailwindCSS","JavaScript"],imageUrl:"/img/webfinance.png"},{title:"Web Dinaskominfostan Deliserdang",description:"Portal resmi Dinas Komunikasi, Informatika, Statistik dan Persandian Kabupaten Deli Serdang untuk layanan informasi publik dan e-government.",technologies:["Laravel","PHP","PostgreSQL","Bootstrap","REST API"],imageUrl:"/img/kominfo.png",demoUrl:"https://dinaskominfostan-ds.deliserdangkab.go.id/"},{title:"Pusaka Deli",description:"Platform sistem informasi layanan terpadu kebudayaan dan arsip daerah Kabupaten Deli Serdang.",technologies:["Laravel","PHP","MySQL","JavaScript","Bootstrap"],imageUrl:"/img/pusaka.png",demoUrl:"https://pusakadeli.deliserdangkab.go.id/"},{title:"SI- Informan",description:"Sistem Informasi dan Pelayanan Perizinan DPMPTSP Kabupaten Deli Serdang untuk transparansi dan kemudahan layanan masyarakat.",technologies:["Laravel","PHP","PostgreSQL","JavaScript","Bootstrap"],imageUrl:"/img/siinforman.png",demoUrl:"https://dpmptsp.deliserdangkab.go.id/si-informan/"},{title:"Website Setwan Deliserdang",description:"Portal resmi Sekretariat DPRD Kabupaten Deli Serdang untuk transparansi aspirasi publik dan dokumentasi kegiatan kedewanan.",technologies:["Laravel","PHP","PostgreSQL","Bootstrap","JavaScript"],imageUrl:"/img/setwan.png",demoUrl:"https://setwan.deliserdangkab.go.id/"},{title:"Website Setdakab Deliserdang",description:"Website resmi Sekretariat Daerah Kabupaten Deli Serdang yang memuat regulasi daerah, profil birokrasi, dan berita pemerintahan.",technologies:["Laravel","PHP","PostgreSQL","Bootstrap","JavaScript"],imageUrl:"/img/setdakab.png",demoUrl:"https://setdakab.deliserdangkab.go.id/"},{title:"DAKL",description:"Sistem Data Analisis Kebutuhan Lembaga / Pendidikan pada Dinas Pendidikan Kabupaten Deli Serdang berbasis web.",technologies:["Laravel","PHP","PostgreSQL","Chart.js","Bootstrap"],imageUrl:"/img/dakl.png",demoUrl:"https://dakl-pendidikan.deliserdangkab.go.id/"},{title:"Website Perpustakaan & Arsip",description:"Sistem manajemen katalog buku digital, kearsipan daerah, dan otomasi peminjaman literatur Dinas Perpustakaan & Arsip.",technologies:["Laravel","PHP","PostgreSQL","JavaScript","Bootstrap"],imageUrl:"/img/kominfo.png"},{title:"SiPOSTES",description:"Sistem Informasi Pos Pelayanan Terpadu Elektronik untuk optimalisasi pelaporan data dan monitoring kesehatan masyarakat.",technologies:["Laravel","PHP","PostgreSQL","REST API","Bootstrap"],imageUrl:"/img/sipostes.png",demoUrl:"https://sipostes.deliserdangkab.go.id/"},{title:"API Website Sidisko",description:"Backend RESTful API dan mikroservis data untuk integrasi aplikasi Dinas Koperasi dan UKM (Sidisko) Deli Serdang.",technologies:["Laravel","PHP","PostgreSQL","REST API","JWT"],imageUrl:"/img/kominfo.jpg"},{title:"Website Project Management Deliserdang",description:"Sistem terpusat manajemen proyek dan tracking progres tugas teknis serta aplikasi di lingkungan Pemkab Deli Serdang.",technologies:["Laravel","PHP","PostgreSQL","TailwindCSS","JavaScript"],imageUrl:"/img/pm.png",demoUrl:"https://pm.deliserdangkab.go.id"}],contact:{address:"Medan, Sumatera Utara, Indonesia",phone:"+62 812 6012 1852",email:"ahmadalqodridalimunthe@gmail.com",mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.9114335103145!2d98.66453187473243!3d3.6077428963663696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131c4dfc6c409%3A0xa447d2b1d5c2d53d!2sKhaidir%20Florist!5e0!3m2!1sid!2sid!4v1739291953030!5m2!1sid!2sid"}};class b{constructor(i,t){o(this,"container");o(this,"skills");o(this,"currentFilter","all");const n=document.getElementById(i);if(!n)throw new Error(`Element #${i} not found`);this.container=n,this.skills=t}render(){document.getElementById("skill-filters")||this.renderFilters(),this.renderGrid()}renderFilters(){var n;const i=document.createElement("div");i.id="skill-filters",i.className="skill-filters",[{id:"all",label:"ALL SYSTEMS"},{id:"software-engineer",label:"SOFTWARE ENG"},{id:"sys-admin",label:"SYS ADMIN"},{id:"forensics",label:"FORENSICS"}].forEach(e=>{const a=document.createElement("button");a.className=`filter-btn ${e.id===this.currentFilter?"active":""}`,a.dataset.filter=e.id,a.textContent=e.label,a.addEventListener("click",()=>this.handleFilter(e.id)),i.appendChild(a)}),(n=this.container.parentNode)==null||n.insertBefore(i,this.container)}handleFilter(i){this.currentFilter=i,document.querySelectorAll(".filter-btn").forEach(t=>{t.dataset.filter===i?t.classList.add("active"):t.classList.remove("active")}),this.renderGrid()}renderGrid(){this.container.innerHTML="",(this.currentFilter==="all"?this.skills:this.skills.filter(t=>t.category===this.currentFilter)).forEach((t,n)=>{const e=document.createElement("div");e.className="skill-card",e.style.animationDelay=`${n*.1}s`,e.innerHTML=`
        <div class="skill-header">
          <i class="${t.icon}"></i>
          <h3>${t.name}</h3>
        </div>
        <div class="skill-meter-container">
           <div class="skill-meter-bar" style="width: ${t.level}%">
              <span class="skill-percent">${t.level}%</span>
           </div>
        </div>
        <div class="skill-category-tag">${t.category.replace("-"," ").toUpperCase()}</div>
      `,this.container.appendChild(e)})}}class g{static renderProjects(i,t){const n=document.getElementById(i);n&&(n.innerHTML=t.map(e=>`
          <div class="project-card">
            <div class="project-img">
              <img src="${e.imageUrl}" alt="${e.title}" loading="lazy">
              <div class="project-overlay">
                 ${e.demoUrl&&e.demoUrl!=="#"?`<a href="${e.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn primary-btn"><i class="fas fa-external-link-alt"></i> Visit</a>`:""}
                 ${e.repoUrl&&e.repoUrl!=="#"?`<a href="${e.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn secondary-btn"><i class="fab fa-github"></i> Code</a>`:""}
              </div>
            </div>
            <div class="project-content">
              <div class="project-header-row">
                <h3>${e.title}</h3>
                ${e.demoUrl&&e.demoUrl!=="#"?`<a href="${e.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-ext-icon" title="Visit live site"><i class="fas fa-external-link-alt"></i></a>`:""}
              </div>
              <p>${e.description}</p>
              <div class="project-tech">
                 ${e.technologies.map(a=>`<span>${a}</span>`).join("")}
              </div>
            </div>
          </div>
        `).join(""))}static renderCertifications(i,t){const n=document.getElementById(i);n&&(n.innerHTML=t.map(e=>`
      <div class="certification-box">
        <div class="cert-img-wrapper">
            <img src="${e.image}" alt="${e.name}" loading="lazy">
        </div>
        <div class="certification-content">
          <h3><i class="${e.icon}"></i> ${e.name}</h3>
          <span class="cert-issuer">${e.issuer}</span>
          <p>${e.description}</p>
        </div>
      </div>
    `).join(""))}static renderExperience(i,t,n,e){const a=document.getElementById(i);if(!a)return;let r="";t&&t.length>0&&(r+=`
        <div class="experience-group">
          <div class="experience-group-header">
            <i class="fas fa-briefcase"></i>
            <span>PENGALAMAN KERJA (WORK EXPERIENCE)</span>
          </div>
          <div class="experience-list">
            ${t.map(s=>`
              <div class="experience-item" data-type="work">
                <div class="exp-logo">
                    <img src="${s.logo}" alt="${s.company}" loading="lazy">
                </div>
                <div class="experience-content">
                  <div class="exp-header-row">
                    <h3><i class="fas fa-laptop-code"></i> ${s.role}</h3>
                    <span class="exp-badge work-badge">WORK</span>
                  </div>
                  <h4><i class="fas fa-building"></i> ${s.company} &nbsp;|&nbsp; <i class="fas fa-calendar-alt"></i> ${s.period}</h4>
                  <p>${s.description}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `),e&&e.length>0&&(r+=`
        <div class="experience-group edu-group">
          <div class="experience-group-header edu-header">
            <i class="fas fa-graduation-cap"></i>
            <span>PENDIDIKAN FORMAL (FORMAL EDUCATION)</span>
          </div>
          <div class="experience-list">
            ${e.map(s=>`
              <div class="experience-item" data-type="education">
                <div class="exp-logo">
                    <img src="${s.logo}" alt="${s.institution}" loading="lazy">
                </div>
                <div class="experience-content">
                  <div class="exp-header-row">
                    <h3><i class="fas fa-user-graduate"></i> ${s.degree}</h3>
                    <div class="badge-group">
                      ${s.gpa?`<span class="exp-badge gpa-badge"><i class="fas fa-award"></i> GPA ${s.gpa}</span>`:""}
                      <span class="exp-badge edu-badge">EDUCATION</span>
                    </div>
                  </div>
                  <h4><i class="fas fa-university"></i> ${s.institution} &nbsp;|&nbsp; <i class="fas fa-calendar-alt"></i> ${s.period}</h4>
                  <p>${s.description}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `),n&&n.length>0&&(r+=`
        <div class="experience-group org-group">
          <div class="experience-group-header org-header">
            <i class="fas fa-users"></i>
            <span>PENGALAMAN ORGANISASI (ORGANIZATIONAL EXPERIENCE)</span>
          </div>
          <div class="experience-list">
            ${n.map(s=>`
              <div class="experience-item" data-type="community">
                <div class="exp-logo">
                    <img src="${s.logo}" alt="${s.organization}" loading="lazy">
                </div>
                <div class="experience-content">
                  <div class="exp-header-row">
                    <h3><i class="fas fa-user-shield"></i> ${s.role}</h3>
                    <span class="exp-badge org-badge">ORGANIZATION</span>
                  </div>
                  <h4><i class="fas fa-sitemap"></i> ${s.organization} &nbsp;|&nbsp; <i class="fas fa-calendar-alt"></i> ${s.period}</h4>
                  <p>${s.description}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `),a.innerHTML=r}}class k{constructor(i="cyber-canvas",t="mouse-glow"){o(this,"canvas",null);o(this,"ctx",null);o(this,"particles",[]);o(this,"animationFrameId",null);o(this,"width",0);o(this,"height",0);o(this,"mouse",{x:-1e3,y:-1e3,radius:170});o(this,"mouseGlow",null);o(this,"isVisible",!0);o(this,"colors",["rgba(88, 166, 255, ","rgba(35, 134, 54, ","rgba(163, 113, 247, ","rgba(0, 212, 255, ","rgba(56, 189, 248, "]);o(this,"animate",()=>{if(!this.isVisible){this.animationFrameId=null;return}this.render(),this.animationFrameId=requestAnimationFrame(this.animate)});this.canvas=document.getElementById(i),this.mouseGlow=document.getElementById(t),this.canvas&&(this.ctx=this.canvas.getContext("2d"),this.ctx&&this.init())}init(){this.resize(),this.createParticles(),this.bindEvents(),this.animate()}resize(){this.canvas&&(this.width=window.innerWidth,this.height=window.innerHeight,this.canvas.width=this.width,this.canvas.height=this.height)}createParticles(){this.particles=[];const i=Math.floor(Math.min(Math.max(this.width*this.height/16e3,40),85));for(let t=0;t<i;t++){const n=this.colors[Math.floor(Math.random()*this.colors.length)];this.particles.push({x:Math.random()*this.width,y:Math.random()*this.height,vx:(Math.random()-.5)*.7,vy:(Math.random()-.5)*.7,radius:Math.random()*2.2+1.2,color:n,alpha:Math.random()*.5+.35})}}bindEvents(){let i;window.addEventListener("resize",()=>{clearTimeout(i),i=window.setTimeout(()=>{this.resize(),this.createParticles()},150)}),window.addEventListener("mousemove",t=>{this.mouse.x=t.clientX,this.mouse.y=t.clientY,this.mouseGlow&&(this.mouseGlow.style.transform=`translate3d(${t.clientX}px, ${t.clientY}px, 0)`,this.mouseGlow.style.opacity="1")}),window.addEventListener("mouseleave",()=>{this.mouse.x=-1e3,this.mouse.y=-1e3,this.mouseGlow&&(this.mouseGlow.style.opacity="0")}),window.addEventListener("touchmove",t=>{t.touches.length>0&&(this.mouse.x=t.touches[0].clientX,this.mouse.y=t.touches[0].clientY)},{passive:!0}),window.addEventListener("touchend",()=>{this.mouse.x=-1e3,this.mouse.y=-1e3}),document.addEventListener("visibilitychange",()=>{this.isVisible=document.visibilityState==="visible",this.isVisible&&!this.animationFrameId&&this.animate()})}render(){if(!this.ctx||!this.canvas)return;this.ctx.clearRect(0,0,this.width,this.height);const i=135,t=this.mouse.radius;for(let n=0;n<this.particles.length;n++){const e=this.particles[n];for(let m=n+1;m<this.particles.length;m++){const d=this.particles[m],p=e.x-d.x,h=e.y-d.y,u=Math.sqrt(p*p+h*h);if(u<i){const f=(1-u/i)*.22;this.ctx.beginPath(),this.ctx.moveTo(e.x,e.y),this.ctx.lineTo(d.x,d.y),this.ctx.strokeStyle=`rgba(88, 166, 255, ${f})`,this.ctx.lineWidth=.85,this.ctx.stroke()}}const a=e.x-this.mouse.x,r=e.y-this.mouse.y,s=Math.sqrt(a*a+r*r);if(s<t){const m=(1-s/t)*.5;this.ctx.beginPath(),this.ctx.moveTo(e.x,e.y),this.ctx.lineTo(this.mouse.x,this.mouse.y),this.ctx.strokeStyle=`rgba(0, 212, 255, ${m})`,this.ctx.lineWidth=1.3,this.ctx.stroke();const d=Math.atan2(r,a);e.x-=Math.cos(d)*.45,e.y-=Math.sin(d)*.45}e.x+=e.vx,e.y+=e.vy,(e.x<0||e.x>this.width)&&(e.vx*=-1),(e.y<0||e.y>this.height)&&(e.vy*=-1),this.ctx.beginPath(),this.ctx.arc(e.x,e.y,e.radius,0,Math.PI*2),this.ctx.fillStyle=`${e.color}${e.alpha})`,this.ctx.shadowBlur=8,this.ctx.shadowColor=`${e.color}0.8)`,this.ctx.fill(),this.ctx.shadowBlur=0}}}class S{constructor(){this.init()}init(){new k("cyber-canvas","mouse-glow"),this.renderContent(),this.setupEventListeners(),this.handleLoading(),this.initScrollToTop()}renderContent(){const i=document.querySelector(".hero-text h1"),t=document.querySelector(".hero-text p");i&&(i.innerHTML=c.name),t&&(t.textContent=c.titles.join(" | "));const n=document.querySelector(".about-text");n&&(n.innerHTML=c.about.map(a=>`<p>${a}</p>`).join("")),new b("skill-grid",c.skills).render(),g.renderProjects("projects-grid",c.projects),g.renderCertifications("certification-grid",c.certifications),g.renderExperience("experience-container",c.experience,c.organizations,c.education),this.renderContact()}renderContact(){const i=c.contact;document.getElementById("contact-address").textContent=i.address,document.getElementById("contact-phone").textContent=i.phone,document.getElementById("contact-email").textContent=i.email;const t=document.querySelector(".contact-map");t&&(t.src=i.mapEmbedUrl)}setupEventListeners(){const i=document.querySelector(".hamburger-menu"),t=document.getElementById("navList");i&&t&&(i.addEventListener("click",()=>{t.classList.toggle("active"),i.classList.toggle("active")}),document.querySelectorAll(".nav-link").forEach(n=>{n.addEventListener("click",()=>{t.classList.remove("active"),i.classList.remove("active")})})),document.querySelectorAll('a[href^="#"]').forEach(n=>{n.addEventListener("click",function(e){var s;e.preventDefault();const a=(s=this.getAttribute("href"))==null?void 0:s.substring(1);if(!a)return;const r=document.getElementById(a);if(r){const p=r.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:p,behavior:"smooth"})}})}),window.addEventListener("scroll",this.handleScroll.bind(this))}handleScroll(){const i=document.getElementById("navbar");window.scrollY>50?i==null||i.classList.add("scrolled"):i==null||i.classList.remove("scrolled");const t=document.querySelectorAll("section"),n=document.querySelectorAll(".nav-link");let e="";t.forEach(a=>{const r=a.offsetTop;window.scrollY>=r-150&&(e=a.getAttribute("id")||"")}),n.forEach(a=>{a.classList.remove("active"),a.getAttribute("href")===`#${e}`&&a.classList.add("active")})}handleLoading(){const i=document.getElementById("loading");i&&setTimeout(()=>{i.classList.add("hidden")},1e3)}initScrollToTop(){const i=document.getElementById("scrollTopBtn");i&&(window.addEventListener("scroll",()=>{window.scrollY>300?i.classList.add("visible"):i.classList.remove("visible")}),i.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}))}}document.addEventListener("DOMContentLoaded",()=>{new S});
