const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(e){timerId=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.disabled=!0})),e.addEventListener("click",(function(e){clearInterval(timerId),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.c9f93d8d.js.map
