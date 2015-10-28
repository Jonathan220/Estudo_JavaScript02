/*
 * autor: Jonathan Abreu
 * descrição: Outro exemplo usando scrollBy().
 */

window.onload = function(){
	
	document.getElementById("moverright").onclick =function(){
		scrollBy(50, 0);
		document.getElementById("largura").innerHTML = "Largura: "+pageXOffset;
		document.getElementById("altura").innerHTML = "Altura: "+pageYOffset;
	}
	
	document.getElementById("moverleft").onclick =function(){
		scrollBy(-50, 0);
		document.getElementById("largura").innerHTML = "Largura: "+pageXOffset;
		document.getElementById("altura").innerHTML = "Altura: "+pageYOffset;
	}
	
		document.getElementById("largura").innerHTML = "Largura: "+pageXOffset;
		document.getElementById("altura").innerHTML = "Altura: "+pageYOffset;
}
