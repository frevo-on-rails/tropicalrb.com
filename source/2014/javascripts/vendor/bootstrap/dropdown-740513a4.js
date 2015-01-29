/* ========================================================================
 * Bootstrap: dropdown.js v3.0.3
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */
+function(o){"use strict";function n(){o(e).remove(),o(r).each(function(n){var e=t(o(this));e.hasClass("open")&&(e.trigger(n=o.Event("hide.bs.dropdown")),n.isDefaultPrevented()||e.removeClass("open").trigger("hidden.bs.dropdown"))})}function t(n){var t=n.attr("data-target");t||(t=n.attr("href"),t=t&&/#/.test(t)&&t.replace(/.*(?=#[^\s]*$)/,""));var e=t&&o(t);return e&&e.length?e:n.parent()}var e=".dropdown-backdrop",r="[data-toggle=dropdown]",d=function(n){o(n).on("click.bs.dropdown",this.toggle)};d.prototype.toggle=function(e){var r=o(this);if(!r.is(".disabled, :disabled")){var d=t(r),i=d.hasClass("open");if(n(),!i){if("ontouchstart"in document.documentElement&&!d.closest(".navbar-nav").length&&o('<div class="dropdown-backdrop"/>').insertAfter(o(this)).on("click",n),d.trigger(e=o.Event("show.bs.dropdown")),e.isDefaultPrevented())return;d.toggleClass("open").trigger("shown.bs.dropdown"),r.focus()}return!1}},d.prototype.keydown=function(n){if(/(38|40|27)/.test(n.keyCode)){var e=o(this);if(n.preventDefault(),n.stopPropagation(),!e.is(".disabled, :disabled")){var d=t(e),i=d.hasClass("open");if(!i||i&&27==n.keyCode)return 27==n.which&&d.find(r).focus(),e.click();var a=o("[role=menu] li:not(.divider):visible a",d);if(a.length){var s=a.index(a.filter(":focus"));38==n.keyCode&&s>0&&s--,40==n.keyCode&&s<a.length-1&&s++,~s||(s=0),a.eq(s).focus()}}}};var i=o.fn.dropdown;o.fn.dropdown=function(n){return this.each(function(){var t=o(this),e=t.data("bs.dropdown");e||t.data("bs.dropdown",e=new d(this)),"string"==typeof n&&e[n].call(t)})},o.fn.dropdown.Constructor=d,o.fn.dropdown.noConflict=function(){return o.fn.dropdown=i,this},o(document).on("click.bs.dropdown.data-api",n).on("click.bs.dropdown.data-api",".dropdown form",function(o){o.stopPropagation()}).on("click.bs.dropdown.data-api",r,d.prototype.toggle).on("keydown.bs.dropdown.data-api",r+", [role=menu]",d.prototype.keydown)}(jQuery);