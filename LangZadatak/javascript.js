let xml = new XMLHttpRequest();
xml.addEventListener("load", function() {
document.body.innerHTML = this.responseText;
});
xml.open("GET", `../body.html`);
xml.send();

addEventListener("load", (event) => {
    let jezik = document.getElementsByTagName('html')[0].getAttribute('lang');

    switch (jezik) {
    case "hr":
        getJS("hr");
        break;
    case "en":
        getJS("en");
        break;
    case "it":
        getJS("it");
}
});


function getJS(lang) {
    let js = document.createElement("script");
    js.setAttribute("src", `../${lang}.js`);
    document.head.appendChild(js);

}


    



