import { Profile } from '../types';

export const profileData: Profile = {
    name: "AHMAD AL QODRI AZIZI DALIMUNTHE",
    titles: [
        "Software Engineer",
        "System Administrator",
        "Digital Forensic Investigator"
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
            image: "/assets/img/certification1.png",
            icon: "fas fa-certificate",
            description: "Expertise in Digital Forensic Analysis and Investigation."
        },
        {
            name: "CSIL-CI",
            issuer: "CSI-Linux",
            image: "/assets/img/certification3.jpg",
            icon: "fas fa-shield-alt",
            description: "Certified Computer Investigator by CSI Linux."
        },
        {
            name: "Junior Web Developer",
            issuer: "BNSP",
            image: "/assets/img/web.jpg",
            icon: "fas fa-code",
            description: "National professional certification for Front-End and Back-End development."
        },
        {
            name: "Junior Network Administrator",
            issuer: "BNSP",
            image: "/assets/img/network.jpg",
            icon: "fas fa-network-wired",
            description: "National certification for Network Topology and IP Management."
        },
        {
            name: "IT and Database",
            issuer: "Bakrie Center Foundation",
            image: "/assets/img/certification2.jpg",
            icon: "fas fa-database",
            description: "Internship program certification focusing on Database Management."
        },
        {
            name: "Operator Komputer Madya",
            issuer: "BNSP",
            image: "/assets/img/komputer.jpg",
            icon: "fas fa-desktop",
            description: "National certification for office competence (Word, Excel, PowerPoint)."
        }
    ],
    experience: [
        {
            role: "Web Developer",
            company: "Jeumpa SIKMRS",
            period: "2024",
            logo: "/assets/img/sikmrs.jpg",
            type: "work",
            description: "Developed a comprehensive hospital management system using CodeIgniter 4, implementing secure authentication and optimizing performance."
        },
        {
            role: "IT and Database Division",
            company: "Bakrie Center Foundation",
            period: "Aug 2023 - Dec 2023",
            logo: "/assets/img/BCF.png",
            type: "work",
            description: "Developed a website and database to accelerate TB elimination by 2030. Implemented robust data management systems."
        },
        {
            role: "Leader of Cyber Security Community",
            company: "CSC UMSU",
            period: "2023",
            logo: "/assets/img/csc.png",
            type: "community",
            description: "Led the Cyber Security Community, organizing activities to increase knowledge and skills in cybersecurity."
        },
        {
            role: "Education and Research Division",
            company: "HIMATIF",
            period: "2023",
            logo: "/assets/img/himatif.jpg",
            type: "community",
            description: "Conducted studies and provided solutions for various IT-related challenges in the student association."
        }
    ],
    projects: [
        {
            title: "Secure Hospital System",
            description: "A comprehensive hospital management system with role-based access control and encrypted patient data storage.",
            technologies: ["CodeIgniter 4", "MySQL", "Bootstrap", "jQuery"],
            imageUrl: "https://via.placeholder.com/600x400/161b22/58a6ff?text=Hospital+System",
            demoUrl: "#",
            repoUrl: "#"
        },
        {
            title: "Digital Forensics Toolkit",
            description: "Automated script collection for initial evidence gathering on Linux systems using Python and Bash.",
            technologies: ["Python", "Bash", "Linux"],
            imageUrl: "https://via.placeholder.com/600x400/161b22/238636?text=Forensics+Tool",
            repoUrl: "#"
        },
        {
            title: "Network Monitor Dashboard",
            description: "Real-time network traffic monitoring dashboard using IoT sensors and a web interface.",
            technologies: ["Node.js", "Socket.io", "React", "Raspberry Pi"],
            imageUrl: "https://via.placeholder.com/600x400/161b22/f85149?text=Network+Monitor",
            demoUrl: "#"
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
