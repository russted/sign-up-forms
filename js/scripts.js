

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-touch-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/**
 * jquery.dropdown.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
;
(function ($, window, undefined) {

    'use strict';

    $.DropDown = function (options, element) {
        this.$el = $(element);
        this._init(options);
    };

    // the options
    $.DropDown.defaults = {
        speed: 300,
        easing: 'ease',
        gutter: 0,
        // initial stack effect
        stack: true,
        // delay between each option animation
        delay: 0,
        // random angle and positions for the options
        random: false,
        // rotated [right||left||false] : the options will be rotated to thr right side or left side.
        // make sure to tune the transform origin in the stylesheet
        rotated: false,
        // effect to slide in the options. value is the margin to start with
        slidingIn: false,
        onOptionSelect: function (opt) {
            return false;
        }
    };

    $.DropDown.prototype = {

        _init: function (options) {

            // options
            this.options = $.extend(true, {}, $.DropDown.defaults, options);
            this._layout();
            this._initEvents();

        },
        _layout: function () {

            var self = this;
            this.minZIndex = 1000;
            var value = this._transformSelect();
            this.opts = this.listopts.children('li');
            this.optsCount = this.opts.length;
            this.size = {
                width: this.dd.width(),
                height: this.dd.height()
            };

            var elName = this.$el.attr('name'),
                elId = this.$el.attr('id'),
                inputName = elName !== undefined ? elName : elId !== undefined ? elId : 'cd-dropdown-' + (new Date()).getTime();

            this.inputEl = $('<input type="hidden" name="' + inputName + '" value="' + value + '"></input>').insertAfter(this.selectlabel);

            this.selectlabel.css('z-index', this.minZIndex + this.optsCount);
            this._positionOpts();
            if (Modernizr.csstransitions) {
                setTimeout(function () {
                    self.opts.css('transition', 'all ' + self.options.speed + 'ms ' + self.options.easing);
                }, 25);
            }

        },
        _transformSelect: function () {

            var optshtml = '',
                selectlabel = '',
                value = -1;
            this.$el.children('option').each(function () {

                var $this = $(this),
                    val = isNaN($this.attr('value')) ? $this.attr('value') : Number($this.attr('value')),
                    classes = $this.attr('class'),
                    selected = $this.attr('selected'),
                    label = $this.text();

                if (val !== -1) {
                    optshtml +=
                        classes !== undefined ?
                        '<li data-value="' + val + '"><span class="' + classes + '">' + label + '</span></li>' :
                        '<li data-value="' + val + '"><span>' + label + '</span></li>';
                }

                if (selected) {
                    selectlabel = label;
                    value = val;
                }

            });

            this.listopts = $('<ul/>').append(optshtml);
            this.selectlabel = $('<span/>').append(selectlabel);
            this.dd = $('<div class="cd-dropdown"/>').append(this.selectlabel, this.listopts).insertAfter(this.$el);
            this.$el.remove();

            return value;

        },
        _positionOpts: function (anim) {

            var self = this;

            this.listopts.css('height', 'auto');
            this.opts
                .each(function (i) {
                    $(this).css({
                        zIndex: self.minZIndex + self.optsCount - 1 - i,
                        top: self.options.slidingIn ? (i + 1) * (self.size.height + self.options.gutter) : 0,
                        left: 0,
                        marginLeft: self.options.slidingIn ? i % 2 === 0 ? self.options.slidingIn : -self.options.slidingIn : 0,
                        opacity: self.options.slidingIn ? 0 : 1,
                        transform: 'none'
                    });
                });

            if (!this.options.slidingIn) {
                this.opts
                    .eq(this.optsCount - 1)
                    .css({
                        top: this.options.stack ? 9 : 0,
                        left: this.options.stack ? 4 : 0,
                        width: this.options.stack ? this.size.width - 8 : this.size.width,
                        transform: 'none'
                    })
                    .end()
                    .eq(this.optsCount - 2)
                    .css({
                        top: this.options.stack ? 6 : 0,
                        left: this.options.stack ? 2 : 0,
                        width: this.options.stack ? this.size.width - 4 : this.size.width,
                        transform: 'none'
                    })
                    .end()
                    .eq(this.optsCount - 3)
                    .css({
                        top: this.options.stack ? 3 : 0,
                        left: 0,
                        transform: 'none'
                    });
            }

        },
        _initEvents: function () {

            var self = this;

            this.selectlabel.on('mousedown.dropdown', function (event) {
                self.opened ? self.close() : self.open();
                return false;

            });

            this.opts.on('click.dropdown', function () {
                if (self.opened) {
                    var opt = $(this);
                    self.options.onOptionSelect(opt);
                    self.inputEl.val(opt.data('value'));
                    self.selectlabel.html(opt.html());
                    self.close();
                }
            });

        },
        open: function () {
            var self = this;
            this.dd.toggleClass('cd-active');
            this.listopts.css('height', (this.optsCount + 1) * (this.size.height + this.options.gutter));
            this.opts.each(function (i) {

                $(this).css({
                    opacity: 1,
                    top: self.options.rotated ? self.size.height + self.options.gutter : (i + 1) * (self.size.height + self.options.gutter),
                    left: self.options.random ? Math.floor(Math.random() * 11 - 5) : 0,
                    width: self.size.width,
                    marginLeft: 0,
                    transform: self.options.random ?
                        'rotate(' + Math.floor(Math.random() * 11 - 5) + 'deg)' : self.options.rotated ?
                        self.options.rotated === 'right' ?
                        'rotate(-' + (i * 5) + 'deg)' :
                        'rotate(' + (i * 5) + 'deg)' : 'none',
                    transitionDelay: self.options.delay && Modernizr.csstransitions ? self.options.slidingIn ? (i * self.options.delay) + 'ms' : ((self.optsCount - 1 - i) * self.options.delay) + 'ms' : 0
                });

            });
            this.opened = true;

        },
        close: function () {

            var self = this;
            this.dd.toggleClass('cd-active');
            if (this.options.delay && Modernizr.csstransitions) {
                this.opts.each(function (i) {
                    $(this).css({
                        'transition-delay': self.options.slidingIn ? ((self.optsCount - 1 - i) * self.options.delay) + 'ms' : (i * self.options.delay) + 'ms'
                    });
                });
            }
            this._positionOpts(true);
            this.opened = false;

        }

    }

    $.fn.dropdown = function (options) {
        var instance = $.data(this, 'dropdown');
        if (typeof options === 'string') {
            var args = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                instance[options].apply(instance, args);
            });
        } else {
            this.each(function () {
                instance ? instance._init() : instance = $.data(this, 'dropdown', new $.DropDown(options, this));
            });
        }
        return instance;
    };

})(jQuery, window);





var isMobile = false;
var numberForCarousel = 3;
var carouselWidth = 338;
var videoWidth;

jQuery(window).resize(function ($) {
    var window_width = jQuery(window).width();
    videoWidth = window_width;

    if (window_width < 1074) {
        numberForCarousel = 2;
    }

    if (window_width < 716) {
        numberForCarousel = 1;
    }

    if (window_width <= 860) {
        isMobile = true;
        jQuery('#header-holder').css("position", 'relative');
        jQuery('#header-padding').hide('fast');
    } else {
        isMobile = false;
        jQuery('#header-holder').css("position", 'fixed');
        jQuery('#header-padding').show('fast');
    }
});

function accordion() {
    var toggle = jQuery(".accordion-toggle");
    var content = jQuery(".accordion-content");
    content.hide();
    //content.first().show();
    toggle.on("click", function (e) {
        e.preventDefault();
        var targetContent = jQuery(this).attr("href");
        //content.slideUp();
        jQuery(targetContent).slideToggle();
    });
}



jQuery(document).ready(function($) {
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
    


    // advance video "mark up your copy" on completion of video play
    $("#mark-up-video .video-container video").bind("ended", function() {
      var videoIndex = $(this).index();
      if (videoIndex + 1 < 4) {
        var nextIndex = $(this).index() + 1;
        $("#mark-up-video .video-container video.active").removeClass('active');
        $("#mark-up-video .video-container video:eq(" + nextIndex + ")").addClass('active');
        $("#mark-up-video .video-container video:eq(" + nextIndex + ")").get(0).play();

        $(".video-info .info.active").removeClass('active');
        $(".video-info .info:eq(" + nextIndex + ")").addClass('active');
      }
      else {
        $("#mark-up-video .video-container video.active").removeClass('active');
        $("#mark-up-video .video-container video").eq(0).addClass('active');

        $(".video-info .info.active").removeClass('active');
        $(".video-info .info").eq(0).addClass('active');
      }
    });
    
    $(".video-info .info-icon").click(function() {
      var index = $(this).parent().index();
      $("#mark-up-video .video-container video.active").get(0).pause();
      $("#mark-up-video .video-container video.active").removeClass('active');
      $("#mark-up-video .video-container video:eq(" + index + ")").addClass('active');
      $("#mark-up-video .video-container video:eq(" + index + ")").get(0).play();

      $(".video-info .info.active").removeClass('active');
      $(".video-info .info:eq(" + index + ")").addClass('active');
    });

    // function isInView(elem) {
    //   var docViewTop = $(window).scrollTop();
    //   var docViewBottom = docViewTop + $(window).height();

    //   var elemTop = $(elem).offset().top;
    //   var elemBottom = elemTop + $(elem).height();

    //   return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    // }

    
    
    $(window).resize();
    $(window).scroll(function() {
      if ($("#video-carousel").length > 0) {
        if (isInView($('#video-carousel .slide').eq(videoSlider.getCurrentSlide()))) {
          $("#video-carousel .slide").eq(videoSlider.getCurrentSlide()).find("video").get(0).play();
        }
        else {
          $("#video-carousel .slide video").each(function() {
            $(this).get(0).pause();
          });
        }
      }

      if (isInView($('#mark-up-video .video-container'))) {
        $(this).children('.video-container video.active').get(0).play();
      }
    });

    if ($('.bxslider')) {
        $('.bxslider').bxSlider({
            auto: false,
            autoStart: false,
            autoHover: true,
            pause: 3000
        });
    }

    if (document.getElementById('carousel')) {
        $('#carousel').bxSlider({
            auto: false,
            autoStart: false,
            autoHover: true,
            pause: 3000,
            maxSlides: numberForCarousel,
            minSlides: numberForCarousel,
            slideWidth: carouselWidth,
            slideMargin: 20
        });
    }

    if (document.getElementById('video-carousel')) {
        videoSlider = $('#video-carousel').bxSlider({
            auto: false,
            autoStart: false,
            autoHover: true,
            pause: 3000,
            maxSlides: 1,
            minSlides: 1,
            startSlide: 0,
            infiniteLoop: false,
            wrapperClass: "bx-videos",
            slideWidth: videoWidth,
            onSliderLoad: function() {
              var margin;
              if ($('.videos').width() > 800) {
                margin = $('.videos .slide').outerWidth() / 2;
              }
              else {
                margin = 0;              
              }
              var slideDesc = $("#video-carousel .slide:eq(0)").attr("rel");
              $("#video-carousel .slide").css("margin-left", -margin + "px");
              $("#video-carousel .slide:eq(0)").css("margin-left", ($('.videos').width() - $('.videos .slide').outerWidth()) / 2);
              $("#video-carousel .slide:eq(0) h3").fadeIn();
            },
            onSlideAfter: function($slideElement, oldIndex, newIndex) {
              var slideDesc = $("#video-carousel .slide").eq(newIndex).attr("rel");
              $("#video-carousel .slide").eq(oldIndex).find("h3").fadeOut();
              $("#video-carousel .slide").eq(newIndex).find("h3").fadeIn();
              $("#video-carousel .slide").eq(oldIndex).find("video").get(0).pause();
              $("#video-carousel .slide").eq(newIndex).find("video").get(0).play();
            },
            onSliderResize: function() {
              var margin;
              if ($('.videos').width() > 800) {
                margin = -($('.videos .slide').outerWidth() / 2);
              }
              else {
                margin = 0;              
              }
              var slideDesc = $("#video-carousel .slide:eq(0)").attr("rel");
              $("#video-carousel .slide").css("margin-left", margin + "px");
              $("#video-carousel .slide:eq(0)").css("margin-left", "");
              $(".videos.wrap h3").html(slideDesc);
              videoSlider.reloadSlider();
            }
        });
    }
    
    // advance carousel on completion of video play
    $("#video-carousel .slide video").bind("ended", function() {
      if (videoSlider.getCurrentSlide() + 1 == videoSlider.getSlideCount()) {
        videoSlider.goToSlide(0);
      }
      else {
        videoSlider.goToNextSlide();
      }
    });
    
    
    // next button on last slide takes you to slide 0
    $(".videos .bx-controls-direction .bx-next").click(function() {
      if (videoSlider.getCurrentSlide() + 1 == videoSlider.getSlideCount()) {
        videoSlider.goToSlide(0);
      }
    });
    
    // prev button on first slide takes you to last slide
    $(".videos .bx-controls-direction .bx-prev").click(function() {
      if (videoSlider.getCurrentSlide() == 0) {
        videoSlider.goToSlide(videoSlider.getSlideCount() - 1);
      }
    });

    $('#mobile-menu').click(function (e) {
        e.preventDefault();
        $('a.open').each(function () {
            $(this).removeClass('open');
        });
        if($("#mobile-menu").css("display") == "block"){
        	$('nav.primary').fadeToggle();
        }
    });	

    $(window).resize(function() {
    	if($("#mobile-menu").css("display") == "none"){
    		$('nav.primary').show();
        clearInterval(criticalSliderInterval);
        criticalSliderInterval = setInterval(rotateCriticalContent, 5000);
    	}
    	else {
        clearInterval(criticalSliderInterval);
        resetCriticalSlider();
    	}
    	$('ul.navigation>li>a').each(function () {
            $(this).removeClass('open');
            $(this).next('ul').fadeOut();
        });
    });
    

    $('ul.navigation>li>a').click(function (e) {
    	var navClick = $(this);
    	if($("#mobile-menu").css("display") == "block"){
	        if( $(navClick).hasClass('drop') )
	          e.preventDefault();
	        $(this).addClass('current');
	        $('ul.navigation>li>a').each(function () {
	          if (!$(this).hasClass('current')) {
	            $(this).removeClass('open');
	            $(this).next('ul').fadeOut();
	          }
	        });
	        $(this).toggleClass('open').removeClass('current');
	        $(this).next('ul').fadeToggle();
        } else if($(navClick).hasClass("resources")) {
        	e.preventDefault();
        }
    });
    

	// FASTCLICK FOR MOBILE - RUSSELL
	$(function() {
	    FastClick.attach(document.body);
	});

	// VIDEO CAROUSEL CODE - RUSSELL
	$(function(){
        var mySwiper = $('.swiper-container').swiper({
            //Your options here:
            mode:'horizontal',
            pagination: '.swiper-pagination',
            loop: true,
            calculateHeight: true,
            paginationClickable: true,
            centeredSlides: true,
            slidesPerView: 3,
            loopAdditionalSlides: 1,
            onSlideChangeEnd: function(swiper){
            	if(jQuery.browser.mobile)
					{
					   // console.log('You are using a mobile device!');
						var activeSlide = mySwiper.activeSlide();
						var activeVideo = $(activeSlide).children('.content_container').children('.video_container').children('video:eq(0)');
						var activeTitle = $(activeSlide).children('.content_container').children('h3');

						$(activeTitle).fadeIn(400);
						//$(activeVideo)[0].play();

						$((activeVideo)[0]).on('ended', function() {
						$(activeTitle).fadeOut(400).delay(500).queue(function(slideNext){
							mySwiper.swipeNext();
							slideNext();
							$(this).clearQueue();
						});
						});
					}
					else
					{
					   // console.log('You are not using a mobile device!');
						var activeSlide = mySwiper.activeSlide();
						var activeVideo = $(activeSlide).children('.content_container').children('.video_container').children('video:eq(0)');
						var activeTitle = $(activeSlide).children('.content_container').children('h3');

						$(activeTitle).fadeIn(400);
						$(activeVideo)[0].play();

						$((activeVideo)[0]).on('ended', function() {
							$(activeTitle).fadeOut(400).delay(500).queue(function(slideNext){
								mySwiper.swipeNext();
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
					   // console.log('You are not using a mobile device!');
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


        $('.swiper-next').on('click', function(e) {
            e.preventDefault();
            mySwiper.swipeNext();                        
        });

        $('.swiper-previous').on('click', function(e) {
            e.preventDefault();
            mySwiper.swipePrev();
        });

        $('.swiper-wrapper').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
          if (isInView) {
            // element is now visible in the viewport
            if(jQuery.browser.mobile)
				{
				   // console.log('You are using a mobile device!');
					var activeTitle = $('.swiper-slide-active').children('.content_container').children('h3');
					var activeVideo = $('.swiper-slide-active').children('.content_container').children('.video_container').children('.video');
					$(activeTitle).fadeIn(400);
					//$(activeVideo)[0].play();

					$((activeVideo)[0]).on('ended', function() {
						$(activeTitle).fadeOut(400).delay(500).queue(function(slideNext){
							mySwiper.swipeNext();
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
							mySwiper.swipeNext();
							slideNext();
							$(this).clearQueue();
						});
					});
				}
            if (visiblePartY == 'top') {
              // top part of element is visible
            } else if (visiblePartY == 'bottom') {
              // bottom part of element is visible
            } else {
              // whole part of element is visible
            }
          } else {
            // element has gone out of viewport
          }
        });

    });

	// ALL TOOLTIP CODE - RUSSELL 
    $('.tooltip__icon').click(function() {
      if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).siblings('.tooltip__content').fadeOut();
        } else {
            $('.tooltip__icon').siblings('.tooltip__content').fadeOut();
            $('.tooltip__icon').removeClass('active');
            $(this).addClass('active');
            $(this).siblings('.tooltip__content').fadeIn();
        }
    });


    // ALL BLUE THREEUP CAROUSEL CODE - RUSSELL 
	$(window).resize(function(){
        if ($(window).width() >= 769){  
            $('.image--swap').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
              if (isInView) {
                // element is now visible in the viewport
                if (visiblePartY == 'top') {
                  // top part of element is visible
                } else if (visiblePartY == 'bottom') {
                  // bottom part of element is visible
                } else {
                  // whole part of element is visible
                  // console.log('at image swap')
                  $('.background-image2').addClass('active');
                  $('.threeup-latitude').delay(3000).queue(function(center){
                        $(this).removeClass('left');
                        $(this).addClass('center');
                        $('.background-image2').removeClass('active');
                        $('.background-image3').addClass('active');
                        center();
                    });
                  $('.threeup-latitude').delay(3000).queue(function(right){
                  		$('.background-image3').removeClass('active');
                        $('.svg--network').addClass('active');
                        $(this).removeClass('center');
                        $(this).addClass('right');
                        right();
                        
                    });
                  $('.threeup-latitude').delay(3000).queue(function(resetClass){
                  		$('.background-image3').removeClass('active');
                  		$('.background-image2').addClass('active');
                        $('.svg--network').removeClass('active');
                        $(this).removeClass('right center');
                        $(this).addClass('left');
                        resetClass();
                        $(this).clearQueue();
                    });
                }
              } else {
              }
            });
            
            $(".threeup-latitude li").on('click', function(){
                $(this).parent().clearQueue();
                if ($(this).is(':first-of-type')) {
                    $('.svg--network').removeClass('active');
                    $('.background-image2').addClass('active');
                    $('.background-image3').removeClass('active');
                    $(this).parent().removeClass("right center");
                    $(this).parent().addClass('left');
                } else if ($(this).is(':nth-child(2)')) {
                    $('.svg--network').removeClass('active');
                    $('.background-image2').removeClass('active');
                    $('.background-image3').addClass('active');
                    $(this).parent().removeClass('right left');
                    $(this).parent().addClass('center');
                } else if ($(this).is(':last-of-type')) {
                	// $('.svg--network').addClass('active');
                    $('.background-image2').removeClass('active');
                    $('.background-image3').removeClass('active');
                    $(this).parent().removeClass('center left');
                    $(this).parent().addClass('right');
                    
                }
            });
        }   
    }).resize();

	// ALL BLUE THREEUP CAROUSEL CODE - RUSSELL 
	$(window).resize(function(){
        if ($(window).width() >= 769){  
            $('.image--swap').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
              if (isInView) {
                // element is now visible in the viewport
                if (visiblePartY == 'top') {
                  // top part of element is visible
                } else if (visiblePartY == 'bottom') {
                  // bottom part of element is visible
                } else {
                  // whole part of element is visible
                  // console.log('at image swap')
                  $('.threeup--blue').delay(3000).queue(function(center){
                        $(this).removeClass('left');
                        $(this).addClass('center');
                        $('.svg--check').addClass('active');
                        center();
                        
                    });
                  $('.threeup--blue').delay(3000).queue(function(right){
                        $('.svg--icon').removeClass('active');
                        $('.svg--wireless').addClass('active');
                        $(this).removeClass('center');
                        $(this).addClass('right');
                        right();
                        
                    });
                  $('.threeup--blue').delay(3000).queue(function(resetClass){
                        $(this).prev('.image--swap').children('.svg--icon').removeClass('active');
                        $(this).removeClass('right center');
                        $(this).addClass('left');
                        $('.svg--icon').removeClass('active');
                        resetClass();
                        $(this).clearQueue();
                    });
                }
              } else {
              }
            });
            
            $(".threeup--blue li").on('click', function(){
                $(this).parent().clearQueue();
                if ($(this).is(':first-of-type')) {
                    $('.svg--icon').removeClass('active');
                    $(this).parent().removeClass("right center");
                    $(this).parent().addClass('left');
                } else if ($(this).is(':nth-child(2)')) {
                    $('.svg--icon').removeClass('active');
                    $('.svg--check').addClass('active');
                    $(this).parent().removeClass('right left');
                    $(this).parent().addClass('center');
                } else if ($(this).is(':last-of-type')) {
                    $('.svg--icon').removeClass('active');
                    $('.svg--wireless').addClass('active');
                    $(this).parent().removeClass('center left');
                    $(this).parent().addClass('right');
                }
            });
        }   
    }).resize();
	
    // ALL VIDEO & ICON PAIR CODE RUSSELL
    $(window).resize(function(){
        if ($(window).width() >= 569){
			$('.video__device.video--desktop').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
			  var vidLength = $(this).children('video').length;
			  if (isInView) {
			    // element is now visible in the viewport
			    if (visiblePartY == 'top') {
			      // top part of element is visible
			    } else if (visiblePartY == 'bottom') {
			      // bottom part of element is visible
			    } else {
			      // whole part of element is visible
		          var vidIndex = 0;
		          var currentVid = $(this).children('video');
		          $(currentVid)[0].play();
		          var activeIcon = $(this).siblings('.video__info').children('.video__bullet');
		            $((currentVid)[0]).on('timeupdate', function() {
		                if ($(currentVid)[0].currentTime > 0.0 && $(currentVid)[0].currentTime < 6.0) {
		                    vidIndex = 0;
		                    $(activeIcon).removeClass('active');
		                    $(activeIcon).eq(vidIndex).addClass('active');
		                } else if ($(currentVid)[0].currentTime > 6.0 && $(currentVid)[0].currentTime < 14.0) {
		                    vidIndex = 1;
		                    $(activeIcon).removeClass('active');
		                    $(activeIcon).eq(vidIndex).addClass('active');
		                } else if ($(currentVid)[0].currentTime > 14.0 && $(currentVid)[0].currentTime < 27.0) {
		                    vidIndex = 2;
		                    $(activeIcon).removeClass('active');
		                    $(activeIcon).eq(vidIndex).addClass('active');
		                } else if ($(currentVid)[0].currentTime > 27.0 && $(currentVid)[0].currentTime < $(currentVid)[0].duration) {
		                    vidIndex = 3;
		                    $(activeIcon).removeClass('active');
		                    $(activeIcon).eq(vidIndex).addClass('active');
		                }
		              });

		          $((currentVid)[0]).on('ended', function() {
		            $(this).currentTime = 0;
		            $(this).parent().siblings('.video__info').children('.video__bullet.active').removeClass('active');
		          });
		        }
			  }
			});

			$('.video__device.video--laptop').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
			  var vidLength = $(this).children('video').length;
			  if (isInView) {
			    // element is now visible in the viewport
			    if (visiblePartY == 'top') {
			      // top part of element is visible
			    } else if (visiblePartY == 'bottom') {
			      // bottom part of element is visible
			    } else {
			      // whole part of element is visible
		          var vidIndex = 0;
		          var currentVid = $(this).children('video');
		          $(currentVid)[0].play();
		          var activeIcon = $(this).siblings('.video__info').children('.video__bullet');
		            $((currentVid)[0]).on('timeupdate', function() {
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

		          $((currentVid)[0]).on('ended', function() {
		            $(this).load();
		            $(this).parent().siblings('.video__info').children('.video__bullet.active').removeClass('active');
		          });
		        }
			  }
			});

			$('.video__device.video--ipad').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
			  var vidLength = $(this).children('video').length;
			  if (isInView) {
			    // element is now visible in the viewport
			    if (visiblePartY == 'top') {
			      // top part of element is visible
			    } else if (visiblePartY == 'bottom') {
			      // bottom part of element is visible
			    } else {
			      // whole part of element is visible
		          var vidIndex = 0;
		          var currentVid = $(this).children('video');
		          $(currentVid)[0].play();
		          var activeIcon = $(this).siblings('.video__info').children('.video__bullet');
		            $((currentVid)[0]).on('timeupdate', function() {
		                if ($(currentVid)[0].currentTime > 0.0 && $(currentVid)[0].currentTime < 7.0) {
		                    vidIndex = 0;
		                    $(activeIcon).removeClass('active');
		                    $(activeIcon).eq(vidIndex).addClass('active');
		                } else if ($(currentVid)[0].currentTime > 7.0 && $(currentVid)[0].currentTime < 22.0) {
		                    vidIndex = 1;
		                    $(activeIcon).removeClass('active');
		                    $(activeIcon).eq(vidIndex).addClass('active');
		                } else if ($(currentVid)[0].currentTime > 22.0 && $(currentVid)[0].currentTime < 30.0) {
		                    vidIndex = 2;
		                    $(activeIcon).removeClass('active');
		                    $(activeIcon).eq(vidIndex).addClass('active');
		                } else if ($(currentVid)[0].currentTime > 30.0 && $(currentVid)[0].currentTime < $(currentVid)[0].duration) {
		                    vidIndex = 3;
		                    $(activeIcon).removeClass('active');
		                    $(activeIcon).eq(vidIndex).addClass('active');
		                }
		              });

		          $((currentVid)[0]).on('ended', function() {
		            $(this).currentTime = 0;
		            $(this).parent().siblings('.video__info').children('.video__bullet.active').removeClass('active');
		          });
		        }
			  }
			});         
    	}   
    }).resize();

    $('.video__bullet .icon').click(function() {
        var thisVideo = $(this).parents('.video__info').prev('.video__device').children('video:eq(0)');
        $(this).parent().siblings().removeClass('active');    
        $(this).parent().addClass('active');
        if ($(this).hasClass('desktop-1')) {
            $(thisVideo)[0].currentTime = 0;
            $(thisVideo)[0].play();
        } else if ($(this).hasClass('desktop-2')) {
            $(thisVideo)[0].currentTime = 6.0;
            $(thisVideo)[0].play();
        } else if ($(this).hasClass('desktop-3')) {
            $(thisVideo)[0].currentTime = 14.0;
            $(thisVideo)[0].play();    
        } else if ($(this).hasClass('desktop-4')) {
            $(thisVideo)[0].currentTime = 27.0;
            $(thisVideo)[0].play();
        } else if ($(this).hasClass('ipad-1')) {
            $(thisVideo)[0].currentTime = 0;
            $(thisVideo)[0].play();
        } else if ($(this).hasClass('ipad-2')) {
            $(thisVideo)[0].currentTime = 7.0;
            $(thisVideo)[0].play();
        } else if ($(this).hasClass('ipad-3')) {
            $(thisVideo)[0].currentTime = 22.0;
            $(thisVideo)[0].play();    
        } else if ($(this).hasClass('ipad-4')) {
            $(thisVideo)[0].currentTime = 30.0;
            $(thisVideo)[0].play();
        } else if ($(this).hasClass('laptop-1')) {
            $(thisVideo)[0].currentTime = 0;
            $(thisVideo)[0].play();
        } else if ($(this).hasClass('laptop-2')) {
            $(thisVideo)[0].currentTime = 8.0;
            $(thisVideo)[0].play();
        } else if ($(this).hasClass('laptop-3')) {
            $(thisVideo)[0].currentTime = 21.0;
            $(thisVideo)[0].play();    
        } else if ($(this).hasClass('laptop-4')) {
            $(thisVideo)[0].currentTime = 31.0;
            $(thisVideo)[0].play();
        }
    });    	

	/*  END RUSSELL JAVASCRIPT */

    $('.overview .read-more').click(function (e) {
        e.preventDefault();
        var vis_check = $(this).parents('.overview').next('.details').css('display');

        if (vis_check == "none") {
            $(this).text('Read Less').addClass('less');
            $(this).parents('.overview').next('.details').slideDown();
        } else {
            $(this).text('Read More').removeClass('less');
            $(this).parents('.overview').next('.details').slideUp();
        }
    });

    $('.details .less').click(function (e) {
        e.preventDefault();
        $(this).parent().prev().find('a.read-more').text('Read More').removeClass('less');
        $(this).parents('.details').slideUp();

        $('html, body').animate({
            scrollTop: $(this).parent().prev().offset().top
        }, 500);
    });
    
    /* BLOG ACCORDION MENU ON MOBLE */
    jQuery('.accordion-toggle-blog,.accordion-toggle').click(function(e){
      e.preventDefault();
      jQuery(this).parent().next('div.accordion-content').slideToggle();
    })

    /* ********************************************** */
    /* dropdown to drop divs                          */
    /* ********************************************** */
    $('#archive-dropdown').dropdown({
        gutter: 0,
        stack: false
    });


    /* ********************************************** */
    /* INPUT CLEAR                                    */
    /* ********************************************** */
    if (document.getElementById('search')) {
        var input_width = $('#search').width() - 15;
        input_width = 1 - input_width;
        $("#search").addClear({
            right: input_width,
            top: 29
        });
    }

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

        /*
    $(this).find('.story').slideToggle(400,'swing',function(){
      if($(this).parent().hasClass('customer-hover')){
        $(this).parent().removeClass('customer-hover');
      }
      else{
        $(this).parent().addClass('customer-hover');
      }
    });
    */

    });


    /* ********************************************** */
    /* FOOTER MOBILE NAV                              */
    /* ********************************************** */
    // if (isMobile) {
    //     var mobile_sitemap;
    //     var main_counter = 1;
    //     var sub_counter = 1;

    //     //open accordion
    //     mobile_sitemap = '<div class="accordion">';
    //     $('.sitemap ul').each(function () {

    //         //open top level
    //         mobile_sitemap += '<div class="accordion-top-level"><a href="#panel' + main_counter + '" class="accordion-toggle">';

    //         sub_counter = 1;
    //         $(this).find('li').each(function () {

    //             if (sub_counter == 1) {
    //                 //close toplevel
    //                 mobile_sitemap += $(this).text() + '</a></div>';
    //                 //open content
    //                 mobile_sitemap += '<div class="accordion-content" id="panel' + main_counter + '">';
    //             } else {
    //                 mobile_sitemap += '<div>' + $(this).html() + '</div>';
    //             }

    //             sub_counter++;
    //         });
    //         //close content
    //         mobile_sitemap += '</div>';

    //         main_counter++;

    //     });
    //     //close accordion
    //     mobile_sitemap += '</div>';

    //     $('.contain.group .info').append(mobile_sitemap);

    //     accordion();
    //     //$('.accordion-toggle').click(accordion();
    // }
});