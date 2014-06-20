  
//	The Photo Box
//	Author: Finning,Marcus


(function($){
	
	
/*========================logon======================*/
	$('#loginForm').click(function(){
		var user = $('#user').val();
		var pass = $('#pass').val();
		console.log("this is working");
		$.ajax({
			url:'xhr/login.php',
			type:'POST',
			dataType:"json",
			data: {
				username: user,
				password: pass
				
				},
				success: function(response){
					console.log("test user");
					if(response.error){
						alert(response.error);
					}else{
						window.location.assign('admin.html')
					};
				}
			});
		});




/*====================== logout =========================*/	
	

	
		
	
	

/* ================== add project mobal ==================*/
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




