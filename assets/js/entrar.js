document.querySelector('.btn').addEventListener('click', function () {
    const email = document.querySelector('.usuario').value;
    const senha = document.querySelector('.senha').value;

    const emailValido = 'thier.rooliveira@professores.estacio.br';
    const senhaValida = 'thier.js';

    if (email === emailValido && senha === senhaValida) {
        // Armazena o nome do usuário no localStorage
        localStorage.setItem('usuarioNome', email.substring(0, email.indexOf('@')));
        // Redireciona para a página principal
        window.location.href = 'sua_pagina_principal.html';
    }    
    else {
        document.querySelector('.mensagem-erro').style.display = 'block';
    }
}); // Added closing bracket and semicolon here
