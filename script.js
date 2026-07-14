const firstCard = document.querySelector('.card');
if (firstCard) {
    firstCard.style.backgroundColor = '#f1f8e9'; 
}

const allCards = document.querySelectorAll('.card');
allCards.forEach(card => {
    card.style.borderColor = '#515076';
});

const googleButton = document.querySelector('.btn-google');
if (googleButton) {
    googleButton.addEventListener('click', () => {
        window.open('https://google.com', '_blank');
    });
}

console.log("JavaScript файл подключен!");

const mainTitle = document.querySelector('.catalog__title');
if (mainTitle) {
    mainTitle.addEventListener('mouseover', () => {
        console.log(mainTitle.textContent);
    });
}

const toggleButton = document.querySelector('.btn-toggle');
if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('btn-toggle_active');
    });
}
