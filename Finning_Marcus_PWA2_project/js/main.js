/*  
	The Photo Box
	Author: Finning,Marcus
*/

(function(){
	/*=============logon==========*/
	$('#logIn').click(function(){
		var user = $('#user').val();
		var password = $('#pwd').val();
		console.log("log on notifaction");
		
	
	/*
	
	========================= database access  ============
	*/
	$.ajax({
			url: 'xhr/login.php',
			type: 'post',
			dataType: 'json',
			data: {
				username:user,
				password:pass
			},
			success: function(response){
				console.log("test user");
				if (response.error);{
					alert(response.error);
				}else{
				window.location.assign('admin.html')
			};
		}
	});
});
	
	

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
		

	
})(jQuery) // end private scope




