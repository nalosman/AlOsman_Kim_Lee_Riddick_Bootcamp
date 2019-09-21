(function(){
	//this is a self invoking function
	console.log('My JS issa workin!');
	

	/////////////CONSTANTS-VARIABLES
	//CAROUSEL index constants
	const arrows = document.querySelectorAll('.arrowsCon'),
				bannerImages = document.querySelector('#carousel_images');

	var counter = 0;

	//CAROUSEL function
	function animateBanners() {
		let offset = bannerImages.firstElementChild.offsetWidth;
  
		  //left click
		  if (this.classList.contains('left')) {
			  counter --;
			  console.log(counter);
  
		  } else {
			  counter ++;
			  console.log(counter);
		  }
  
		  if (counter > 4) {
			  counter = 0;
		  }
  
		  if (counter < 0) {
			  counter = 4;
		  }
  
		  bannerImages.style.right = `${offset * counter + "px"}`;
	  }
	

	/////////////EVENTS

  	// carousel event
	arrows.forEach(arrow => arrow.addEventListener("click", animateBanners));
})();