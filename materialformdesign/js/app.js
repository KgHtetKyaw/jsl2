// ui
const labels = document.querySelectorAll('.form-group label');
// console.log(labels);

labels.forEach(label=>{
    // console.log(label);
    // console.log(label.innerText);
    // sr lone twe ko kwel htote
    // console.log(label.innerText.split());
    // sr lone ta lone chinn se ko kwel htote
    // console.log(label.innerText.split(''));

    label.innerHTML = label.innerText
            .split('')
            .map((letter,index)=>
            `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
            .join('');

});


// label yae innerText ko .split so tae Method ko thone pee kwel hotet pee yin .map nae looping pat pee .join nae string ko change
// .map() ka sint kel sint kel yayy chin loz (data value ko array nae payy loz) (forEach() ka ma ya)
// .join() ka array ko string change phoz