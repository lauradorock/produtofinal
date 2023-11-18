async function registro() {
    const nome = document.getElementById('nome').val();

    const data = {
        nome
    }

    const response = fetch('http://localhost:3008/api/user/create', data);

    if (response.data.success === true) {
        // redirioba para logar
    } else {
        alert("Não deu pra logar")
    }
    


}