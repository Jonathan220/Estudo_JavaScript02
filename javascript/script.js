/* 
 * Autor: Jonathan Abreu
 * Descrição: Pratica de alguns comandos e funções do Objeto Window.
 */
window.onload = function(){
	
	setTimeout(function(){ alert("Olá, seja bem vindo!"); }, 5000);
	
	document.getElementById("botao").onclick = function(){
		var janela = open("teste.html", "name=Nova Janela", "width=300, height=200, scrollbars=yes");
		janela.opener.open("http://www.w3schools.com", "_self");
		
	}
	
	document.getElementById("botao2").onclick = function(){
		var info = "";
		info += "Código do browser: " + navigator.appCodeName +"\n";
		info += "Nome do browser: " + navigator.appName + "\n";
		info += "Versão: " + navigator.appVersion + "\n";
		info += navigator.cookieEnabled ? "navegador com cookies ativado \n" : "navegador com cookies desativado \n";
		
		info += "Idioma do browser: " + navigator.language + "\n";
		info += navigator.onLine ? "O browser se encontra em modo online \n" : "O browser se encontra em modo offline";
		info += "Sistema Operacional: " + navigator.platform + "\n";
		info += navigator.javaEnabled() ? "O Browser possui java ativado \n" : "O browser não possui java ou está desativado \n";
		alert(info);
	}
	
	document.getElementById("voltar").onclick = function(){
		history.go(-1);
	}
	
	document.getElementById("avancar").onclick = function(){
		history.go(1);
	}
	
	document.getElementById("info").onclick = function(){
		var pagina = "";
		pagina += "protocolo: " + location.protocol;
		alert(pagina);
	}
	
	document.getElementById("alterar").onclick = function(){
		var novo = prompt("Insira para onde quer navegar");
		location.assign(novo);
	}
	
}
