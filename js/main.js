function sendForm(t) {
		var th = t;
		var data = new FormData(t);

			$.ajax({
				type: "POST",
				url: '/send.php',
				contentType: false,
				processData: false,
				data: data,
				dataType: 'json',
				  success: function(data){
					console.log(data);
					if(data.result == 'success'){  
						$('input').removeClass('error_input');
						/*alert('Ваша заявка успешно отправлена!');*/
						$('.modal').on('show.bs.modal', function () {
						    $('.modal').not($(this)).each(function () {
						        $(this).modal('hide');
						    });
						});
						$('#myModal_spasibo').modal('show'); 
					}
					else{	
						var i = 0;
						$('input').removeClass('error_input'); 
						for(var errorField in data.text_error){
							$('input[name="'+errorField+'"]').addClass('error_input'); 
							if(i == 0) {
								/*$('input[name="'+errorField +'"]').focus();*/
							}
							i++;
						}										
					}
					},
					error: function(error) {
						console.log(error);	
					},
					beforeSend: function() {
						console.log('loading...');
						$('.modal').prepend('<div class="loader">dd</div>');
					},
					complete: function() {
						$('.loader').remove();
					}
			});
			
		};

$(document).ready(function(){
  $('.slider-primery').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: '.right-btn',
  prevArrow: '.left-btn',
  dots: true
});	
});

$(document).ready(function(){
  $('.slider-reviews').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: '.rev-right',
  prevArrow: '.rev-left',
  dots: true
});	
});






$(document).ready(function(){
	$(function() {

	  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
		$(this)
		  .addClass('active').siblings().removeClass('active')
		  .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	  });

	});
});



$(document).ready(function(){
	$('#show-recept button').on('click', show_recept);
	function show_recept() {
		$('#recept').toggle("slow");
		if ($(this).hasClass('yellow-button')) {
			$(this).removeClass('yellow-button').addClass('show-more');
			$(this).html('Свернуть рецепт');
		}
		else {
			$(this).removeClass('show-more').addClass('yellow-button');
			$(this).html('Показать рецепт');
		}
	}		
});



$(document).ready(function(){
	$('#mobile-menu').on('click', mobile_menu);
	function mobile_menu() {
		$('.menu-catalog').toggle();
	}
	
	 $(window).resize(function(){
        var w = $(window).width();
        if(w > 767) {
			$('.menu-catalog').css('display', 'block');
        }
    });
});


