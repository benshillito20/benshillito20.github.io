(function(){
    var hideArrow = document.querySelector('#leftArrow');
    var navBar = document.querySelector('aside');
    var menuButton = document.querySelector('#menuButton');

    hideArrow.addEventListener('click', function(e){
        document.getElementById('transparentOverlay').style.display = 'none';
        navBar.classList.toggle('slideOut');
        navBar.classList.toggle('slideIn');
        e.preventDefault();
    })
    menuButton.addEventListener('click', function(e){
        document.getElementById('transparentOverlay').style.display = 'block';
        navBar.classList.toggle('slideOut');
        navBar.classList.toggle('slideIn');
        e.preventDefault();
    })
})();