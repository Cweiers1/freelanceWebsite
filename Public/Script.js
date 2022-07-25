let Site = document.getElementById("html");

// loads previous theme if one was saved
let previousTheme = (localStorage.getItem("Theme"));

let OSTheme = "";

//uses CSS media queries to find OS theme
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    OSTheme = "dark";
} else {
    OSTheme = "light";
}

function loadTheme(loadData) {
// if no previous saved theme, set theme based on OS preference
    switch(loadData) {
        case "dark":
            Site.dataset.theme = "dark";
        break;
        case "light":
            Site.dataset.theme = "light";
        break;
        default:
            Site.dataset.theme = OSTheme;
    }
}
     
// sets theme passed to function, and if save = true, overrides localStorage saved theme
function setTheme(Theme, save) {
    if (Theme == "dark" || "light") {
        Site.dataset.theme = Theme;
        if (save == true) {
            localStorage.setItem("Theme", Theme);
        } 
    } else {
        localStorage.removeItem("Theme");
        Site.dataset.theme = OSTheme;
    } 
}

loadTheme(previousTheme);




