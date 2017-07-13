var material = 0;
var produto = 0;
var trabalhadormat = 0;
var trabalhadorprodu = 0;
var trabalhadorvenda = 0;
var trabalhadores = 0;
var forcadetrabalho = 0;
var limitemat = 60;
var limiteprodu = 10;
var i;
var dinheiro = 0;
var ferramentas = 0;
var nivelestoque = 1;
var eventtrigger = 0;
var salarioatrasado = 0;
var salarioreal = 0.5;
var salario = 1;
var timer1, timer2, timer3, timer4, timer5;
var satisfacao = 0;
var lugar = -1;
var limitelugar = 0;
var limiteferramentas = 0;
var limiteestoque = 0;
var numeroestoque, numeroestoque1, numeroestoque2;
var numeroferramentas, numeroferramentas1, numeroferramentas2;
var numerolugar, numerolugar1, numerolugar2;
var preco, preco1, preco2;
var precoalug, precoalug1, precoalug2;
var timeralug, timeralug1, timeralug2;

timer5 = setInterval(always, 200);
function always() {
  if(lugar == -1){
    limitelugar = 3;
    limiteferramentas = 4;
    limiteestoque = 3;
  }
  document.getElementById('menu7').innerHTML = trabalhadores;
  document.getElementById('menu8').innerHTML = satisfacao;
  if (satisfacao > 3) {
    document.getElementById("img2").src = "data/good.png";
}
  if(satisfacao < 3 && satisfacao > 0){
    document.getElementById("img2").src = "data/neutral.png";
}
  if(satisfacao < 0){
    document.getElementById("img2").src = "data/bad.png";
}
}
/* PRODUZIR MATERIAL */
function produzirmat(){
  move();
  btmaterial.style.opacity = "0.6";
  btmaterial.style.cursor = "wait";
  setTimeout(finishmat, 1000);
}

function finishmat(){
  if(material >= limitemat){
    material = limitemat;
    alert("limite do estoque atingido");
    document.getElementById('Mattxt1').innerHTML = material;
    document.getElementById('Mattxt3').innerHTML = "/" + limitemat;
    Mattxt3.style.visibility = "visible";
    btmaterial.style.opacity = "1";
    btmaterial.style.cursor = "auto";
  }else {
    material = material + 10+ferramentas;
    document.getElementById('Mattxt1').innerHTML = material;
    btmaterial.style.opacity = "1";
    btmaterial.style.cursor = "auto";
  }
  desbloqueia();
}

function desbloqueia(){
  if(material >= 30){
    menu1.style.visibility = "visible";
    menu2.style.visibility = "visible";
    menu3.style.visibility = "visible";
  }
  if(dinheiro == 1){
    document.getElementById('menu6').style.color = "red";
    menu6.style.visibility = "visible";
    d1.style.visibility = "visible";
  }
  if(dinheiro >= 3){
    menu4.style.visibility = "visible";
    d2.style.visibility = "visible";
    d3.style.visibility = "visible";
    document.getElementById('nivelestoque').innerHTML = nivelestoque;
    document.getElementById('nivelferramentas').innerHTML = ferramentas;
    document.getElementById('menu6').style.color = "red";
  }

  if(dinheiro >= 10){
    menu5.style.visibility = "visible";
    btgastar.style.visibility = "visible";
    bttrabmatmais.style.visibility = "visible";
    bttrabmatmenos.style.visibility = "visible";
    btautoma.style.visibility = "visible";
    btmanual.style.visibility = "visible";
    bttrabprodumais.style.visibility = "visible";
    bttrabprodumenos.style.visibility = "visible";
    btautoma1.style.visibility = "visible";
    btmanual1.style.visibility = "visible";
    bttrabvendamais.style.visibility = "visible";
    bttrabvendamenos.style.visibility = "visible";
    btautoma2.style.visibility = "visible";
    btmanual2.style.visibility = "visible";
    trab1.style.visibility = "visible";
    trab.style.visibility = "visible";
    produtxt2.style.visibility = "visible";
    produtxt3.style.visibility = "visible";
    vendatxt2.style.visibility = "visible";
    vendatxt3.style.visibility = "visible";
    document.getElementById('trab').innerHTML = "Trabalhadores";
    document.getElementById('trabtot3').innerHTML = salario;
    img1.style.visibility = "visible";
    document.getElementById('menu7').innerHTML = trabalhadores;
    menu7.style.visibility = "visible";
    img2.style.visibility = "visible";
    document.getElementById('menu8').innerHTML = satisfacao;
    menu8.style.visibility = "visible";
    document.getElementById('menu6').style.color = "red";
  }
  if(document.getElementById('Mattxt3').innerHTML == "/" + limitemat){
    d4.style.visibility = "visible";
  }
  if(forcadetrabalho == 3){
    d5.style.visibility = "visible";
    document.getElementById('menu6').style.color = "red";
  }
}
/* STATUS */


