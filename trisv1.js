$(document).ready(function() {
	nuovapartita();
	var turno = 0;
	var celle = [1,2,3,4,5,6,7,8,9];
	
	$("#myCanvas").click(function(e) {
		var x = e.clientX;
		var y = e.clientY;
		if(x <= 110 && y<= 180){
			if(celle[0] != false || celle[0] != true){
				if (turno % 2 == 0){
					croce(0,0);
					celle[0] = true;
				}
				else{
					cerchio(0,0);
					celle[0] = false;
				}
				turno += 1;
			}
		}
		if(x>110 && x<=210 && y<=180) {
			if(celle[1] != false || celle[1] != true){
				if (turno % 2 == 0){
					croce(100,0);
					celle[1] = true;
				}
				else{
					cerchio(100,0);
					celle[1] = false;
				}
				turno += 1;
			}
		}
		if(x>210 && x<=310 && y<=180) {
			if(celle[2] != false || celle[2] != true){
				if (turno % 2 == 0){
					croce(200,0);
					celle[2] = true;
				}
				else{
					cerchio(200,0);
					celle[2] = false;
				}
				turno += 1;
			}
		}
		if(x<=110 && y > 180 && y<=280) {
			if(celle[3] != false || celle[3] != true){
				if (turno % 2 == 0){
					croce(0,100);
					celle[3] = true;
				}
				else{
					cerchio(0,100);
					celle[3] = false;
				}
				turno += 1;
			}
		}
		if(x>110 && x<=210 && y > 180 && y<=280) {
			if(celle[4] != false || celle[4] != true){
				if (turno % 2 == 0){
					croce(100,100);
					celle[4] = true;
				}
				else{
					cerchio(100,100);
					celle[4] = false;
				}
				turno += 1;
			}
		}
		if(x>210 && x<=310 && y > 180 && y<=280) {
			if(celle[5] != false || celle[5] != true){
				if (turno % 2 == 0){
					croce(200,100);
					celle[5] = true;
				}
				else{
					cerchio(200,100);
					celle[5] = false;
				}
				turno += 1;
			}
		}
		if(x<=110 && y > 280 && y<=380) {
			if(celle[6] != false || celle[6] != true){
				if (turno % 2 == 0){
					croce(0,200);
					celle[6] = true;
				}
				else{
					cerchio(0,200);
					celle[6] = false;
				}
				turno += 1;
			}
		}
		if(x>110 && x<=210 && y > 280 && y<=380) {
			if(celle[7] != false || celle[7] != true){
				if (turno % 2 == 0){
					croce(100,200);
					celle[7] = true;
				}
				else{
					cerchio(100,200);
					celle[7] = false;
				}
				turno += 1;
			}
		}
		if(x>210 && x<=310 && y > 280 && y<=380) {
			if(celle[8] != false || celle[8] != true){
				if (turno % 2 == 0){
					croce(200,200);
					celle[8] = true;
				}
				else{
					cerchio(200,200);
					celle[8] = false;
				}
				turno += 1;
			}
		}
		
		if(turno % 2 == 0){
			$('#stato').html("E' il turno del giocatore X");
		}
		else{
			$('#stato').html("E' il turno del giocatore O");
		}
		
		for(i=0;i < 7; i+=3){
			if(celle[i] === celle[i+1] && celle[i]===celle[i+2]){
				if(turno % 2 == 0){
					alert('Ha vinto il giocatore O. Complimenti!')
					$('#stato').html('Partita completata');
				}
				else{
					alert('Ha vinto il giocatore X. Complimenti!')
					$('#stato').html('Partita completata');
				}
				$('#myCanvas').css('pointer-events', "none");
			}
		}
		for(i=0;i < 3; i++){
			if(celle[i]===celle[i+3] && celle[i+3]===celle[i+6]){
				if(turno % 2 == 0){
					alert('Ha vinto il giocatore O. Complimenti!')
					$('#stato').html('Partita completata');
				}
				else{
					alert('Ha vinto il giocatore X. Complimenti!')
					$('#stato').html('Partita completata');
				}
				$('#myCanvas').css('pointer-events', "none");
			}
		}
	});
	$('#big_wrapper').mousemove(function(e) {
		$('#co').text('x: ' + e.clientX + ' y: ' + e.clientY);
	});
	
	$('#nuova').click(function() {
		$('#myCanvas').css('pointer-events', "auto");
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		ctx.clearRect(0, 0, c.width, c.height);
		turno = 0;
		celle = [1,2,3,4,5,6,7,8,9];
		nuovapartita();
		
	});
	
	function nuovapartita(){
		$('#stato').html('Inizia la partita!');
		turno = 0;
		celle = [1,2,3,4,5,6,7,8,9];
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		ctx.beginPath(); 
		ctx.moveTo(100,0);
		ctx.lineTo(100,300);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(200,0);
		ctx.lineTo(200,300);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(0,100);
		ctx.lineTo(3000,100);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(0,200);
		ctx.lineTo(3000,200);
		ctx.stroke();
		
	}

	function croce(x,y) {
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(x,y);
		ctx.lineTo(x+100,y+100);
		ctx.stroke()
		
		ctx.beginPath();
		ctx.moveTo(x+100,y);
		ctx.lineTo(x,y+100);
		ctx.stroke()
	}

	function cerchio(x,y) {
		var c = document.getElementById("myCanvas");
		var cerchio=c.getContext("2d");
		cerchio.beginPath();
		cerchio.arc(x+50,y+50,50,0,2*Math.PI);
		cerchio.stroke();
	}
});