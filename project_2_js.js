//Close all but selected div, highlight only selected button
function show_hide(b,d){

	var current_button = document.getElementById(b);
	var current_div = document.getElementById(d);

	var button_list = ['project_select_b','pwc_b','bdmed_b','map2_b','map1_b','sevt_b','2671_b','2810_b','2007_b','casting_b','cannons_b','h2ouse_b','misc_b','icl_b', '2013_b', 'gear_b']; 
	var div_list = ['project_select_d','pwc_d','bdmed_d','map2_d','map1_d','sevt_d','2671_d','2810_d','2007_d','casting_d','cannons_d','h2ouse_d','misc_d','icl_d','2013_d','gear_d']; 



	for (var i=0; i<button_list.length; i++){
		if (current_div != document.getElementById(div_list[i])){
			document.getElementById(div_list[i]).style.display='none';
		}
	}

	if (current_button != document.getElementById('project_select_b')){
		document.getElementById('project_select_b').className = 'menu_button';
		location.hash = b;
	}else{
		document.getElementById('project_select_b').className = 'menu_button menu_selected';
		location.hash = '';
	}

	//display current div 
	current_div.style.display ='block';

	window.scrollTo(0,0);
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


//Control back button  --> nav back to projects overview from specific project
window.onhashchange = function(){
	if(location.hash == ''){
		var current_button = 'project_select_b';
		var current_div = 'project_select_d';
	}else{
		var current_hash = location.hash;
		var srtLength = current_button.length;

		var current_button = current_hash.slice(1, srtLength);
		var current_div = current_hash.slice(1, (srtLength-2));
		current_div = current_div + '_d';
	}

	show_hide(current_button, current_div);
}


//scroll back to page top on reload
window.onbeforeunload = function(){
	window.scrollTo(0,0);
}

