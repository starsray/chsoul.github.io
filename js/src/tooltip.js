// build time:Wed Apr 03 2019 14:39:41 GMT+0800 (GMT+08:00)
var ToolTip={transitionInterval:null,transitionDelayTimeout:null,delay:null,fadeDuration:null,initialized:false,init:function(t){var e=$.extend({delay:400,fadeDuration:250,fontSize:"1.0em",theme:"dark",textColor:"#fff",shadowColor:"#000",fontFamily:"Arial, Helvetica, sans-serif"},t);e.theme=e.theme.toLowerCase();if(e.theme=="dark"&&typeof t.textColor==="undefined"){e.textColor="#fff"}else if(e.theme=="light"&&typeof t.textColor==="undefined"){e.textColor="#333"}ToolTip.delay=e.delay;ToolTip.fadeDuration=e.fadeDuration;$(document).on("mouseenter",".tip-hotspot",function(t){$(this).data("tip-settings",e);clearInterval(ToolTip.transitionInterval);clearTimeout(ToolTip.transitionDelayTimeout);var i=$(this).attr("data-tip");if(typeof i!=="undefined"){var a="tip-bubble-"+(new Date).getTime();var o=$('<div id="'+a+'" class="tip-bubble">'+i+"</div>");o.appendTo("body");var l=$("#"+a);$(this).data("tip-bubble-id",a);var n=l.width()+parseInt(l.css("padding-left"))+parseInt(l.css("padding-right"));var r=l.height()+parseInt(l.css("padding-top"))+parseInt(l.css("padding-bottom"));var s=$(this).offset().left+$(this).width()/2-n/2;var p=$(this).offset().top+$(this).height()+parseInt($(this).css("padding-top"))+parseInt($(this).css("padding-bottom"))+10;var d="CENTER";var f="TOP";if(s+n>$(window).width()){s=$(window).width()-n-10;d="RIGHT"}else if(s<=0){s=20;d="LEFT"}if(p+r>=$(window).height()){p=$(this).offset().top-r-10;f="BOTTOM"}else if(p<=0){f="TOP"}o.css({top:p,left:s,"font-size":e.fontSize,"background-color":e.theme=="dark"?"#000":"#fff",color:e.textColor,"font-family":e.fontFamily,"box-shadow":"0px 3px 10px "+e.shadowColor});if(e.theme=="dark"){l.addClass("tip-theme-dark")}else{l.addClass("tip-theme-light")}if(d=="RIGHT"){l.removeClass("tip-bubble-center-point").removeClass("tip-bubble-left-point").addClass("tip-bubble-right-point")}else if(d=="LEFT"){l.removeClass("tip-bubble-center-point").removeClass("tip-bubble-right-point").addClass("tip-bubble-left-point")}else{l.removeClass("tip-bubble-right-point").removeClass("tip-bubble-left-point").addClass("tip-bubble-center-point")}if(f=="TOP"){l.removeClass("tip-arrow-bottom").addClass("tip-arrow-top")}else{l.removeClass("tip-arrow-top").addClass("tip-arrow-bottom")}ToolTip.transitionDelayTimeout=setTimeout(function(){ToolTip.transitionInterval=setInterval(function(){var t=parseFloat(l.css("opacity"))+1/ToolTip.fadeDuration*10;l.css("opacity",t);if(t==1){clearInterval(ToolTip.transitionInterval)}},1)},ToolTip.delay)}});$(document).on("mouseleave",".tip-hotspot",function(t){clearInterval(ToolTip.transitionInterval);clearTimeout(ToolTip.transitionDelayTimeout);var e=$(this).data("tip-bubble-id");$("#"+e).remove()});ToolTip.initialized=true}};$(function(t){var e={init:function(e){var o=t.extend({text:null,delay:0,fadeDuration:250,fontSize:"1.0em",theme:"dark",textColor:"#fff",shadowColor:"#000",fontFamily:"Arial, Helvetica, sans-serif"},e);o.transitionInterval=null;o.transitionDelayTimeout=null;if(o.theme=="dark"&&typeof e.textColor==="undefined"){o.textColor="#fff"}else if(o.theme=="light"&&typeof e.textColor==="undefined"){o.textColor="#333"}this.data("tip-settings",o);var l=this;if(l.hasClass("tip-hotspot")&&ToolTip.initialized){console.log("HTML hover tip parameters found for the target element ("+l.attr("id")+"). Ignoring javascript settings.")}if(o.text==null||t.trim(o.text)==""){t.error("jQuery.tooltip error -> text cannot be null or empty.")}l.on("mouseenter",function(t){i(l)});l.on("mouseleave",function(t){a(l)})},setText:function(t){this.data("tip-settings").text=t},autoTip:function(e){var o=t.extend({displayDuration:5e3,fadeOutDuration:1e3,onShowCallback:null,onHideCallback:null},e);var l=this;i(l,o.onShowCallback);setTimeout(function(){a(l,{fadeOutDuration:o.fadeOutDuration,callback:o.onHideCallback})},o.displayDuration)}};t.fn.tooltip=function(i){if(e[i]){return e[i].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof i==="object"||!i){return e.init.apply(this,arguments)}else{t.error("Method "+i+" does not exist for jQuery.tooltip")}};function i(e,i){var a=e.data("tip-settings");clearInterval(a.transitionInterval);clearTimeout(a.transitionDelayTimeout);var o="tip-bubble-"+(new Date).getTime();var l=t('<div id="'+o+'" class="tip-bubble">'+a.text+"</div>");l.appendTo("body");var n=t("#"+o);e.data("tip-bubble-id",o);var r=n.width()+parseInt(n.css("padding-left"))+parseInt(n.css("padding-right"));var s=n.height()+parseInt(n.css("padding-top"))+parseInt(n.css("padding-bottom"));var p=e.offset().left+e.width()/2-r/2;var d=e.offset().top-t(window).scrollTop()+e.height()+15;var f="CENTER";var u="TOP";if(p+r>t(window).width()){p=t(window).width()-r-10;f="RIGHT"}else if(p<=0){p=20;f="LEFT"}n.css({top:d,left:p,"font-size":a.fontSize,"background-color":a.theme=="dark"?"#000":"#fff",color:a.textColor,"font-family":a.fontFamily,"box-shadow":"0px 3px 10px "+a.shadowColor});if(a.theme=="dark"){n.addClass("tip-theme-dark")}else{n.addClass("tip-theme-light")}if(f=="RIGHT"){n.removeClass("tip-bubble-center-point").removeClass("tip-bubble-left-point").addClass("tip-bubble-right-point")}else if(f=="LEFT"){n.removeClass("tip-bubble-center-point").removeClass("tip-bubble-right-point").addClass("tip-bubble-left-point")}else{n.removeClass("tip-bubble-right-point").removeClass("tip-bubble-left-point").addClass("tip-bubble-center-point")}if(u=="TOP"){n.removeClass("tip-arrow-bottom").addClass("tip-arrow-top")}else{n.removeClass("tip-arrow-top").addClass("tip-arrow-bottom")}a.transitionDelayTimeout=setTimeout(function(){a.transitionInterval=setInterval(function(){var t=parseFloat(n.css("opacity"))+1/a.fadeDuration*10;n.css("opacity",t);if(t==1){clearInterval(a.transitionInterval);if(typeof i==="function"){i.call()}}},1)},a.delay)}function a(e,i){var a=t.extend({fadeOutDuration:0,callback:null},i);var o=e.data("tip-settings");clearInterval(o.transitionInterval);clearTimeout(o.transitionDelayTimeout);if(a.fadeOutDuration==null||a.fadeOutDuration==0){var l=e.data("tip-bubble-id");t("#"+l).remove()}else{var l=e.data("tip-bubble-id");var n=t("#"+l);o.transitionInterval=setInterval(function(){var t=parseFloat(n.css("opacity"))-1/a.fadeOutDuration*10;n.css("opacity",t);if(t==0){clearInterval(o.transitionInterval);n.remove();e.removeData("tip-bubble-id");if(a.callback!=null&&typeof a.callback==="function"){a.callback.call()}}},1)}}}(jQuery));
//rebuild by neat 