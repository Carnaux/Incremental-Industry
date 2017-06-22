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
