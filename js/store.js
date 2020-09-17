const themeItems = document.querySelectorAll(".info-image");
themeItems.forEach(themeItem => {
    nameTheme = themeItem.getAttribute('name');
    path = "/img/img_theme/" + nameTheme + ".png";
    url = "url('" + path + "')";
    themeItem.style.backgroundImage = url;
})
function demo(url) {
    // document.querySelector("#preview-demo .name").innerHTML = "Mã " + name;
    console.log(url);
    if (url.indexOf("http://") != 0) {
        document.querySelector("#preview-iframe").src = url;
        document.querySelector("#preview-demo").style.display = "block";
    } else {
        window.open(url)
    }
}
document.querySelector("#close-preview").addEventListener("click", function () {
    document.querySelector("#preview-demo").style.display = "none";
});