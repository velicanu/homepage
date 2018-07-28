var modal = document.getElementById('myModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
	modal.style.display = "none";
    }
}

function openModal() {
    document.getElementById('myModal').style.display = "block";

    // Show previous image on "left arrow" key press
    $(document).on('keydown', function(e) {
	if (e.keyCode == 37 || e.charCode == 37 || e.which == 37 || e.keyCode == 38 || e.charCode == 38 || e.which == 38) {
	    plusSlides(-1);
	}
    });

    // Show next image on "right arrow" key press
    $(document).on('keydown', function(e) {
	if (e.keyCode == 39 || e.charCode == 39 || e.which == 39 || e.keyCode == 40 || e.charCode == 40 || e.which == 40) {
	    plusSlides(1);
	}
    });

    // Close modal on "Esc" key press
    $(document).on('keydown', function(e) {
	if (e.keyCode == 27 || e.charCode == 27 || e.which == 27) {
	    closeModal(e);
	}
    });
    
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}
      
