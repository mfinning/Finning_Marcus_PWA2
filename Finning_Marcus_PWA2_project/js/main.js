  
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
	
$('#logOut').click(function(e){
	e.preventDefault;
	$.get('xhr/logout.php', function(){
		window.location.assign('index.html')
	})
});



	
	

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
		
		/*================== registration form ===============*/
	
	$('#register).on('click', function(){
		var firstname= $('#firstName').val(),
			lastname= $('#last').val(),
			username=$('#user').val(),
			email=$('#email').val(),
			password=$('#pass').val();
			
		$ajax({
			url:'xhr/register.php',
			type: 'post'
			dataType: 'json',
			data:{
				firstname: firstname,
				lastname: lastname,
				username: username,
				email: email,
				password: password
			},
			
			Success: function(response){
				if(response.error){
					alert(response.error);
				}else{
					window.location.assign('admim.html');
				}
			});
		};
		

	
})(jQuery) // end private scope




