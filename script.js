document.getElementById('lead-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    const statusDiv = document.getElementById('form-status');

    if (!nome || !email || !mensagem) {
        statusDiv.innerHTML = '❌ Preencha todos os campos.';
        setTimeout(() => statusDiv.innerHTML = '', 3000);
        return;
    }

    statusDiv.innerHTML = '🔍 Enviando solicitação...';

    const API_URL = 'https://api-nova-0zum.onrender.com/leads';

    try {
        const resposta = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, telefone: '', mensagem })
        });

        if (resposta.ok) {
            statusDiv.innerHTML = '✅ Solicitação recebida! Em até 48h nossa equipe analisará e entrará em contato pelo e-mail informado.';
            document.getElementById('lead-form').reset();
        } else {
            const erro = await resposta.text();
            console.error('Erro servidor:', erro);
            statusDiv.innerHTML = '❌ Erro ao enviar. Tente novamente mais tarde.';
        }
    } catch (err) {
        console.error('Erro de rede/CORS:', err);
        statusDiv.innerHTML = '❌ Erro de conexão. Tente novamente mais tarde.';
    }
    setTimeout(() => { statusDiv.innerHTML = ''; }, 8000);
});

document.getElementById('whatsapp-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const texto = `Olá, gostaria de solicitar análise de perfil para projetos exclusivos do Orion Group.`;
    const url = `https://wa.me/5512981572766?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
});

document.querySelector('.btn-metodo').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#metodo').scrollIntoView({ behavior: 'smooth' });
});
