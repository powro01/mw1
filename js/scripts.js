$(document).ready(function() {

    let menuTrigger = $('#menuTrigger');
    let navigationOverlay = $('#navigationOverlay');

    menuTrigger.on('click', function() {
        navigationOverlay.toggleClass('toggle');
    });

    let modalWasShowed = false;

    let modalClose = $('#modalClose');
    let modal = $('.modal');
    modalClose.on('click', function(e) {
        e.preventDefault();
        modal.removeClass('open');
        modalWasShowed = true;
    });

    $(window).on('scroll', function() {
        if(!modalWasShowed) {
            if(window.scrollY > 1600) {
                modal.toggleClass('open');
                modalWasShowed = true;
            }
        }
    });

    let typed = new Typed('.typed', {
        strings: [' ', 'Get new experience', 'Lose weight', 'Add muscle'],
        backSpeed: 100,
        loop: true,
        typeSpeed: 150,
        showCursor: false
    });

});

