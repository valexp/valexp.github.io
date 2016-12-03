var turno = 0;
var cella = 0;
var risultato = [0,1,2,3,4,5,6,7,8];
var pareggio = false;

$(document).ready(function(){
	$(".cella").addClass("cellapiena");
	$('#stato').html("E' il turno del giocatore X");
	$(".cella").click(function(){
		if ($(this).is(".croce, .cerchio") == false) {
			if (turno % 2 == 0){
				$(this).addClass("croce");
				cella = $(this).attr('id');
				risultato[cella] = true;
				$('#stato').html("E' il turno del giocatore O");
			}
			else{
				$(this).addClass("cerchio");
				cella = $(this).attr('id');
				risultato[cella] = false;
				$('#stato').html("E' il turno del giocatore X");
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
	$("#bottone").mouseenter(function(){
		$("#bottone").fadeTo("slow",1);
	});
	$("#bottone").mouseleave(function(){
		$("#bottone").fadeTo("slow",0.7);
	$("#bottone").click(function(){
		reset();
	});
	});
});

function reset(){
	$(".cella").removeClass("croce cerchio")
	turno = 0;
	risultato = [0,1,2,3,4,5,6,7,8];
	$('#stato').html("E' il turno del giocatore X");
}