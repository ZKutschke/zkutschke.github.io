//Close all but selected div, highlight only selected button
function show_hide(b,d){

	var current_button = document.getElementById(b);
	var current_div = document.getElementById(d);

	var button_list = ['pwc_b','nimbus_b','2671_b','bd_med_b','2.007_b','map_cart_b','map_leaks_b','pvhc_b','foundry_b','vex_b','h2ouse_b','bdhc_b','misc_b']; 
	var div_list = ['pwc_d','nimbus_d','2671_d','bd_med_d','2.007_d','map_cart_d','map_leaks_d','pvhc_d','foundry_d','vex_d','h2ouse_d','bdhc_d','misc_d']; 



	for (var i=0; i<button_list.length; i++){
		if (current_button != document.getElementById(button_list[i])){
			document.getElementById(button_list[i]).className = 'button';
		}

		if (current_div != document.getElementById(div_list[i])){
			document.getElementById(div_list[i]).style.display='none';
		}
	}

	//set current and bottom button class
	current_button.className = 'current_button';

	//display current div 
	current_div.style.display ='block';

	//Adjust border on bottom button
	if (current_div != document.getElementById('misc_d')) {
		document.getElementById('bottom_line').style.display='block';
	} else {
		document.getElementById('bottom_line').style.display='none';
	}

}




//Lazy Load images on scroll
document.addEventListener('DOMContentLoaded', function(){
	var lazyLoadImage;

	if ('IntersectionObserver' in window) {
		lazyLoadImage = document.querySelectorAll('.lazy');

		var imageObserver = new

	IntersectionObserver(function(entries, observer) {
		entries.forEach(function(entry) {
			if (entry.isIntersecting) {
				var image = entry.target;
				image.src = image.dataset.src;
				image.classList.remove('lazy');
				imageObserver.unobserve(image);
			}
		});
	});
	lazyLoadImage.forEach(function(image) {
		imageObserver.observe(image);
	});
	} else {
		var lazyLoadThrottleTimeout;
		lazyLoadImage = document.querySelectorAll('.lazy');

		function lazyLoad () {
			if(lazyLoadThrottleTimeout) {
				clearTimeout(lazyLoadThrottleTimeout);
			}

			lazyLoadThrottleTimeout = setTimeout(function(){
				var scrollTop = window.pageYOffset;
				lazyLoadImage.forEach(function(img) {
					if(img.offsetTop < (window.innerHeight + scrollTop)) {
						img.src = img.dataset.src;
						img.classList.remove('lazy');
					}
				});
				if(lazyLoadImage.length==0) {
				document.removeEventListener('scroll', lazyLoad);
				document.removeEventListener('resize', lazyLoad);
				document.removeEventListener('orientationChange', lazyLoad);
			}
			}, 20);
		}
		document.addEventListener('scroll', lazyLoad);
		document.addEventListener('resize', lazyLoad);
		document.addEventListener('orientationChange', lazyLoad);
	}
})
