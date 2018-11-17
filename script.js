let checks = document.querySelectorAll('input[type="checkbox"]');

let lastChecked;

checks.forEach(check => check.onclick = function(e){

	let inBetween = false;
	if(e.shiftKey && this.checked){
		checks.forEach(checkd => {		
			console.log(checkd);	
			if(checkd === this || checkd === lastChecked){
				inBetween = !inBetween;							
			}
			
			if(inBetween) {
				checkd.checked = true;
			}
		})
	}

	lastChecked = this;
	check.classList.add('checked');
})

