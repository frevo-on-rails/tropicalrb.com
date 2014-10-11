/*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 0.9
 *
 * Example usage:
 * $('#nav').onePageNav({
 *   currentClass: 'current',
 *   changeHash: false,
 *   scrollSpeed: 750
 * });
 */
!function(n){n.fn.onePageNav=function(e){var t=n.extend({},n.fn.onePageNav.defaults,e),s={};return s.sections={},s.bindNav=function(e,t,a){var i=e.parent(),o=e.attr("href"),r=n(window);i.hasClass(a.currentClass)||(a.begin&&a.begin(),s.adjustNav(t,i,a.currentClass),r.unbind(".onePageNav"),n.scrollTo(o,a.scrollSpeed,{easing:a.easing,offset:{top:-a.scrollOffset},onAfter:function(){a.changeHash&&(window.location.hash=o),r.bind("scroll.onePageNav",function(){s.scrollChange(t,a)}),a.end&&a.end()}}))},s.adjustNav=function(n,e,t){n.find("."+t).removeClass(t),e.addClass(t)},s.getPositions=function(e,t){var a=e.find("a");""!==t.filter&&(a=a.filter(t.filter)),a.each(function(){var e=n(this).attr("href"),a=n(e).offset(),i=a.top;s.sections[e.substr(1)]=Math.round(i)-t.scrollOffset})},s.getSection=function(e,t){var a="",i=Math.round(n(window).height()*t.scrollThreshold);for(var o in s.sections)s.sections[o]-i<e&&(a=o);return a},s.scrollChange=function(e,t){s.getPositions(e,t);var a=n(window).scrollTop(),i=s.getSection(a,t);""!==i&&s.adjustNav(e,e.find("a[href=#"+i+"]").parent(),t.currentClass)},s.init=function(e,t){var a=!1,i=e.find("a");""!==t.filter&&(i=i.filter(t.filter)),i.bind("click",function(a){s.bindNav(n(this),e,t),a.preventDefault()}),s.getPositions(e,t),n(window).bind("scroll.onePageNav",function(){a=!0}),setInterval(function(){a&&(a=!1,s.scrollChange(e,t))},250)},this.each(function(){var e=n(this),a=n.meta?n.extend({},t,e.data()):t;s.init(e,a)})},n.fn.onePageNav.defaults={currentClass:"current",changeHash:!1,easing:"swing",filter:"",scrollSpeed:750,scrollOffset:0,scrollThreshold:.5,begin:!1,end:!1}}(jQuery);