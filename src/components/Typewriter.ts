export class Typewriter {
    private element: HTMLElement;
    private words: string[];
    private wordIndex = 0;
    private charIndex = 0;
    private isDeleting = false;
    private typingSpeed = 90;
    private deleteSpeed = 45;
    private delayBetweenWords = 2200;

    constructor(element: HTMLElement, words: string[]) {
        this.element = element;
        this.words = words;
        this.start();
    }

    private start(): void {
        this.type();
    }

    private type = (): void => {
        const currentWord = this.words[this.wordIndex];

        if (this.isDeleting) {
            this.charIndex--;
            this.element.innerHTML = `<span class="typewriter-prefix">> </span><span class="typewriter-text">${currentWord.substring(0, this.charIndex)}</span><span class="typewriter-cursor">_</span>`;
        } else {
            this.charIndex++;
            this.element.innerHTML = `<span class="typewriter-prefix">> </span><span class="typewriter-text">${currentWord.substring(0, this.charIndex)}</span><span class="typewriter-cursor">_</span>`;
        }

        let speed = this.isDeleting ? this.deleteSpeed : this.typingSpeed;

        if (!this.isDeleting && this.charIndex === currentWord.length) {
            speed = this.delayBetweenWords;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.wordIndex = (this.wordIndex + 1) % this.words.length;
            speed = 400;
        }

        setTimeout(this.type, speed);
    };
}
