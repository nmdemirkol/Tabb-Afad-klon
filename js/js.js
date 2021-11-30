function toggleColor() {
  var myButtonClasses = document.getElementById("ort").classList;

  if (myButtonClasses.contains("k")) {
    myButtonClasses.remove("k");
  } else {
    myButtonClasses.add("k");
  }
  if (myButtonClasses.contains("bu")) {
    myButtonClasses.remove("bu");
  } else {
    myButtonClasses.add("bu");
  }
  var silme = document.getElementById("sg").classList;

  if (silme.contains("y")) {
    silme.remove("y");
  } else {
    silme.add("y");
  }
  if (silme.contains("v")) {
    silme.remove("v");
  } else {
    silme.add("v");
  }
  
  
}
function button2() {
	var silme = document.getElementById("sag").classList;

var myButtonClasses = document.getElementById("ort").classList;

  if (myButtonClasses.contains("sk")) {
    myButtonClasses.remove("sk");
  } else {
    myButtonClasses.add("sk");
  }
  if (myButtonClasses.contains("sb")) {
    myButtonClasses.remove("sb");
  } else {
    myButtonClasses.add("sb");
  }
  
  if (silme.contains("sy")) {
    silme.remove("sy");
  } else {
    silme.add("sy");
  }
  if (silme.contains("sv")) {
    silme.remove("sv");
  } else {
    silme.add("sv");
  }
  
}

function listtable() {
var myButtonClasses = document.getElementById("listandtable").classList;

  if (myButtonClasses.contains("h1icerik")) {
    myButtonClasses.remove("h1icerik");
	myButtonClasses.add("h2icerik");
  }    
}
function listtable2() {
var myButtonClasses = document.getElementById("listandtable").classList;

  if (myButtonClasses.contains("h2icerik")) {
    myButtonClasses.remove("h2icerik");
	myButtonClasses.add("h1icerik");
  } 
}

function lgdetay1() {
var myButtonClasses = document.getElementById("detay").classList;

  if (myButtonClasses.contains("detayveriler")) {
    myButtonClasses.remove("detayveriler");
	myButtonClasses.add("detayveriler2");
  }    
}
function lgdetay2() {
var myButtonClasses = document.getElementById("detay").classList;

  if (myButtonClasses.contains("detayveriler2")) {
    myButtonClasses.remove("detayveriler2");
	myButtonClasses.add("detayveriler");
  } 
}


function galeri1() {
var myButtonClasses = document.getElementById("galeriler").classList;

  if (myButtonClasses.contains("galeriler")) {
    myButtonClasses.remove("galeriler");
	myButtonClasses.add("galeriler2");
  }    
}
function galeri2() {
var myButtonClasses = document.getElementById("galeriler").classList;

  if (myButtonClasses.contains("galeriler2")) {
    myButtonClasses.remove("galeriler2");
	myButtonClasses.add("galeriler");
  } 
}



function yazdir() {
    window.print();
}

$(document).ready(function() {
  $('#incfont').click(function() {
    curSize = parseInt($('#content').css('font-size')) + 1;
    if (curSize <= 20)
      $('#content').css('font-size', curSize);
  });
  $('#decfont').click(function() {
    curSize = parseInt($('#content').css('font-size')) - 1;
    if (curSize >= 12)
      $('#content').css('font-size', curSize);
  });
});


/**** scroll top ****/

var scrollDown = $('.scroll-down'),
    scrollUp = $('.scroll-up'),
	  page = $('html, body'),
    slide = $('.slide'),
	  viewportHeight = $(window).height();

$(function() {
	  windowResize();
});

$(scrollDown).click(function(event) {
    var currentSlideHeight = $(this).parent().height();
  
	  page.animate({
		    scrollTop : page.scrollTop() + currentSlideHeight,
	  }, 1000);
	  //Prevents the # from the link appearing in the url.
	  event.preventDefault();
});

$(scrollUp).click(function(event) {
	  page.animate({
		    scrollTop : 0,
	  }, 1000);
	  //Prevents the # from the link appearing in the url.
	  event.preventDefault();
});

function windowResize() {
    $(window).resize(function(e) {
        viewportHeight = $(window).height();
    });
}

