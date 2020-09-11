function scrollBottom() {
  window.scrollTo({
    top: document.querySelector(".page.intro").offsetHeight,
    left: 0,
    behavior: 'smooth'
  });
}
$(function () {

  var activeurl = window.location.pathname;
  $('ul a').each(function () {
    paths = this.getAttribute("href")
    path = ""
    for (i = 0; i < paths.length; i++) {
      if (paths[i] != '#') {
        path = path + paths[i];
      }
      else { break; }
    }
    if (path === activeurl) {

      $(this).parent('li').addClass('active');
    }
  });

});
function Redirect() {
  window.location.pathname = "/price.html";
}
const items = document.querySelectorAll(".timeline-item");
items.forEach(item => {
  item.addEventListener("click", function (evt) {
    var hrefItem = item.getAttribute("href")
    if (hrefItem != null) {
      window.location.href = hrefItem;
    }
  })
})