export class Toast {
    private static container: HTMLElement | null = null;

    private static getContainer(): HTMLElement {
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.id = 'cyber-toast-container';
            this.container.className = 'cyber-toast-container';
            document.body.appendChild(this.container);
        }
        return this.container;
    }

    public static show(message: string, type: 'success' | 'info' | 'alert' = 'success'): void {
        const container = this.getContainer();
        const toast = document.createElement('div');
        toast.className = `cyber-toast ${type}`;

        const icon = type === 'success' ? 'fa-check-circle' : type === 'alert' ? 'fa-exclamation-triangle' : 'fa-info-circle';

        toast.innerHTML = `
            <div class="toast-prefix">>_</div>
            <i class="fas ${icon} toast-icon"></i>
            <div class="toast-message">${message}</div>
        `;

        container.appendChild(toast);

        // Remove after 3.5 seconds
        setTimeout(() => {
            toast.classList.add('fade-out');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3200);
    }
}
