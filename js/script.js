// Delarando variaveis que retornaram o primeiro elemento no seletor CSS

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

// Aqui estamos criando uma função para quando o menu hamburguer for clicado
menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

window.onscroll = () =>{
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}