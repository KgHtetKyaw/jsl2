// UI
const container = document.querySelector('.container');

const left = document.querySelector('.left');
const right = document.querySelector('.right');

// Event Listener (mouseenter->mouse ၀င်လာရင် အလုပ်လုပ်) (mouseleave->mouse ထွက်သွားရင်)
left.addEventListener('mouseenter',()=>container.classList.add('hover-left'));
left.addEventListener('mouseleave',()=>container.classList.remove('hover-left'));

right.addEventListener('mouseenter',()=>container.classList.add('hover-right'));
right.addEventListener('mouseleave',()=>container.classList.remove('hover-right'));