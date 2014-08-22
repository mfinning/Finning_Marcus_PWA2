  
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
		.appendTo('body')
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
	
	/*======================== tab according function ========================*/
	
	
	$('#tabs p').hide().eq(0).show();
	$('#tabs p:not(:first)').hide();
	
	$('#tabs-nav li').click(function(e){
		e.preventDefault();
		$('#tabs p').hide();
	$('#tabs-nav .current').removeClass("current");
		$(this).addClass('current');
		var clicked = $(this).find('a:first').attr('href');
		
		$('#tabs ' + clicked).fadeIn("fast");
	}).eq(0).addClass('current');

		
		
		/*================== registration form ===============*/
	
	

	
})(jQuery) // end private scope




