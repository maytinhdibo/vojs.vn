function scrollBottom(){
    window.scrollTo({ 
        top: document.querySelector(".page.intro").offsetHeight,
        left: 0, 
        behavior: 'smooth' 
      });
}
$(function(){

  var activeurl = window.location.pathname;
  $('a[href="'+activeurl+'"]').parent('li').addClass('active');

});