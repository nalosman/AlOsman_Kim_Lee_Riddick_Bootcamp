import Team from './modules/dataObject.js'; 
	
(function(){
	//this is a self invoking function
	console.log('My JS issa workin!');
	
	let button = document.querySelector('#button');
	let burgerCon = document.querySelector('#burgerCon');

	// let viewMore = document.getElementById('viewMore');

	let bioCon = document.querySelector('.bioCon').children;

	let playBut = document.querySelector('.playBut'),
		pauseBut = document.querySelector('.pauseBut'),
		rewindBut = document.querySelector('.rewindBut'),
		promoVid = document.querySelector('.promoVid');

	
	function pauseVideo() {
		promoVid.pause();
	}

	function playVideo() {
		promoVid.play();
	}

	function rewindVideo() {
		promoVid.currentTime = 0;
	}


	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	// function linkToWorkPage() {
	// 	window.location.href = 'work.html';
	// }


	function showMemberBio() {
		//this = refers to element that call to function
		let person = this.textContent;
		
		bioCon[0].src = `assets/${Team[person].casual}`;
		bioCon[1].textContent = Team[person].computer;
		bioCon[2].textContent = Team[person].pet;
		bioCon[3].textContent = Team[person].drink;
		bioCon[4].textContent = Team[person].food;
		bioCon[5].textContent = Team[person].quote;
	}	

	for (let person in Team) {
		console.log(person);

		let memberButton = document.createElement('button');
		memberButton.classList.add("memberBut");

		memberButton.textContent = person;
		memberButton.addEventListener("click", showMemberBio);

		document.querySelector('.team').appendChild(memberButton);
		
	}




	

	
	playBut.addEventListener("click", playVideo);
	pauseBut.addEventListener("click", pauseVideo);
	rewindBut.addEventListener("click", rewindVideo);

	button.addEventListener("click", hamburgerMenu, false);
	// viewMore.addEventListener("click", linkToWorkPage);
	

	
})();