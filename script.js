// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Atualiza a URL sem recarregar a página
        if(history.pushState) {
            history.pushState(null, null, this.getAttribute('href'));
        }
    });
});

// Botão do WhatsApp
const whatsappBtn = document.createElement('a');
whatsappBtn.href = "https://wa.me/55SEUNUMERO";
whatsappBtn.className = 'whatsapp-btn';
whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
whatsappBtn.target = "_blank";
document.body.appendChild(whatsappBtn);

// Adiciona hover effect ao botão do WhatsApp
whatsappBtn.addEventListener('mouseenter', () => {
    whatsappBtn.style.transform = 'scale(1.1)';
});
whatsappBtn.addEventListener('mouseleave', () => {
    whatsappBtn.style.transform = 'scale(1)';
});

// Opcional: Menu mobile (precisa adicionar CSS correspondente)
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.className = 'mobile-menu-btn';
mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('nav').prepend(mobileMenuBtn);

mobileMenuBtn.addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('show');
});
