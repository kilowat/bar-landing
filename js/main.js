$(document).ready(function(){
  progressively.init({
    delay: 50,
    throttle: 300,
    smBreakpoint: 600,
    onLoad: function(elem) {

    },
    onLoadComplete: function() {

    }
  });

  $('.flipclock').flipclock('2018 04 28 12:00:00');

  $('.top-menu').mobilemenu({
    onOpen: function(menu, options){
     $('.mobilemenu--open-icon').addClass("openned");
   },
   onClose: function(menu, options){
     $('.mobilemenu--open-icon').removeClass("openned");
   },
  });
});

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('selected');
        })
        $(this).addClass('selected');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
  var windowPos = $(window).scrollTop();
  $('.top-menu li a[href^="#"]').each(function() {

      var currentLink = $(this);
      if ($(currentLink.attr("href")).length > 0)
          {
          var refElement = $(currentLink.attr("href"));
          if (refElement.position().top <= windowPos && (refElement.position().top + refElement.height() + $(".top-menu").height() ) > windowPos) {
              $('.top-menu li a').removeClass("selected");
              currentLink.addClass("selected");
          }
          else{
              currentLink.removeClass("selected");
          }
      }
  });
}
