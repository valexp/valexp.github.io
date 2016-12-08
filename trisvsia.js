var turno = 0;
var cella = 0;
var random = 0;
var risultato = [2,3,4,5,6,7,8,9,10];

$(document).ready(function(){
	$(".cella").addClass("cellapiena");
	$(".cella").click(function(){
		if ($(this).is(".croce, .cerchio") == false) {
			$(this).addClass("croce");
			cella = $(this).attr('id');
			risultato[cella] = true;
			if (controllorisultato() == true){
				reset();
				return;
			}
			/* ************ IA ************* */
			/* PRIMO TURNO */
			if(turno == 1){
				turno += 1;
				if(cella == 0 || cella == 2 || cella == 6 || cella == 8){
					$("#4").addClass("cerchio");
					risultato[4] = false;
					}
				if(cella == 1){$("#7").addClass("cerchio");risultato[7] = false;}
				if(cella == 3){$("#5").addClass("cerchio");risultato[5] = false;}
				if(cella == 4){$("#2").addClass("cerchio");risultato[2] = false;}
				if(cella == 5){$("#3").addClass("cerchio");risultato[3] = false;}
				if(cella == 7){$("#1").addClass("cerchio");risultato[1] = false;}
			}
			/* DOPO PRIMO TURNO */
			else{
				/* RISPOTA ORIZZONTALE */
				for (i = 0; i < 9; i += 3) {
					if(risultato[i] == risultato[i+1] || risultato[i] == risultato[i+2] || risultato[i+1] == risultato[i+2]){
						for(n = 0; n < 3; n++){
							if ($("#" + (i + n)).is(".croce, .cerchio") == false) {
								$("#" + (i + n)).addClass("cerchio");
								risultato[i + n] = false;
								controllorisultato();
								return;
							}							
						}
					}
				}
				/* RISPOSTE VERTICALE */
				for (i = 0; i< 4; i += 1) {
					if(risultato[i] == risultato[i+3] || risultato[i] == risultato[i+6] || risultato[i+3] == risultato[i+6]){
						for(n = 0; n < 9; n +=3){
							if ($("#" + (i + n)).is(".croce, .cerchio") == false) {
								$("#" + (i + n)).addClass("cerchio");
								risultato[i + n] = false;
								controllorisultato();
								return;
							}
						}
					}
				}
				/* BACKSLASH "\" 		*/
				if(risultato[0] == risultato[4] || risultato[0] == risultato[8] || risultato[4] == risultato[8]){
					for(i = 0; i < 9; i += 4){
						if ($("#" + i).is(".croce, .cerchio") == false) {
							$("#" + i).addClass("cerchio");
							risultato[i] = false;
							controllorisultato();
							return;
						}
					}
				}
				/* SLASH "/"    		*/
				if(risultato[2] == risultato[4] || risultato[4] == risultato[6] || risultato[2] == risultato[6]){
					for(i = 2; i < 7; i += 2){
						if ($("#" + i).is(".croce, .cerchio") == false) {
							$("#" + i).addClass("cerchio");
							risultato[i] = false;
							controllorisultato();
							return;
						}
					}
				}
				if($(".cella").not(".cerchio, .croce").length != 0 ) {
					while(random == 0){
						var randomnumber = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
						if ($("#" + randomnumber).is(".croce, .cerchio") == false) {
							$("#" + randomnumber).addClass("cerchio");
							risultato[randomnumber] = false;
							random++;
							controllorisultato();
							return;
						}
					}
				}
				controllorisultato();
			}
		}
	});
	/* BOTTONE RESET */
	$("#bottone").click(function(){
		reset();
	});
});

function controllorisultato(){
	/* VITTORIA CELLE ORIZZONTALI */
	turno +=1;
	random = 0;
	for (i = 0; i < 9; i += 3) {
		if(risultato[i] === risultato[i+1] && risultato[i] === risultato[i+2]){
			if(chihavinto() == true){
				return true;
			}
		}
	}
	/* VITTORIA CELLE VERTICALI */
	for (i = 0; i< 4; i += 1) {
		if(risultato[i] === risultato[i+3] && risultato[i] === risultato[i+6]){
			if(chihavinto() == true){
				return true;
			}
		}
	}
	/* VITTORIA CELLE OBLIQUE */
	/* "\"   */
	if(risultato[0] === risultato[4] && risultato[0] === risultato[8]){
		if(chihavinto() == true){
			return true;
		}
	}
	/* "/"   */
	if(risultato[2] === risultato[4] && risultato[2] === risultato[6]){
		if(chihavinto() == true){
			return true;
		}
	}
	/* CONTROLLO PAREGGIO */
	if($(".cella").not(".cerchio, .croce").length == 0 ) {
		alert("Pareggio!");
		reset();
		return true;
	}
}

function chihavinto(){
	if (turno % 2 == 0){
		alert("Complienti giocare O, hai vinto!");
	}
	else{
		alert("Complienti giocare X, hai vinto!");
		return true;
	}
	reset();
}

function reset(){
	$(".cella").removeClass("croce cerchio")
	turno = 0;
	random = 0;
	risultato = [2,3,4,5,6,7,8,9,10];
}