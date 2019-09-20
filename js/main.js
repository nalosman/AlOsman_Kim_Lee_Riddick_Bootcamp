(function(){
	//this is a self invoking function
	console.log('My JS issa workin!');
	
	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burgerCon");

	let viewMore = document.querySelector("#viewMore");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	function linkToWorkPage() {
		window.location.href = 'work.html';
	}


	button.addEventListener("click", hamburgerMenu, false);
	viewMore.addEventListener("click", linkToWorkPage);


	
})();