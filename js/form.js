(function ($) {
	function floatLabel(inputType) {
	  $(inputType).each(function () {
		var $this = $(this);
		// on focus add cladd active to label
		$this.focus(function () {
		  $this.next().addClass("active");
		});
		//on blur check field and remove class if needed
		$this.blur(function () {
		  if ($this.val() === "" || $this.val() === "blank") {
			$this.next().removeClass();
		  }
		});
	  });
	}
	// just add a class of "floatLabel to the input field!"
	floatLabel(".floatLabel");
  })(jQuery);
  
//for navigation javascript
  var nav = responsiveNav(".nav-collapse");

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}