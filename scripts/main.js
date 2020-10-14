(function(){
    var hideArrow = document.querySelector('#leftArrow');
    var transparentOverlay = document.querySelector('#transparentOverlay');
    var navBar = document.querySelector('aside');
    var menuButton = document.querySelector('#menuButton');

    hideArrow.addEventListener('click', function(e){
        transparentOverlay.classList.toggle('transparentOverlayActive');
        navBar.classList.toggle('slideOut');
        navBar.classList.toggle('slideIn');
        e.preventDefault();
    })
    menuButton.addEventListener('click', function(e){
        transparentOverlay.classList.toggle('transparentOverlayActive');
        navBar.classList.toggle('slideOut');
        navBar.classList.toggle('slideIn');
        e.preventDefault();
    })
})();