//JQUERY noConflict mode (for wordpress)
jQuery(document).ready(function($) {

	// FASTCLICK FOR MOBILE
	$(function() {
	    FastClick.attach(document.body);
	});


    // VIDEO CAROUSEL CODE - RUSSELL
	$(function(){
        var videoCarousel = $('.video-carousel').swiper({
            //Your options here:
            mode:'horizontal',
            loop: true,
            calculateHeight: true,
            centeredSlides: true,
            slidesPerView: 3,
            simulateTouch: false,
            loopAdditionalSlides: 1,
            onSlideChangeEnd: function(swiper){
            	if(jQuery.browser.mobile)
					{
					   // console.log('You are using a mobile device!');
						var activeSlide = videoCarousel.activeSlide();
						var activeVideo = $(activeSlide).children('.content_container').children('.video_container').children('video:eq(0)');
						var activeTitle = $(activeSlide).children('.content_container').children('h3');

						$(activeTitle).fadeIn(400);
						//$(activeVideo)[0].play();

						$((activeVideo)[0]).on('ended', function() {
						$(activeTitle).fadeOut(400).delay(500).queue(function(slideNext){
							videoCarousel.swipeNext();
							slideNext();
							$(this).clearQueue();
						});
						});
					}
					else
					{
					   // console.log('You are not using a mobile device!');
						var activeSlide = videoCarousel.activeSlide();
						var activeVideo = $(activeSlide).children('.content_container').children('.video_container').children('video:eq(0)');
						var activeTitle = $(activeSlide).children('.content_container').children('h3');

						$(activeTitle).fadeIn(400);
						$(activeVideo)[0].play();

						$((activeVideo)[0]).on('ended', function() {
							$(activeTitle).fadeOut(400).delay(500).queue(function(slideNext){
								videoCarousel.swipeNext();
								slideNext();
								$(this).clearQueue();
							});
						});
					 }



              
            },
            onSlideChangeStart: function(swiper){ //this handles all clicks on nav and pagination

            	if(jQuery.browser.mobile)
					{
					   // console.log('You are using a mobile device!');
						var allVideo = $('.content_container').children('.video_container').children('.video');
						var allTitle = $('.content_container').children('h3');  

						//console.log(allVideo); 

						$(allTitle).fadeOut(400);
						$('.video').each(function() {
							$(this).get(0).pause();
							//$(this).get(0).load();
						});

						$(allVideo)[0].pause();
						//$(allVideo)[0].load();
					}
					else
					{
					   //console.log('You are not using a mobile device!');
						var allVideo = $('.content_container').children('.video_container').children('.video');
						var allTitle = $('.content_container').children('h3');  

						//console.log(allVideo); 

						$(allTitle).fadeOut(400);
						$('.video').each(function() {
							$(this).get(0).pause();
							$(this).get(0).currentTime = 0;
						});

						$(allVideo)[0].pause();
						$(this).get(0).currentTime = 0;
					 }
              

            }

        });


        $('.video-next').on('click', function(e) {
            e.preventDefault();
            videoCarousel.swipeNext();                        
        });

        $('.video-previous').on('click', function(e) {
            e.preventDefault();
            videoCarousel.swipePrev();
        });

    	// fade in mvideo players
		$('.video-carousel .swiper-wrapper').waypoint(function() {
			if(jQuery.browser.mobile)
				{
				   // console.log('You are using a mobile device!');
					var activeTitle = $('.swiper-slide-active').children('.content_container').children('h3');
					var activeVideo = $('.swiper-slide-active').children('.content_container').children('.video_container').children('.video');
					$(activeTitle).fadeIn(400);
					//$(activeVideo)[0].play();

					$((activeVideo)[0]).on('ended', function() {
						$(activeTitle).fadeOut(400).delay(500).queue(function(slideNext){
							videoCarousel.swipeNext();
							slideNext();
							$(this).clearQueue();
						});
					});
				}
				else
				{
				   // console.log('You are not using a mobile device!');
					var activeTitle = $('.swiper-slide-active').children('.content_container').children('h3');
					var activeVideo = $('.swiper-slide-active').children('.content_container').children('.video_container').children('.video');
					$(activeTitle).fadeIn(400);
					$(activeVideo)[0].play();

					$((activeVideo)[0]).on('ended', function() {
						$(activeTitle).fadeOut(400).delay(500).queue(function(slideNext){
							videoCarousel.swipeNext();
							slideNext();
							$(this).clearQueue();
						});
					});
				}
		},
		{
			offset: '50%'
		});
    });


	$(function(){
		var quoteCarousel = $('.quote-carousel').swiper({
			mode:'horizontal',
			loop: false,
			slidesPerView: 1,
			calculateHeight: true,
            simulateTouch: false,
			onSlideChangeStart: function(swiper){
		    	if ($(quoteCarousel.getFirstSlide()).hasClass('swiper-slide-visible')) {
					$('.swiper-previous').addClass('inactive');
				} else {
					$('.swiper-previous').removeClass('inactive');
				}	
				if ($(quoteCarousel.getLastSlide()).hasClass('swiper-slide-visible')) {
					$('.swiper-next').addClass('inactive');
				} else {
					$('.swiper-next').removeClass('inactive');
				}
		    }
		});

		// slide using carousel navigation arrows
		$('.quote-next').on('click', function(e) {
			e.preventDefault();
			quoteCarousel.swipeNext();                        
		});

		$('.quote-previous').on('click', function(e) {
			e.preventDefault();
			quoteCarousel.swipePrev();
		});
	}); 

// ABOUT US CAROUSEL OPTIONS

	// establish correct # of visible slides based on screen size on page load
	var aboutPerView;
	var aboutPerGroup;

	if (($(window).width()) < 568) {
		console.log('small!');
		aboutPerView = 1;
		aboutPerGroup = 1;
	} else if (($(window).width()) < 768) {
		aboutPerView = 2;
		aboutPerGroup = 2;
	} else {
		aboutPerView = 3;
		aboutPerGroup = 3;
	}


	// instantiate About Us carousel
	$(function(){
		var aboutCarousel = $('.about-us-carousel').swiper({
			mode:'horizontal',
			loop: false,
			slidesPerView: aboutPerView,
			slidesPerGroup: aboutPerGroup,
			calculateHeight: true,
			simulateTouch: false,
			onSlideChangeStart: function(swiper){
		    	if ($(aboutCarousel.getFirstSlide()).hasClass('swiper-slide-visible')) {
					$('.swiper-previous').addClass('inactive');
				} else {
					$('.swiper-previous').removeClass('inactive');
				}	

				if ($(aboutCarousel.getLastSlide()).hasClass('swiper-slide-visible')) {
					$('.swiper-next').addClass('inactive');
				} else {
					$('.swiper-next').removeClass('inactive');
				}
		    }
		});
		
		// change swiper params (# of visible slides) based on screen size
		$(window).resize(function() {
			if ($('body').hasClass('about-us') ) {
				if ( $(this).width() < 568 ) {
				aboutCarousel.params.slidesPerView =1;
				aboutCarousel.params.slidesPerGroup =1;
				} else if ( $(this).width() < 768 ) {
					aboutCarousel.params.slidesPerView=2;
					aboutCarousel.params.slidesPerGroup=2;
				} else {
					aboutCarousel.params.slidesPerView=3;
					aboutCarousel.params.slidesPerGroup=3;
				}
			}
		});
		
		// slide using carousel navigation arrows
		$('.about-next').on('click', function(e) {
			e.preventDefault();
			aboutCarousel.swipeNext();                        
		});

		$('.about-previous').on('click', function(e) {
			e.preventDefault();
			aboutCarousel.swipePrev();
		});
	});

    /*
    ==== TOOLTIPS ======
    */  	
	// open/close tooltips
    $('.tooltip').click(function(e) {
    	e.preventDefault();
      if ($(this).hasClass('active')) {
            $(this).toggleClass('active');
        } else {
        	$('.tooltip').removeClass('active');
            $(this).toggleClass('active');
        }
    });


     /*
    ==== IMAGE SWAP ======
    */
	$('.js-swap').waypoint(function() {
		$(this).children('.grid').children('.item').eq(0).addClass('active');
	    $(this).delay(3000).queue(function(center){
	    	$(this).children('img').eq(0).removeClass('active');
	    	$(this).children('.grid').children('.item').eq(0).removeClass('active');
	    	$(this).children('img').eq(1).addClass('active');
	    	$(this).children('.grid').children('.item').eq(1).addClass('active');
	    	center();
	    });
	    $(this).delay(3000).queue(function(right){
	    	$(this).children('img').eq(1).removeClass('active');
	    	$(this).children('.grid').children('.item').eq(1).removeClass('active');
	    	$(this).children('img').eq(2).addClass('active');
	    	$(this).children('.grid').children('.item').eq(2).addClass('active');
	    	right();
	    });
	    $(this).delay(3000).queue(function(reset){
	    	$(this).children('img').eq(2).removeClass('active');
	    	$(this).children('.grid').children('.item').eq(2).removeClass('active');
	    	$(this).children('img').eq(0).addClass('active');
	    	$(this).children('.grid').children('.item').eq(0).addClass('active');
	    	reset();
	    	$(this).clearQueue();
		    });  
	},
	{
		offset: '50%'
	});

	$('.js-swap .grid .item').on('click', function(){
        $(this).parents('.js-swap').clearQueue();
        $(this).siblings('.item').removeClass('active');
        $(this).addClass('active');
        if ($(this).is(':first-of-type')) {
        	//console.log('first');
        	$(this).parents('.content').children('img').removeClass('active');
            $(this).parents('.content').children('img').eq(0).addClass('active');
        } else if ($(this).is(':nth-child(2)')) {
            $(this).parents('.content').children('img').removeClass('active');
            $(this).parents('.content').children('img').eq(1).addClass('active');
        } else if ($(this).is(':last-of-type')) {
        	$(this).parents('.content').children('img').removeClass('active');
            $(this).parents('.content').children('img').eq(2).addClass('active');
        }
    });

    /*
    ==== JQUERY WAYPOINTS ======
    */
    // fade in perk captions
	$('.img-grid').waypoint(function() {
		//console.log('oh hey');
	    $(this).children('.img-grid--caption').addClass('fade-in');
	},
	{
		offset: '25%'
	});

	// fade in media images
	$('.media__image.js-animated').waypoint(function() {
	    $(this).addClass('fade-in');
	},
	{
		offset: '75%'
	});

	/*
    ==== In-Device videos ======
    */
    // play video 
	$('.js-video').waypoint(function() {
		var vidLength = $(this).children('video').length;
		var vidIndex = 0;
		var currentVid = $(this).children('video');
		$(currentVid)[0].play();
		var activeIcon = $(this).siblings('.media__video__text').children('.media__video__info');
		if ($(this).hasClass('js-new-video')) {
			$((currentVid)[0]).on('timeupdate', function() {
				if ($(currentVid)[0].currentTime > 0.0 && $(currentVid)[0].currentTime < 8.0) {
					vidIndex = 0;
					$(activeIcon).removeClass('active');
					$(activeIcon).eq(vidIndex).addClass('active');
				} else if ($(currentVid)[0].currentTime > 8.0 && $(currentVid)[0].currentTime < 16.0) {
					vidIndex = 1;
					$(activeIcon).removeClass('active');
					$(activeIcon).eq(vidIndex).addClass('active');
				} else if ($(currentVid)[0].currentTime > 16.0 && $(currentVid)[0].currentTime < 24.0) {
					vidIndex = 2;
					$(activeIcon).removeClass('active');
					$(activeIcon).eq(vidIndex).addClass('active');
				} else if ($(currentVid)[0].currentTime > 24.0 && $(currentVid)[0].currentTime < $(currentVid)[0].duration) {
					vidIndex = 3;
					$(activeIcon).removeClass('active');
					$(activeIcon).eq(vidIndex).addClass('active');
				}
			});
		} else if ($(this).hasClass('js-video-ipad')) {
			$((currentVid)[0]).on('timeupdate', function() {
				//console.log('JS VLAPTOP!');
				if ($(currentVid)[0].currentTime > 0.0 && $(currentVid)[0].currentTime < 8.0) {
					vidIndex = 0;
					$(activeIcon).removeClass('active');
					$(activeIcon).eq(vidIndex).addClass('active');
				} else if ($(currentVid)[0].currentTime > 8.0 && $(currentVid)[0].currentTime < 21.0) {
					vidIndex = 1;
					$(activeIcon).removeClass('active');
					$(activeIcon).eq(vidIndex).addClass('active');
				} else if ($(currentVid)[0].currentTime > 21.0 && $(currentVid)[0].currentTime < 31.0) {
					vidIndex = 2;
					$(activeIcon).removeClass('active');
					$(activeIcon).eq(vidIndex).addClass('active');
				} else if ($(currentVid)[0].currentTime > 31.0 && $(currentVid)[0].currentTime < $(currentVid)[0].duration) {
					vidIndex = 3;
					$(activeIcon).removeClass('active');
					$(activeIcon).eq(vidIndex).addClass('active');
				}
			});
		}

		$((currentVid)[0]).on('ended', function() {
			$(this).currentTime = 0;
			$(this)[0].play();
			$(this).parent().siblings('.media__video__text').children('.media__video__info.active').removeClass('active');
			// $(this).parent().siblings('.media__video__text').children('.media__video__info:first-of-type').addClass('active');
		});
	},
	{
		offset: '50%'
	});
       
    // timing for video bullet active states, tied to respecitve videos
    $('.media__video__info').click(function() {
        var thisVideo = $(this).parent('.media__video__text').prev('.media__video').children('video:eq(0)');
        $(this).siblings().removeClass('active');    
        $(this).addClass('active');
        if ($(this).children('.icon').hasClass('js-icon-1')) {
            $(thisVideo)[0].currentTime = 0;
            $(thisVideo)[0].play();
        } else if ($(this).children('.icon').hasClass('js-icon-2')) {
            $(thisVideo)[0].currentTime = 8.0;
            $(thisVideo)[0].play();
        } else if ($(this).children('.icon').hasClass('js-icon-3')) {
            $(thisVideo)[0].currentTime = 16.0;
            $(thisVideo)[0].play();    
        } else if ($(this).children('.icon').hasClass('js-icon-4')) {
            $(thisVideo)[0].currentTime = 24.0;
            $(thisVideo)[0].play();
        } else if ($(this).children('.icon').hasClass('js-ipad-1')) {
            $(thisVideo)[0].currentTime = 0;
            $(thisVideo)[0].play();
        } else if ($(this).children('.icon').hasClass('js-ipad-2')) {
            $(thisVideo)[0].currentTime = 7.0;
            $(thisVideo)[0].play();
        } else if ($(this).children('.icon').hasClass('js-ipad-3')) {
            $(thisVideo)[0].currentTime = 22.0;
            $(thisVideo)[0].play();    
        } else if ($(this).children('.icon').hasClass('js-ipad-4')) {
            $(thisVideo)[0].currentTime = 30.0;
            $(thisVideo)[0].play();
        }
    }); 

	/* ********************************************** */
    /* CUSTOMER SUCCESS                               */
    /* ********************************************** */
    $("div.customer").click(function () {

        $("div.customer").not(this).each(function () {
            $(this).find('.story').hide();
            $(this).removeClass('customer-hover');
        });

        $(this).find('.story').slideToggle();

        if ($(this).hasClass('customer-hover')) {
            $(this).removeClass('customer-hover');
        } else {
            $(this).addClass('customer-hover');
        }

    });

    /* 
	http://css-tricks.com/equal-height-blocks-in-rows/
	It's been modified into a function called at page 
	load and then each time the page is resized. 
	One large modification was to remove the set height 
	before each new calculation.
	*/

	equalheight = function(container){

	var currentTallest = 0,
	     currentRowStart = 0,
	     rowDivs = new Array(),
	     $el,
	     topPosition = 0;
	 $(container).each(function() {

	   $el = $(this);
	   $($el).height('auto')
	   topPostion = $el.position().top;

	   if (currentRowStart != topPostion) {
	     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
	       rowDivs[currentDiv].height(currentTallest);
	     }
	     rowDivs.length = 0; // empty the array
	     currentRowStart = topPostion;
	     currentTallest = $el.height();
	     rowDivs.push($el);
	   } else {
	     rowDivs.push($el);
	     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
	  }
	   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
	     rowDivs[currentDiv].height(currentTallest);
	   }
	 });
	}

	$(window).load(function() {
	  equalheight('.js-height');
	  $('.overlap, .full-bleed').parents('.container').css("padding-bottom", 0);
	});
	
	$(window).resize(function() {
	  equalheight('.js-height');
	});


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
	        $('#header-holder').css("position", 'fixed');
	        $('#header-padding').show('fast');
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


	    var criticalSliderInterval;

    if(jQuery.browser.mobile)
		{
		   //console.log('You are using a mobile device!');
		   
		}
		else
		{
		   //console.log('You are not using a mobile device!');
		   var isiPad = /ipad/i.test(navigator.userAgent.toLowerCase());
			if (isiPad)
			{
			  // console.log('You are using a ipad device!');
			  $('.video__device').children('video').hide();
			  $('.video__device').children('.video-replace').show();
			  $('.video__bullet').css('pointer-events', 'none');

			  $('.video_container').children('video').hide();
			  $('.video_container').children('.poster-image').show();
			}

		}

    function rotateCriticalContent() {
      var currentIndex = $(".feature.icons .detail.active").index();
      if (currentIndex + 1 < 3) {
        newIndex = currentIndex + 1;
      }
      else {
        newIndex = 0;
      }
      $(".feature.icons .detail.active").removeClass('active');
      $(".feature.icons .detail:eq(" + newIndex + ")").addClass('active');
      $(".critical-content-container img.active").removeClass('active');
      $(".critical-content-container img:eq(" + newIndex + ")").addClass('active');
    }
    
    function resetCriticalSlider() {
      $(".feature.icons .detail.active").removeClass('active');
      $(".feature.icons .detail:eq(0)").addClass('active');
      $(".critical-content-container img.active").removeClass('active');
      $(".critical-content-container img:eq(0)").addClass('active');
    }
    
    criticalSliderInterval = setInterval(rotateCriticalContent, 5000);
    
    $(".feature.icons.reader .detail img").click(function() {
      clearInterval(criticalSliderInterval);
      var index = $(this).closest(".detail").index();
      $(".feature.icons .detail.active").removeClass('active');
      $(".feature.icons .detail:eq(" + index + ")").addClass('active');
      $(".critical-content-container img.active").removeClass('active');
      $(".critical-content-container img:eq(" + index + ")").addClass('active');
      criticalSliderInterval = setInterval(rotateCriticalContent, 5000);
    });

	/* ********************************************** */
    /* dropdown to drop divs                          */
    /* ********************************************** */
    $(".accordion-toggle-blog,.accordion-toggle").click(function(e) {
	    e.preventDefault();
	    $(this).parent().next("div.accordion-content").slideToggle()
	  });
	  $("#archive-dropdown").dropdown({
	    gutter: 0,
	    stack: false
	  });

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

    (function() {
		  var $form, $input, $page, $results, $title, submitResourceForm;

		  $page = $(".page-template-page-resources-php");

		  // if (!$page.length) {
		  //   $page = $(".post-type-archive-resource");
		  // }

		  if ($page.length) {
		    $form = $("#resource-search");
		    $title = $(".search-title");
		    $results = $(".grid-resource");
		    $input = $("#s");
		    submitResourceForm = function(cb) {
		      var query;
		      $results.html("<p class='loading-results'>Loading results...</p>");
		      query = $form.serialize();
		      return $.ajax({
		        url: 'http://localhost/inkling-com/resources',
		        data: query,
		        dataType: "html"
		      }).done(function(resp) {
		        var results, _base;
		        results = $($.parseHTML(resp)).find(".grid-resource").html();
		        $results.html(results);
		        if (typeof cb === "function") {
		          cb();
		        }
		        return typeof (_base = window.history).replaceState === "function" ? _base.replaceState("", "searchResults", 'http://localhost/inkling-com/resources' + "/?" + query) : void 0;
		      });
		    };
		    $form.find("select").on("change", function() {
		      $form.find("#s").val("");
		      return submitResourceForm();
		    });
		    $form.on("submit", function(e) {
		      e.preventDefault();
		      return submitResourceForm(function(count) {
		        var resultsCount, resultsTerm;
		        resultsCount = $results.find("li").length;
		        // resultsTerm = $("#s").val();
		        // $title.show().find(".search-count").text(resultsCount);
		        // return $title.find(".search-terms").text("\u201C" + resultsTerm + "\u201D");
		      });
		    });
		    // $page.on("click", ".clear-search", function(e) {
		    //   e.preventDefault();
		    //   $input.val("");
		    //   $title.hide();
		    //   return submitResourceForm();
		    // });
		    // $page.on("click", ".filter-toggle", function(e) {
		    //   var $this;
		    //   e.preventDefault();
		    //   $this = $(this);
		    //   $this.addClass("active").siblings(".active").removeClass("active");
		    //   return $results.removeClass("list grid").addClass(this.getAttribute("data-toggle"));
		    // });
		    // $page.on("click", ".resources-paginate a", function(e) {
		    //   var $this;
		    //   e.preventDefault();
		    //   $this = $(this);
		    //   $this.text("Loading...");
		    //   return $.ajax({
		    //     url: $this.attr("href")
		    //   }).done(function(resp) {
		    //     var results;
		    //     results = $($.parseHTML(resp)).find(".search-results").html();
		    //     $this.parents("li").remove();
		    //     return $results.append(results);
		    //   });
		    // });
		  }

		}).call(this);


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
	  // Change class to know when user scrolls from top
		$("#navPrimary").headroom();

});
