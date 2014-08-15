  
//	The Photo Box
//	Author: Finning,Marcus


(function($){
	
	
/*========================logon======================*/
	




/*====================== logout =========================*/	
	


	
	

//================== add project mobal ==================//
	
	$('.modalClick').on('click', function(event){
		event.preventDefault();
		$('#overlay')
		 .fadeIn()
		 .find('#modal')
		 .fadeIn();
		
		});
		
		$('.close').on('click', function(event){
		event.preventDefault();
		$('#overlay')
		.fadeOut()
		.find('#modal')
		.fadeOut();
		
		});
		
		
	/* status fad*/	
	$('.mystatus').mouseover(function(){
		$(this).fadeTo(100, .3);
		});
		
		$('.mystatus').mouseover(function(){
		$(this).fadeTo(100, 1);
		});
		
		/*================== tooltip ===============*/
	$('masterTooltip').hover(function(){
		var title = $(this).attr('title');
		$(this).data('tipText', title).removeAttr('title');
		$('<p class="tooltip"></p')
		.text(title)
		.append('body')
		.fadeIn('slow');
	}, function(){
		//out hover code
		$(this).attr('title', $(this).data('tipText'));
		$('.tooltip').remove();
	}).mousemove(function(e) {
		var mousex = e.pagex + 20; //get x coords.
		var mousey = e.pagey + 20;// get y coords.
		$('.tooltip')
		.css({ top: mousey, left: mousex})
	});
		
		/*================== registration form ===============*/
	
	

	
})(jQuery) // end private scope




