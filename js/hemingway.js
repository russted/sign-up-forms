$(document).ready(function() {
	

	

    

	// footer code 
	var isMobile = false;
	// var numberForCarousel = 3;
	// var carouselWidth = 338;
	// var videoWidth;

	$(window).resize(function() {
	    var window_width = $(window).width();
	    // videoWidth = window_width;

	    // if (window_width < 1074) {
	    //     numberForCarousel = 2;
	    // }

	    // if (window_width < 716) {
	    //     numberForCarousel = 1;
	    // }

	    if (window_width <= 860) {
	        isMobile = true;
	        $('#header-holder').css("position", 'relative');
	        $('#header-padding').hide('fast');
	    } else {
	        isMobile = false;
	        // $('#header-holder').css("position", 'fixed');
	        // $('#header-padding').show('fast');
	    }
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


	    // var criticalSliderInterval;

	/* ********************************************** */
    /* dropdown to drop divs                          */
    /* ********************************************** */
    $(".accordion-toggle-blog,.accordion-toggle").click(function(e) {
	    e.preventDefault();
	    $(this).parent().next("div.accordion-content").slideToggle()
	  });
	  // $("#archive-dropdown").dropdown({
	  //   gutter: 0,
	  //   stack: false
	  // });

    /* ********************************************** */
    /* INPUT CLEAR                                    */
    /* ********************************************** */
    // if (document.getElementById('search')) {
    //     var input_width = $('#search').width() - 15;
    //     input_width = 1 - input_width;
    //     $("#search").addClear({
    //         right: input_width,
    //         top: 29
    //     });
    // }

   


		
		/*Mobile menu toggle class for open and closed*/
	  $(document).on('click', function (ev) {
	    $el = $(ev.target || ev.srcElement);
	    if(!$el.hasClass('mobile-menu') && ($el.attr('id') == 'navPrimary' || $el.closest('#navMobile').length)) {
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
	    } 
	  });
	  // Change class to know when user scrolls from top
	  //$("#navPrimary").headroom();

});
