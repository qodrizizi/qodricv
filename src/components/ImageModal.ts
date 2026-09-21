export class ImageModal {
    private static modalElement: HTMLElement | null = null;
    private static imgElement: HTMLImageElement | null = null;
    private static titleElement: HTMLElement | null = null;
    private static subtitleElement: HTMLElement | null = null;
    private static isInitialized = false;

    public static init(): void {
        if (this.isInitialized) return;

        const modal = document.createElement('div');
        modal.id = 'cyber-image-modal';
        modal.className = 'cyber-image-modal';
        modal.innerHTML = `
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
        `;

        document.body.appendChild(modal);

        this.modalElement = modal;
        this.imgElement = modal.querySelector('#modal-img');
        this.titleElement = modal.querySelector('#modal-title');
        this.subtitleElement = modal.querySelector('#modal-subtitle');

        const closeBtn = modal.querySelector('#modal-close-btn');
        const backdrop = modal.querySelector('.modal-backdrop');

        closeBtn?.addEventListener('click', () => this.close());
        backdrop?.addEventListener('click', () => this.close());

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modalElement?.classList.contains('active')) {
                this.close();
            }
        });

        this.isInitialized = true;
    }

    public static open(imgSrc: string, title = 'IMAGE VIEWER', subtitle = ''): void {
        this.init();

        if (this.imgElement) this.imgElement.src = imgSrc;
        if (this.titleElement) this.titleElement.textContent = title;
        if (this.subtitleElement) this.subtitleElement.textContent = subtitle ? ` // ${subtitle}` : '';

        this.modalElement?.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    public static close(): void {
        this.modalElement?.classList.remove('active');
        document.body.style.overflow = '';
    }
}
