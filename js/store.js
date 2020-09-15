const themeItems = document.querySelectorAll(".info-image");
themeItems.forEach(themeItem => {
    nameTheme = themeItem.getAttribute('name');
    path = "/img/img_theme/" + nameTheme + ".png";
    url = "url('" + path + "')";
    themeItem.style.backgroundImage = url;
    console.log(themeItem);
    console.log(url);
})
function demo(ItemTheme) {
    // document.querySelector("#preview-demo .name").innerHTML = "Mã " + name;
    // document.querySelector("#preview-iframe").src = "/demo/demo" + id;
    // window.open(herf)
    // document.querySelector("#preview-demo").style.display = "block";
    window.open(ItemTheme)
}
// document.querySelector("#close-preview").addEventListener("click", function () {
//     document.querySelector("#preview-demo").style.display = "none";
// });