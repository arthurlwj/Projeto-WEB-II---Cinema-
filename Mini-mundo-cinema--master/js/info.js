function acessar(){
    window.location.href = 'http://127.0.0.1:5500/Reserva%20Cinema/reserva.html'
}


let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

logado.innerHTML = `Olá, ${userLogado.nome}`

if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar essa página')
    window.location.href = 'http://127.0.0.1:5500/tela_login.html'
}



function sair() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = 'http://127.0.0.1:5500/tela_login.html'
}


function cliqueAqui(){

}