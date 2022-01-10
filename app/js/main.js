(function () {
  const header = document.querySelector('.header');

  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add('header--active');
    }
    else {
      header.classList.remove('header--active');
    }
  }
}());

(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const menuClose = document.querySelector('.header__close');
  const menuLinks = document.querySelectorAll('.header__link');
  const body = document.querySelector('.body');
   

  burgerItem.addEventListener('click', () => {

    menu.classList.add('header__nav-active');

    menuClose.classList.add('header__close-active');

    body.classList.add('body--active');

  });

  menuClose.addEventListener('click', () => {
    menu.classList.remove('header__nav-active');

    menuClose.classList.remove('header__close-active');

    body.classList.remove('body--active');
  });

  if (window.innerWidth <= 767) {
    for (let i = 0; i < menuLinks.length; i+= 1) {
      menuLinks[i].addEventListener('click', () => {
        menu.classList.remove('header__nav-active');
        body.classList.remove('body--active');
      });
    }
  }

}());

(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        var target = document.querySelector(targetEl);
        var targetPosition = target.getBoundingClientRect().top - headerElHeight;
        var startPosition = window.pageYOffset;
        var startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());
