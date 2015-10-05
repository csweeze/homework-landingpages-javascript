$(document).ready(function(){
	//show
	$(document).on('click', '.post .readmore a', function(){
		$('#show-this-on-click').slideDown();
		$('.post .readmore').hide();
		$('.post .readless').show();
	});
	//hide
	$(document).on('click', '.post .readless a', function(){
		$('#show-this-on-click').slideUp();
		$('.post .readmore').show();
		$('.post .readless').hide();
	});

	//show
	$(document).on('click', 'aside#sidebar a.learnmore', function(){
		$('#learnmoretext').slideDown();
		$('a.learnmore').hide();
		$('#learnmoretext').show();
	});


});