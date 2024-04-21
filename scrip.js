// variable 
const hambager = document.querySelector('.humbager');
const navs = document.querySelector('.nav-links');

hambager.addEventListener('click', ()=>{
     hambager.classList.toggle('active');
     navs.classList.toggle('active');
});

// for button 
const buy = document.querySelector('.buy-now');
const explore = document.querySelector('.explore');

buy.addEventListener('click', ()=>{
     alert('The system is under maintanance. Right!!')
})
explore.addEventListener('click', ()=>{
     alert('The system is under maintanance. Right!! please wait, update very soon')
})