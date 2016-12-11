$(document).ready(function(){
	$("#opzioni").hide();
	$('#opzioni input').change(handleUpdate);
	$('#opzioni input').mousemove(handleUpdate);
	$("#centro").click(function(){
		$("#opzioni").toggle()
	});
	setInterval(tempo, 1000);
});

function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

function tempo(){
	var d = new Date();
	var s = d.getSeconds();
	var m = d.getMinutes();
	var o = d.getHours();
	var GradiSecondi = ((s /60) * 360) +90;
	var GradiMinuti = ((m /60) * 360) +90;
	var GradiOre = ((o /12) * 360) +90;
	$(".secondi").css({ 'transform': 'rotate(' + GradiSecondi + 'deg)'});
	$(".minuti").css({ 'transform': 'rotate(' + GradiMinuti + 'deg)'});
	$(".ore").css({ 'transform': 'rotate(' + GradiOre + 'deg)'});
}