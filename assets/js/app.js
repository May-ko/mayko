let btn_mg=document.getElementById('btn_mg');
let btn_ph=document.getElementById('btn_ph');
let btn_il=document.getElementById('btn_il');

let mg=document.getElementById('mg');
let ph=document.getElementById('ph');
let il=document.getElementById('il');


btn_mg.addEventListener('click', (event)=>{
    
    if(!ph.classList.contains('hidden')){
        ph.classList.toggle('hidden');
    }
    
    if(!il.classList.contains('hidden')){
        il.classList.toggle('hidden');
    }
    mg.classList.toggle('hidden');
});

btn_ph.addEventListener('click',(event)=>{  
    
    if(!mg.classList.contains('hidden')){
        mg.classList.toggle('hidden');
    }
    
    if(!il.classList.contains('hidden')){
        il.classList.toggle('hidden');
    }

    ph.classList.toggle('hidden');
});

btn_il.addEventListener('click', (event)=>{
    
    if(!mg.classList.contains('hidden')){
        mg.classList.toggle('hidden');
    }
    
    if(!ph.classList.contains('hidden')){
        ph.classList.toggle('hidden');
    }

    il.classList.toggle('hidden');
});

// Carousel code
let btn_prev=document.getElementById('btn_prev');
let btn_next=document.getElementById('btn_next');

let items=document.getElementsByClassName('img');
let index=0;



function check(){
    if(index==0){
        btn_prev.setAttribute('disabled',true);
    }else{
        btn_prev.removeAttribute('disabled');
    }
}

check();

btn_prev.addEventListener('click',(e)=>{
    if(index>0){
        for(let i=0;i<items.length;i++){
            items[i].classList.remove(`fade-${index}x`);
        }
        index--;
   };
   check();
});

btn_next.addEventListener('click',(e)=>{
    if(index>=6){
        for(let i=0;i<items.length;i++){
            for(let j=0;j<items.length;j++){
                items[i].classList.remove(`fade-${j+1}x`);
            }
        }
        index=0;
    }else{
        for(let i=0;i<items.length;i++){
            items[i].classList.add(`fade-${index+1}x`);
        }
        index++;
    }
    check();
});