/* TRABALHADORES*/
function gastar(){
  if(forcadetrabalho < limitelugar){
  if(dinheiro >= 7){
    dinheiro = dinheiro - 5;
    trabalhadores++;
    forcadetrabalho++;
    document.getElementById('vendatxt1').innerHTML = dinheiro;
    document.getElementById('trabtot1').innerHTML = trabalhadores;
    document.getElementById('menu7').innerHTML = trabalhadores;
    timer1 = setInterval(pagamento, 10000);
}else{
  alert("dinheiro insuficiente");
}
}else{
  alert("Sem espaço para mais trabalhadores.");
}
}
function trabalhadoresMatmais(){
  if(trabalhadores > 0){
  trabalhadormat++;
  trabalhadores--;
  document.getElementById('trab1').innerHTML = trabalhadormat;
  document.getElementById('trabtot1').innerHTML = trabalhadores;

}
}
function trabalhadoresMatmenos(){
  if(trabalhadormat > 0){
  trabalhadormat--;
  trabalhadores++;
  document.getElementById('trab1').innerHTML = trabalhadormat;
  document.getElementById('trabtot1').innerHTML = trabalhadores;
}}
function trabalhadoresPromais(){
    if(trabalhadores > 0){
  trabalhadorprodu++;
  trabalhadores--;
  document.getElementById('produtxt3').innerHTML = trabalhadorprodu;
  document.getElementById('trabtot1').innerHTML = trabalhadores;
}}
function trabalhadoresPromenos(){
  if(trabalhadorprodu > 0){
  trabalhadorprodu--;
  trabalhadores++;
  document.getElementById('produtxt3').innerHTML = trabalhadorprodu;
  document.getElementById('trabtot1').innerHTML = trabalhadores;
}}
function trabalhadoresVendamais(){
    if(trabalhadores > 0){
  trabalhadorvenda++;
  trabalhadores--;
  document.getElementById('vendatxt3').innerHTML = trabalhadorvenda;
  document.getElementById('trabtot1').innerHTML = trabalhadores;
}}
function trabalhadoresVendamenos(){
  if(trabalhadorvenda > 0){
  trabalhadorvenda--;
  trabalhadores++;
  document.getElementById('vendatxt3').innerHTML = trabalhadorvenda;
  document.getElementById('trabtot1').innerHTML = trabalhadores;
}}

function demitir(){
  if(trabalhadores == 0 || forcadetrabalho == 0){
  }else{
   dinheiro= dinheiro-5;
   trabalhadores--;
   forcadetrabalho--;
   document.getElementById('trabtot1').innerHTML = trabalhadores;
   document.getElementById('vendatxt1').innerHTML = dinheiro;
}}
/* PAGAMENTO  */
function pagamento() {
  dinheiro = dinheiro - salarioreal*forcadetrabalho
  document.getElementById('vendatxt1').innerHTML = dinheiro;
  if(dinheiro <= 0){
    if(trabalhadores > 0){
      satisfacao= satisfacao-1;
    }
    salarioatrasado = salarioatrasado + salarioreal*forcadetrabalho;
    document.getElementById('trabtot6').innerHTML = salarioatrasado;
    if(salarioatrasado <= -5){
      clearInterval(timer1);
    }
  }
 }

