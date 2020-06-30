//opening build
const projectHolderContainer = document.getElementById("projectHolder");
projectHolderContainer.style.display = "none";

//get buttons
const showButtonContainer = document.getElementById("showButton");
const hideButtonContainer = document.getElementById("hideButton");

//get other elements
const projectTop = document.getElementById('projects');

function showProjects(item) {
	item.style.display = "";
}
function hideProjects(item) {
	item.style.display = "none";
	projectTop.scrollIntoView();
}

showButtonContainer.onclick = function() {showProjects(projectHolderContainer)}
hideButtonContainer.onclick = function() {hideProjects(projectHolderContainer)}