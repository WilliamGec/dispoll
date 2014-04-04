var $nav =$('#nav'),
	$button = $('.icon-menu');

function mostrarFormulario(){
	$nav.slideToggle();
	return false;
}
$button.click( mostrarFormulario );