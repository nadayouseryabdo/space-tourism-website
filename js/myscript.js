let a = document.getElementById('l1');
let b = document.getElementById('l2');
let c = document.getElementById('l3');
let d = document.getElementById('l4');
let x = document.getElementById('moon');
let y = document.getElementById('mars');
let z = document.getElementById('europa');
let w = document.getElementById('titan');

function myFun1(){
    if(x.style.display='none'){
        y.style.display='none';
        z.style.display='none';
        w.style.display='none';
        x.style.display='flex';
    }
 };
  a.addEventListener('click',myFun1);

function myFun2(){
   if(y.style.display='none'){
       x.style.display='none';
       z.style.display='none';
       w.style.display='none';
       y.style.display='flex';
   }
   else{
    y.style.display='none';
    z.style.display='none';
    w.style.display='none';
    x.style.display='flex'; 
   }
};
 b.addEventListener('click',myFun2);


 function myFun3(){
    if(z.style.display='none'){
        x.style.display='none';
        y.style.display='none';
        w.style.display='none';
        z.style.display='flex';
    }
    else{
     y.style.display='none';
     w.style.display='none';
     z.style.display='none';
     x.style.display='flex'; 
    }
 };
  c.addEventListener('click',myFun3);

  function myFun4(){
    if(w.style.display='none'){
        x.style.display='none';
        y.style.display='none';
        z.style.display='none';
        w.style.display='flex';
    }
    else{
     w.style.display='none';
     y.style.display='none';
     z.style.display='none';
     x.style.display='flex'; 
    }
 };
  d.addEventListener('click',myFun4);


