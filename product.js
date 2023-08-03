// total item added in the cart
const addedInCart=[];
let productsData=[...productCatalogue];
// console.log(productsData);
window.onload=()=>{
    let storedItems=JSON.parse(localStorage.getItem('addedInCart'));
    if(storedItems!=null){
        storedItems.forEach(el=>{
            addedInCart.push(el);
        });
    }

    updateCartIconNo();
};


// filter  Buttons Activate and filter the products
const filterBtns=document.querySelectorAll('.filterBtn button');
function filterBtnActivate(){
    filterBtns.forEach((button)=>{
        button.addEventListener('click',(e)=>{
            filterBtns.forEach((button)=>{
                button.id='';
            });
            if(e.target){
                e.target.id='filterActivate';
                let clName=e.target.className;
                console.log(clName);
                if(clName==='All'){
                    productsData=[...productCatalogue];
                }else{
                    let filterData=productCatalogue.filter((el)=>el.name.includes(clName));
                    productsData=[...filterData];
                }
                // console.log(productsData);
                pushElementInContainer();
            }
        });
    })
}
filterBtnActivate();


// filter the products using inputs


const searchFieldInput=document.querySelector('.searchField input');
const searchButton=document.querySelector('.searchField button');

// when button click
searchButton.addEventListener('click',filterProductByInput);
// when input click
searchFieldInput.addEventListener('keypress',(e)=>{
    if(e.key==="Enter"){
        filterProductByInput();
    }
})


function filterProductByInput(){
    let inputValue=searchFieldInput.value;
    console.log(inputValue);
    if(!inputValue){
        alert("Please enter some input!");
        return;
    }
    filterBtns.forEach((button)=>{
        button.id='';
        if(button.className==="All"){
            button.id='filterActivate';
        };
    })
    let filterData=productCatalogue.filter((el)=>el.name.toLowerCase().includes(inputValue.toLowerCase()));
    productsData=[...filterData];
    pushElementInContainer();
}








function pushElementInContainer(){
    let productContainer=document.querySelector('.productContainer');
    productContainer.innerHTML="";
    productsData.sort((a,b)=>{
        if(a.name<b.name){
            return -1;
        }
        if(a.name>b.name){
            return 1;
        }
        return 0;
    }).forEach((el)=>{
        productContainer.innerHTML+=createElement(el);
    })
    if(productsData.length===0){
        productContainer.innerHTML=`<div style="text-align: center; color: red; font-size: 20px;">
        ➡️ No data Available
     </div>`;
    }
}

pushElementInContainer();





function createElement(data){
   let el= `<div class="singleProduct">
                <div>
                    <img src="${data.img}" alt=""/>

                    </div>
                <div style="padding:0px 10px;">
                
                <div class="name" data-name="${data.name}">${data.name}</div>
                    <div class="rating" data-rating="">⭐⭐⭐⭐⭐</div>
                    
                    <div class="deliveryType" data-delivery="free">You are eligible for free delivery.</div>
                    <div class="price" data-price="${data.price}">₹ ${data.price}</div>
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
