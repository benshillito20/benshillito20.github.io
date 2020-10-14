(function(){
    var hideArrow = document.querySelector('#leftArrow');
    var transparentOverlay = document.querySelector('#transparentOverlay');

    hideArrow.addEventListener('click', function(e){
        transparentOverlay.classList.toggle('transparentOverlayActive');
        e.preventDefault();
    })
})();