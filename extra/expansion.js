function expand(ckbx) {
    var ctn_style = window.getComputedStyle(ckbx.parentElement);
    console.log(ctn_style.paddingBottom)
    var taille_bot="150px";
    var taille_top="50px";

    if (ctn_style.paddingBottom == taille_bot) {
        taille_bot="10px";
        taille_top="10px";
    }
    ckbx.parentElement.style.paddingBottom = taille_bot;
    ckbx.parentElement.style.paddingTop = taille_top;
}