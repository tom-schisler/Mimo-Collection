function site(){console.log("mimo is running away!");var e=document.querySelector(".drawer-trigger"),d=document.querySelector(".drawer-trigger-close"),o=function(e){document.body.classList.toggle("drawer-active")};e.addEventListener("click",o,!1),d.addEventListener("click",o,!1),window.addEventListener("keydown",debug,!1)}function debug(e){71==e.keyCode?document.body.classList.toggle("debug-grid"):79==e.keyCode?document.body.classList.toggle("debug-outlines"):82==e.keyCode&&document.body.classList.toggle("debug-ruler")}