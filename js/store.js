function demo(name, id) {
    // document.querySelector("#preview-demo .name").innerHTML = "Mã " + name;
    // document.querySelector("#preview-iframe").src = "/demo/demo" + id;
    src = "https://vojs.vn/demo/demo" + id
    window.open(src)
    // document.querySelector("#preview-demo").style.display = "block";
}
document.querySelector("#close-preview").addEventListener("click", function () {
    document.querySelector("#preview-demo").style.display = "none";
});