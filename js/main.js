//JQUERY noConflict mode (for wordpress)
$(document).ready(function() {

	// FASTCLICK FOR MOBILE
	$(function() {
	    FastClick.attach(document.body);
	});

	function accordion() {
	    var toggle = $(".accordion-toggle");
	    var content = $(".accordion-content");
	    content.hide();
	    //content.first().show();
	    toggle.on("click", function (e) {
	        e.preventDefault();
	        var targetContent = $(this).attr("href");
	        //content.slideUp();
	        $(targetContent).slideToggle();
	    });
	}


	    



		/*Mobile menu toggle class for open and closed*/
	  $(document).on('click', function (ev) {
	    $el = $(ev.target || ev.srcElement);
	    if(!$el.hasClass('mobile-menu') && ($el.attr('id') == 'navPrimary' || $el.closest('#navPrimary').length)) {
	      //console.log("should ignore")
	    } else {
	      $("nav.primary").removeClass("open");
	    }
	  });
	  $(".mobile-menu").click(function(t) {
	    t.preventDefault();
	    $("nav.primary").toggleClass("open");
	    return false;
	  });
	  
	  $("ul.navigation>li>a").click(function(t) {
	    var n = $(this);
	    if ($("nav.primary").hasClass("open")) {
	      if ($(n).hasClass("drop")) t.preventDefault();
	      $(this).addClass("current");
	      $("ul.navigation>li>a").each(function() {
	        if (!$(this).hasClass("current")) {
	          $(this).removeClass("open");
	          $(this).next("ul").removeClass("open");
	        }
	      });
	      $(this).toggleClass("open").removeClass("current");
	      $(this).next("ul").toggleClass("open");
	    } else if ($(n).hasClass("resources")) {
	      t.preventDefault()
	    }
	  });


});
