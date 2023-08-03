// Render AddedInCart Element
let list=JSON.parse(localStorage.getItem('addedInCart'));

const addedProductInCart=document.querySelector('.added-product>div');

function renderCart(){
    for(let i=0;i<list.length;i++){
        createCartElement(list[i],i);
    }
    forEmptyCart();
}
renderCart();

function createCartElement(elData,i){
    let div=document.createElement('div');
    div.className="items";
    let el=`<div class="image">
                <div style='background-image:${elData['img']};background-size: 100% 100%;'></div>
            </div>
            <div class="specification">
                <div class="name">${elData['name']}</div>
                <div class="rating">Rating: ${elData['rating']}</div>
                <div class="deliveryType">You are eligible for ${elData['deliveryType']} delivery.</div>
                <div class="resturentName">${elData['shopName']} Hotel</div>
                <div class="modificationBtns">
                    <div class="counter"><button id="subtractBtn">-</button><input type="text" name="" value="${elData["quantity"]}" class="${i}"><button id="addBtn">+</button></div>
                    <div class="removeFromCart"><button class="${i}">Delete</button></div>
                </div>
            </div>
            <div class="price">₹ ${elData["price"]}</div>`;
        div.innerHTML=el;
        addedProductInCart.appendChild(div);
}



// Counter App;


function quantityIncreaseDecrease(){
    const counter=document.querySelectorAll('.counter');
    counter.forEach((el)=>{
        el.addEventListener('click',(event)=>{
            if(event.target.id=='subtractBtn'){
                let inputValue=event.target.nextElementSibling;
                if(inputValue.value<=1){
                    event.target.nextElementSibling.value=1;
                   
                }
                else{
                    event.target.nextElementSibling.value=`${Number(inputValue.value)-1}`;
                }
                list[Number(inputValue.className)]["quantity"]=inputValue.value;
            }
            if(event.target.id=='addBtn'){
                let inputValue=event.target.previousElementSibling;
                if(inputValue.value>=10){
                    event.target.previousElementSibling.value=10;
                    
                    // alert("Currently, You can book upto 10 from a restaurant. You can book some other else. ");
                }
                else{
                    event.target.previousElementSibling.value=`${Number(inputValue.value)+1}`;
                }
                list[Number(inputValue.className)]["quantity"]=inputValue.value;
                // console.log(list[Number(inputValue.className)]["quantity"]);
            }
            localStorage.setItem('addedInCart',JSON.stringify(list));
            totalPriceCalculate();
        })
    })
}
quantityIncreaseDecrease();


// Delete Item from Cart

function deleteCartItem(){
    const deleteButtons=document.querySelectorAll('.removeFromCart>button');
    deleteButtons.forEach(el=>{
        el.addEventListener('click',(event)=>{
            let elementNo=event.target.className;
            list.splice(Number(elementNo),1);
            localStorage.setItem('addedInCart',JSON.stringify(list));
            // window.location.reload();
            addedProductInCart.innerHTML="";
            renderCart();
            quantityIncreaseDecrease();
            deleteCartItem();
            totalPriceCalculate();
            

            // window.location.reload();
        });
    
    })
}
deleteCartItem();

function changeValueAccordingInputChange(){
    let noOfItem=document.querySelectorAll('.counter input');
    noOfItem.forEach((el)=>{
        el.addEventListener('input',(e)=>{
            
            if(e.target.value<=0 && e.target.value!=''){
                e.target.value=1;
                alert("Please enter valid input");
                return;

            }
            list[Number(e.target.className)]["quantity"]=e.target.value;
            // console.log(list[Number(inputValue.className)]["quantity"]);
            localStorage.setItem('addedInCart',JSON.stringify(list));
            totalPriceCalculate();
        })
    })
    noOfItem.forEach((el)=>{
        el.addEventListener('change',(e)=>{
            
            if(e.target.value<=0 || e.target.value==''){
                e.target.value=1;
                alert("Please enter valid input");
            }
            list[Number(e.target.className)]["quantity"]=e.target.value;
            // console.log(list[Number(inputValue.className)]["quantity"]);
            localStorage.setItem('addedInCart',JSON.stringify(list));
            totalPriceCalculate();
        })
    })
}
changeValueAccordingInputChange();



