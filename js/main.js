/*
 * Author: tallergorilas.com
 */



/**
 * Require:
 *
 *
 */





/* ---------------------------------- */

/* Initialize */

jQuery (
  function($){
    $.Body = $('body');
    $.Window = $(window);
    $.Contador = 0;
    $.SidebarShown = false;


    $('[data-script]').Instantiate();
    $('[data-ge]').InitAnalytics();




    /*------------------------------------*\
      Event Binding
    \*------------------------------------*/

    $.Body
      .bind($.Events.LINK_CLICK,function(e,elem,sel){
        ge('Link','Click',getMeta(elem,sel)); // Google Analytics Track Action
      })
      .bind($.Events.BUTTON_CLICK,function(e,elem,sel){
        ge('Button','Click',getMeta(elem,sel)); // Google Analytics Track Action
      });


    /*------------------------------------*\
      Event Related Functions
    \*------------------------------------*/

    /* EventTracking functions */
    ge = function(category,action,label){
      category = typeof category !== 'undefined' ? category : 'No Category';
      action = typeof action !== 'undefined' ? action : 'No Action';
      label = typeof label !== 'undefined' ? label : 'No Label';

      console.log(['_trackEvent', category, action, label]);
      _gaq.push(['_trackEvent', category, action, label]);
    }
    getMeta = function(elem,sel){
      var attr = $(elem).attr('id'),
        clas = $(elem).attr('class');
      if (attr!==undefined) {
        meta='#'+attr;
      } else if(clas!==undefined) {
        meta='.'+clas;
      } else if(sel!==undefined){
        meta = sel
      } else {
        meta = 'NoID';
      }
      return meta;
    }


    /*------------------------------------*\
      Helper Animation Functions
    \*------------------------------------*/

    //http://www.josebrowne.com/open/tutorial-easy-css-animations-with-animate-css
    // Require Animate.css: https://github.com/daneden/animate.css
    function animationHover(element, animation){
      element = $(element);
      element.hover(
      function() {
        element.addClass('animated ' + animation);
      },
      function(){
        //wait for animation to finish before removing classes
        window.setTimeout( function(){
        element.removeClass('animated ' + animation);
        }, 2000);
      }
      );
    };
    function animationClick(element, animation){
      element = $(element);
      element.click(
        function() {
          element.addClass('animated ' + animation);
          //wait for animation to finish before removing classes
          window.setTimeout( function(){
              element.removeClass('animated ' + animation);
          }, 2000);
        }
      );
    };


  }

);
$(window).load(function () {
  $.Window.triggerHandler($.Events.RESIZE);
});

/* ---------------------------------- */




/*------------------------------------*\
  Event Variables
\*------------------------------------*/

(function ($){
  $.Events = {
    RESIZE : 'resize',
    LINK_CLICK : 'linkClick',
    BUTTON_CLICK : 'buttonClick'
  }
})(jQuery);


/*------------------------------------*\
  Auto Instantiate
\*------------------------------------*/

(function ($) {
  $.fn.Instantiate = function (settings){
    var config = {};
    if (settings) $.extend (config,settings);

    this.each(function(){
      var $self = $(this),
      $controler = $self.attr('data-script');

      if ($self[$controler])
        $self[($controler)]();

    });

  }
})(jQuery);

(function ($) {
  $.fn.InitAnalytics = function (settings){
    var config = {};
    if (settings) $.extend (config,settings);

    this.each(function(){
      var $self = $(this);

      $self.on('click',function(){
        var geId = $self.attr('data-ge');
        var arr = geId.split(',');
        ge(arr[0],arr[1],arr[2]);
      });

    });

  }
})(jQuery);

/*------------------------------------*\
  Components
\*------------------------------------*/


/* LeadTitle */
(function ($) {
  $.fn.LeadTitle = function (settings){
    var config = {};
    if (settings) $.extend(config, settings);

    this.each(function() {
      //
      var $self = $(this).find('h1');
      if (Modernizr.mq('only screen and (min-device-width: 1025px)')) {
        //$self.fitText(0.7);
      }
    //
    });
    return this;
  }
})(jQuery);



/* ButtonAction */
(function ($) {
  $.fn.ButtonAction = function (settings){
    var config = {};
    if (settings) $.extend(config, settings);

    this.each(function() {
      //
      var $self = $(this);
      $self.click(function(e){
        console.log($self);
      });
    //
    });
    return this;
  }
})(jQuery);



