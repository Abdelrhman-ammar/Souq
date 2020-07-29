/* global consol, alert, prombet */
$(document).ready(function()
{
	

	$(".sign .fa-user-plus").on('click',function(){
		$(".sign").fadeOut(500);
		$(".logo").animate({
			fontSize:'100px',
			top:'20%'
		},500,function()
		{
			$('.regastrate').fadeIn(500);
		})
	});
	$(".par .par_child div .fa-angle-down,.par .par_child div span").on('click',function()
	{
		$(this).filter('ul').show();
	});
	$(".products .product .front div .info").on('click',function(){
		$(this).parents('.product').css('transform','rotateY(180deg)');

	});
	$(".products .product .back i").on('click',function(){
		$(this).parents('.product').css('transform','rotateY(0deg)');
	});


	
	$('.filter button').on('click',function(){	
		$('.par').fadeOut(500,function()
			{
				$(this).hide();
			});
	});

	$('.filter button').on('dblclick',function(){	
		$('.par').fadeOut(250,function()
			{
				$(this).hide().css({visibility: "visible"}).fadeIn(250);
			});
	});

	$('nav .links li').on('click',function(){
		$(this).addClass('border_bottom').siblings().removeClass('border_bottom');
	});

	
	//sign in
	$(".sign .sign_in").on('click',function(){
		if($("nav .sign .pass_email").css("visibility")=="hidden")
		{
			$('.sign .user_plus,.main_div .sign .sign_in').fadeOut(200, function() {
			$("nav .sign .pass_email,.main_div .sign .sign_in").hide().css({visibility: "visible"}).fadeIn(200);
			});
		}
		else
		{
			$("nav .sign .pass_email").css("visibility","hidden");
			$(".sign .sign_in").fadeOut(250);		
			$('.sign .user_plus,.sign .sign_in').delay(250).fadeIn(250);

			
		}
	});



	//sign up
	$(".sign .user_plus").on('click',function(){
		if($('.par').is(':visible'))
		{
			$('.filter button').click();
		}
		$('.plure').fadeIn(500);
		$('.regastrate').animate({top:'70%'},500);
		$('.LOGO').delay(1000).fadeIn(500);
	});

	//******************************************************************

	$(".plure").on('click',function(){
		$('.regastrate').delay(200).animate({top:'-70%'},500);
		$('.LOGO').fadeOut(200);
		$('.plure').delay(700).fadeOut(500);
	});

});
