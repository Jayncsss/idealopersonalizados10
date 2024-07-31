const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});



document.addEventListener('DOMContentLoaded', () => {
  const signUpButton = document.getElementById('sign-up-btn');
  const signInButton = document.getElementById('sign-in-btn');
  const container = document.querySelector('.container');

  signUpButton.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
  });

  signInButton.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
  });

  // Registro de usuario
  const signUpForm = document.querySelector('.sign-up-form');
  signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = signUpForm.querySelector('input[type="text"]').value;
    const email = signUpForm.querySelector('input[type="email"]').value;
    const password = signUpForm.querySelector('input[type="password"]').value;

    if (username && email && password) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push({ username, email, password });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      signUpForm.reset();
    } else {
      alert('Por favor, completa todos los campos.');
    }
  });

  // Inicio de sesión de usuario
  const signInForm = document.querySelector('.sign-in-form');
  signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = signInForm.querySelector('input[type="text"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      alert('Inicio de sesión exitoso.');
      window.location.href = 'index.html';
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  });
});
