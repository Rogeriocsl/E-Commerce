$(document).ready(function() {
    $('.image-frame').hover(function(){
		$('.image-caption',this).slideToggle('slow');
	}, function(){
		$('.image-caption',this).slideToggle('slow');
    });
});