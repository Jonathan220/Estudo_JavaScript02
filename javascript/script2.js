/* 
 * 
 * Autor: Jonathan Abreu
 * Descrição: segunda página de teste.
 */

window.onload = function(){
	
	document.getElementById("botao2").onclick = function(){
		alert(window.name + "\n" + "altura: " + innerHeight + "\n" + "largura: " + innerWidth);
	}
	
	document.getElementById("subir").onclick = function(){
		moveBy(0,-10);
	}
	
	document.getElementById("esquerda").onclick = function(){
		moveBy(-10,0);
	}
	
	document.getElementById("direita").onclick = function(){
		moveBy(10,0);
	}
	
	document.getElementById("baixo").onclick = function(){
		moveBy(0,10);
	}
}
