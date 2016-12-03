$(document).ready(function() {
	// ******** Abilito solo le giuste schede madri quando seleziono un processore ********
	$('input[name="processori"]').click(function() {
		var classe = $(this).attr('class').split(" ");
		if (this.checked) {
			$('#totale').text(somma);
			$('input[name="schedemadri"]').prop("disabled", true);
			$('input[name="schedemadri"]').next().addClass("grey");
			$('input[name="schedemadri"]').each(function(){
				if($(this).hasClass(classe[0]) == true){
					$(this).prop('disabled', false);
					$(this).next().removeClass("grey");
				}
			});
		}
		else {
			$('input[name="schedemadri"]').prop("disabled", false);
			$('input[name="schedemadri"]').next().removeClass("grey");
		}
	});
	// ******** Abilito solo i giusti processori quando seleziono una scheda madre ********
	$('input[name="schedemadri"]').click(function() {
		var classe = $(this).attr('class').split(" ");
		if (this.checked) {
			$('#totale').text(somma);
			$('input[name="processori"]').prop("disabled", true);
			$('input[name="processori"]').next().addClass("grey");
			$('input[name="processori"]').each(function(){
				if($(this).hasClass(classe[0]) == true){
					$(this).prop('disabled', false);
					$(this).next().removeClass("grey");
				}
			});
		}
		else {
			$('input[name="processori"]').prop("disabled", false);
			$('input[name="processori"]').next().removeClass("grey");
		}
	});
	
	// ******** Disabilito il resto dei componenti nella stessa categoria ********
	$('input[type="checkbox"]').click(function() {
		var nome = this.name;
		if(this.checked){
			$('input[name="' + nome + '"]').prop("disabled", true);
			$(this).prop("disabled", false);
			$('input[name="' + nome + '"]').next().addClass("grey");
			$(this).next().removeClass("grey");
		}
		else{
			$('input[name="' + nome + '"]').prop("disabled", false);
			$('input[name="' + nome + '"]').next().removeClass("grey");
		}
	});
	
	// ******** Totale Prezzi ********
	var somma = 0;
	$('input[type="checkbox"]').click(function() {
		if (this.checked) {
			var riga = $(this).parent();
			var prezzo = riga.next();
			var prezzo = prezzo.next().text().slice(0,-1);
			somma = parseFloat(somma) + parseFloat(prezzo);
			somma = parseFloat(somma).toFixed(2);
			$('#totale').text(somma);
		}
		else {
			var riga = $(this).parent();
			var prezzo = riga.next().next().text();
			prezzo = prezzo.slice(0,-1);
			somma = parseFloat(somma) - parseFloat(prezzo);
			somma = parseFloat(somma).toFixed(2);
			$('#totale').text(somma);
		}
	});
	
	$('#risultato').bind('mouseenter mouseleave', function() {
		$(this).toggleClass('bordorisultato');
	});
	
	// ******** Cerca ********
	$('#cercanome').keyup(function() {											
		cercanome = $(this).val();
		
		$('.pc tr td').removeClass('highlight');
		
		if(jQuery.trim(cercanome) != '') {
			$(".pc tr td:contains('" + cercanome + "')").addClass('highlight');
		}
	});
	
	// ******** Messaggio Cerca ********
	var email_default = 'Cerca...';
	$('input[type="text"]').attr('value', email_default).focus(function() {
		if ($(this).val() == email_default) {
			$(this).attr('value', '');	
		}
	}).blur(function(){			
		if ($(this).val() == '') {	
			$(this).attr('value', email_default);
		}
	});
	
	// ******** Caratteri rimasti ********
	var nome_max = 20;
	$('#cercanome_feedback').html(nome_max + ' caratteri rimasti');
	$('#cercanome').keyup(function() {
		var lunghezza_nome = $('#cercanome').val().length;
		var nome_rimasto = nome_max - lunghezza_nome;
		$('#cercanome_feedback').html(nome_rimasto + ' caratteri rimasti');
	});
	
	// ******** Cordinate mouse ********
	$('#big_wrapper').mousemove(function(e) {
		$('#co').text('x: ' + e.clientX + ' y: ' + e.clientY);
	});
	
	// ******** Hover Text********
	// Posso ottenere lo stesso effetto con l'attributo HTML5 "title"
	$('.hover').mousemove(function(e) {
		var hovertext = $(this).attr('hovertext');
		$('#hoverdiv').text(hovertext).fadeIn("fast");
		$('#hoverdiv').css('top', e.pageY+10).css('left', e.pageX+10);
	}).mouseout(function() {
		$('#hoverdiv').fadeOut("fast");
	});
});