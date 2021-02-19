
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
            // navigation
            
        };

        parallaxEffect = () => {
            const bigTitle = document.querySelector('.big-title');

            window.addEventListener('scroll', function() {
                let scrollYOffset = pageYOffset;

                bigTitle.style.transform = `translate3d(0px, ${scrollYOffset * -2}px, 0px)`;
            });
        };


    // function call
    animationFade();
    parallaxEffect();
    navigationBar();
};

// main function call here
events();