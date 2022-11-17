window.addEventListener('scroll', function() {
     document.documentElement.style.setProperty("--scrollTop",  this.scrollY  + 'px');
});


function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
        }
    }
}
ibg();

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    wrapper:".wrapper",
    content:".contain"
})
// var burger = document.querySelector('.header__burger');
// burger.addEventListener('click', function () {
//     document.querySelector('.header__burger-menu').classList.toggle("_active");
//     document.querySelector('.header__burger').classList.toggle("_active");
// });








