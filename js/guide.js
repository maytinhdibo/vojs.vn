var obj;
async function renderMenu() {
    await fetch('/data/guideData.json')
        .then(response => response.text())
        .then(data => {
            obj = JSON.parse(data);
            for (i = 0; i < obj.section.length; i++) {
                paraSection = document.querySelector("#menu ul");
                child = createMenuItem(obj.section[i].idSection, "section", obj.section[i].name);

                for (j = 0; j < obj.section[i].chapter.length; j++) {
                    paraChapter = document.createElement("ul");
                    // paraChapter.classList.add("navbar-nav");
                    chapterMenu = createMenuItem(obj.section[i].chapter[j].idChapter, "chapter", obj.section[i].chapter[j].name);
                    paraChapter.appendChild(chapterMenu);
                    child.appendChild(paraChapter);
                }
                paraSection.appendChild(child);
                console.log(paraSection);
            }
        })
}


function createMenuItem(hrefValue, className, text, isClick = 'false') {
    li = document.createElement("li");
    a = document.createElement("a");
    // setAttribute("class","nav-item",li);
    setAttribute("href", hrefValue, a);
    setAttribute("class", className, a);
    // a.classList.add("nav-link");
    setAttribute("isClick", isClick, a);
    var textnode = document.createTextNode(text);         // Create a text node
    a.appendChild(textnode);
    li.appendChild(a);
    return li;

}
function setAttribute(nameAttribute, valueAttribute, element) {
    var att = document.createAttribute(nameAttribute);
    att.value = valueAttribute;
    element.setAttributeNode(att);
}
document.addEventListener("DOMContentLoaded", async function (event) {
    window.onload = await renderMenu();
    const sections = document.querySelectorAll("#menu .section");
    const chapters = document.querySelectorAll("#menu .chapter");
    sections.forEach(section => {
        section.addEventListener("click", function (evt) {
            sectionId = section.getAttribute("href").slice(9);
            chapterId = "#chapter_" + sectionId + "_1";

        });
    });
    chapters.forEach(chapter => {
        chapter.addEventListener("click", function (evt) {
            for (i = 0; i < chapters.length; i++) {
                if (chapters[i].getAttribute("isClick") == "true") {
                    chapters[i].classList.remove("red")
                    chapters[i].setAttribute("isClick", "false");
                }
            }
            
            chapter.classList.add("red");
            chapter.setAttribute("isClick", "true");
            datafile = chapter.getAttribute("href").slice(1);
            path = '/guides/' + datafile + '.txt'

            closeMenu();
            
            fetch(path)
                .then(response => response.text())
                .then(data => {
                    document.querySelector("#content").innerHTML = marked(data);
                });
        })
    });
});

function openMenu() {
    document.querySelector(".guide #menu").style.right = "0";
}

function closeMenu() {
    document.querySelector(".guide #menu").removeAttribute("style");
}