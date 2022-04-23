"use strict"

const button=document.querySelector("button");

button.addEventListener("click",(event)=>{
    event.preventDefault();

    let salary=document.querySelector('#salary').value;
    let percentual=document.querySelector('#percentual').value;

    convert(salary,percentual)

   setData(salary,percentual);


  
});

function aument(salary,percentual) {
    

    let aux=(salary*percentual)/100;
       
       
       return aux;
}

function newSalary(add,salary) {

    salary=Number.parseFloat(salary);
    const result=add+salary;
   
    return result;
}

function setData(salary,percentual) {

    const add=aument(salary,percentual);

    let aux;
    document.querySelector('.user-results').innerHTML+=`<p>Novo salario: ${newSalary(add,salary)}</p>
    <p>Percentual de aumento: ${percentual}</p>
    <p>aumento:${aument(salary,percentual)}</p>`
}

function convert(salary,percentual) {
    
    salary=Number.parseFloat(salary);
    percentual=Number.parseFloat(percentual);
}