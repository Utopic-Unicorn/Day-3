const open = document.querySelector('#open');
const close = document.querySelector('#close');
const container= document.querySelector('.container');
const search = document.querySelector('.search');
const button = document.querySelector('.btn');
const input = document.querySelector('.input')

open.addEventListener('click', ()=> {container.classList.add('show-nav')
search.classList.remove('dis')});
close.addEventListener('click', ()=> {
    container.classList.remove('show-nav')
    search.classList.add('dis')
});
// window.addEventListener('scroll', () => container.classList.remove('show-nav'))
button.addEventListener('click', ()=>{
    search.classList.toggle('active')
    input.focus()
})
