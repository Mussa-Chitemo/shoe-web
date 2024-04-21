// variable 
const hambager = document.querySelector('.humbager');
const navs = document.querySelector('.nav-links');

hambager.addEventListener('click', ()=>{
     hambager.classList.toggle('active');
     navs.classList.toggle('active');
});