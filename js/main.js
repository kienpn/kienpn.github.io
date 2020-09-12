$(function() {

    $('.scrollUp').click(function() {
        $('html').animate({ scrollTop: 0 }); //must use html instead of body
        return false;
    })



    /**
     * ------------------------------------------------------------------------
     * Setting equal heights for div's with jQuery
     * ------------------------------------------------------------------------
     */
    // Cache the highest
    var highestBox = 0;

    // Select and loop the elements you want to equalise
    $('.card .card-text', this).each(function() {

        // If this box is higher than the cached highest then store it
        if ($(this).height() > highestBox) {
            highestBox = $(this).height();
        }

    });

    // Set the height of all those children to whichever was highest 
    $('.card .card-text', this).height(highestBox);


    /**
     * ------------------------------------------------------------------------
     * 
     * ------------------------------------------------------------------------
     */
})

document.addEventListener('DOMContentLoaded', function () {
    let navbar = document.querySelector('.navbar');
    let docked = false;
    let carouselHeight = document.querySelector('#carouselId').offsetHeight;
    console.log(carouselHeight);

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > carouselHeight*0.2) {
            if (docked == false) {
                docked = true;
                navbar.classList.add('dockNavbar');
            }
        }
        else {
            if (docked == true) {
                docked = false;
                navbar.classList.remove('dockNavbar');

            }
        }
        // console.log(docked);
    })
    
})