'use strict'

const $ = (selector) => document.querySelector(selector);

const btnReiniciar = $("#btnReiniciar");
const btnClick = $("#btnClick");
const grupo = $("#grupo");
const codigo = $("#codigo");

grupo.textContent = "sc01";
codigo.textContent = "1114153850";

let click = 0;
let clicks = [];

$("#msg").textContent = click;

btnClick.addEventListener("click",(e)=>{
    e.preventDefault();
    addClick();
    render();
});

btnReiniciar.addEventListener("click",(e)=>{
    resetAll();
})

function addClick(){
    click++;
    clicks.push(click);
}

function render(){
    $("#msg").textContent = click;
    const listaUI = $("#items");

    listaUI.innerHTML ="";

    let inicio = clicks.length - 5;

    if(inicio < 0){
        inicio = 0;
    }

    for(let i = inicio; i <clicks.length; i++){
        const li = document.createElement("li");
        li.textContent = "Click número: " + clicks[i];
        listaUI.appendChild(li);
    }

}

function resetAll(){
    click = 0;
    clicks = [];
    render();
}