function pagarsalarioatrasado(){
  dinheiro = dinheiro - salarioatrasado;
  satisfacao = 0;
  document.getElementById('trabtot6').innerHTML = salarioatrasado;
}
function subirsalario(){
  salarioreal = salarioreal+0.5;
  salario = salario+1;
  satisfacao = satisfacao + 1;
  document.getElementById('trabtot3').innerHTML = salario;
  document.getElementById('menu8').innerHTML = satisfacao;
}
function diminuirsalario(){
  if(salarioreal > 0){
  salarioreal = salarioreal-0.5;
  salario = salario-1;
  document.getElementById('trabtot3').innerHTML = salario;
  satisfacao = satisfacao - 1;
  document.getElementById('menu8').innerHTML = satisfacao;
}
}
/* AUTOMATIZAR MATERIAL*/
function automatizarmat() {
  btmaterial.style.visibility = "hidden";
  btautoma.style.visibility = "hidden";
  myProgress.style.visibility = "hidden";
  timer2 = setInterval(automatizar2, 900);
}
function automatizar2(){
    material = material + (10*trabalhadormat)+ferramentas;
    if(material-limitemat > -10){
      material = limitemat;
      document.getElementById('Mattxt1').innerHTML = material;
  }else {
      document.getElementById('Mattxt1').innerHTML = material;
  }
}
/* MANUAL material */
function manual(){
  btmaterial.style.visibility = "visible";
  myProgress.style.visibility = "visible";
  btautoma.style.visibility = "visible";
  clearInterval(timer2);
}
/* AUTOMATIZAR PRODUTO*/
function automatizarprodu() {
  btproduto.style.visibility = "hidden";
  btautoma1.style.visibility = "hidden";
  myProgress1.style.visibility = "hidden";
  timer3 = setInterval(automatizar3, 900);
}
function automatizar3(){
  if(material-20 <= 10){

  }else{
    produto = produto + 1*trabalhadorprodu+(ferramentas);
    material =  material-20*trabalhadorprodu;
    if(produto-limiteprodu > -1){
      produto = limiteprodu;
      document.getElementById('produtxt1').innerHTML = produto;
      document.getElementById('Mattxt1').innerHTML = material;
  }else {
    document.getElementById('produtxt1').innerHTML = produto;
    document.getElementById('Mattxt1').innerHTML = material;
  }
 }
}
/* MANUAL produto */
function manual1(){
  btproduto.style.visibility = "visible";
  myProgress1.style.visibility = "visible";
  btautoma1.style.visibility = "visible";
  clearInterval(timer3);
}
/* AUTOMATIZAR VENDA*/
function automatizarvenda() {
  btvenda.style.visibility = "hidden";
  btautoma2.style.visibility = "hidden";
  myProgress2.style.visibility = "hidden";
  timer4 = setInterval(automatizar4, 900);
}
function automatizar4(){
  if(produto - 1 <= 0){

  }else {
    dinheiro = dinheiro + 1*trabalhadorvenda;
    produto =  produto-1*trabalhadorvenda;
    document.getElementById('vendatxt1').innerHTML = dinheiro;
    document.getElementById('produtxt1').innerHTML = produto;
    document.getElementById('Mattxt1').innerHTML = material;
}
}
/* MANUAL venda */
function manual2(){
  btvenda.style.visibility = "visible";
  myProgress2.style.visibility = "visible";
  btautoma2.style.visibility = "visible";
  clearInterval(timer4);
}

