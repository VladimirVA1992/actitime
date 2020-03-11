window.addEventListener("load", function() {
    let menuLinks = document.querySelectorAll(".menu__link");
    for (let i=0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener("click", function() {
            if (menuLinks[i].classList.contains('nested-menu')) {
                this.classList.toggle("active");
                document.querySelector('.menu__item ul').classList.toggle("drop");
            }
        });
    }
});