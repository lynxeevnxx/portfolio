const aboutButton = document.querySelector('#aboutme');
const descAbout = document.querySelector('#aboutDesc');
const hrAbout = document.querySelector('#hrAbout');


$(document).ready(function(){
	// ABOUT JS
	$(descAbout).hide();
 	$(aboutButton).click(function(){
 	$(descAbout).slideToggle('slow');
 	 })

 	// PROGRAMMING & DESIGN SIDE JS
	 $('.hide').hide();
	 $('.show').click(function(){

 	$('.hide').slideToggle('slow'); 	

 	})
		 $('.hide1').hide();
		 $('.show1').click(function(){
 		$('.hide1').slideToggle('slow');
	 })

	// CONTACT SIDE JS
	$('#descContactMe').hide();
	$('.contactJudul').click(function(){

		$('#descContactMe').slideToggle('slow');

	})

	// PROJECT SIDE JS
	$('#descProject').hide();
	$('#myproject').click(function(){
		$('#descProject').slideToggle('slow');
	})

	$('#dua').hide();
	$('#tiga').hide();
	$('#empat').hide();

	$('#home').click(function() {
		
		$('#satu').fadeIn('slow');
		$('#dua').hide();
		$('#tiga').hide();
		$('#empat').hide();
	});

	$('#about').click(function(){
		$('#dua').fadeIn('slow');
		$('#satu').hide();
		$('#tiga').hide();
		$('#empat').hide();

	});

	$('#contact').click(function(){
		$('#tiga').fadeIn('slow');
		$('#satu').hide();
		$('#dua').hide();
		$('#empat').hide();
	});


	$('#project').click(function(){
		$('#empat').fadeIn('slow');
		$('#satu').hide();
		$('#dua').hide();
		$('#tiga').hide();
	})


	



})















