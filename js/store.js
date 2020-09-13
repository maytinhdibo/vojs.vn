function demo(name, id) {
    document.querySelector("#preview-demo .name").innerHTML = "Mã " + name;
    document.querySelector("#preview-iframe").src = "/demo/demo" + id;
    document.querySelector("#preview-demo").style.display = "block";
}
document.querySelector("#close-preview").addEventListener("click", function () {
    document.querySelector("#preview-demo").style.display = "none";
});