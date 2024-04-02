import { NegociacaoController } from './controllers/negociacao-controller.js';
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}
const btnImportar = document.querySelector('#btn-importar');
if (btnImportar) {
    btnImportar.addEventListener('click', () => {
        controller.importarDados();
    });
}
else {
    throw Error('Botão de Importar dados não encontrado.');
}
//# sourceMappingURL=app.js.map