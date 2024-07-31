function showSection(sectionId) {
    const sections = document.querySelectorAll('.chat-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    const chatTitle = document.getElementById('chat-title');
    if (sectionId === 'whatsapp') {
        chatTitle.textContent = 'WhatsApp';
    } else if (sectionId === 'facebook') {
        chatTitle.textContent = 'Facebook Messenger';
    } else if (sectionId === 'instagram') {
        chatTitle.textContent = 'Instagram';
    }
}

// Puedes añadir más funcionalidad aquí, como la integración de chatbots usando las APIs correspondientes.
