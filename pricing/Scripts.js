const checkbox=document.querySelector('#checkbox');
const slider=document.querySelector('.slider');
const basic=document.querySelector('.basic');
const prof=document.querySelector('.prof');
const master=document.querySelector('.master');


// slider.addEventListener('click',()=>{
//     if(!checkbox.checked){
//         basic.innerHTML=basic.textContent*12;
//         prof.innerHTML=prof.textContent*12;
//         master.innerHTML=master.textContent*12;
//     }
//     else{
//         basic.innerHTML=basic.textContent/12;
//         prof.innerHTML=prof.textContent/12;
//         master.innerHTML=master.textContent/12;
//     }
// })
slider.addEventListener('click',()=>{
    if(!checkbox.checked){
        [basic.textContent,prof.textContent,master.textContent]=
        ["120","240","360"];
    }
    else{
        [basic.textContent,prof.textContent,master.textContent]=
        ["9.99","19.99","29.99"];
    }
})