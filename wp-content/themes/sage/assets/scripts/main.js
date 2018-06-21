/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {
        // JavaScript to be fired on all pages
        
      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    // Home page
    'home': {
      init: function() {
        // JavaScript to be fired on the home page
         //slider start
         var $gallery = $('.slider-for');
         var slideCount = null;

         jQuery(document).ready(function($){
          $('.slider-for').slick({
           slidesToShow: 1,
           slidesToScroll: 1,
           arrows: true,
           fade: true,
           dots: false,
           centerMode: true,
           focusOnSelect: true,
           autoplay: false
         });

         $( document ).ready(function() {
             $gallery.slick({
               speed: 250,
               fade: true,
               cssEase: 'linear',
               swipe: true,
               swipeToSlide: true,
               touchThreshold: 10
             });
         });

         $gallery.on('init', function(event, slick){
           slideCount = $('.slick-container').size();
           setSlideCount();
           setCurrentSlideNumber(slick.currentSlide);
         });
         
         $gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
           setCurrentSlideNumber(nextSlide);
         });
         
        function setSlideCount() {
          var $el = $('.slide-count-wrap').find('.total');
          $el.text(slideCount);
        }
        
        function setCurrentSlideNumber(currentSlide) {
          var $el = $('.slide-count-wrap').find('.current');
          $el.text(currentSlide + 1);
        }

        });
        //slider end
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    'page': {
      init: function() {
        // JavaScript to be fired on the home page
        jQuery.each(jQuery('p'), function(i, el){
          setTimeout(function(){
            jQuery(el).addClass('visible');
          },100 + ( i * 200 ));
        });
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // Biography page
    'biography': {
      init: function() {
        // JavaScript to be fired on the home page
        jQuery('.floating-breadcrumb').addClass('activenav');
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    'single_biography': {
      init: function() {
        // JavaScript to be fired on the home page
        jQuery('.floating-breadcrumb').addClass('activenav');
        var trigger_btn = jQuery(".floating-breadcrumb").find('a').first();
        var main_menu = jQuery("#menu-main-menu");
        jQuery(trigger_btn).hover(
          function () {
            jQuery(".floating-breadcrumb").toggleClass('slidesubmenu');
          }, 
          function () {
            jQuery(".floating-breadcrumb").toggleClass('slidesubmenu');
          }
        );
        jQuery(main_menu).hover(
          function () {
            jQuery(".floating-breadcrumb").toggleClass('slidesubmenu');
          }, 
          function () {
            jQuery(".floating-breadcrumb").toggleClass('slidesubmenu');
          }
        );//end
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // collection page
    'collections': {
      init: function() {
        // JavaScript to be fired on the home page
        jQuery.each(jQuery('.tablepress tbody tr'), function(i, el){
          setTimeout(function(){
            jQuery(el).addClass('visible');
          },100 + ( i * 200 ));
        });
        var trigger_btn = jQuery(".floating-breadcrumb").find('a').first();
        var main_menu = jQuery("#menu-main-menu");
        jQuery(trigger_btn).hover(
          function () {
            jQuery(".floating-breadcrumb").toggleClass('slidesubmenu');
          }, 
          function () {
            jQuery(".floating-breadcrumb").toggleClass('slidesubmenu');
          }
        );
        jQuery(main_menu).hover(
          function () {
            jQuery(".floating-breadcrumb").toggleClass('slidesubmenu');
          }, 
          function () {
            jQuery(".floating-breadcrumb").toggleClass('slidesubmenu');
          }
        );//end
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // awards page
    'awards': {
      init: function() {
        // JavaScript to be fired on the home page
        jQuery.each(jQuery('.tablepress tbody tr'), function(i, el){
          setTimeout(function(){
            jQuery(el).addClass('visible');
          },100 + ( i * 200 ));
        });
        var trigger_btn = jQuery(".floating-breadcrumb").find('a').first();
        var main_menu = jQuery("#menu-main-menu");
        jQuery(trigger_btn).hover(
          function () {
            jQuery(".floating-breadcrumb").toggleClass('slidesubmenu');
          }, 
          function () {
            jQuery(".floating-breadcrumb").toggleClass('slidesubmenu');
          }
        );
        jQuery(main_menu).hover(
          function () {
            jQuery(".floating-breadcrumb").toggleClass('slidesubmenu');
          }, 
          function () {
            jQuery(".floating-breadcrumb").toggleClass('slidesubmenu');
          }
        );//end
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // exhibitions page
    'exhibitions': {
      init: function() {
        // JavaScript to be fired on the home page
        jQuery.each(jQuery('.tablepress tbody tr'), function(i, el){
          setTimeout(function(){
            jQuery(el).addClass('visible');
            jQuery('p').addClass('visible');
          },100 + ( i * 200 ));
        });
        var trigger_btn = jQuery(".floating-breadcrumb").find('a').first();
        var main_menu = jQuery("#menu-main-menu");
        jQuery(trigger_btn).hover(
          function () {
            jQuery(".floating-breadcrumb").toggleClass('slidesubmenu');
          }, 
          function () {
            jQuery(".floating-breadcrumb").toggleClass('slidesubmenu');
          }
        );
        jQuery(main_menu).hover(
          function () {
            jQuery(".floating-breadcrumb").toggleClass('slidesubmenu');
          }, 
          function () {
            jQuery(".floating-breadcrumb").toggleClass('slidesubmenu');
          }
        );//end
        
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // Project Single page
    'single_project': {
      init: function() {

        var main_menu = jQuery("#menu-main-menu");

        jQuery(main_menu).hover(
          function () {
            jQuery(".floating-breadcrumb").toggleClass('slidesubmenu');
          }, 
          function () {
            jQuery(".floating-breadcrumb").toggleClass('slidesubmenu');
          }
        );

        jQuery('#documentary-section').hide();
        jQuery('#information-section').hide();
        jQuery('#timelapse-section').hide();
        jQuery('#borealis-section').hide();
        jQuery('#dye2-section').hide();

        jQuery( "#documentary" ).click(function() {
          jQuery('#single-page').hide();
          jQuery('#information-section').hide();
          jQuery('#documentary-section').show();
          jQuery('#borealis-section').hide();
          jQuery('#dye2-section').hide();
          jQuery('#timelapse-section').hide();
          jQuery.each(jQuery('p'), function(i, el){
            setTimeout(function(){
              jQuery(el).removeClass('visible');
            },100 + ( i * 200 ));
          });
        });

        jQuery( "#timelapse" ).click(function() {
          jQuery('#single-page').hide();
          jQuery('#information-section').hide();
          jQuery('#documentary-section').hide();
          jQuery('#borealis-section').hide();
          jQuery('#dye2-section').hide();
          jQuery('#timelapse-section').show();
          jQuery.each(jQuery('p'), function(i, el){
            setTimeout(function(){
              jQuery(el).removeClass('visible');
            },100 + ( i * 200 ));
          });
        });

        jQuery( "#borealis" ).click(function() {
          jQuery('#single-page').hide();
          jQuery('#information-section').hide();
          jQuery('#documentary-section').hide();
          jQuery('#borealis-section').show();
          jQuery('#dye2-section').hide();
          jQuery('#timelapse-section').hide();
          jQuery.each(jQuery('p'), function(i, el){
            setTimeout(function(){
              jQuery(el).removeClass('visible');
            },100 + ( i * 200 ));
          });
        });

        jQuery( "#dye2" ).click(function() {
          jQuery('#single-page').hide();
          jQuery('#information-section').hide();
          jQuery('#documentary-section').hide();
          jQuery('#borealis-section').hide();
          jQuery('#dye2-section').show();
          jQuery('#timelapse-section').hide();
          jQuery.each(jQuery('p'), function(i, el){
            setTimeout(function(){
              jQuery(el).removeClass('visible');
            },100 + ( i * 200 ));
          });
        });

        jQuery( "#information" ).click(function() {
          jQuery('#single-page').hide();
          jQuery('#information-section').show();
          jQuery('#documentary-section').hide();
          jQuery('#borealis-section').hide();
          jQuery('#dye2-section').hide();
          jQuery('#timelapse-section').hide();
          jQuery.each(jQuery('p'), function(i, el){
            setTimeout(function(){
              jQuery(el).addClass('visible');
            },100 + ( i * 200 ));
          });
        });

        jQuery( "#photography" ).click(function() {
          jQuery('#single-page').show();
          jQuery('#information-section').hide();
          jQuery('#documentary-section').hide();
          jQuery('#borealis-section').hide();
          jQuery('#dye2-section').hide();
          jQuery('#timelapse-section').hide();
          jQuery.each(jQuery('p'), function(i, el){
            setTimeout(function(){
              jQuery(el).removeClass('visible');
            },100 + ( i * 200 ));
          });
        });
       
        jQuery( "#zoom_image" ).click(function() {
          jQuery(this).html(jQuery(this).html() == 'Close' ? 'Fullscreen' : 'Close');   
          jQuery('.slick-slide img').toggleClass('zoomin');
          jQuery('.banner').toggleClass('zoom');
         // jQuery('.floating-breadcrumb').toggleClass('zoom');
          jQuery('.slide-count-wrap').toggleClass('movedown');
          jQuery('.single-project figcaption').toggleClass('movedown');
        });

        jQuery( "#thumbnail_hotspot" ).click(function() {
          jQuery('.thumb_nav').fadeIn(500);
          jQuery('.thumb_nav').addClass('showthumbnails');
        });

        jQuery('a[data-slide]').click(function(e) {
          e.preventDefault();
          jQuery('.thumb_nav').fadeOut(500);
          var slideno = jQuery(this).data('slide');
          $('.slider-nav').slick('slickGoTo', slideno - 1);
        });
        //

        //slider start
        var $gallery = $('.slider-for');
         var slideCount = null;

        jQuery(document).ready(function($){
          $('.slider-for').slick({
           slidesToShow: 1,
           slidesToScroll: 1,
           arrows: true,
           fade: true,
           asNavFor: '.slider-nav'
         });
         $('.slider-nav').slick({
           slidesToShow: 2,
           slidesToScroll: 1,
           asNavFor: '.slider-for',
           dots: true,
           centerMode: true,
           focusOnSelect: true,
           arrows: true,
           autoplay: false
         });
       });




      $gallery.on('init', function(event, slick){
        slideCount = $('.slick-container').size();
        setSlideCount();
        setCurrentSlideNumber(slick.currentSlide);
      });
      
      $gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        setCurrentSlideNumber(nextSlide);
      });
      
     function setSlideCount() {
       var $el = $('.slide-count-wrap').find('.total');
       $el.text(slideCount);
     }
     
     function setCurrentSlideNumber(currentSlide) {
       var $el = $('.slide-count-wrap').find('.current');
       $el.text(currentSlide + 1);
     }

        //slider end
       
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // information page
    'information': {
      init: function() {
        // JavaScript to be fired on the home page
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // collection page
    'journal': {
      init: function() {
        // JavaScript to be fired on the home page
        jQuery(window).ready(function($){
            if (typeof Instafeed != 'undefined') {
              var userFeed = new Instafeed({
                target: 'instafeed',
                get: 'user',
                clientId:'fae7f4e6e115414d86563e9fce5fe2f4',
                userId: '253909713',
                accessToken : '253909713.1677ed0.4d13c0e22c6e4acc99a17e0f0a90f986',
                resolution: 'standard_resolution',
                template: '<li class="col-lg-3 col-md-3 col-sm-4 col-xs-12"><a class="animation" href="{{link}}" target="_blank"><img src="{{image}}" /></a><h4>{{model.created_time}}</h4><p>{{caption}}</p></li>',
                filter: function(image) {
                    var date = new Date(image.created_time*1000);
                    var m = date.getMonth();
                    var d = date.getDate();
                    var y = date.getFullYear();
                    var month_names = new Array ( );
                    month_names[month_names.length] = "Jan";
                    month_names[month_names.length] = "Feb";
                    month_names[month_names.length] = "Mar";
                    month_names[month_names.length] = "Apr";
                    month_names[month_names.length] = "May";
                    month_names[month_names.length] = "Jun";
                    month_names[month_names.length] = "Jul";
                    month_names[month_names.length] = "Aug";
                    month_names[month_names.length] = "Sep";
                    month_names[month_names.length] = "Oct";
                    month_names[month_names.length] = "Nov";
                    month_names[month_names.length] = "Dec";
                    var thetime = month_names[m] + ' ' + d;
                    image.created_time = thetime;
                    return true;
                }
              });
              console.log('About to initialise feed.run()');
              userFeed.run();
            } else {
              console.log('Instafeed.js has not been loaded');
            }//end of instagram
        });
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // media page
    'media': {
      init: function() {
        // JavaScript to be fired on the home page
        jQuery(document).ready(function($) {
          jQuery(".clickable-row").click(function() {
              window.location = jQuery(this).data("href");
          });
        });
        jQuery.each(jQuery('.clickable-row'), function(i, el){
          setTimeout(function(){
            jQuery(el).addClass('visible');
          },100 + ( i * 200 ));
        });
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // single media page
    'single_media': {
      init: function() {
        // JavaScript to be fired on the home page
        jQuery.each(jQuery('p'), function(i, el){
          setTimeout(function(){
            jQuery(el).addClass('visible');
          },100 + ( i * 200 ));
        });
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // projects page
    'projects': {
      init: function() {
        // JavaScript to be fired on the home page
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // contact page
    'contact': {
      init: function() {
        // JavaScript to be fired on the home page
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // About us page, note the change from about-us to about_us.
    'about_us': {
      init: function() {
        // JavaScript to be fired on the about us page
      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.

/*** jQuery.each(jQuery('ul.catlistul li'), function(i, el){
		setTimeout(function(){
			jQuery(el).addClass('visible');
		},100 + ( i * 50 ));
	});
	jQuery.each(jQuery('.tablepress tbody tr td>div'), function(i, el){
		setTimeout(function(){
			jQuery(el).addClass('visible');
		},100 + ( i * 50 ));
	});
	jQuery.each(jQuery('#instafeed .journal-list'), function(i, el){
		setTimeout(function(){
			jQuery(el).addClass('visible');
		},100 + ( i * 50 ));
	});	
	jQuery.each(jQuery('.biocontent .wpb_wrapper p'), function(i, el){
		jQuery(el).addClass('catlistli');
		setTimeout(function(){
			jQuery(el).addClass('visible');
		},100 + ( i * 50 ));
	});	
	jQuery.each(jQuery('#main .wpb_column'), function(i, el){
		jQuery(el).addClass('catlistli');
		setTimeout(function(){
			jQuery(el).addClass('visible');
		},100 + ( i * 50 ));
	});
	if(window.location.href.indexOf("media") > -1) {
		if(jQuery('#site-navigation ul.main-menu li:first-child').hasClass('current-menu-item')){
		}else{
			var url = window.location.href;
			if(url.indexOf("/media") > -1)
				jQuery('#site-navigation ul.main-menu li.media-menu').addClass('current-menu-item');

			url = '';
		}
	} */
