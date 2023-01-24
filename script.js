// Selector
const Buttons=document.querySelectorAll('.menuImag');
const scrollBtn=document.querySelector('.scroll-up');
const bar1=document.querySelector('.bar1');
const bar2=document.querySelector('.bar2');
const sideNav=document.querySelector('.sidenav');

// Featured Button Show
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
// Scroll up 
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
// Side bar feature
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












