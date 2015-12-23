function showHide() {
  var navigationExpand = document.querySelector(".navigation__expand");
  if(navigationExpand.style.display !== "none") {
    navigationExpand.style.display = "none";
  } else {
    navigationExpand.style.display = "block";
  }
};

// function setActive() {
//   var activeTab = document.querySelector(".tab");
//   var allTabs = document.getElementsByClassName("tab");
//   activeTab.style.className="active";
// };
