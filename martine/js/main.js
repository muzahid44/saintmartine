
// jquery code
$(document).ready(function(){
	$('#hotel-form').show();
	$('#ticket-form').hide();
	$('#place-form').hide();


	$('#hotel-btn span').addClass('line');
	
	// if clicked on ticket
	$('#ticket-btn').click(function(){
		$('#hotel-form').hide();
	    $('#ticket-form').show();
	    $('#place-form').hide();

	    $('#hotel-btn span').removeClass('line');
	    $('#ticket-btn span').addClass('line');
	    $('#place-btn span').removeClass('line');
	});

	// if clicked on place
	$('#place-btn').click(function(){
		$('#hotel-form').hide();
	    $('#ticket-form').hide();
	    $('#place-form').show();

	    $('#hotel-btn span').removeClass('line');
	    $('#ticket-btn span').removeClass('line');
	    $('#place-btn span').addClass('line');
	});

	// if clicked on hotel
	$('#hotel-btn').click(function(){
		$('#hotel-form').show();
	    $('#ticket-form').hide();
	    $('#place-form').hide();

	    $('#hotel-btn span').addClass('line');
	    $('#ticket-btn span').removeClass('line');
	    $('#place-btn span').removeClass('line');
	});
  
});

// sticky navbar code

window.addEventListener('scroll',function(){
	var header = document.getElementById('nav-menu');

	header.classList.toggle('sticky',window.scrollY>0);
});