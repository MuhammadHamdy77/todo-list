/*!
 * Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
/**
 * requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
 * @see: http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * @see: http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 * @license: MIT license
 */
function(){for(var c=0,e=["ms","moz","webkit","o"],s=0;s<e.length&&!window.requestAnimationFrame;++s)window.requestAnimationFrame=window[e[s]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[s]+"CancelAnimationFrame"]||window[e[s]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,s){var t=(new Date).getTime(),l=Math.max(0,16-(t-c)),n=window.setTimeout(function(){e(t+l)},l);return c=t+l,n}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(c){clearTimeout(c)})}(),window.onload=function(){let c=document.querySelectorAll(".btnTodo");c&&document.querySelectorAll(".menu-actions")&&(c.forEach(c=>{c.addEventListener("click",function(c){c.stopPropagation(),c.currentTarget.nextElementSibling.classList.toggle("open")})}),document.querySelector(".menu-actions")&&document.querySelector(".menu-actions").addEventListener("click",function(c){c.stopPropagation()}),document.body.addEventListener("click",function(){document.querySelectorAll(".menu-actions").forEach(c=>{c.classList.remove("open")})}))};