// document is the whole page
// will run the function when the document is loaded
$(document).ready(function () {
  if (screen.width < 960) {
    $(".navbar").addClass("show");
  } else {
    var lastScrollTop = 0;

    // window is the web browser window
    // will run the function when the user use scroll
    $(window).scroll(function () {
        
      var scrollTop = $(this).scrollTop();

      // Show the navbar when scrolling down, hide it when scrolling up
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        if (scrollTop > 100) {
          $(".navbar").addClass("show");
        }
      } else {
        if (scrollTop < 100) {
          $(".navbar").removeClass("show");
        }
      }

      lastScrollTop = scrollTop;
    });
  }
});