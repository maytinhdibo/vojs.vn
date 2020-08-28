const items = document.querySelectorAll(".item i");
console.log(items)
items.forEach(item => {
    item.addEventListener("click", function (evt) {

        if (item.getAttribute("isClick") == "true") {
            item.classList.remove("fa-check-circle")
            item.classList.add("fa-circle")
            item.setAttribute("isClick", "false");
        }
        else {
            item.classList.add("fa-check-circle")
            item.classList.remove("fa-circle")
            item.setAttribute("isClick", "true");
        }

    })
});