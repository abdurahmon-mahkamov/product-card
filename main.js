import './sideEffect.js';
import { Modal } from './Modal.js';
import { Form } from './Form.js';
import { Car, ElectricCar } from './Car.js';

const myModal = new Modal('resultModal');
const myForm = new Form('userForm');

const defaultCar = new Car('Toyota', 'Camry', 2020);
const tesla = new ElectricCar('Tesla', 'Model 3', 2023, 75);

console.log(defaultCar.getInfo());
console.log(tesla.getInfo());
tesla.chargeBattery();

myForm.formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    if (myForm.isValid()) {
        const results = myForm.getResults();
        
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <p><strong>Имя:</strong> ${results.username}</p>
            <p><strong>Email:</strong> ${results.email}</p>
        `;
        
        myModal.open();
        myForm.reset();
    } else {
        alert('Заполните все поля корректно');
    }
});