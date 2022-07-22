//find OS theme via the prefers-color-theme CSS media qurey
function findOSTheme() {
    if (window.matchMedia("(prefers-color-theme: dark)")) {
        return "dark";
    } else {
        return "light";
    }
}

//find previous saved theme
let previousTheme = (localStorage.getItem("Theme"));
let currentTheme = "light";

//if no previous saved theme, set theme based on OS preference
if (previousTheme != "light" || "dark") {
   currentTheme = findOSTheme() 
} else {
    currentTheme = previousTheme;
}


