let Site = document.getElementById("html");
//loads previous theme if one was saved
let previousTheme = (localStorage.getItem("Theme"));
let currentTheme = "light";

//find OS theme via the prefers-color-theme CSS media qurey
function findOSTheme() {
    if (window.matchMedia("(prefers-color-theme: dark)")) {
        return "dark";
    } else {
        return "light";
    }
}

function loadTheme() {
//if no previous saved theme, set theme based on OS preference
    if (previousTheme != "light" || "dark") {
        currentTheme = findOSTheme();
    } else {
        currentTheme = previousTheme;
    }
}
     
    

//sets theme passed to function, and if save = true, overrides localStorage saved theme
function setTheme(Theme, save) {
    switch(Theme) {
        case "None":
            localStorage.removeItem("Theme");
        break;
        case "light":
        case "dark":
            Site.classList.add(Theme);
        break;
        }
    if (save == true && Theme != "None") {
        localStorage.setItem("Theme", Theme);
    }
}

