
function getCoords(elem) {
  // (1)
  var box = elem.getBoundingClientRect();

  var body = document.body;
  var docEl = document.documentElement;

  // (2)
  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  // (3)
  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  // (4)
  var top = box.top + scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;

  return {
    top: top,
    left: left
  };
}
document.querySelectorAll('#ukraineMap > g > a').forEach(e => {
	e.onmouseenter = function() {
		var elem = document.createElement('p');
		elem.classList.add('hint');
		elem.innerHTML = this.dataset.text;
		elem.style.left = getCoords(this).left + 30 + 'px';
		elem.style.top = getCoords(this).top - 50 + 'px';
		document.body.appendChild(elem);
		console.dir(this.dataset.text);

		this.onmouseleave = function() {
			document.body.removeChild(elem);
		}
	};
});

$slideshow = {
    context: false,
    tabs: false,
    timeout: 1000,      // time before next slide appears (in ms)
    slideSpeed: 1000,   // time it takes to slide in each slide (in ms)
    tabSpeed: 300,      // time it takes to slide in each slide (in ms) when clicking through tabs
    fx: 'scrollLeft',   // the slide effect to use
    
    init: function() {
        // set the context to help speed up selectors/improve performance
        this.context = $('#slideshow');
        
        // set tabs to current hard coded navigation items
        this.tabs = $('ul.slides-nav li', this.context);
        
        // remove hard coded navigation items from DOM 
        // because they aren't hooked up to jQuery cycle
        this.tabs.remove();
        
        // prepare slideshow and jQuery cycle tabs
        this.prepareSlideshow();
    },
    
    prepareSlideshow: function() {
        // initialise the jquery cycle plugin -
        // for information on the options set below go to: 
        // http://malsup.com/jquery/cycle/options.html
        $('div.slides > ul', $slideshow.context).cycle({
            fx: $slideshow.fx,
            timeout: $slideshow.timeout,
            speed: $slideshow.slideSpeed,
            fastOnEvent: $slideshow.tabSpeed,
            pager: $('ul.slides-nav', $slideshow.context),
            pagerAnchorBuilder: $slideshow.prepareTabs,
            before: $slideshow.activateTab,
            pauseOnPagerHover: true,
            pause: true
        });            
    },
    
    prepareTabs: function(i, slide) {
        // return markup from hardcoded tabs for use as jQuery cycle tabs
        // (attaches necessary jQuery cycle events to tabs)
        return $slideshow.tabs.eq(i);
    },

    activateTab: function(currentSlide, nextSlide) {
        // get the active tab
        var activeTab = $('a[href="#' + nextSlide.id + '"]', $slideshow.context);
        
        // if there is an active tab
        if(activeTab.length) {
            // remove active styling from all other tabs
            $slideshow.tabs.removeClass('on');
            
            // add active styling to active button
            activeTab.parent().addClass('on');
        }            
    }            
};


$(function() {
    // add a 'js' class to the body
    $('body').addClass('js');
    
    // initialise the slideshow when the DOM is ready
    $slideshow.init();
}); 

$slideshow1 = {
    context: false,
    tabs: false,
    timeout: 1000,      // time before next slide appears (in ms)
    slideSpeed: 1000,   // time it takes to slide in each slide (in ms)
    tabSpeed: 300,      // time it takes to slide in each slide (in ms) when clicking through tabs
    fx: 'scrollLeft',   // the slide effect to use
    
    init: function() {
        // set the context to help speed up selectors/improve performance
        this.context = $('#slideshow1');
        
        // set tabs to current hard coded navigation items
        this.tabs = $('ul.slides-nav1 li', this.context);
        
        // remove hard coded navigation items from DOM 
        // because they aren't hooked up to jQuery cycle
        this.tabs.remove();
        
        // prepare slideshow and jQuery cycle tabs
        this.prepareSlideshow1();
    },
    
    prepareSlideshow1: function() {
        // initialise the jquery cycle plugin -
        // for information on the options set below go to: 
        // http://malsup.com/jquery/cycle/options.html
        $('div.slides1 > ul', $slideshow1.context).cycle({
            fx: $slideshow1.fx,
            timeout: $slideshow1.timeout,
            speed: $slideshow1.slideSpeed,
            fastOnEvent: $slideshow1.tabSpeed,
            pager: $('ul.slides-nav1', $slideshow1.context),
            pagerAnchorBuilder: $slideshow1.prepareTabs,
            before: $slideshow1.activateTab,
            pauseOnPagerHover: true,
            pause: true
        });            
    },
    
    prepareTabs: function(i, slide) {
        // return markup from hardcoded tabs for use as jQuery cycle tabs
        // (attaches necessary jQuery cycle events to tabs)
        return $slideshow1.tabs.eq(i);
    },

    activateTab: function(currentSlide, nextSlide) {
        // get the active tab
        var activeTab = $('a[href="#' + nextSlide.id + '"]', $slideshow1.context);
        
        // if there is an active tab
        if(activeTab.length) {
            // remove active styling from all other tabs
            $slideshow1.tabs.removeClass('on1');
            
            // add active styling to active button
            activeTab.parent().addClass('on1');
        }            
    }            
};


$(function() {
    // add a 'js' class to the body
    $('body').addClass('js');
    
    // initialise the slideshow when the DOM is ready
    $slideshow1.init();
}); 

 $(document).ready(function(e) {
    $('.nav_menu').hide();
   var menuaberto = false;
  $('.hamburger').click(function(event) {
    event.preventDefault();
    $('.nav_menu').toggle('');
      if(menuaberto == true){
        menuaberto = false;
        $(".aicon_bt:nth-child(1)").removeClass('botao-lista-cima');
        $(".aicon_bt:nth-child(2)").removeClass('hidden');
        $(".aicon_bt:nth-child(3)").removeClass('botao-lista-baixo');
      }else {
        menuaberto = true;
        $(".aicon_bt:nth-child(1)").addClass('botao-lista-cima');
         $(".aicon_bt:nth-child(2)").addClass('hidden');
        $(".aicon_bt:nth-child(3)").addClass('botao-lista-baixo');
      }
  });
 });

 $(document).ready(function(){

        var $menu = $("#topo");

        $(window).scroll(function(){
            if ( $(this).scrollTop() > 10 && $menu.hasClass("default") ){
                $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 10 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });
    });

 $('.icon_gifts').hide();
  $('.gifts').click(function(){
    $('.icon_gifts').show('');
 });

  $('.icon_gifts_hide > a').click(function(){
    $('.icon_gifts').hide('');
 });

  $('.order_rgb').hide();
  $('#call_me').click(function(){
    $('.order_rgb').show('');
 });

  $('.order_hide').click(function(){
    $('.order_rgb').hide('');
 });

 $('.footer_tel').click(function(){
    $('.order_rgb').show('');
 });

  $('.tell').click(function(){
    $('.order_rgb').show('');
 });