// total item added in the cart
const addedInCart=[];
window.onload=()=>{
    let storedItems=JSON.parse(localStorage.getItem('addedInCart'));
    if(storedItems!=null){
        storedItems.forEach(el=>{
            addedInCart.push(el);
        });
    }

    updateCartIconNo();
};


// filter  Buttons Activate
const filterBtns=document.querySelectorAll('.filterBtn button');
function filterBtnActivate(){
    filterBtns.forEach((button)=>{
        button.addEventListener('click',(e)=>{
            filterBtns.forEach((button)=>{
                button.id='';
            });
            if(e.target){
                e.target.id='filterActivate';
            }
        });
    })
}
filterBtnActivate();









function pushElementInContainer(){
    let productContainer=document.querySelector('.productContainer');
    for(let i=0;i<12;i++){
        productContainer.innerHTML=createElement()+productContainer.innerHTML;
    }
}
pushElementInContainer();


function createElement(data){
   let el= `<div class="singleProduct">
                <div>
                    <img src="img1(640).jpg" alt=""/>
                </div>
                <div style="padding:0px 10px;">
                
                <div class="name" data-name="Paneer">Paneer</div>
                    <div class="rating" data-rating="">⭐⭐⭐⭐⭐</div>
                    
                    <div class="deliveryType" data-delivery="free">You are eligible for free delivery.</div>
                    <div class="price" data-price="40">$ 40</div>
                    <div style="display: flex;justify-content: center;"><button>Add To Card</button>
                    </div>
                </div>
            </div>`
    return el;
}







function updateCartIconNo(){
    document.querySelector('#cart>p').innerHTML=Number(addedInCart.length);
    document.querySelector('#cart1>p').innerHTML=Number(addedInCart.length);
}


updateCartIconNo();


function addInCart(){
    const singleProduct=document.querySelectorAll('.singleProduct button');
    singleProduct.forEach((item)=>{
        item.addEventListener('click',(e)=>{
            let currentSelect=e.target.parentElement.parentElement.parentElement;

            let name=currentSelect.querySelector('.name').dataset.name;
            let price=currentSelect.querySelector('.price').dataset.price;
            let deliveryType=currentSelect.querySelector('.deliveryType').dataset.delivery;
            let img=currentSelect.querySelector('img').src;
            let rating=currentSelect.querySelector('.rating').dataset.rating;
            
            let img1=`url(\"${img}\")`;
            addToCart(name,img1,price,"XYZ","5","free",'1');
        })
    })
}
addInCart();


console.log(addedInCart);
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

    }
    updateCartIconNo();
}


function itemPresentInTheCart(curItem){
    return addedInCart.some(el=> JSON.stringify(el)===JSON.stringify(curItem));
}

window.onbeforeunload=()=>{localStorage.setItem('addedInCart',JSON.stringify(addedInCart));}
