let Site = document.getElementById("html");

// loads previous theme if one was saved
let previousTheme = (localStorage.getItem("Theme"));
let OSprefer = window.matchMedia("(prefers-color-scheme: dark)");

OSprefer.addEventListener( "change", );

//uses CSS media queries to find OS theme
function OSTheme() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
    } else {
        return "light";
    }
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
        case "OSTheme":
            Site.dataset.theme = OSTheme();
        break;
        default:
            Site.dataset.theme = OSTheme();
    }
}
     
// sets theme passed to function, and if save = true, overrides localStorage saved theme
function setTheme(Theme, save) {
    if (Theme === "dark" || "light") {
        Site.dataset.theme = Theme;
        if (save) {
            saveTheme(Theme);
        } 
    } 
}

//clears theme and set it to OS default
function clearTheme() {
    localStorage.removeItem("theme");
    Site.dataset.theme = OSTheme();
}


// if no theme is stored on startup
if (localStorage.getItem("Theme") == null) {
    localStorage.setItem("Theme", "OSTheme");
}




loadTheme(previousTheme);


console.log(OSTheme())

