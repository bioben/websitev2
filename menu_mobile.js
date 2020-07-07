//menu button function on mobile

//import menu items
aboutButtonContainer = document.getElementById('aboutButtonHolder');
projectButtonContainer = document.getElementById('projectButtonHolder');
resumeButtonContainer = document.getElementById('resumeButtonHolder');
contactButtonContainer = document.getElementById('linkHolder');
menuButtonContainer = document.getElementById('menuButtonHolder');

//initial build should hide these buttons
function hideItem(item) {
    item.style.display = "none";
}
function showItem(item) {
    item.style.display = "";
}

//build menu function
var menu_state = "off";
function switchMenu() {
    if (menu_state == "off") {
        showItem(aboutButtonContainer);
        showItem(projectButtonContainer)
        showItem(resumeButtonContainer);
        showItem(contactButtonContainer);
        menu_state = "on";
    }
    else {
        hideItem(aboutButtonContainer);
        hideItem(projectButtonContainer);
        hideItem(resumeButtonContainer);
        hideItem(contactButtonContainer);
        menu_state = "off";
    }
}

//assign menu button function depending on media query
x = window.matchMedia("(max-width: 600px)");
function menuAssign(x) {
    if (x.matches) {
        menuButtonContainer.onclick = function() {switchMenu()}
        hideItem(aboutButtonContainer);
        hideItem(projectButtonContainer);
        hideItem(resumeButtonContainer);
        hideItem(contactButtonContainer);
        showItem(menuButtonContainer);

    } else {
        showItem(aboutButtonContainer);
        showItem(projectButtonContainer)
        showItem(resumeButtonContainer);
        showItem(contactButtonContainer);
        hideItem(menuButtonContainer);
    }
}
menuAssign(x);
x.addListener(menuAssign);
