function showHide() {
  var navExpand = document.querySelector(".nav__expand");

  if(navExpand.style.display !== "none") {
    navExpand.style.display = "none";
  } else {
    navExpand.style.display = "inline-block";
  }
};

// function setActive() {
//   var activeTab = document.querySelector(".tab");
//   var allTabs = document.getElementsByClassName("tab");
//   activeTab.style.className="active";
// };
