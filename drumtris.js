var turno = 0;
var cella = 0;
var risultato = [0,1,2,3,4,5,6,7,8];
var pareggio = false;

$(document).ready(function(){
	$(".cella").addClass("cellapiena");
	$('#stato').html("E' il turno del giocatore X, premi il tasto mostrato per selezionare una cella");
	$(document).on('keydown', function (e) {
		switch (e.keyCode) {
			case 65:
				tasto = 0;
				break;
			case 83:
				tasto = 1;
				break;
			case 68:
				tasto = 2;
				break;
			case 70:
				tasto = 3;
				break;
			case 71:
				tasto = 4;
				break;
			case 72:
				tasto = 5;
				break;
			case 74:
				tasto = 6;
				break;
			case 75:
				tasto = 7;
				break;
			case 76:
				tasto = 8;
				break;
		}
		$("#" + tasto).children("kbd").hide();
		$("#" + tasto).children("span").hide();
		if ($("#" + tasto).is(".croce, .cerchio") == false) {
			if (turno % 2 == 0){
				$("#" + tasto).addClass("croce");
				cella = $("#" + tasto).attr('id');
				risultato[cella] = true;
				$('#stato').html("E' il turno del giocatore O, premi il tasto mostrato per selezionare una cella");
			}
			else{
				$("#" + tasto).addClass("cerchio");
				cella = $("#" + tasto).attr('id');
				risultato[cella] = false;
				$('#stato').html("E' il turno del giocatore X, premi il tasto mostrato per selezionare una cella");
			}
			turno += 1;
			/* VITTORIA CELLE ORIZZONTALI */
			for (i = 0; i < 9; i += 3) {
				if(risultato[i] === risultato[i+1] && risultato[i] === risultato[i+2]){
					if (turno % 2 == 0){
						alert("Complienti giocare O, hai vinto!");
					}
					else{
						alert("Complienti giocare X, hai vinto!");
					}
					reset();
				}
			}
			/* VITTORIA CELLE VERTICALI */
			for (i = 0; i< 4; i += 1) {
				if(risultato[i] === risultato[i+3] && risultato[i] === risultato[i+6]){
					if (turno % 2 == 0){
						alert("Complienti giocare O, hai vinto!");
					}
					else{
						alert("Complienti giocare X, hai vinto!");
					}
					reset();
				}
			}
			/* VITTORIA CELLE OBLIQUE */
			if(risultato[0] === risultato[4] && risultato[i] === risultato[8]){
				if (turno % 2 == 0){
					alert("Complienti giocare O, hai vinto!");
				}
				else{
					alert("Complienti giocare X, hai vinto!");
				}
				reset();
			}
			if(risultato[2] === risultato[4] && risultato[i] === risultato[6]){
				if (turno % 2 == 0){
					alert("Complienti giocare O, hai vinto!");
				}
				else{
					alert("Complienti giocare X, hai vinto!");
				}
				reset();
			}
			/* CONTROLLO PAREGGIO */
			if($(".cella").not(".cerchio, .croce").length == 0 ) {
				alert("Pareggio!");
				reset();
			}
		}
	});
	/* BOTTONE RESET */
	$("#bottone").click(function(){
		reset();
	});
	const keys = Array.from(document.querySelectorAll('.key'));
	window.addEventListener('keydown', playSound);
});

function reset(){
	$(".cella").removeClass("croce cerchio")
	turno = 0;
	risultato = [0,1,2,3,4,5,6,7,8];
	$('#stato').html("E' il turno del giocatore X, premi il tasto mostrato per selezionare una cella");
	$(".cella").children("kbd").show();
	$(".cella").children("span").show();
}

function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if (!audio) return;

	audio.currentTime = 0;
	audio.play();
}