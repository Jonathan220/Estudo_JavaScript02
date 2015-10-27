/* 
 * Autor: Jonathan Abreu
 * Descrição: Pratica de alguns comandos e funções do Objeto Window.
 */
window.onload = function(){
	
	setTimeout(function(){ alert("Olá, seja bem vindo!"); }, 5000);
	
	document.getElementById("botao").onclick = function(){
		var janela = open("teste.html", "name=Nova Janela", "width=200, height=100, scrollbars=yes");
		janela.opener.open("http://www.w3schools.com", "_self");
	}
	
	
}
