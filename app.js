'use strict'

const $ = (selector) => document.querySelector(selector);

const btnReiniciar = $("#btnReiniciar");
const btnClick = $("#btnClick");
const grupo = $("#grupo");
const codigo = $("#codigo");

grupo.textContent = "sc01";
codigo.textContent = "1114153850";

let click = 0;
let clicks = [0,0,0,0];

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
    let i=0;
    console.log("Los últimos 5 clicks son: ");
    while(i < 5){
        console.log(clicks[clicks.length - i - 1]);
        i++;
    }
}

function resetAll(){
    click = 0;
    clicks = [0,0,0,0,0];
    render();
}

