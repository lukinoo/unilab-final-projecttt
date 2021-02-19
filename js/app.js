
events = () => {
    animationFade = () => {
        // intro texts
        const introTexts = document.querySelectorAll('.main-intro-text');
        // small delay on intro text
        introTexts.forEach((introText,index) => {
            introText.style.animation = `textpopup 0.6s ease ${index / 7 + 0.5}s forwards`;
        });

    };
        navigationBar = () => {
            const hamburger = document.querySelector('.hamburger');
            const navBar = document.querySelector('.nav-links');

            // navigation
            hamburger.addEventListener('click', function () {
                navBar.classList.toggle('nav-links-open');
                hamburger.classList.toggle('hamburger-line');
            });
        };

        parallaxEffect = () => {
            const bigTitle = document.querySelector('.big-title');
            const scrollButton = document.getElementById('scroll-top');

            window.addEventListener('scroll', function() {
                let scrollYO = pageYOffset;

                // scrolltop button
                if (scrollYO > 20) {
                    scrollButton.classList.add('scrollbuttonFade');
                } else {
                    scrollButton.classList.remove('scrollbuttonFade');
                }

                scrollButton.addEventListener('click', () => {
                    document.documentElement.scrollTop = 0;
                });

                // big text parallax effect
                bigTitle.style.transform = `translate3d(0px, ${scrollYO * -2}px, 0px)`;
            });
        };


    // function call
    animationFade();
    parallaxEffect();
    navigationBar();
};

// main function call here
events();