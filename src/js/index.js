const conselhoNumero = document.getElementById('numero-conselho')
const conselhoTexto = document.getElementById('texto-conselho')

document.getElementById('btn-sorteador').addEventListener('click', pegarConselho)

async function pegarConselho(){
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
            const conselho = data.slip

            rodarConselho(conselho.advice, conselho.id)
            console.log('clicado');

        })
}

function rodarConselho(advice, id){
    conselhoTexto.innerHTML = `"${advice}"`
    conselhoNumero.innerHTML = `#${id}`

}