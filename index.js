const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})


Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});


// Función para abrir y cerrar el menú
function toggleMenu(event, menuId) {
    event.preventDefault();
    event.stopPropagation();
    
    // Lista de todos los menús
    var menus = ['marcador-menu', 'gmail-menu', 'trabajos-menu', 'marketing-menu', 'comercio-menu'];
    
    // Cerrar todos los menús excepto el que se quiere abrir
    menus.forEach(function(id) {
        var menu = document.getElementById(id);
        if (id === menuId) {
            menu.classList.toggle('open');
        } else {
            menu.classList.remove('open');
        }
    });
}

// Añadir eventos de click a los enlaces de los menús
document.getElementById('marcador-link').addEventListener('click', function(event) {
    toggleMenu(event, 'marcador-menu');
});

document.getElementById('gmail-link').addEventListener('click', function(event) {
    toggleMenu(event, 'gmail-menu');
});

document.getElementById('trabajos-link').addEventListener('click', function(event) {
    toggleMenu(event, 'trabajos-menu');
});

document.getElementById('marketing-link').addEventListener('click', function(event) {
    toggleMenu(event, 'marketing-menu');
});

document.getElementById('comercio-link').addEventListener('click', function(event) {
    toggleMenu(event, 'comercio-menu');
});

// Para cerrar los menús al hacer clic fuera de ellos
document.addEventListener('click', function(event) {
    var menus = ['marcador-menu', 'gmail-menu', 'trabajos-menu', 'marketing-menu', 'comercio-menu'];
    menus.forEach(function(id) {
        var menu = document.getElementById(id);
        var link = document.getElementById(id.split('-')[0] + '-link');
        if (!menu.contains(event.target) && !link.contains(event.target)) {
            menu.classList.remove('open');
        }
    });
});

// Evitar que el clic dentro de los menús cierre los menús
document.getElementById('marcador-menu').addEventListener('click', function(event) {
    event.stopPropagation();
});
document.getElementById('gmail-menu').addEventListener('click', function(event) {
    event.stopPropagation();
});
document.getElementById('trabajos-menu').addEventListener('click', function(event) {
    event.stopPropagation();
});
document.getElementById('marketing-menu').addEventListener('click', function(event) {
    event.stopPropagation();
});
document.getElementById('comercio-menu').addEventListener('click', function(event) {
    event.stopPropagation();
});
