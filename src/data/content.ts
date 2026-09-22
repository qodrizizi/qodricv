import { Profile } from '../types';

export const profileData: Profile = {
    name: "AHMAD AL QODRI AZIZI DALIMUNTHE",
    titles: [
        "Software Engineer",
        "System Administrator",
        "Digital Forensic Incident Response (DFIR)"
    ],
    about: [
        "I am a multi-disciplinary technology professional correcting the balance between building secure systems and investigating their breaches. My expertise spans the full lifecycle of digital infrastructure—from architecting robust software solutions to managing complex server environments and conducting forensic investigations when security incidents occur.",
        "As a Software Engineer, I build scalable applications with a security-first mindset, utilizing frameworks like CodeIgniter 4, Laravel and modern TypeScript. My background in System Administration ensures these applications run on optimized, hardened infrastructure (Linux/Debian).",
        "In the realm of Digital Forensics, I apply analytical rigor to uncover digital evidence, supported by my deep understanding of how systems are built and maintained. This unique convergence of skills allows me to not just solve problems, but anticipate and prevent them."
    ],
    skills: [
        // Software Engineering
        { name: "TypeScript", icon: "fab fa-js", level: 85, category: "software-engineer" },
        { name: "PHP", icon: "fab fa-php", level: 88, category: "software-engineer" },
        { name: "CodeIgniter 4", icon: "fas fa-fire", level: 90, category: "software-engineer" },
        { name: "Laravel", icon: "fab fa-laravel", level: 95, category: "software-engineer" },
        { name: "UI/UX Design", icon: "fas fa-paint-brush", level: 85, category: "software-engineer" },

        // System Admin
        { name: "Linux (Debian/Ubuntu)", icon: "fab fa-linux", level: 92, category: "sys-admin" },
        { name: "Network Admin", icon: "fas fa-network-wired", level: 85, category: "sys-admin" },
        { name: "Database Mgmt", icon: "fas fa-database", level: 88, category: "sys-admin" },
        { name: "IoT Engineering", icon: "fas fa-microchip", level: 85, category: "sys-admin" },

        // Forensics
        { name: "Digital Investigation", icon: "fas fa-search", level: 90, category: "forensics" },
        { name: "Incident Response", icon: "fas fa-shield-alt", level: 88, category: "forensics" },
        { name: "CSI Linux", icon: "fas fa-user-secret", level: 90, category: "forensics" },
        { name: "Computer Forensics", icon: "fas fa-laptop", level: 90, category: "forensics" }
    ],
    certifications: [
        {
            name: "Digital Forensic",
            issuer: "PT Analis Forensic Digital",
            image: "/img/certification1.png",
            icon: "fas fa-certificate",
            description: "Expertise in Digital Forensic Analysis and Investigation."
        },
        {
            name: "CSIL-CI",
            issuer: "CSI-Linux",
            image: "/img/certification3.jpg",
            icon: "fas fa-shield-alt",
            description: "Certified Computer Investigator by CSI Linux."
        },
        {
            name: "Junior Web Developer",
            issuer: "BNSP",
            image: "/img/web.jpg",
            icon: "fas fa-code",
            description: "National professional certification for Front-End and Back-End development."
        },
        {
            name: "Junior Network Administrator",
            issuer: "BNSP",
            image: "/img/network.jpg",
            icon: "fas fa-network-wired",
            description: "National certification for Network Topology and IP Management."
        },
        {
            name: "IT and Database",
            issuer: "Bakrie Center Foundation",
            image: "/img/certification2.jpg",
            icon: "fas fa-database",
            description: "Internship program certification focusing on Database Management."
        },
        {
            name: "Operator Komputer Madya",
            issuer: "BNSP",
            image: "/img/komputer.jpg",
            icon: "fas fa-desktop",
            description: "National certification for office competence (Word, Excel, PowerPoint)."
        }
    ],
    experience: [
        {
            role: "Software Engineer / IT Developer",
            company: "Dinas Kominfostan Deli Serdang",
            period: "Januari 2026 - Sekarang",
            logo: "/img/kominfo.jpg",
            type: "work",
            description: "Developed and maintained regional government information systems, web applications, and digital services to support e-government initiatives in Deli Serdang."
        },
        {
            role: "Software Engineer",
            company: "PT Willy Dwi Perkasa",
            period: "Desember 2025 - Sekarang",
            logo: "/img/wdp.png",
            type: "work",
            description: "Developed and maintained scalable software solutions, web applications, and backend systems."
        },
        {
            role: "Programmer",
            company: "Telkomsel",
            period: "Juni 2025 - September 2025",
            logo: "/img/telkomsel.png",
            type: "work",
            description: "Developed a comprehensive system using python, implementing secure authentication and optimizing performance."
        },
        {
            role: "Web Developer",
            company: "Jeumpa SIKMRS",
            period: "Januari 2024 - December 2024",
            logo: "/img/sikmrs.jpg",
            type: "work",
            description: "Developed a comprehensive hospital management system using CodeIgniter 4, implementing secure authentication and optimizing performance."
        },
        {
            role: "IT and Database Division",
            company: "Bakrie Center Foundation",
            period: "Aug 2023 - Dec 2023",
            logo: "/img/BCF.png",
            type: "work",
            description: "Developed a website and database to accelerate TB elimination by 2030. Implemented robust data management systems."
        }
    ],
    education: [
        {
            degree: "Bachelor Degree in Information Technology (S1 Teknologi Informasi)",
            institution: "Universitas Muhammadiyah Sumatera Utara (UMSU)",
            period: "2021 - 2025",
            logo: "/img/umsu.png",
            gpa: "3.88 / 4.00",
            description: "Graduated with a Bachelor's Degree in Information Technology achieving a GPA of 3.88/4.00 (Distinction/Cum Laude). Specialized in Software Engineering, Network Administration, and Digital Forensics."
        }
    ],
    organizations: [
        {
            role: "Leader of Cyber Security Community",
            organization: "CSC UMSU",
            period: "2023",
            logo: "/img/csc.png",
            description: "Led the Cyber Security Community, organizing activities to increase knowledge and skills in cybersecurity."
        },
        {
            role: "Education and Research Division",
            organization: "HIMATIF",
            period: "2023",
            logo: "/img/himatif.jpg",
            description: "Conducted studies and provided solutions for various IT-related challenges in the student association."
        }
    ],
    projects: [
        {
            title: "Jeumpa SIKMRS",
            description: "Sistem Informasi Rekam Medis Rumah Sakit komprehensif dengan role-based access control, integrasi modul medis pasien, dan keamanan data.",
            technologies: ["CodeIgniter 4", "PHP", "MySQL", "Bootstrap", "jQuery"],
            imageUrl: "/img/sikmrs.jpg",
            category: "health"
        },
        {
            title: "WDP Finance",
            description: "Sistem informasi manajemen keuangan dan akuntansi perusahaan untuk pencatatan transaksi, invoicing, dan laporan kas operasional.",
            technologies: ["Laravel", "PHP", "MySQL", "TailwindCSS", "JavaScript"],
            imageUrl: "/img/webfinance.png",
            category: "enterprise"
        },
        {
            title: "Web Dinaskominfostan Deliserdang",
            description: "Portal resmi Dinas Komunikasi, Informatika, Statistik dan Persandian Kabupaten Deli Serdang untuk layanan informasi publik dan e-government.",
            technologies: ["Laravel", "PHP", "PostgreSQL", "Bootstrap", "REST API"],
            imageUrl: "/img/kominfo.png",
            category: "government",
            demoUrl: "https://dinaskominfostan-ds.deliserdangkab.go.id/"
        },
        {
            title: "Pusaka Deli",
            description: "Platform sistem informasi layanan terpadu kebudayaan dan arsip daerah Kabupaten Deli Serdang.",
            technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
            imageUrl: "/img/pusaka.png",
            category: "government",
            demoUrl: "https://pusakadeli.deliserdangkab.go.id/"
        },
        {
            title: "SI- Informan",
            description: "Sistem Informasi dan Pelayanan Perizinan DPMPTSP Kabupaten Deli Serdang untuk transparansi dan kemudahan layanan masyarakat.",
            technologies: ["Laravel", "PHP", "PostgreSQL", "JavaScript", "Bootstrap"],
            imageUrl: "/img/siinforman.png",
            category: "government",
            demoUrl: "https://dpmptsp.deliserdangkab.go.id/si-informan/"
        },
        {
            title: "Website Setwan Deliserdang",
            description: "Portal resmi Sekretariat DPRD Kabupaten Deli Serdang untuk transparansi aspirasi publik dan dokumentasi kegiatan kedewanan.",
            technologies: ["Laravel", "PHP", "PostgreSQL", "Bootstrap", "JavaScript"],
            imageUrl: "/img/setwan.png",
            category: "government",
            demoUrl: "https://setwan.deliserdangkab.go.id/"
        },
        {
            title: "Website Setdakab Deliserdang",
            description: "Website resmi Sekretariat Daerah Kabupaten Deli Serdang yang memuat regulasi daerah, profil birokrasi, dan berita pemerintahan.",
            technologies: ["Laravel", "PHP", "PostgreSQL", "Bootstrap", "JavaScript"],
            imageUrl: "/img/setdakab.png",
            category: "government",
            demoUrl: "https://setdakab.deliserdangkab.go.id/"
        },
        {
            title: "DAKL",
            description: "Sistem Data Analisis Kebutuhan Lembaga / Pendidikan pada Dinas Pendidikan Kabupaten Deli Serdang berbasis web.",
            technologies: ["Laravel", "PHP", "PostgreSQL", "Chart.js", "Bootstrap"],
            imageUrl: "/img/dakl.png",
            category: "government",
            demoUrl: "https://dakl-pendidikan.deliserdangkab.go.id/"
        },
        {
            title: "Website Perpustakaan & Arsip",
            description: "Sistem manajemen katalog buku digital, kearsipan daerah, dan otomasi peminjaman literatur Dinas Perpustakaan & Arsip.",
            technologies: ["Laravel", "PHP", "PostgreSQL", "JavaScript", "Bootstrap"],
            imageUrl: "/img/kominfo.png",
            category: "government"
        },
        {
            title: "SiPOSTES",
            description: "Sistem Informasi Pos Pelayanan Terpadu Elektronik untuk optimalisasi pelaporan data dan monitoring kesehatan masyarakat.",
            technologies: ["Laravel", "PHP", "PostgreSQL", "REST API", "Bootstrap"],
            imageUrl: "/img/sipostes.png",
            category: "government",
            demoUrl: "https://sipostes.deliserdangkab.go.id/"
        },
        {
            title: "API Website Sidisko",
            description: "Backend RESTful API dan mikroservis data untuk integrasi aplikasi Dinas Koperasi dan UKM (Sidisko) Deli Serdang.",
            technologies: ["Laravel", "PHP", "PostgreSQL", "REST API", "JWT"],
            imageUrl: "/img/kominfo.jpg",
            category: "backend"
        },
        {
            title: "Website Project Management Deliserdang",
            description: "Sistem terpusat manajemen proyek dan tracking progres tugas teknis serta aplikasi di lingkungan Pemkab Deli Serdang.",
            technologies: ["Laravel", "PHP", "PostgreSQL", "TailwindCSS", "JavaScript"],
            imageUrl: "/img/pm.png",
            category: "government",
            demoUrl: "https://pm.deliserdangkab.go.id"
        }
    ],
    contact: {
        address: "Medan, Sumatera Utara, Indonesia",
        phone: "+62 812 6012 1852",
        email: "ahmadalqodridalimunthe@gmail.com",
        linkedin: "https://www.linkedin.com/in/ahmad-al-qodri-azizi-dalimunthe-8628072b8",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.9114335103145!2d98.66453187473243!3d3.6077428963663696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131c4dfc6c409%3A0xa447d2b1d5c2d53d!2sKhaidir%20Florist!5e0!3m2!1sid!2sid!4v1739291953030!5m2!1sid!2sid"
    }
};
