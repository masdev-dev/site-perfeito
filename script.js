document.getElementById('lead-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;
    const statusDiv = document.getElementById('form-status');

    statusDiv.innerHTML = '🔄 Preparando contato...';

    const texto = `*NOVO LEAD - SITE CORPORATIVO*%0A%0A*Nome:* ${nome}%0A*E-mail:* ${email}%0A*WhatsApp:* ${telefone}%0A*Mensagem:* ${mensagem}%0A%0A*Origem:* site-perfeito (Matheus Ribeiro)`;
    const numeroWhatsApp = '5511999999999'; // Substitua pelo seu número real com DDD
    const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;

    window.open(url, '_blank');
    statusDiv.innerHTML = '✅ Redirecionando para o WhatsApp... Em breve entraremos em contato.';
    
    // Limpa o formulário (opcional)
    document.getElementById('lead-form').reset();
    setTimeout(() => { statusDiv.innerHTML = ''; }, 5000);
});

// Botão flutuante do WhatsApp também redireciona
document.getElementById('whatsapp-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const texto = `Olá! Gostaria de saber mais sobre os serviços de engenharia e segurança.`;
    const url = `https://wa.me/5511999999999?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
});
