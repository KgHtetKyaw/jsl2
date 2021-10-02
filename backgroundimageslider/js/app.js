// UI

const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftbtn = document.getElementById('left');
const rightbtn = document.getElementById('right');

let activeslide = 0;

function setbgbody(){
    body.style.backgroundImage = slides[activeslide].style.backgroundImage;
}

setbgbody();

function setactiveslide(){
    slides.forEach(slide => slide.classList.remove('active'));

    slides[activeslide].classList.add('active');
}

rightbtn.addEventListener('click',()=>{
   // console.log('right');
    activeslide++;

    if(activeslide > slides.length - 1){
        activeslide = 0;
    }

    // console.log(activeslice);

    setbgbody();
    setactiveslide();
});

leftbtn.addEventListener('click',()=>{
    // console.log('left');
    activeslide--;

    if(activeslide < 0){
        activeslide = slides.length - 1;
    }

    // console.log(activeslice);

    setbgbody();
    setactiveslide();
});

//22BG WDF4076
