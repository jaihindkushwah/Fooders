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

function updateCartIconNo(){
    document.querySelector('#cart>p').innerHTML=Number(addedInCart.length);
    document.querySelector('#cart1>p').innerHTML=Number(addedInCart.length);
}

function addInCart(){
    const singleProduct=document.querySelectorAll('.singleProduct');
    singleProduct.forEach((item)=>{
        item.addEventListener('click',(e)=>{
        //    console.log(e.target);
        console.log(item.firstElementChild.firstElementChild.src);
        item.lastElementChild.childNodes.forEach(item=>{console.log(item.className+" "+item.name)})
        })
    })
}
addInCart();

featuredDiv.addEventListener('click',(event)=>{
    if(event.target.value!=undefined){
       let name=event.target.name;
       let price=event.target.value; 
       let img=event.target.parentElement.style.backgroundImage;
       addToCart(name,img,price,"XYZ","5","free",'1');
    }
});
console.log(addedInCart);
function addToCart(name,img,price,shopName,rating,deliveryType,quantity){
    let curItem={};
    curItem["name"]=name;
    curItem["price"]=price; 
    curItem["img"]=img;
    curItem["shopName"]=shopName;
    curItem["rating"]='*'.repeat(Number(rating));
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






localStorage.setItem('addedInCart',JSON.stringify(addedInCart));
