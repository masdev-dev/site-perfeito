document.getElementById('lead-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;
    const statusDiv = document.getElementById('form-status');

    statusDiv.innerHTML = '🔍 Enviando para análise de elegibilidade...';

    const texto = `*NOVO LEAD - ORION GROUP (LISTA DE ESPERA)*%0A%0A*Nome:* ${nome}%0A*E-mail:* ${email}%0A*WhatsApp:* ${telefone}%0A*Mensagem:* ${mensagem}%0A%0A*Solicita análise de perfil para projetos exclusivos*`;
    const numeroWhatsApp = '5512981572766';
    const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;

    window.open(url, '_blank');
    statusDiv.innerHTML = '✅ Lead enviado. Em até 48h retornaremos se seu perfil for compatível.';
    document.getElementById('lead-form').reset();
    setTimeout(() => { statusDiv.innerHTML = ''; }, 6000);
});

document.getElementById('whatsapp-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const texto = `Olá, gostaria de solicitar análise de perfil para projetos exclusivos do Orion Group.`;
    const url = `https://wa.me/5512981572766?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
});

// Rolagem suave para a seção "método"
document.querySelector('.btn-metodo').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector('#metodo');
    target.scrollIntoView({ behavior: 'smooth' });
});
