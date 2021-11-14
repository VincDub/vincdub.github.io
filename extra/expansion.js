function expand(ckbx) {
    var ctn_style = window.getComputedStyle(ckbx.parentElement);
    console.log(ctn_style.paddingBottom)
    var taille_bot="150px";
    var taille_top="50px";
    var taille_rows="180px";

    if (ctn_style.paddingBottom == taille_bot) {
        taille_bot="10px";
        taille_top="10px";
        taille_rows="100px";
    }
    ckbx.parentElement.style.paddingBottom = taille_bot;
    ckbx.parentElement.style.paddingTop = taille_top;
    ckbx.parentElement.style.gridTemplateRows = taille_rows;

    //Actualise la source de l'iframe principale (empêche un bug d'affichage des graphiques interactifs)
    var vue=ckbx.parentElement.children[4].children[2].children[0];
    var src=vue.getAttribute("src");
    vue.src = src;

}