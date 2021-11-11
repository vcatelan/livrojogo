let card = document.querySelector ('#cardclerigo');
// a variavel card seleciona o card com o id cardclerigo
let switching = false;


function flip () {
	if (switching) {
		return false
		// quando existe um return a função para de executar
	}
	switching = true
	// na linha acima a variavel switching recebe o valor verdadeiro
	document.querySelector ('#cardclerigo').classList.toggle ('isSwitched');

	window.setTimeout (function(){
	document.querySelector ('#cardclerigo').children.children.classList.toggle ('isbackCard');
	switching = false		
	0.2s)
}

card.click (flip)
