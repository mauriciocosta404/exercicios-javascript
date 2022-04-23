'use strict'

const button=document.querySelector('button');

button.addEventListener('click',(event)=>{

    event.preventDefault();
   const unity=document.querySelector('#units').value;

    const kil=document.querySelector("#kil").value;

    convert(kil);

    setData(unity,kil)


})

function verify(unity,kil) {
    let result;

    if(unity==='grama'){
        result=calc(kil,1000);
    }  
    if(unity==='hectograma'){
        result=calc(kil,10);
    }   
    if(unity==='decigrama'){
        result=calc(kil,100000);
    }  
    if(unity==='dacagrama'){
        result=calc(kil,100);
    }  
    if(unity==='miligrama'){
        result=calc(kil,1000000);
    }  
    if(unity==='centigrama'){
        result=calc(kil,10000);
    } 
    return result;
}

function calc(kil,number) {
    
    return kil*number;
}

function convert(kil) {
    kil=Number.parseFloat(kil);
}

function setData(unity,kil) {
    document.querySelector(".result").innerHTML=`<p>${verify(unity,kil)} ${unity}</p>`;
    
}