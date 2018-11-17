let checks = document.querySelectorAll('input[type="checkbox"]');

let lastChecked;

//We search for every checkbox, and when clicked, we add the class "checked"
checks.forEach(check => check.onclick = function(e){

	let inBetween = false;
	//if shift is pressed, and another box is checked, all in between will be checked
	if(e.shiftKey && this.checked){
		//We iterate through all checkboxes to see if any is checked
		checks.forEach(checkd => {		
			console.log(checkd);	
			/*When we get to the first one that we clicked, or this one, we set "InBetween" to true, to say that we are now
			iterating through the ones in the middle of the checked ones*/
			if(checkd === this || checkd === lastChecked){
				inBetween = !inBetween;							
			}
			//If we are now iterating through the ones in between, we add the class checked to them
			if(inBetween) {
				checkd.checked = true;
			}
		})
	}

	lastChecked = this;
	check.classList.add('checked');
})

