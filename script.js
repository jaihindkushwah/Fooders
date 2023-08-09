// Featured menu element creation
const featuredDiv=document.querySelector('.featured-menu');
if(featuredDiv){
    window.onload=featuredMenu.forEach(el=>{
        featuredDiv.appendChild(featuredElementCreate(el['img'],el['name'],el['price']));
    })
}

function featuredElementCreate(src,name,price){
    let div=document.createElement('div');
    let div1=document.createElement('div');
    let btn=document.createElement('button');
    let name1=document.createElement('h3');
    let price1=document.createElement('h3');
    div1.style.backgroundImage="url("+src+")";
    div1.className="menuImag";
    // 
    btn.value=price;
    btn.name=name;
    btn.innerHTML="Add To Cart";
    btn.id="addToCart";
    div1.appendChild(btn);
    // 
    name1.textContent=name;
    // 
    price1.innerHTML='₹'+price;
    // 
    div.appendChild(div1);
    div.appendChild(name1);
    div.appendChild(price1);
    return div;
}


// Collection element creation
const nightlifeImg=document.querySelector(".nightlifeImg");
const diningImg=document.querySelector(".diningImg");
const deliveryImg=document.querySelector(".deliveryImg");

window.onload=delivery.forEach(el=>{
    deliveryImg.innerHTML+=collectionElementCreate(el["img"],el["p"],"./product.html");
})

window.onload=dining.forEach(el=>{
    diningImg.innerHTML+=collectionElementCreate(el["img"],el["p"],"https://www.dineout.co.in/");
})
window.onload=nightlife.forEach(el=>{
    nightlifeImg.innerHTML+=collectionElementCreate(el["img"],el["p"],"https://www.google.com/search?q=night+life");
})


function collectionElementCreate(src,content,link){
    let el=`<div><a href="${link}"><img src="${src}" alt=""></img></a><p>${content}</p></div>`;
    return el;
}









// Selector
const Buttons=document.querySelectorAll('.menuImag');
// Featured Button Show and hide

Buttons.forEach((el)=>{
    el.parentElement.addEventListener('mouseover',(e)=>{
        if(e.target){
            el.firstElementChild.style.display='inline';
        }
    });
})

Buttons.forEach((el)=>{
    el.parentElement.addEventListener('mouseout',(e)=>{
        if(e.target){
            el.firstElementChild.style.display='none';
        }
    });
})

// Scroll left and scroll-right
// Collections change using button

const AllBtns=document.querySelectorAll('.facility>.btn');
const allDiv=document.querySelectorAll('.collections>div');

AllBtns.forEach((btn)=>{
    btn.addEventListener('click',function(event){
        switch(event.target.id){
            case "btn1":
                document.querySelector('.active').classList.remove('active');
                document.querySelector('.delivery').classList.add('active');
                Hide("deliveryContainer");
                AddImageScroller('.deliveryImg');
                AddScrollerButton();
                scrollLeftRight();
                break;
            case "btn2":
                document.querySelector('.active').classList.remove('active');
                document.querySelector('.dining').classList.add('active');
                Hide("diningContainer");
                AddImageScroller(".diningImg");
                AddScrollerButton();
                scrollLeftRight();
                break;
            case "btn3":
                document.querySelector('.active').classList.remove('active');
                document.querySelector('.nightlife').classList.add('active');
                Hide("nightlifeContainer");
                AddImageScroller(".nightlifeImg");
                AddScrollerButton();
                scrollLeftRight();
                break;
        }
    })
})
// Scroller add for Activate
function AddImageScroller(name){
    document.querySelector('.activeScroller').classList.remove('activeScroller');
    document.querySelector(name).classList.add('activeScroller');
}

// LeftScroller and RightScroller Activating
function AddScrollerButton(){
    document.querySelector('.activeRight').classList.remove('activeRight');
    document.querySelector('.activeLeft').classList.remove('activeLeft');
    document.querySelector(".activeScroller").previousElementSibling.classList.add('activeLeft');
    document.querySelector(".activeScroller").nextElementSibling.classList.add('activeRight');
}

function Hide(name){
    allDiv.forEach(el=>{
        if(el.className==name){
            el.style.display="flex";
        }
        else if(el.className!="facility"){
            el.style.display="none";
        }
    });
}
// Scroll Left Right function;
window.onload=scrollLeftRight();
function scrollLeftRight(){
    const leftBtn=document.querySelector('.activeLeft');
    const rightBtn=document.querySelector('.activeRight');
    const scrollImg=document.querySelector('.activeScroller');
    leftBtn.style.display="none";
    rightBtn.style.display="inline";
    scrollImg.scrollLeft=0;
    leftBtn.addEventListener('click',function(event){
        scrollImg.scrollLeft-=285;
        if(scrollImg.scrollLeft <=285){
            leftBtn.style.display="none";
        }
        else{
            leftBtn.style.display="inline";
        }
        let maxScroll=Number(scrollImg.scrollWidth)-Number(scrollImg.offsetWidth);
        if(parseInt(scrollImg.scrollLeft)-285>= maxScroll){
            rightBtn.style.display="none";
        }
        else{
            rightBtn.style.display="inline";
        }
        event.preventDefault();
    });
    rightBtn.addEventListener('click',function(event){
        // const scrollImg=document.querySelector('.deliveryImg');
        scrollImg.scrollLeft+=285;
        if(scrollImg.scrollLeft+285 <= 0){
            leftBtn.style.display="none";
        }
        else{
            leftBtn.style.display="inline";
        }
        let maxScroll=Number(scrollImg.scrollWidth)-Number(scrollImg.offsetWidth);
        
        if(Math.ceil(scrollImg.scrollLeft)+285>=maxScroll){
            rightBtn.style.display="none";
        }
        else{
            rightBtn.style.display="inline";
        }
        event.preventDefault();
    });
}

// Add To Cart Sections
// featuredDiv
const addedInCart=[];
window.onload=()=>{
    let storedItems=JSON.parse(localStorage.getItem('addedInCart'));
    if(storedItems!=null){
        storedItems.forEach(el=>{
            addedInCart.push(el);
        });
    } 
    document.querySelector('#cart>p').innerHTML=Number(addedInCart.length);
    document.querySelector('#cart1>p').innerHTML=Number(addedInCart.length);
};
// onclick item is storing in cart
featuredDiv.addEventListener('click',(event)=>{
    if(event.target.value!=undefined){
       let name=event.target.name;
       let price=event.target.value; 
       let img=event.target.parentElement.style.backgroundImage;
       addToCart(name,img,price,"XYZ","5","free",'1');
    }
});
// console.log(addedInCart);
function addToCart(name,img,price,shopName,rating,deliveryType,quantity){
    let curItem={};
    curItem["name"]=name;
    curItem["price"]=price; 
    curItem["img"]=img;
    curItem["shopName"]=shopName;
    curItem["rating"]='⭐'.repeat(Number(rating));
    curItem["deliveryType"]=deliveryType;
    curItem['quantity']=quantity;
    
    let curItemIsPresent=itemPresentInTheCart(curItem);
    if(!curItemIsPresent){
        addedInCart.push(curItem);
        document.querySelector('#cart>p').innerHTML=Number(addedInCart.length);
        document.querySelector('#cart1>p').innerHTML=Number(addedInCart.length);
    }
    
}


function itemPresentInTheCart(curItem){
    return addedInCart.some(el=> JSON.stringify(el)===JSON.stringify(curItem));
}
 window.onbeforeunload=()=>{localStorage.setItem('addedInCart',JSON.stringify(addedInCart));}








