export class Modal {
    constructor(modalId) {
        this.modalElement = document.getElementById(modalId);
        this.closeBtn = this.modalElement.querySelector('.modal-close');
        
        this.closeBtn.addEventListener('click', () => this.close());
        
        this.modalElement.addEventListener('click', (e) => {
            if (e.target === this.modalElement) {
                this.close();
            }
        });
    }

    open() {
        this.modalElement.classList.add('active');
    }

    close() {
        this.modalElement.classList.remove('active');
    }

    isOpen() {
        return this.modalElement.classList.contains('active');
    }
}