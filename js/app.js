
navigation = () => {
    const hamburger = document.querySelector('.hamburger');
    const navBar = document.querySelector('.nav-links');
    const introTexts = document.querySelectorAll('.main-intro-text');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('hamburger-line');
        navBar.classList.toggle('nav-links-open');
    });

    introFade = () => {
        introTexts.forEach((introText, index) => {
            introText.style.animation = `textpop 0.4s ease ${index / 5 + 0.5}s forwards`;
        });
    };

    introFade();
};


navigation();