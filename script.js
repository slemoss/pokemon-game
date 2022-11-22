let formulario = document.querySelector('form')
formulario.addEventListener('submit', function(e){
    //Bloqueia o refresh da pagina
    e.preventDefault()

    //Url da pesquisa
    let urlForm = "https://pokeapi.co/api/v2/pokemon/"

    //Valor do input name
    let nome = document.getElementById('name')

    // concatena a url com o inputnam
    urlForm += this.name.value

    //Transforma os valores para lowercase
    urlForm = urlForm.toLocaleLowerCase()

    // IDcontent
    let resposta = document.getElementById("content")

    // id imgpokemon
    let imagem = document.getElementById('imgPokemon')

    //Resposta em HTML
    let html = ''

    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function(data){
            console.log(data)
            html = 'Nome: ' + maiuscula(data.name) + '<br>'
            html += 'Type: ' + maiuscula(data.types[0].type.name)
            resposta.innerHTML = html

            imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"
        })
        .catch(function(err){
            console.log(err)
        })

})

function maiuscula(val) {
    return val[0].toUpperCase() + val.substr(1)
}