/* ANIMAÇÃO BARRA*/
function move() {
    var elem = document.getElementById("myBar");
    var width = 1*ferramentas+1;
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
  btproduto.style.opacity = "0.6";
  btproduto.style.cursor = "wait";
  move1();
  setTimeout(finishprodu, 1000);
}

function finishprodu(){
  if(produto >= limiteprodu){
    produto = limiteprodu;
    alert("limite do estoque atingido");
    document.getElementById('produtxt1').innerHTML = produto;
    document.getElementById('produtxt4').innerHTML = "/" + limiteprodu;
    produtxt4.style.visibility = "visible";
    btproduto.style.opacity = "1";
    btproduto.style.cursor = "auto";
  }else {
    if(material == 0){
      alert("Material insuficiente");
      btproduto.style.opacity = "1";
      btproduto.style.cursor = "auto";
    }else if(material-20 < 0){
      alert("Material insuficiente");
      btproduto.style.opacity = "1";
      btproduto.style.cursor = "auto";
    }else {
    material = material - 20;
    produto = produto + 1 + (ferramentas);
    document.getElementById('produtxt1').innerHTML = produto;
    document.getElementById('Mattxt1').innerHTML = material;
    btproduto.style.opacity = "1";
    btproduto.style.cursor = "auto";
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
  btvenda.style.opacity = "0.6";
  btvenda.style.cursor = "wait";
  move2();
  setTimeout(finishvenda, 1000);
}
function finishvenda(){
    if(produto <= 0){
      alert("Produto insuficiente");
      btvenda.style.opacity = "1";
      btvenda.style.cursor = "auto";
    }else {
    dinheiro = dinheiro + 1;
    produto = produto - 1;
    document.getElementById('vendatxt1').innerHTML = dinheiro;
    document.getElementById('produtxt1').innerHTML = produto;
    btvenda.style.opacity = "1";
    btvenda.style.cursor = "auto";
  }
  desbloqueia();
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
/* MERCADO */
function comprarferramentas(){
  if(ferramentas == limiteferramentas){
  }else {
  if(dinheiro >= 3){
    dinheiro = dinheiro -3;
    ferramentas++;
    document.getElementById('nivelferramentas').innerHTML = ferramentas;
    document.getElementById('vendatxt1').innerHTML = dinheiro;
    desbloqueia();
    } else {
  alert("Dinheiro insuficiente");
}
}
}

function estoque(){
  if(limitemat == limiteestoque){
  }else {
    dinheiro = dinheiro-5;
    limitemat = limitemat+10;
    limiteprodu = limiteprodu+2;
    nivelestoque = nivelestoque+1;
    document.getElementById('vendatxt1').innerHTML = dinheiro;
    document.getElementById('Mattxt3').innerHTML = "/" + limitemat;
    document.getElementById('produtxt4').innerHTML = "/" + limiteprodu;
    document.getElementById('nivelestoque').innerHTML = nivelestoque;
  }
}

function mostrarlugares(){
   gerarlugares();
   lugares.style.visibility = "visible";
}
function gerarlugares(){
  if(satisfacao > 3){
    /* barato*/
    numeroestoque = parseInt((Math.random()*25)+10);
    numeroferramentas = parseInt((Math.random()*7)+3);
    numerolugar = parseInt((Math.random()*6)+3);
    document.getElementById('maxestoque1').innerHTML = numeroestoque;
    document.getElementById('maxferramentas1').innerHTML = numeroferramentas;
    document.getElementById('maxtrabalhadores1').innerHTML = numerolugar;
    var precotot = numeroestoque+numeroferramentas+numerolugar;
    if(precotot > 25){
      preco = parseInt((Math.random()*300)+200);
      precoalug = preco*0.3;
    }else if(precotot < 25 && precotot > 13){
      preco = parseInt((Math.random()*200)+100);
      precoalug = preco*0.3;
    } else if (precotot < 13) {
      preco = parseInt((Math.random()*100)+55);
      precoalug = preco*0.3;
    }
    /* custo beneficio*/
    numeroestoque1 = parseInt((Math.random()*45)+20);
    numeroferramentas1 = parseInt((Math.random()*14)+6);
    numerolugar1 = parseInt((Math.random()*12)+6);
    document.getElementById('maxestoque2').innerHTML = numeroestoque1;
    document.getElementById('maxferramentas2').innerHTML = numeroferramentas1;
    document.getElementById('maxtrabalhadores2').innerHTML = numerolugar1;
    var precotot1 = numeroestoque1+numeroferramentas1+numerolugar1;
    if(precotot1 > 25){
      preco1 = parseInt((Math.random()*300)+200);
      precoalug1 = preco1*0.3;
    }else if(precotot1 < 25 && precotot1 > 13){
      preco1 = parseInt((Math.random()*200)+100);
      precoalug1 = preco1*0.3;
    } else if (precotot1 < 13) {
      preco1 = parseInt((Math.random()*100)+55);
      precoalug1 = preco1*0.3;
    }
    /* caro*/
    numeroestoque2 = parseInt((Math.random()*700)+100);
    numeroferramentas2 = parseInt((Math.random()*30)+20);
    numerolugar2 = parseInt((Math.random()*30)+15);
    document.getElementById('maxestoque3').innerHTML = numeroestoque2;
    document.getElementById('maxferramentas3').innerHTML = numeroferramentas2;
    document.getElementById('maxtrabalhadores3').innerHTML = numerolugar2;
    var precotot2 = numeroestoque2+numeroferramentas2+numerolugar2;
    if(precotot2 > 25){
      preco2 = parseInt((Math.random()*300)+200);
      precoalug2 = preco2*0.3;
    }else if(precotot2 < 25 && precotot2 > 13){
      preco2 = parseInt((Math.random()*200)+100);
      precoalug2 = preco2*0.3;
    } else if (precotot2 < 13) {
      preco2 = parseInt((Math.random()*100)+55);
      precoalug2 = preco2*0.3;
    }
  }
  if(satisfacao == 0){
    /* barato*/
    numeroestoque = parseInt((Math.random()*5)+2);
    numeroferramentas = parseInt((Math.random()*7)+3);
    numerolugar = parseInt((Math.random()*5)+3);
    document.getElementById('maxestoque1').innerHTML = numeroestoque;
    document.getElementById('maxferramentas1').innerHTML = numeroferramentas;
    document.getElementById('maxtrabalhadores1').innerHTML = numerolugar;
    var precotot = numeroestoque+numeroferramentas+numerolugar;
    if(precotot > 25){
      preco = parseInt((Math.random()*300)+200);
      precoalug = preco*0.3;
    }else if(precotot < 25 && precotot > 13){
      preco = parseInt((Math.random()*200)+100);
      precoalug = preco*0.3;
    } else if (precotot < 13) {
      preco = parseInt((Math.random()*100)+55);
      precoalug = preco*0.3;
    }
    /* custo beneficio*/
    numeroestoque1 = parseInt((Math.random()*10)+4);
    numeroferramentas1 = parseInt((Math.random()*14)+6);
    numerolugar1 = parseInt((Math.random()*12)+6);
    document.getElementById('maxestoque2').innerHTML = numeroestoque1;
    document.getElementById('maxferramentas2').innerHTML = numeroferramentas1;
    document.getElementById('maxtrabalhadores2').innerHTML = numerolugar1;
    var precotot1 = numeroestoque1+numeroferramentas1+numerolugar1;
    if(precotot1 > 25){
      preco1 = parseInt((Math.random()*300)+200);
      precoalug1 = preco1*0.3;
    }else if(precotot1 < 25 && precotot1 > 13){
      preco1 = parseInt((Math.random()*200)+100);
      precoalug1 = preco1*0.3;
    } else if (precotot1 < 13) {
      preco1 = parseInt((Math.random()*100)+55);
      precoalug1 = preco1*0.3;
    }
    /* caro*/
    numeroestoque2 = parseInt((Math.random()*625)+70);
    numeroferramentas2 = parseInt((Math.random()*40)+25);
    numerolugar2 = parseInt((Math.random()*26)+12);
    document.getElementById('maxestoque3').innerHTML = numeroestoque2;
    document.getElementById('maxferramentas3').innerHTML = numeroferramentas2;
    document.getElementById('maxtrabalhadores3').innerHTML = numerolugar2;
    var precotot2 = numeroestoque2+numeroferramentas2+numerolugar2;
    if(precotot2 > 25){
      preco2 = parseInt((Math.random()*300)+200);
      precoalug2 = preco2*0.3;
    }else if(precotot2 < 25 && precotot2 > 13){
      preco2 = parseInt((Math.random()*200)+100);
      precoalug2 = preco2*0.3;
    } else if (precotot2 < 13) {
      preco2 = parseInt((Math.random()*100)+55);
      precoalug2 = preco2*0.3;
    }
  }
  if(satisfacao < 0){
    /* barato*/
    numeroestoque = parseInt((Math.random()*4)+2);
    numeroferramentas = parseInt((Math.random()*5)+3);
    numerolugar = parseInt((Math.random()*4)+2);
    document.getElementById('maxestoque1').innerHTML = numeroestoque;
    document.getElementById('maxferramentas1').innerHTML = numeroferramentas;
    document.getElementById('maxtrabalhadores1').innerHTML = numerolugar;
    var precotot = numeroestoque+numeroferramentas+numerolugar;
    if(precotot > 25){
      preco = parseInt((Math.random()*300)+200);
      precoalug = preco*0.3;
    }else if(precotot < 25 && precotot > 13){
      preco = parseInt((Math.random()*200)+100);
      precoalug = preco*0.3;
    } else if (precotot < 13) {
      preco = parseInt((Math.random()*100)+55);
      precoalug = preco*0.3;
    }

    /* custo beneficio*/
    numeroestoque1 = parseInt((Math.random()*7)+3);
    numeroferramentas1 = parseInt((Math.random()*11)+4);
    numerolugar1 = parseInt((Math.random()*11)+5);
    document.getElementById('maxestoque2').innerHTML = numeroestoque1;
    document.getElementById('maxferramentas2').innerHTML = numeroferramentas1;
    document.getElementById('maxtrabalhadores2').innerHTML = numerolugar1;
    var precotot1 = numeroestoque1+numeroferramentas1+numerolugar1;
    if(precotot1 > 25){
      preco1 = parseInt((Math.random()*300)+200);
      precoalug1 = preco1*0.3;
    }else if(precotot1 < 25 && precotot1 > 13){
      preco1 = parseInt((Math.random()*200)+100);
      precoalug1 = preco1*0.3;
    } else if (precotot1 < 13) {
      preco1 = parseInt((Math.random()*100)+55);
      precoalug1 = preco1*0.3;
    }
    /* caro*/
    numeroestoque2 = parseInt((Math.random()*300)+40);
    numeroferramentas2 = parseInt((Math.random()*25)+12);
    numerolugar2 = parseInt((Math.random()*20)+8);
    document.getElementById('maxestoque3').innerHTML = numeroestoque2;
    document.getElementById('maxferramentas3').innerHTML = numeroferramentas2;
    document.getElementById('maxtrabalhadores3').innerHTML = numerolugar2;
    var precotot2 = numeroestoque2+numeroferramentas2+numerolugar2;
    if(precotot2 > 25){
      preco2 = parseInt((Math.random()*300)+200);
      precoalug2 = preco2*0.3;
    }else if(precotot2 < 25 && precotot2 > 13){
      preco2 = parseInt((Math.random()*200)+100);
      precoalug2 = preco2*0.3;
    } else if (precotot2 < 13) {
      preco2 = parseInt((Math.random()*100)+55);
      precoalug2 = preco2*0.3;
    }
  }
}
