
let d1 = document.getElementById('dot1');
let d2 = document.getElementById('dot2');
let d3 = document.getElementById('dot3');
let d4 = document.getElementById('dot4');
let s1 = document.getElementById('no1');
let s2 = document.getElementById('no2');
let s3 = document.getElementById('no3');
let s4 = document.getElementById('no4');

function fun1(){
    if(s1.style.display='none'){
        s1.style.display='flex';
        s2.style.display='none';
        s3.style.display='none';
        s4.style.display='none';
    }
 };
  d1.addEventListener('click',fun1);

function fun2(){
    if(s2.style.display='none'){
       s2.style.display='flex';
       s1.style.display='none';
       s3.style.display='none';
       s4.style.display='none';

   }
   else{  
    s1.style.display='flex'; 
    s2.style.display='none';
    s3.style.display='none';
    s4.style.display='none';
   }
};
 d2.addEventListener('click',fun2);

 function fun3(){
    if(s3.style.display='none'){
        s3.style.display='flex';
        s1.style.display='none';
        s2.style.display='none';
        s4.style.display='none';
    }
    else{
        s1.style.display='flex'; 
        s2.style.display='none';
        s3.style.display='none';
        s4.style.display='none';
    }
 };
  d3.addEventListener('click',fun3);

  function fun4(){
    if(s4.style.display='none'){
        s4.style.display='flex';
        s1.style.display='none';
        s2.style.display='none';
        s3.style.display='none';
    }
    else{
        s1.style.display='flex'; 
        s2.style.display='none';
        s3.style.display='none';
        s4.style.display='none';
    }
 };
  d4.addEventListener('click',fun4);
