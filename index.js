$(document).ready(function(){
	var textfocus = "Che film hai visto?"
	$('#search').attr('value', textfocus).focus(function() {
		if ($(this).val() == textfocus) {	
			$(this).attr('value', '');
			$(this).removeClass("focusless");
	}
	}).blur(function(){	
		if ($(this).val() == '') {	
			$(this).attr('value', textfocus);
			$(this).addClass("focusless");
	}
	});
	
	$("#icona").click(function(){
		apripagine();
	});
	$("#search").on('keyup', function (e) {
    if (e.keyCode == 13) {
        apripagine();
    }
	});
	
	sliders();
	
	$("#cerca").click(function(){
		var link = "http://www.imdb.com/search/title?"
		
		link += "&num_votes=" + $( "#nvoti" ).val() + ","; 
		
		var voto = $( "#voto" ).val();
		var listavoto = voto.split(" - ");
		link += "&user_rating=" + listavoto[0] + "," + listavoto[1];
		
		var anni = $( "#anni" ).val();
		var listanni = anni.split(" - ");
		link += "&year=" + listanni[0] + "," + listanni[1];
		
		if ($("#nazione").val() != ""){
			link += "&countries=" + $("#nazione").val();
		}
		if ($("#tipo").val() != ""){
			link += "&title_type=" + $("#tipo").val();
		}
		if ($("#ordine").val() != ""){
			link += "&sort=" + $("#ordine").val();
		}
		if($("#giavisti")[0].checked == true){
			link += "&my_ratings=exclude";
		}
		
		window.open(link,'_blank');
	});
	
	$("#reset").click(function(){
		sliders();
		nazione.options[0].selected="selected";
		tipo.options[0].selected="selected";
		ordine.options[0].selected="selected";
		$("#giavisti").prop('checked', false);
	});
});

function apripagine(){
	var visto;
	var imdb;
	var icheck;
	var boxoffice;
	var reddit;
	visto = $("#search").val();
	imdb = "http://www.badtaste.it/ricerca/?q=" + visto;
	window.open(imdb,'_blank');
	icheck = "https://www.icheckmovies.com/search/movies/?query=" + visto;
	window.open(icheck,'_blank');
	boxoffice = "http://www.boxofficemojo.com/search/?q=" + visto;
	window.open(boxoffice,'_blank');
	reddit = "https://www.reddit.com/r/movies/search?q=" + visto + "&restrict_sr=on";
	window.open(reddit,'_blank');
}

function sliders(){
	$( "#slider-range-nvoti" ).slider({
		range: "min",
		value: 15000,
		min: 500,
		max: 100000,
		step: 500,
		slide: function( event, ui ) {
		$( "#nvoti" ).val( ui.value );
		}
	});
	$( "#nvoti" ).val( $( "#slider-range-nvoti" ).slider( "value" ) );
	
	$( "#slider-range-anni" ).slider({
		  range: true,
		  min: 1910,
		  max: 2016,
		  values: [ 2000, 2016 ],
		  slide: function( event, ui ) {
			$( "#anni" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
		  }
		});
	$( "#anni" ).val( $( "#slider-range-anni" ).slider( "values", 0 ) + " - " + $( "#slider-range-anni" ).slider( "values", 1 ) );
	
	$( "#slider-range-voto" ).slider({
		  range: true,
		  min: 1,
		  max: 10,
		  step: 0.5,
		  values: [ 6.5, 10 ],
		  slide: function( event, ui ) {
			$( "#voto" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
		  }
		});
	$( "#voto" ).val( $( "#slider-range-voto" ).slider( "values", 0 ) + " - " + $( "#slider-range-voto" ).slider( "values", 1 ) );
}