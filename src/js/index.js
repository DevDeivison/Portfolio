const botaoMostrarProjetos = document.querySelector('btn-mostrar-projetos');
const ProjetosInativos = document.querySelectorAll('.projeto:not(.ativo)');



botaoMostrarProjetos.addEventListener('click', () => {

    MostrarMaisProjetos();

    EsconderBotao();
});

function EsconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function MostrarMaisProjetos() {
    ProjetosInativos.forEach(ProjetoInvativo => {
        ProjetoInativo.classList.add('ativo');
    });
}

