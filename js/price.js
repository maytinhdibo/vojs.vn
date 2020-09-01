const items = document.querySelectorAll(".item");
items.forEach(item => {
    item.addEventListener("click", function (evt) {
        item_icon = item.childNodes[1];
        if (item.getAttribute("isClick") == "true") {
            item_icon.classList.remove("fa-check-circle")
            item_icon.classList.add("fa-circle")
            item.setAttribute("isClick", "false");
        }
        else {
            item_icon.classList.add("fa-check-circle")
            item_icon.classList.remove("fa-circle")
            item.setAttribute("isClick", "true");
        }

    })
});