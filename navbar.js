// Side bar feature
const bar1=document.querySelector('.bar1');
const bar2=document.querySelector('.bar2');
const sideNav=document.querySelector('.sidenav');
// 
bar1.addEventListener('click',openNav);
bar2.addEventListener('click',closeNav);
function openNav(){
    sideNav.style.width='150px';
    document.querySelector('.bar1').style.display='none';
    document.querySelector('.bar2').style.display='block';
    // document.querySelector(".main").style.marginLeft= "150px";

}
function closeNav(){
    sideNav.style.width='0px';
    document.querySelector('.bar2').style.display='none';
    document.querySelector('.bar1').style.display='block';
    // document.querySelector(".main").style.marginLeft= "0px";
}
// Scroll up 
const scrollBtn=document.querySelector('.scroll-up');
window.onscroll=function(){scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop>20 || document.documentElement.scrollTop > 20){
        scrollBtn.style.display="block";
    }
    else{
        scrollBtn.style.display="none";
    }
}
scrollBtn.addEventListener('click',toScrollTop);
function toScrollTop(){
    document.body.scrollTop= 0;
    document.documentElement.scrollTop= 0;
}

// login page
const loginSection=document.querySelector('.loginSection');
const loginBtn=document.querySelectorAll('.login');
const mainSection=document.querySelector('.mainSection');
const closeBtn=document.querySelector('.close');

// 
loginBtn.forEach(el=>{
    el.addEventListener('click',(e)=>{
        if(e.target){
            loginSection.style.display="inline";
            
        }
    })
})
closeBtn.addEventListener('click',()=>{
    loginSection.style.display="none";
})
loginSection.addEventListener("dblclick",()=>{
    loginSection.style.display="none";
})
