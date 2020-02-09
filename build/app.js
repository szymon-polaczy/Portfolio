function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) 
        return self.pageYOffset;

    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;

    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) 
        return document.body.scrollTop;

    return 0;
}

function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}

function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}

function toggleVisibilityMenu(eID) {
    var element = document.getElementById(eID);
    element.classList.toggle("show-menu");
    element.classList.toggle("menu");
}

function changeColorSchemeOnload() {
    if(localStorage.getItem("dark-theme") == null)
        localStorage.setItem("dark-theme", true);

    let body = document.getElementById("body");
    let navbar = document.getElementById("navbar");
    let service_section = document.getElementById("service-section");
    let contact_section = document.getElementById("contact-section");

    if (localStorage.getItem("dark-theme") == "true") {
        body.classList.add("body-dark");
        navbar.classList.add("navbar-dark");
        service_section.classList.add("service-section-dark");
        contact_section.classList.add("contact-section-dark");
    } else {
        body.classList.remove("body-dark");
        navbar.classList.remove("navbar-dark");
        service_section.classList.remove("service-section-dark");
        contact_section.classList.remove("contact-section-dark");
    }    
}

function changeColorScheme() {
    let body = document.getElementById("body");
    let navbar = document.getElementById("navbar");
    let service_section = document.getElementById("service-section");
    let contact_section = document.getElementById("contact-section");

    body.classList.toggle("body-dark");
    navbar.classList.toggle("navbar-dark");
    service_section.classList.toggle("service-section-dark");
    contact_section.classList.toggle("contact-section-dark");

    localStorage.setItem("dark-theme", (localStorage.getItem("dark-theme") == "true"? "false" : "true"));
}

window.onload = changeColorSchemeOnload();