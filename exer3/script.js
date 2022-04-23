"use strict"

const button=document.querySelector("button");

button.addEventListener("click",(event)=>{
    
    event.preventDefault();

    const mensured=document.querySelector('#mensured').value;

    convert(mensured);

    setData(mensured);
    
});

function convert(mensured) {
    mensured=Number.parseFloat(mensured);
}

function polegadas(mensured) {
    let polegadas=mensured*12;

    return polegadas;
}

function jardas(mensured) {
    let jardas=mensured/3;

    return jardas;
}

function milha(mensured) {


    let milha=mensured/5280;
    return milha;
    
}

function setData(mensured) {
    document.querySelector('.user-data').innerHTML+=`<p>Medida em polegadas: ${polegadas(mensured)}</p>
    <p>Medida em jardas: ${jardas(mensured)}</p>
    <p>Medida em milhas: ${milha(mensured)}</p>`
}
