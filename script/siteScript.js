(function () {

    var nextButton = document.querySelector('.rightArrow');
    var previousButton = document.querySelector('.leftArrow');
    var menu = document.querySelector('ul');
    var closeButton = document.querySelector('.closeButton');
    var menuButton = document.querySelector('.menuButton')

    menuButton.addEventListener('click', function (e) {
        menu.classList.toggle('active');
        e.preventDefault();
    })
    nextButton.addEventListener('click', function (e) {
        nextBackground();
    })
    previousButton.addEventListener('click', function (e) {
        previousBackground();
    })
})();
var backgrounds = new Array(
    'url(images/Blacksmith-Basics-3BandW.jpg)', 'url(images/backgroundImage2.jpg)'
);
var backgroundImage = $('.pictureBox');
var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    backgroundImage.css('background-image', backgrounds[current]);
}

function previousBackground() {
    current--;
    if(current < 0){
        current = 1;
    }
    current = current % backgrounds.length;
    backgroundImage.css('background-image', backgrounds[current]);
}

function startTimer() {
    setInterval(nextBackground, 5000);
}
