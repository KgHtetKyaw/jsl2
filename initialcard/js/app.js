// UI
const panels = document.querySelectorAll('.panel');
// console.log(panels);

panels.forEach(panel=>{
   // console.log(panel);

    panel.addEventListener('click',()=>{
        // console.log(panel);
        // remove လုပ်ပီးမှ active ကိုထည့်မှ ရမယ်
        removeactive();

        panel.classList.add('active');
    });

});

function removeactive(){
    panels.forEach(panel=>{
       panel.classList.remove('active');
    });
}