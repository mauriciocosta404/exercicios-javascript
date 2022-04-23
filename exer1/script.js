"use strict"

const button=document.querySelector("button");

button.addEventListener("click",(event)=>{
    event.preventDefault();
    const mark1=document.querySelector(".mark1").value;
    const mark2=document.querySelector(".mark2").value;
    const mark3=document.querySelector(".mark3").value;

    document.querySelector('.resultado').innerHTML+=`<p>Media=${
        convert(mark1,mark2,mark3)}</p>
        <p>sexo: ${sexo()}</>`;    
})


function convert(n1,n2,n3){
    n1=Number.parseInt(n1);
    n2=Number.parseInt(n2)
    n3=Number.parseInt(n3);

    return media(n1,n2,n3)
}

function media(n1,n2,n3){
    
    const media=(n1+n2+n3)/3;

    return media;
}
function sexo() {

    const masculino=document.querySelector('#masculino');
    let result;

    const femenino=document.querySelector('#femenino');

    if(masculino.checked){
        result='<i class="fas fa-male"></i>'
    }
    if(femenino.checked){
        result='<i class="fas fa-female"></i>'
    }
    return result;

}