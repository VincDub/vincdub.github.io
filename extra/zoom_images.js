function zoom(img) {
    var vue = img.parentElement.nextElementSibling;
    if (img.tagName != "OBJECT") {
        var img_copie = img.cloneNode(true);
        img_copie.onclick=""
        vue.removeChild(vue.children[0]);
        vue.appendChild(img_copie);
    }
    else {
        if (vue.children[0].tagName != "IFRAME") {
            var iframe = document.createElement("iframe");
            console.log(img.getAttribute("src"))
            iframe.onclick="";
            iframe.src=img.getAttribute("src");
            iframe.frameborder="0";
            iframe.allowfullscreen="true";
            iframe.allowtransparency="true";
            vue.removeChild(vue.children[0])
            vue.appendChild(iframe);
        } else {
            var iframe = vue.children[0];
            iframe.src = img.getAttribute("src");
        }
    }
}