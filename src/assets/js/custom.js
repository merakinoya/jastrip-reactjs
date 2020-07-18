$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
})



/** ------- Scrolling Navbar Hide -------- */
var previousScroll = 60; 
// scroll functions
$(window).scroll(function (e) {
    // add/remove class to navbar when scrolling to hide/show
    var scroll = $(window).scrollTop();

    if (scroll >= previousScroll) {
        $('.navbar-collapse').addClass("navbar-hide");
    }
    else if (scroll < previousScroll) {
        $('.navbar-collapse').removeClass("navbar-hide");
    }

    previousScroll = scroll;

});



/**
* Listen to scroll to change header opacity class
*/
function checkScroll() {
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if ($(window).scrollTop() > startY) {
        $('.navbar-transparent-color').addClass("bg-white shadow-sm");
    }
    else {
        $('.navbar-transparent-color').removeClass("bg-white shadow-sm");
    }
}

if ($('.navbar-transparent-color').length > 0) {
    $(window).on("scroll load resize", function () {
        checkScroll();
    });
}


// Get the navbar
var fotoproduk = document.getElementById("carouselExampleCaptions");

// Get the offset position of the navbar
var sticky = fotoproduk.offsetTop;

function fotoSticky() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky-top-produk")
    } else {
        navbar.classList.remove("sticky-top-produk");
    }
}