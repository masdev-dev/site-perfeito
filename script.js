document.getElementById('lead-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;
    const statusDiv = document.getElementById('form-status');

    statusDiv.innerHTML = 'Enviando...';

    // Opção 1: enviar para um webhook ou e-mail usando Fetch (exemplo com Google Forms ou zapier)
    // Por enquanto, apenas simulamos e redirecionamos para WhatsApp.
    const texto = `Olá! Meu nome é ${nome}. Email: ${email}. Telefone: ${telefone}. Mensagem: ${mensagem}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(texto)}`;
    window.open(whatsappUrl, '_blank');
    statusDiv.innerHTML = 'Redirecionando para o WhatsApp...';
    
    // Aqui você pode adicionar lógica para salvar em uma API (opcional)
    // Exemplo: enviar para seu endpoint /usuarios (POST) – se quiser armazenar leads
    /*
    try {
        const response = await fetch('https://api-nova-0zum.onrender.com/usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, idade: 0 }) // ajuste conforme necessidade
        });
        if(response.ok) console.log('Lead salvo');
    } catch(err) { console.log(err); }
    */
});
