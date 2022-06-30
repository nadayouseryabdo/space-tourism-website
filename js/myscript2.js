
let bot1 = document.getElementById('b1');
let bot2 = document.getElementById('b2');
let bot3 = document.getElementById('b3');
let sec1 = document.getElementById('s1');
let sec2 = document.getElementById('s2');
let sec3 = document.getElementById('s3');

function bu1(){
    if(sec1.style.display='none'){
        sec2.style.display='none';
        sec3.style.display='none';
        sec1.style.display='flex';
    }
 };
  bot1.addEventListener('click',bu1);

function bu2(){
   if(sec2.style.display='none'){
       sec1.style.display='none';
       sec3.style.display='none';
       sec2.style.display='flex';
   }
   else{
    sec2.style.display='none';
    sec3.style.display='none';
    sec1.style.display='flex'; 
   }
};
 bot2.addEventListener('click',bu2);


 function bu3(){
    if(sec3.style.display='none'){
        sec1.style.display='none';
        sec2.style.display='none';
        sec3.style.display='flex';
    }
    else{
     sec2.style.display='none';
     sec3.style.display='none';
     sec1.style.display='flex'; 
    }
 };
  bot3.addEventListener('click',bu3);