function monterLegende() {
    let texte13 = document.querySelector(".texte13");
    texte13.style.display = 'block';
    return anime({
        targets: texte13,
        translateY: '-5em',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

function descendreLegende() {
    return anime({
        targets: '.texte13',
        translateY: '5em',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}