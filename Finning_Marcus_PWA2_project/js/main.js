  
//	The Photo Box
//	Author: Finning,Marcus


(function($){
	
	
/*========================logon======================*/
	$('#signinButtion').click(function(){
		var user = $('#user').val();
		var pass = $('#pass').val();
		console.log("notifaction about password works");
		$.ajax({
			url: 'xhr/login.php' ,
			type:'post' ,
			dataType:'json',
			data: {
				username: user,
				password: pass
			},
			success: function(response){
				console.log("user test");
				if (response.error){
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
		
		/*============ addproject function */
		$('#addButton').on('click' , function() {
			
			var projName = $('#projectName').val(),
			projDesc = $('#projectDescription').val(),
			projDue = $('#projectDuedate').val(),
			status = $('input[name= "status"] : checked').prop("id");
			
			$.ajax({
				url: "xhr/new_project.php",
				type:"POST",
				dataType:"json",
				data: {
					projectName: projName,
					projectDescription:projDesc,
					dueDate:projDue,
					status: status
				},
				success: function(response) {
					console.log('test');
					if(response.error){
						alert(response.error);
					}else{
						window.location.assign("projects.html");
					};
				}
			});
		});
		
		/*===============get proj =============*/
		var projects= function(){
			$.ajax({
				url:'xhr/get_projects.php',
				type:'GET',
				dataType: 'json',
				success: function(response){
					if(response.error){
						console.log(response.error);
					}else{
						for(var i=0, j=response.projects.length; i<j;i++){
							var result = response.projects[i];
							$(".projects").append(
							'<div style="border::2px solid blue">'+
							"<input class='projectid' type='hidden' value='" +result.id +"'>"+
							"project Name: " + result.projactName + "<br>" +
							"project Description: " + result.projectDescription + "<br>" +
							"project status: "+result.status + "<br>"
							+'<button class="deletebtn">Delete</buttion>'
							+'<button class="editbtn">Edit</buttion>'
							+'</div> <br>'
							);
						};
					$('.deletebtn').on('click',function(e){
						console.log('test');
						$.ajax({
							url:'xhr/delete_project.php',
							data: {
								
							},
							type:'POST',
							dataType:'json',
							success: function(response){
								console.log('test');
								
								if(response.error){
									alert(response.error);
								}else{
									window.location("projects.html");
								};
							}
						});
					}); // deleat stops
					
					}
				}
			})
		}
	projects();
						
						
						
						
						
				
					
					
		
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
	
	/*============== admin button ============================================*/
	    $('.dashBoard').on('click',function(e){
		e.preventDefault();
		window.location.assign('admin.html');
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
	
	/*============= project buttion ==============*/
	$('.innercavebtn').on('click',function(e){
		e.preventDefault();
		window.location.assign('projects.html');
	
	});
	
	/*============= task button ===========*/
	$('.cavetaskbtn').on('click',function(e){
		e.preventDefault();
		window.location.assign('projects.html');
		
	});
	
	/*============== user button ============*/
	$('.caveuserbtn').on('click',function(e){
		e.preventDefault();
		window.location.assign('admin.html');
		
	});
	
	/*========= registration page button ==========*/
	$('.regBtn').on('click',function(e){
		e.preventDefault();
		window.location.assign('registration.html');
	});
	 /*============= dynamic name ===========*/
	 $.getJSON("xhr/check_login.php", function(data){
		 console.log(data);
		 $.each(data, function(key,val){
			 console.log(val.first_name);
			 $(".userid").html("welcome user: " + val.first_name);
		 })
	 });

		
		
		/*================== registration form ===============*/
	
	$('#register').on('click' , function(){
		var firstname= $('#firstName').val(),
			lastname= $('#last').val(),
			username= $('#user').val(),
			email   = $('#email').val(),
			password= $('#pass').val();
			console.log(fistname+' '+lasname+' '+username+' '+email+' '+password);
			
	$.ajax({
		url:'xhr/register.php',
		type:'POST',
		dataType:'json',
		data:{
			firstname: firstname,
			lastname: lastname,
			username: username,
			email: email,
			password: password,
		},
		
		success: function(response){
			if (response.error){
				alert(response.error);
			}else{
				window.location.assign('admin.html');
			}
		}
	});
});
	

	
})(jQuery) // end private scope




