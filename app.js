const containerEl = document.getElementById('container');
const leftEl = document.querySelector('.left-content');
const rightEl = document.querySelector('.right');

const emailUserEl = document.getElementById('user-email');
const invalidEmailEl = document.querySelector('.invalid-email');
const emailInput = document.getElementById('email');
const submitBtn = document.querySelector('.submit-btn');

const successMessageEl = document.querySelector('.success-message');
const dismissBtn = document.querySelector('.dismiss-btn');

function formSuccess() {
    successMessageEl.classList.add('active');
    containerEl.style.visibility = 'hidden';
    leftEl.style.display = 'none';
    rightEl.style.display = 'none';
}

function emailValidation(email) {
    const reGex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return reGex.test(email.toLowerCase());
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (emailValidation(email)) {
        formSuccess();
        emailUserEl.innerText = email;
        emailInput.value = '';

        invalidEmailEl.classList.remove('active');
        emailInput.classList.remove('invalid');
    } else {
        invalidEmailEl.classList.add('active');
        emailInput.classList.add('invalid');
    }
});

dismissBtn.addEventListener('click', () => {
    successMessageEl.classList.remove('active'); // Oculta el mensaje de éxito
    containerEl.style.visibility = 'visible'; // Muestra el contenedor principal
    leftEl.style.display = 'block'; // Restaura el contenido izquierdo
    rightEl.style.display = 'block'; // Restaura el contenido derecho
});
