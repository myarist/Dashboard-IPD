$(document).ready(function () {
    $(function () {
        var animateFixHead = 1;
        $(window).scroll(function () {
            var scroll = onScroll();
            if (scroll >= animateFixHead) {
                $(".header").addClass("animateFix");
                $(".footer").addClass("animateFix");
            } else {
                $(".header").removeClass("animateFix");
                $(".footer").removeClass("animateFix");
            }
        });

        function onScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });
});

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("focus").style.top = "0";
    } else {
        document.getElementById("focus").style.top = "-80px";
    }
};