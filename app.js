// let slideIndex = 0;
// showSlides(slideIndex, true);

// function plusSlides(n) {
// 	showSlides(slideIndex += n, false)
// }

// function showSlides(n, auto) {
  
// 	var i;
// 	var x = document.getElementsByClassName("mySlides")

	
// 	if (n > x.length) {
// 		slideIndex = 1
// 	}
	
// 	if (n < 1) {
// 		slideIndex = x.length
// 	}

// 	for (i = 0; i < x.length; i++) {
// 		x[i].style.display = "none"
// 	}
	
// 	slideIndex++;
// 	if (slideIndex > x.length) {
// 		slideIndex = 1;
// 	}
	
	
// 	x[slideIndex-1].style.display = "block"

	
// 	// for (i = 0; i < slides.length; i++) {
// 	//   slides[i].style.display = "none";
// 	// }

// 	// slideIndex++;
// 	// if (slideIndex > slides.length) {
// 	//   slideIndex = 1;
// 	// }

// 	// slides[slideIndex - 1].style.display = "block";
	
	

// 	// var i;
// 	// var slides = document.getElementsByClassName("mySlides");

	
// 	if (auto) {
// 		setTimeout(showSlides, 5000); // Change image every 5 seconds
// 	}
	
// }

var slideIndex = 0;
showSlides();
var slides, dots;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex> slides.length) {
		slideIndex = 1
	}

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function plusSlides(position) {
    slideIndex += position;

    if (slideIndex> slides.length) {
		slideIndex = 1
	}
    else if (slideIndex<1) {
		slideIndex = slides.length
	}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function currentSlide(index) {
    if (index> slides.length) {index = 1}
    else if(index<1){index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";  
    dots[index-1].className += " active";
}




var lastScrollTop = 0;
document.addEventListener("scroll", (e) => {
  // transparent navbar when scrolling up
	var st = window.pageYOffset || document.documentElement.scrollTop;
	document.querySelectorAll('#img_div').forEach(dom => dom.style.opacity = st > lastScrollTop ? 0.8 : 0.9);
  // title text hidden
  var naslov = document.getElementById("naslov_collapsable")
  st === 0 ? naslov.style.width = "90%" : naslov.style.width = 0;
  // goUp button shown when not on top
  var goUp = document.getElementById("na_vrh")
  st === 0 ? goUp.style.display = "none" : goUp.style.display = "block";
  // navbar links hidden when not on top
  document.querySelectorAll(".navbar__links").forEach(dom => st === 0 ? dom.style.opacity = 1 : dom.style.opacity = 0)
  // disable links
  var links =  document.querySelectorAll('.links')
  links.forEach(dom => dom.style.display = st === 0 ? "" : "none")

});


// function myFunctionkomp1()
// {
//     if(document.getElementsByClassName("MyDiv")[0].style.top == '300px'){
//         document.getElementsByClassName("MyDiv")[0].style.top="0px";    
//     }else{
//         document.getElementsByClassName("MyDiv")[0].style.top="300px";  
//     }
// }
  

// document.querySelectorAll('h2, .subHeadline').addEventListener("click", toggleText);

// element.addEventListener("click", function toggleText(index) {
    //     document.getElementsByClassName("opis_Osebe")[index].innerHTML = "Hello World";
    // });

    
let imena = document.querySelectorAll('h2');
let opisi = document.querySelectorAll('.opis_Osebe')

imena.forEach(el => el.addEventListener('click', test));
imena.forEach(el => el.addEventListener('click', toggleText));



function test(event) {
    // event.target.style.transform = "translateY(-200px)";
    event.target.classList.toggle('clicked');    
}



function toggleText(event) {
    
    // alert(event.target.id);

    setTimeout(function(){
        var id = event.target.id;
    
        if (opisi[id].style.opacity === "1") {
            opisi[id].classList.toggle('active'); 
            // opisi[id].style.opacity = "0";
        }
    
        else {
            // opisi[id].style.opacity = "1";
            opisi[id].classList.toggle('active'); 
        }
    }, 500); 
}
