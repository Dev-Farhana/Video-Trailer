const Button = document.querySelector('button');
const videoEle = document.querySelector('video');
const trailerContainer =  document.querySelector('.trailer-container');
const closeIcon = document.querySelector('.close-icon');


Button.addEventListener('click', () =>{
    trailerContainer.classList.remove('active');
})

closeIcon.addEventListener('click', ()=>{
    trailerContainer.classList.add("active");
    videoEle.pause();
    videoEle.currentTime = 0;
})