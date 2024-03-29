 // Side bar feature

const navBar=document.querySelector('nav');
function createNavBar(){
    let el=`<div class="bars">
                <div class="bar1">
                    <i class="fa-sharp fa-solid fa-bars"></i>
                </div>
                <div class="bar2">
                    <i class="fa-sharp fa-solid fa-xmark"></i>
                </div>
            </div>
            <div id="mySidenav" class="sidenav">
                <a href="./index.html">Home</a>
                <a href="./index.html#about-us">About</a>
                <a href="./product.html">FOOD CATALOGUE</a>
                <a href="./Contact.html">Contacts</a>

            </div>
            <div class="navbar">
                <div class="site-name">
                    <a href="./index.html">
                        <h2>Fooder<sup>FREE</sup></h2>
                        <h5>INDIAN FOOD</h5>
                    </a>
                </div>

                <div class="nav-items">
                    <li class="home"><a href="./index.html">HOME</a></li>
                    <li class="about"><a href="./index.html#about-us">ABOUT</a></li>
                    <li class="catalogue"><a href="./product.html">FOOD CATALOGUE</a></li>
                    <li class="contact"><a href="./Contact.html">CONTACTS</a></li>
                </div>
                <!-- book directly -->
                <div class="book" id="book">
                    <a href="Cart.html" class="cart" id="cart"><p>0</p><i class="fa-solid fa-shopping-cart"></i></a>
                    <button class="login"><i class="fa-solid fa-user"></i> Login</button>
                    <!-- <button class="log-out"><i class="fa-sharp fa-solid fa-right-from-bracket"></i> Log out</button> -->
                    
                </div>
                <div class="user">
                    <a href="Cart.html" class="cart" id="cart1"><p>0</p><i class="fa-solid fa-shopping-cart"></i></a>
                    <div class="login"><i class="fa-solid fa-user-circle"></i></div>
                    <!-- <button class="log-out"><i class="fa-sharp fa-solid fa-right-from-bracket"></i> Log out</button> -->
                </div>
            </div>`;
    navBar.innerHTML=el;
}
createNavBar();





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

const mainSection=document.querySelector('.mainSection');


// 
function openLoginPage(){
    const loginBtn=document.querySelectorAll('.login');
    loginBtn.forEach(el=>{
        el.addEventListener('click',(e)=>{
            if(e.target){
                loginSection.style.display="inline";
                
            }
        })
    })
}
openLoginPage();


loginSection.addEventListener("click",(e)=>{
    if(e.target.className==="loginMain"){
        loginSection.style.display="none";
    }
})


// product data count update;
const addedInCart1=[];
// console.log(productsData);
window.onload=()=>{
    let storedItems=JSON.parse(localStorage.getItem('addedInCart'));
    if(storedItems!=null){
        storedItems.forEach(el=>{
            addedInCart1.push(el);
        });
    }
    updateCartIconNo();
};

function updateCartIconNo(){
    document.querySelector('#cart>p').innerHTML=Number(addedInCart1.length);
    document.querySelector('#cart1>p').innerHTML=Number(addedInCart1.length);
}
updateCartIconNo();

window.onbeforeunload=()=>{localStorage.setItem('addedInCart',JSON.stringify(addedInCart1));}