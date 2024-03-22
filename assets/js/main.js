(function() {
    "use strict";

    /* Easy selector helper function */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /* Easy event listener function */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    /* Easy on scroll event listener */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    /* Toggle header-scrolled class to #header when page is scrolled */
    let selectHeader = select('#header')
    if (selectHeader) {
        const headerScrolled = () => {
            if (window.scrollY > 100) {
                selectHeader.classList.add('header-scrolled')
            } else {
                selectHeader.classList.remove('header-scrolled')
            }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
    }

    /*  Mobile nav toggle */
    on('click', '.mobile-nav-toggle', function(e) {
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('fa-times')
        this.classList.toggle('fa-bars')
    })



    // scroll down
    var windowY = window.innerHeight;
    var button = document.getElementById("scroll");
    var y = windowY;

    button.addEventListener("click", function() {
        window.scroll(0, y);
    }, false);

    // Share popup
    var share = document.getElementById("share");
    var social1 = document.getElementById('social-1');
    var social2 = document.getElementById('social-2');
    share.addEventListener("click", function() {
        if (social1.style.display === 'none' || social2.style.display === 'none') {
            social1.style.display = 'block';
            social2.style.display = 'block';
        } else {
            social1.style.display = 'none';
            social2.style.display = 'none';
        }
    }, false);

})()