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
                    chapterMenu = createMenuItem(obj.section[i].chapter[j].idChapter, "chapter", obj.section[i].chapter[j].name);
                    paraChapter.appendChild(chapterMenu);
                    child.appendChild(paraChapter);
                }
                paraSection.appendChild(child);
            }
        })

    renderContent();

}
function renderContent() {
    var urlHash = window.location.hash.slice(1);
    const chapters = document.querySelectorAll("#menu .chapter")
    if (urlHash == "") {
        chapter = chapters[0];
        unTickChapters(chapters)
        tickChapter(chapter)
        path = '/guides/chapter_1_1.md'
        window.location.hash = "#chapter_1_1"
    }
    else if (urlHash.slice(0, 7) == "section") {
        sectionId = urlHash.slice(8)
        chapterId = "chapter_" + sectionId + "_1";
        path = '/guides/' + chapterId + '.md'
        window.location.hash = "#"+chapterId
        $('a[href="#' + chapterId + '"]').parent('li').addClass('red');

    }
    else {
        chapters.forEach(chapter => {

            if (urlHash == chapter.getAttribute("data")) {
                unTickChapters(chapters)
                tickChapter(chapter)
            }
        })
        path = path = '/guides/' + urlHash + '.md'
    }
    closeMenu();
    fetch(path)
        .then(response => response.text())
        .then(data => {
            document.querySelector("#content").innerHTML = marked(data);
        });
}
window.onhashchange = function () {
    renderContent()
}


function createMenuItem(hrefValue, className, text) {
    li = document.createElement("li");
    a = document.createElement("a");
    setAttribute("href", hrefValue, a);
    setAttribute("class", className, li);
    data = hrefValue.slice(1);
    setAttribute("data", data, li);
    var textnode = document.createTextNode(text);         // Create a text node
    li.appendChild(textnode);
    a.appendChild(li);
    return a;

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
            sectionId = section.getAttribute("data").slice(8);
            chapterId = "chapter_" + sectionId + "_1";
            path = '/guides/' + chapterId + '.md'
            $('a[href="#' + chapterId + '"]').parent('li').addClass('red');
            fetch(path)
                .then(response => response.text())
                .then(data => {
                    document.querySelector("#content").innerHTML = marked(data);
                });
        });
    });
    chapters.forEach(chapter => {
        chapter.addEventListener("click", function (evt) {
            unTickChapters(chapters)

            tickChapter(chapter)
            datafile = chapter.getAttribute("data");
            path = '/guides/' + datafile + '.md'

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
function tickChapter(chapter) {
    chapter.classList.add("red");
    chapter.setAttribute("isClick", "true");
}
function unTickChapters(chapters) {
    for (i = 0; i < chapters.length; i++) {
        if (chapters[i].getAttribute("isClick") == "true") {
            chapters[i].classList.remove("red")
            chapters[i].setAttribute("isClick", "false");
        }
    }
}