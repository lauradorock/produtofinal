document.addEventListener('DOMContentLoaded', function () {
    const inputBusca = document.getElementById('txtBusca');
    const btnBusca = document.getElementById('btnBusca');
    const listaItens = document.getElementById('listaItens');

    btnBusca.addEventListener('click', function () {
        const termoBusca = inputBusca.value.toLowerCase();
        const itens = listaItens.getElementsByTagName('div');

        for (let i = 0; i < itens.length; i++) {
            const textoItem = itens[i].textContent.toLowerCase();
            if (textoItem.includes(termoBusca)) {
                itens[i].style.display = 'block';
            } else {
                itens[i].style.display = 'none';
            }
        }
    });
});
