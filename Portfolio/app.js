window.onscroll = function () {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById('navbar').classList.add('scrolled');
    } else {
        document.getElementById('navbar').classList.remove('scrolled');
    }

}

var carousel = document.querySelector('#carouselProjects');
var carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 60,
    pause: 'hover'
});

