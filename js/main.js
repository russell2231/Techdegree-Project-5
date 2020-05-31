// Search through gallery
const search = document.querySelector('#search');
const photo = document.querySelectorAll('img');

search.addEventListener('keyup', function(e) {
	const input = e.target.value.toLowerCase();

	photo.forEach(function(img) {
		const caption = img.getAttribute('alt').toLowerCase();

		if (!caption.includes(input)) {
			img.parentElement.style.display = 'none';
		} else if (caption.includes(input) || input === '') {
			img.parentElement.style.display = 'initial';
		}
	});
});

// lightbox plugin
$(document).ready(function() {
	$('.gallery').magnificPopup({
		delegate  : 'a',
		type      : 'image',
		tLoading  : 'Loading image #%curr%...',
		mainClass : 'mfp-img-mobile',
		gallery   : {
			enabled            : true,
			navigateByImgClick : true,
			preload            : [
				0,
				1
			] // Will preload 0 - before current, and 1 after the current image
		},
		image     : {
			tError   : '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc : function(item) {
				return item.el.attr('title') + `<small>${item.el.children().attr('alt')}</small>`;
			}
		}
	});
});
