jQuery(document).ready(function($){
	
	$('a.scroll-link').click(function(e){
		e.preventDefault();
		$id = $(this).attr('href');
		$('body,html').animate({
			scrollTop: $($id).offset().top -20
		}, 750);
	});
	
});

/* estrellas */

const container = document.querySelector('.stars-container');

document.addEventListener('mousemove', function(e) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = e.clientY + 'px';
  star.style.left = e.clientX + 'px';
  container.appendChild(star);

  setTimeout(function() {
    star.remove();
  }, 1000);
});
