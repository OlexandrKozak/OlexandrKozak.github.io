// Вхід

// открыть по кнопке
$('.js-button-log-in').click(function() { 
	
	$('.js-overlay-log-in').fadeIn();
	$('.js-overlay-log-in').addClass('disabled');
});

// закрыть на крестик
$('.js-close-log-in').click(function() { 
	$('.js-overlay-log-in').fadeOut();	
});

// закрити по кнц реєстрація 
$('.js-button-reg').click(function() { 
	$('.js-overlay-log-in').fadeOut();	
});


// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-log-in').fadeOut();
		
	}
});



// реєстрація 

// открыть по кнопке
$('.js-button-reg').click(function() { 
	
	$('.js-overlay-reg').fadeIn();
	$('.js-overlay-reg').addClass('disabled');
});

// закрыть на крестик
$('.js-close-reg').click(function() { 
	$('.js-overlay-reg').fadeOut();
	
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-reg');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-reg').fadeOut();
		
	}
});

