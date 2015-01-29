/* ========================================================================
 * Bootstrap: alert.js v3.0.3
 * http://getbootstrap.com/javascript/#alerts
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
+function(t){"use strict";var e='[data-dismiss="alert"]',a=function(a){t(a).on("click",e,this.close)};a.prototype.close=function(e){function a(){s.trigger("closed.bs.alert").remove()}var r=t(this),n=r.attr("data-target");n||(n=r.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,""));var s=t(n);e&&e.preventDefault(),s.length||(s=r.hasClass("alert")?r:r.parent()),s.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one(t.support.transition.end,a).emulateTransitionEnd(150):a())};var r=t.fn.alert;t.fn.alert=function(e){return this.each(function(){var r=t(this),n=r.data("bs.alert");n||r.data("bs.alert",n=new a(this)),"string"==typeof e&&n[e].call(r)})},t.fn.alert.Constructor=a,t.fn.alert.noConflict=function(){return t.fn.alert=r,this},t(document).on("click.bs.alert.data-api",e,a.prototype.close)}(jQuery);