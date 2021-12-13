$(document).ready(function () {
  smoothScroll(1000);
  serviceBeltControls();
  workBeltControls();






  $(".cr-template").fitText(1, { minFontSize: '15px', maxFontSize: '70px' });
  $(".welcome").fitText(1, { minFontSize: '75px', maxFontSize: '130px' });
  //Fit text for the Section Headers and Subsection
  $(".section-header strong").fitText(1, { minFontSize: '20px', maxFontSize: '50px' });
  $(".section-header span").fitText(1, { minFontSize: '15px', maxFontSize: '35px' });

  //Making Service Accordion
  $('.skill-lockup').accordion({
     icons: { "header": "", "activeHeader": "" }
  });


  //Service Belt Controls
});



function serviceBeltControls(){
  var $this = $(this),
  curActiveQuote = $('.client-quote-belt').children('.quote-unit').find('.active-quote'),
  position = $('.client-quote-belt').children().index(curActiveQuote),
  clientNum = $('.quote-unit').length;
  //setting active client
  $('.quote-unit').first().addClass('active-quote');
  $('.clients-mobile-nav span').first().addClass('active-quote');
  //Click listener for client Mobile nav
  $('.clients-mobile-nav span').on('click', function () {
    //Store Key Variables
    var $this = $(this),
    $siblings = $this.parent().children(),
    position = $siblings.index($this);

    $('.quote-unit').removeClass('active-quote').eq(position).addClass('active-quote');
    $siblings.removeClass('active-quote');
    $this.addClass('active-quote');


  });

  $('.client-control-next, .client-control-prev').on('click', function () {

    var $this = $(this),
    curActiveQuote = $('.client-quote-belt').find('.active-quote'),
    position = $('.client-quote-belt').children().index(curActiveQuote),
    clientNum = $('.quote-unit').length;

    var $this = $(this);
    if( $this.hasClass('client-control-next') ){
      //so far as the number of quotes is greater than the current postion move forward
      if(clientNum > position+1 ){
        $('.client-quote-belt').children().removeClass('active-quote').eq((position+1)).addClass('active-quote');
      }else{
        $('.client-quote-belt').children().removeClass('active-quote').first().addClass('active-quote');
      }

    }else{

          if(clientNum > position-1 ){
            $('.client-quote-belt').children().removeClass('active-quote').eq((position-1)).addClass('active-quote');
          }else{
            $('.client-quote-belt').children().removeClass('active-quote').last().addClass('active-quote');
          }
    }

  });
}

function workBeltControls(){
  var $this = $(this),
  curActiveQuote = $('.work-quote-belt').children('.Wqoute-unit').find('.active-Wquote'),
  position = $('.work-quote-belt').children().index(curActiveQuote),
  clientNum = $('.Wqoute-unit').length;
  //setting active client
  $('.Wqoute-unit').first().addClass('active-Wquote');
  $('.work-mobile-nav span').first().addClass('active-Wquote');
  //Click listener for client Mobile nav
  $('.work-mobile-nav span').on('click', function () {
    //Store Key Variables
    var $this = $(this),
    $siblings = $this.parent().children(),
    position = $siblings.index($this);

    $('.Wqoute-unit').removeClass('active-Wquote').eq(position).addClass('active-Wquote');
    $siblings.removeClass('active-Wquote');
    $this.addClass('active-Wquote');


  });

  $('.work-control-next, .work-control-prev').on('click', function () {

    var $this = $(this),
    curActiveQuote = $('.work-quote-belt').find('.active-Wquote'),
    position = $('.work-quote-belt').children().index(curActiveQuote),
    clientNum = $('.Wqoute-unit').length;

    var $this = $(this);
    if( $this.hasClass('client-control-next') ){
      //so far as the number of quotes is greater than the current postion move forward
      if(clientNum > position+1 ){
        $('.work-quote-belt').children().removeClass('active-Wquote').eq((position+1)).addClass('active-Wquote');
      }else{
        $('.work-quote-belt').children().removeClass('active-Wquote').first().addClass('active-Wquote');
      }

    }else{

          if(clientNum > position-1 ){
            $('.work-quote-belt').children().removeClass('active-Wquote').eq((position-1)).addClass('active-Wquote');
          }else{
            $('.work-quote-belt').children().removeClass('active-Wquote').last().addClass('active-Wquote');
          }
    }

  });
}

function smoothScroll(duration){

  $('a[href^="#"]').on('click', function(event){
    var target = $($(this).attr('href'));
    if(target.length>0){
      event.preventDefault();
      $('html,body').animate({
        scrollTop: target.offset().top
      },duration);
    }
  });


}

//Fit Text
(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
