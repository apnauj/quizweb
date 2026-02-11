'use strict'

const $ = (selector) => document.querySelector(selector);

const btnReiniciar = $("#btnReiniciar");
const btnClick = $("#btnClick");
const grupo = $("#grupo");
const codigo = $("#codigo");

grupo.textContent = "sc01";
codigo.textContent = "1114153850";

let click = 0;
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
    console.log(click);
}

function render(){
    $("#msg").textContent = click;
}

function resetAll(){
    click = 0;
    render();
}