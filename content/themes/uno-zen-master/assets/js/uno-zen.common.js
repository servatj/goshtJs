/**
 * uno-zen - Minimalist and Elegant theme for Ghost
 * @version 2.9.5
 * @link    https://github.com/kikobeats/uno-zen
 * @author  Kiko Beats (https://github.com/kikobeats)
 * @license MIT
 */
(function(){"use strict";!function(){var t,n;n=document.body,window.Uno=t={version:"2.9.0",is:function(t,e){return Array.isArray(e)?e.some(function(e){return n.dataset[t]===e}):n.dataset[t]===e},attr:function(t,e){return null!=e?n.dataset[t]=e:n.dataset[t]},context:function(){var t;return t=document.body.className.split(" ")[0].split("-")[0],""===t?"error":t},linkify:function(t){return $(t).each(function(){var t,n,e;return t=$(this),e=t.text(),n=t.attr("id"),t.html(""),t.addClass("deep-link"),t.append("<a href=#"+n+' class="title-link">'+e+"</a>")})},search:{form:function(){var t;return t=$("#search-container"),function(n){return t[n]()}}()},timeAgo:function(t){return $(t).each(function(){var t,n;return t=$(this).html(),n=Math.floor((Date.now()-new Date(t))/864e5),0===n?n="today":1===n?n="yesterday":n+=" days ago",$(this).html(n),$(this).mouseover(function(){return $(this).html(t)}),$(this).mouseout(function(){return $(this).html(n)})})},device:function(){var t;return t=window.innerWidth,window.innerHeight,t<=480?"mobile":t<=1024?"tablet":"desktop"}},t.attr("page",t.context()),t.attr("device",t.device()),window.profile_title&&$("#profile-title").text(window.profile_title),window.profile_resume&&$("#profile-resume").text(window.profile_resume),window.posts_headline&&$("#posts-headline").text(window.posts_headline),window.open_button=window.open_button||".nav-posts > a"}()}).call(this),function(){"use strict";$(function(){return InstantClick.init(),Uno.is("device","desktop")?$("a").not('[href*="mailto:"]').click(function(){if(-1===this.href.indexOf(location.hostname))return window.open($(this).attr("href")),!1}):FastClick.attach(Uno.app),(Uno.is("page","home")||Uno.is("page","paged")||Uno.is("page","tag"))&&Uno.timeAgo("#posts-list time"),Uno.is("page","post")&&(Uno.timeAgo(".post.meta > time"),$("main").readingTime({readingTimeTarget:".post.reading-time > span"}),Uno.linkify($("#post-content").children("h1, h2, h3, h4, h5, h6")),$(".content").fitVids()),Uno.is("page","error")&&$("#panic-button").click(function(){var t;return(t=document.createElement("script")).setAttribute("src","https://nthitz.github.io/turndownforwhatjs/tdfw.js"),document.body.appendChild(t)}),$("#search-input").keyup(function(t){return $("#search-form").attr("action",Uno.search.url+"+"+encodeURIComponent(t.target.value))})})}.call(this),function(){"use strict";$(function(){var t,n;if(t=function(){return setTimeout(function(){return $(".cover").addClass("animated")},1e3)},n=function(t){return $("main, .cover, .links > li, html").toggleClass("expanded"),Uno.search.form(t.form)},$("#menu-button").click(function(){return $(".cover, main, #menu-button, html").toggleClass("expanded")}),$(window.open_button+", #avatar-link").click(function(t){if(Uno.is("page","home"))return t.preventDefault(),location.hash=""===location.hash?"#open":"",Uno.is("device","desktop")?n({form:"toggle"}):$("#menu-button").trigger("click")}),Uno.is("device","desktop")&&Uno.is("page","home")&&(t(),"#open"!==location.hash))return n({form:"hide"})})}.call(this);