/*  
	The Photo Box
	Author: Finning,Marcus
*/

(function($){
	
	
	/*
	===============================================
	========================= APPLICATION FUNCTIONS	
	*/
	
	
	var checkLoginState = function(){
		$.ajax({
			url: 'xhr/check_login.php',
			type: 'get',
			dataType: 'json',
			success: function(response){
				// if user, loadApp()
				// if error, loadLanding()
			}
		});
	};
	
	

	// 	============================================
	//	SETUP FOR INIT
		
	var init = function(){
	
		checkLoginState();
	};
	
	
	init();
	
		
	/*
	===============================================
	======================================== EVENTS	
	*/
	
	
	/*	
	==================================== END EVENTS 
	===============================================
	*/
	/*  add */
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
		

	
}); // end private scope




