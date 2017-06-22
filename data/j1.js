var scrap = 0;
var produto = 0;
var trabalhadormat = 0;
var trabalhadores = 0;
var limitemat = 0;
var limiteprodu = 0;
var i;
var dinheiro = 0;
limitemat = limitemat + 60;
limiteprodu = limiteprodu + 10;

/* PRODUZIR MATERIAL */
function produzirmat(){
  move();
  setTimeout(finishmat, 1000);
}

function finishmat(){
  if(scrap == limitemat){
    alert("limite do estoque atingido");
  }else {
    scrap = scrap + 10;
    document.getElementById('Mattxt1').innerHTML = scrap;
  }
  desbloqueia();
}

function desbloqueia(){
  if(scrap >= 30){
    /*trab1.style.visibility = "visible";
    trab.style.visibility = "visible";*/
    menu1.style.visibility = "visible";
    menu2.style.visibility = "visible";
    menu3.style.visibility = "visible";
  }
}
/* TRABALHADORES*/
function gastar(){
  if(scrap >= 30){
  scrap = scrap - 30;
  trabalhador++;
  document.getElementById('trab1').innerHTML = trabalhador;
}else{
  alert("saldo insuficiente");
}
  document.getElementById('Mattxt1').innerHTML = scrap;
}
/* AUTOMATIZAR MATERIAL*/
function automatizar() {
  btscrap.style.visibility = "hidden";
  myProgress.style.visibility = "hidden";
  setInterval(automatizar2, 900);
}

function automatizar2(){
    scrap = scrap + 10*trabalhador;
    if(scrap-limitemat > -10){
      scrap = limitemat;
      document.getElementById('Mattxt1').innerHTML = scrap;
  }else {
    document.getElementById('Mattxt1').innerHTML = scrap;
  }
}
/* ANIMAÇÃO BARRA*/
function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
/* PRODUTO */
function produzirprodu(){
  move1();
  setTimeout(finishprodu, 1000);
}

function finishprodu(){
  if(produto == limiteprodu){
    alert("limite do estoque atingido");
  }else {
    if(scrap-20 < 0){
      alert("Material insuficiente");
    }else {
    scrap = scrap - 20;
    produto = produto + 1;
    document.getElementById('produtxt1').innerHTML = produto;
    document.getElementById('Mattxt1').innerHTML = scrap;
  }
 }
}
function move1() {
    var elem = document.getElementById("myBar1");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
/* VENDA */
function venda(){
  move2();
  setTimeout(finishvenda, 1000);
}
function finishvenda(){
    if(produto <= 0){
      alert("Produto insuficiente");
    }else {
    dinheiro = dinheiro + 1;
    produto = produto - 1;
    document.getElementById('vendatxt1').innerHTML = dinheiro;
    document.getElementById('produtxt1').innerHTML = produto;
    Info.style.visibility = "visible";
    document.getElementById('Info').innerHTML = "Orgulhoso(a)!";

  }
 }

function move2() {
    var elem = document.getElementById("myBar2");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
/* INFOS*/
