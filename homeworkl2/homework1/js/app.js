// Start AutoText Effect
const text = document.getElementById('text');
const textspeed = document.getElementById('textspeed');
const pgh = "Hello,I am WDF-4076 ... "+
    "This is My Homework ... "+
    "(1) Auto Text Effect "+
    "(2) Auto Count Effect "+
    "(3) Button Ripple Effect "+
    "(4) Hidden Search "+
    "(5) Material Form Design ."

let idx = 1;
let speed = 1000;

function autotext(){

    text.innerText = pgh.slice(0,idx);

    idx++;

    if(idx > pgh.length){
        idx = 1;
    }

    setTimeout(autotext,speed);
}

autotext();

textspeed.addEventListener('input',()=>{

    speed = 500 / textspeed.value;

});
// End AutoText Effect


// Start Hidden Search
const searchbtn = document.querySelector('.searchbtn');
const hiddensearchs = document.querySelector('.hiddensearchs');
const autofoucs = document.querySelector('.hiddensearch');

searchbtn.addEventListener('click',()=>{
    hiddensearchs.classList.toggle('active');

    autofoucs.focus();
});
// End Hidden Search


// Start AutoCount Effect
const counts = document.querySelectorAll('.count');

counts.forEach((count)=>{
    // console.log(count);

    count.textContent = "0";

    const updatecount = ()=>{
        const target = Number(count.getAttribute('data-target'));

        const ct = +count.innerText;

        const inc = target/700;

        if(ct < target){
            count.innerText = `${Math.ceil(ct + inc)}`;
            setTimeout(updatecount,300)
        }

    }

    updatecount();
});
// End AutoCount Effect


// Start Button Ripple Effect
const buttons = document.querySelectorAll('.btnr');

buttons.forEach(button=>{

    button.addEventListener('click',(e)=>{

        const cx = e.clientX;
        const cy = e.clientY;

        const btntop = e.target.offsetTop;
        const btnleft = e.target.offsetLeft;

        const xinside = cx - btnleft;
        const yinside = cy - btntop;
        // console.log(xinside,yinside);

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yinside+"px";
        circle.style.left = xinside+"px";

        // console.log(e.target);
        e.target.appendChild(circle);
        // console.log(circle);

        setTimeout(()=>{
           circle.remove();
        },600);
    });

});

// End Button Ripple Effect


// Start Material Form Design
const mfdshow = document.querySelector('.marterialformdesign-container');
const labels = document.querySelectorAll('.mfd-input label');
const mfdclosebtn = document.querySelector('.mfd-close');
const mfdactive = document.getElementById('mfdactive');



labels.forEach(label=>{

    label.innerHTML = label.innerText
        .split('')
        .map((letter,index)=>
            `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
        .join('');

});

mfdactive.addEventListener('click',()=>{
   mfdshow.classList.add('active');
});

mfdclosebtn.addEventListener('click',()=>{
    mfdshow.classList.remove('active');
});
// End Material Form Design