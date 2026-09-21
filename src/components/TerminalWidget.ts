import { profileData } from '../data/content';
import { Toast } from './Toast';

export class TerminalWidget {
    private isOpen = false;
    private outputContainer: HTMLElement | null = null;
    private inputElement: HTMLInputElement | null = null;
    private history: string[] = [];
    private historyIndex = -1;

    constructor() {
        this.render();
        this.bindEvents();
    }

    private render(): void {
        const widget = document.createElement('div');
        widget.id = 'cyber-terminal-widget';
        widget.className = 'cyber-terminal-widget';

        widget.innerHTML = `
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
        `;

        document.body.appendChild(widget);
        this.outputContainer = widget.querySelector('#terminal-output');
        this.inputElement = widget.querySelector('#terminal-cli-input');
    }

    private bindEvents(): void {
        const launcherBtn = document.getElementById('terminal-launcher-btn');
        const closeBtn = document.getElementById('terminal-close-btn');

        launcherBtn?.addEventListener('click', () => {
            this.toggleTerminal();
        });

        closeBtn?.addEventListener('click', () => {
            this.closeTerminal();
        });

        this.inputElement?.addEventListener('keydown', (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                const command = this.inputElement?.value.trim() || '';
                if (command) {
                    this.history.push(command);
                    this.historyIndex = this.history.length;
                    this.executeCommand(command);
                    if (this.inputElement) this.inputElement.value = '';
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (this.historyIndex > 0) {
                    this.historyIndex--;
                    if (this.inputElement) this.inputElement.value = this.history[this.historyIndex];
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (this.historyIndex < this.history.length - 1) {
                    this.historyIndex++;
                    if (this.inputElement) this.inputElement.value = this.history[this.historyIndex];
                } else {
                    this.historyIndex = this.history.length;
                    if (this.inputElement) this.inputElement.value = '';
                }
            }
        });
    }

    public toggleTerminal(): void {
        if (this.isOpen) {
            this.closeTerminal();
        } else {
            this.openTerminal();
        }
    }

    public openTerminal(): void {
        const modal = document.getElementById('terminal-modal');
        modal?.classList.add('active');
        this.isOpen = true;
        setTimeout(() => this.inputElement?.focus(), 100);
    }

    public closeTerminal(): void {
        const modal = document.getElementById('terminal-modal');
        modal?.classList.remove('active');
        this.isOpen = false;
    }

    private appendLine(html: string): void {
        if (!this.outputContainer) return;
        const line = document.createElement('div');
        line.className = 'term-line';
        line.innerHTML = html;
        this.outputContainer.appendChild(line);
        this.outputContainer.scrollTop = this.outputContainer.scrollHeight;
    }

    private executeCommand(cmd: string): void {
        this.appendLine(`<span class="term-prompt">root@qodri:~#</span> <span class="term-user-cmd">${this.escapeHtml(cmd)}</span>`);

        const cleanCmd = cmd.toLowerCase().trim();

        switch (cleanCmd) {
            case 'help':
                this.appendLine(`
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
                `);
                break;

            case 'whoami':
                this.appendLine(`
                    <div class="term-box">
                        <span class="term-cyan">${profileData.name}</span><br>
                        <span class="term-dim">Titles:</span> ${profileData.titles.join(' | ')}<br>
                        <span class="term-dim">Specialization:</span> Digital Forensic Analysis, High-Security Web Dev, Linux Hardening.
                    </div>
                `);
                break;

            case 'skills':
                this.appendLine(`
                    <div class="term-box">
                        <span class="term-cyan">TECHNICAL COMPETENCE:</span><br>
                        ${profileData.skills.map(s => `• <span class="term-green">${s.name}</span>: [${s.level}% proficiency] (${s.category})`).join('<br>')}
                    </div>
                `);
                break;

            case 'projects':
                this.appendLine(`
                    <div class="term-box">
                        <span class="term-cyan">12 PRODUCTION PROJECTS:</span><br>
                        ${profileData.projects.map((p, idx) => `${idx + 1}. <span class="term-green">${p.title}</span> - ${p.technologies.join(', ')} ${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank" class="term-link">[VISIT]</a>` : ''}`).join('<br>')}
                    </div>
                `);
                break;

            case 'edu':
            case 'education':
                if (profileData.education && profileData.education.length > 0) {
                    const edu = profileData.education[0];
                    this.appendLine(`
                        <div class="term-box">
                            <span class="term-cyan">${edu.degree}</span><br>
                            <span class="term-dim">Institution:</span> ${edu.institution}<br>
                            <span class="term-dim">Period:</span> ${edu.period}<br>
                            <span class="term-dim">GPA:</span> <span class="term-green">${edu.gpa} (Distinction/Cum Laude)</span>
                        </div>
                    `);
                }
                break;

            case 'certs':
            case 'certifications':
                this.appendLine(`
                    <div class="term-box">
                        <span class="term-cyan">VERIFIED CREDENTIALS:</span><br>
                        ${profileData.certifications.map(c => `• <span class="term-green">${c.name}</span> by ${c.issuer}`).join('<br>')}
                    </div>
                `);
                break;

            case 'contact':
                this.appendLine(`
                    <div class="term-box">
                        <span class="term-cyan">COMMUNICATION CHANNELS:</span><br>
                        • Email: <span class="term-green">${profileData.contact.email}</span><br>
                        • Phone: <span class="term-green">${profileData.contact.phone}</span><br>
                        • LinkedIn: <a href="${profileData.contact.linkedin}" target="_blank" class="term-link">[PROFILE]</a><br>
                        • Location: ${profileData.contact.address}
                    </div>
                `);
                break;

            case 'sudo hire':
            case 'hire':
            case 'sudo hire me':
                this.appendLine(`
                    <div class="term-box">
                        <span class="term-green">[ACCESS GRANTED]</span> Initializing secure recruiter dispatch...<br>
                        Redirecting to WhatsApp (+62 812 6012 1852)...
                    </div>
                `);
                Toast.show('REDIRECTING TO WHATSAPP DISPATCH...', 'success');
                setTimeout(() => {
                    window.open(`https://wa.me/6281260121852?text=Halo%20Ahmad%20Al%20Qodri,%20saya%20tertarik%20dengan%20portofolio%20Anda.`, '_blank');
                }, 1000);
                break;

            case 'clear':
            case 'cls':
                if (this.outputContainer) this.outputContainer.innerHTML = '';
                break;

            case 'exit':
            case 'quit':
                this.closeTerminal();
                break;

            default:
                this.appendLine(`<span class="term-alert">bash: command not found: ${this.escapeHtml(cmd)}. Type <span class="term-green">'help'</span> for list of commands.</span>`);
                break;
        }
    }

    private escapeHtml(str: string): string {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }
}
