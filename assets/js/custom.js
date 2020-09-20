$(document).ready(function() {
    /* gsap config */
    setTimeout(() => {
        var listItems = gsap.timeline();
        listItems.from("ul li", .5, {
                duration: .5,
                translateY: -50,
                stagger: .2
            }, .5)
            .to("ul li", .5, {
                opacity: 1
            }, .5)
    }, 2000);

    setTimeout(() => {
        var logo = gsap.timeline();
        logo.from(".navbar-brand", .5, {
                duration: .5,
                translateY: -50,
                stagger: .2
            }, .5)
            .to(".navbar-brand", .5, {
                opacity: 1
            }, .5)

    }, 2000);

    var tl = gsap.timeline();
    tl.to('ul.transition li', { duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2 });
    tl.to('ul.transition li', { duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1 });

    /* sal js config */
    setTimeout(() => {
        sal({
            // threshold: 0.1,
            once: true,
        });

    }, 4000);

    setTimeout(() => {
        $('.jumbotron').css("opacity", '1');

    }, 3000);
    /* reveal js config */
    Reveal.initialize({
        touch: true,
        mouseWheel: true,
        controls: false,
        progress: false,
        backgroundTransition: 'fade'

    });
    Reveal.on('home_active', () => {
        $('nav li').removeClass('active');
        $('#nav_home').addClass('active')
    });
    Reveal.on('about_active', () => {
        $('nav li').removeClass('active');
        $('#nav_about').addClass('active')
        var imgList = gsap.timeline();
        imgList.from(".img", .5, {
                duration: .5,
                translateY: -100,
                stagger: .2
            }, .5)
            .to(".img", .5, {
                opacity: 1
            }, .5)
    });
    Reveal.on('about_children', () => {
        var animateItems = gsap.timeline();
        animateItems.from(".animate-up", .5, {
                duration: .5,
                translateY: -100,
                stagger: .2
            }, .5)
            .to(".animate-up", .5, {
                opacity: 1
            }, .5)
        var animateDelay = gsap.timeline();
        animateDelay.from(".animate-delay", .7, {
                duration: .5,
                translateY: -100,
                stagger: .2
            }, .7)
            .to(".animate-delay", .7, {
                opacity: 1
            }, .7)
        var colAnimate = gsap.timeline();
        colAnimate.from(".col-animate", .5, {
                duration: .5,
                translateY: 100,
                stagger: .2
            }, .5)
            .to(".col-animate", .5, {
                opacity: 1
            }, .5)
    });
    Reveal.on('services_active', () => {
        $('nav li').removeClass('active');
        $('#nav_services').addClass('active')
    });
    Reveal.on('products_active', () => {
        $('nav li').removeClass('active');
        $('#nav_products').addClass('active')
    });
    $('#nav_home').click(() => {
        Reveal.slide(0)
    });
    $('#nav_about').click(() => {
        Reveal.slide(1)
    });
    $('#nav_services').click(() => {
        Reveal.slide(2)
    });
    $('#nav_products').click(() => {
        Reveal.slide(3)
    });
    $('#logo').click(() => {
        Reveal.slide(0)
    });
});