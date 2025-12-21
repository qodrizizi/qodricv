export interface Skill {
    name: string;
    icon: string;
    level: number;
    category: 'software-engineer' | 'sys-admin' | 'forensics';
}

export interface Certification {
    name: string;
    issuer: string;
    image: string;
    icon: string;
    description: string;
}

export interface Experience {
    role: string;
    company: string;
    period: string;
    logo: string;
    description: string;
    type: 'work' | 'education' | 'community';
}

export interface ContactInfo {
    address: string;
    phone: string;
    email: string;
    linkedin: string;
    mapEmbedUrl: string;
}

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    demoUrl?: string; // Optional
    repoUrl?: string; // Optional
}

export interface Profile {
    name: string;
    titles: string[];
    about: string[];
    skills: Skill[];
    certifications: Certification[];
    experience: Experience[];
    projects: Project[];
    contact: ContactInfo;
}
