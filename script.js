document.getElementById('lead-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;
    const statusDiv = document.getElementById('form-status');

    statusDiv.innerHTML = '🔍 Enviando para análise...';

    let apiOk = false;
    try {
        const response = await fetch('https://api-nova-0zum.onrender.com/leads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, telefone, mensagem })
        });
        if (response.ok) apiOk = true;
    } catch (err) {
        console.error('Erro na API:', err);
    }

    const texto = `*NOVO LEAD - ORION GROUP (LISTA DE ESPERA)*%0A%0A*Nome:* ${nome}%0A*E-mail:* ${email}%0A*WhatsApp:* ${telefone}%0A*Mensagem:* ${mensagem}%0A%0A*Solicita análise de perfil*`;
    const url = `https://wa.me/5512981572766?text=${texto}`;
    window.open(url, '_blank');

    statusDiv.innerHTML = apiOk ? '✅ Lead salvo no sistema e enviado via WhatsApp. Em até 48h retornamos.' : '⚠️ Lead enviado via WhatsApp (banco temporariamente indisponível).';
    document.getElementById('lead-form').reset();
    setTimeout(() => { statusDiv.innerHTML = ''; }, 8000);
});

document.getElementById('whatsapp-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const texto = `Olá, gostaria de solicitar análise de perfil para projetos exclusivos do Orion Group.`;
    window.open(`https://wa.me/5512981572766?text=${encodeURIComponent(texto)}`, '_blank');
});

document.querySelector('.btn-metodo').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#metodo').scrollIntoView({ behavior: 'smooth' });
});