function forEmptyCart(){
    let cartHeading=document.querySelector('.added-product>h1');
    if(cartHeading.nextElementSibling.innerHTML==""){
        cartHeading.innerHTML='Shopping Cart is Empty.<p>For more shopping please go to <a href="./index.html">Home page</a>.</p>'
    }
    else{
        cartHeading.innerHTML="Shopping Cart";
    }
}
forEmptyCart();


// Calculate total price of all added items in the cart.
const totalItems=document.querySelector('.totalItems');
function totalPriceCalculate(){
    let noOfItems=list.length;
    let totalPrices=0;list.map(el=>{totalPrices+=Number(el["price"])*Number(el["quantity"])});
    let discount=Number(totalPrices*20/100);
    let deliveryFee="Free";
    let packingFee="Free";
    let totalAmount=Number(totalPrices)-Number(discount);
    checkOutSection(noOfItems,totalPrices,discount,deliveryFee,packingFee,totalAmount);
    checkOut();
}
totalPriceCalculate();

function checkOutSection(noOfItems,totalPrices,discount,deliveryFee,packingFee,totalAmount){
    let el=`<div class="totalPrices">
    <p>Price(${noOfItems} Items)</p>
    <p>₹ ${totalPrices}</p>
    </div>
    <div class="totalDiscount">
        <p>Discount</p>
        <p>₹ -${discount}</p>
    </div>
    <div class="deliveryCharge">
        <p>Delivery Charge</p>
        <p class="free">${deliveryFee}</p>
    </div>
    <div class="packingFee">
        <p>Packing Fee</p>
        <p class="free">${packingFee}</p>
    </div>
    <div class="finalAmount">
        <h3>Total Amount:</h3>
        <h3 id="finalAmount">₹ <span>${totalAmount}</span></h3>
    </div>
    <div class="totalSave free">You will save ₹ ${discount} on this order</div>
    <button class="checkOutBtn">Proceed to Checkout</button>`;
    totalItems.innerHTML=el;
}

// Payment Integration;

function checkOut(){
    const checkOutBtn=document.querySelector('.checkOutBtn');
    const finalAmount=document.querySelector('#finalAmount>span');
    checkOutBtn.addEventListener('click',()=>{
        if(finalAmount.innerHTML=="0"){
            alert("Please add some products in the cart.");
            return;
        }
        else{
            let amount=Number(finalAmount.innerHTML)*100;
            paymentIntegration(amount);
            console.log(finalAmount.innerHTML);
        }
        
    });
}
checkOut();


function paymentIntegration(amount){
   let options = {
       "key": "rzp_test_oCuH8toxFLvO5u", 
       "amount": `${amount}`, 
       "currency": "INR",
       "name": "Fooder free",
       "description": "Pay & Checkout this Course, Upgrade your DSA Skill",
       "handler": function (response){
           console.log(response)
           alert("Thank you for purchasing.");
           list=[];
          // document.postlink.submit();
          document.location.href='/index.html';
          
       },
       "prefill": {
          //Here we are prefilling random contact
         "contact":"9876543210", 
           //name and email id, so while checkout
         "name": "TJaihind kushwahah",  
         "email": "jaihindkushwaha672001@gmail.com"
       },
      "notes" : {
         "description":"Best Course for SDE placements",
         "language":"Available in 4 major Languages JAVA, C/C++, Python, Javascript",
         "access":"This course have Lifetime Access"
       }, 
       "theme": {
           "color": "#2300a3"
       }
   };
   let razorpayObject = new Razorpay(options);
   console.log(razorpayObject);
   razorpayObject.on('payment.failed', function (response){
         console.log(response);
         alert("This step of Payment Failed");
   });
    razorpayObject.open();
}







window.onbeforeunload=()=>{localStorage.setItem('addedInCart',JSON.stringify(list));}









