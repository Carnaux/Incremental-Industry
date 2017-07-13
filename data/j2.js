function mostra(bgmaterial){
  var cls = document.getElementsByClassName('inv');
  for(i=0; i < cls.length; i++){
    cls[i].style.display = 'none';
  }
  document.getElementById(bgmaterial).style.display = 'block';
}
function mostra(bgproduto){
  var cls = document.getElementsByClassName('inv');
  for(i=0; i < cls.length; i++){
    cls[i].style.display = 'none';
  }
  document.getElementById(bgproduto).style.display = 'block';
}
function mostra(bgvenda){
  var cls = document.getElementsByClassName('inv');
  for(i=0; i < cls.length; i++){
    cls[i].style.display = 'none';
  }
  document.getElementById(bgvenda).style.display = 'block';
}
function mostra(bgdiario){
  var cls = document.getElementsByClassName('inv');
  for(i=0; i < cls.length; i++){
    cls[i].style.display = 'none';
  }
  document.getElementById(bgdiario).style.display = 'block';
}
function mostra(bgmercado){
  var cls = document.getElementsByClassName('inv');
  for(i=0; i < cls.length; i++){
    cls[i].style.display = 'none';
  }
  document.getElementById(bgmercado).style.display = 'block';
}
function mostra(bgtrabalhadores){
  var cls = document.getElementsByClassName('inv');
  for(i=0; i < cls.length; i++){
    cls[i].style.display = 'none';
  }
  document.getElementById(bgtrabalhadores).style.display = 'block';
}
function changecolor(){
  document.getElementById('menu6').style.color = "black";
}
/* alugar/comprar barato*/
function alugarbarato(){
  timeralug = setInterval(aluguelbarato, 10000)
}
function aluguelbarato(){
  limitemat =
  limiteprodu = 
  dinheiro = dinheiro - precoalug;

  document.getElementById('vendatxt1').innerHTML = dinheiro;
  lugar = 1;
}
