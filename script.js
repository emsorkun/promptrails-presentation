/* PromptRails — Onboarding Roadmap Presentation
   Slide controller · English LTR */

const TEXTS = {
    prev: '←',
    next: '→',
    done: '✓'
};

class PresentationController {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.slide');
        this.totalSlides = this.slides.length;
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.slideCounter = document.getElementById('slideCounter');
        this.progress = document.getElementById('progress');
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.init();
    }

    init() {
        this.initSlidePositions();
        this.updateUI();
        this.attachEventListeners();
    }

    initSlidePositions() {
        this.slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev', 'next');
            if (index < this.currentSlide) {
                slide.classList.add('prev');
            } else if (index > this.currentSlide) {
                slide.classList.add('next');
            } else {
                slide.classList.add('active');
            }
        });
    }

    attachEventListeners() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                this.prevSlide();
            } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
                e.preventDefault();
                this.nextSlide();
            } else if (e.key === 'Home') {
                this.goToSlide(0);
            } else if (e.key === 'End') {
                this.goToSlide(this.totalSlides - 1);
            }
        });

        /* Touch / swipe */
        const container = document.querySelector('.presentation-container');
        container.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        container.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        }, { passive: true });

        /* Mouse wheel */
        let wheelTimeout;
        document.addEventListener('wheel', (e) => {
            if (e.target?.closest?.('.content')) return;
            clearTimeout(wheelTimeout);
            wheelTimeout = setTimeout(() => {
                if (e.deltaY > 0) this.nextSlide();
                else if (e.deltaY < 0) this.prevSlide();
            }, 100);
        }, { passive: true });
    }

    handleSwipe() {
        const threshold = 50;
        const diff = this.touchStartX - this.touchEndX;
        if (Math.abs(diff) > threshold) {
            if (diff > 0) this.nextSlide();
            else this.prevSlide();
        }
    }

    goToSlide(index) {
        if (index < 0 || index >= this.totalSlides || index === this.currentSlide) return;

        const direction = index > this.currentSlide ? 'forward' : 'backward';
        const leavingSlide = this.slides[this.currentSlide];
        const enteringSlide = this.slides[index];

        leavingSlide.classList.remove('active');
        leavingSlide.classList.add(direction === 'forward' ? 'prev' : 'next');

        enteringSlide.classList.remove('prev', 'next');
        enteringSlide.classList.add('active');

        this.currentSlide = index;
        this.updateUI();
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) this.goToSlide(this.currentSlide + 1);
    }

    prevSlide() {
        if (this.currentSlide > 0) this.goToSlide(this.currentSlide - 1);
    }

    updateUI() {
        const n = this.currentSlide + 1;
        const total = this.totalSlides;
        this.slideCounter.textContent = `${n} / ${total}`;
        this.prevBtn.disabled = this.currentSlide === 0;
        this.nextBtn.disabled = this.currentSlide === total - 1;
        this.progress.style.width = `${(n / total) * 100}%`;
        this.prevBtn.textContent = TEXTS.prev;
        this.nextBtn.textContent = this.currentSlide === total - 1 ? TEXTS.done : TEXTS.next;
    }
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
    new PresentationController();
});

/* Prevent double-tap zoom on touch devices */
let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) e.preventDefault();
    lastTouchEnd = now;
}, false);
