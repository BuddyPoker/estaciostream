document.querySelector('.btn').addEventListener('click', function () {
    const email = document.querySelector('.usuario').value;
    const senha = document.querySelector('.senha').value;

    const emailValido = 'thier.rooliveira@professores.estacio.br';
    const senhaValida = 'thier.js';

    if (email === emailValido && senha === senhaValida) {
        window.location.href = 'https://buddypoker.github.io/estaciostream/';
    }
    else {
        document.querySelector('.mensagem-erro').style.display = 'block';
    }
}); // Added closing bracket and semicolon here