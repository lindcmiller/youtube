function showHide() {
  var navExpand = document.querySelector(".nav__expand");

  if(navExpand.style.display !== "none") {
    navExpand.style.display = "none";
  } else {
    navExpand.style.display = "inline-block";
  }
};

function showHideLanguages() {
  var langExpand = document.querySelector(".language__expand");

  if(langExpand.style.display !== "none") {
    langExpand.style.display = "none";
  } else {
    langExpand.style.display = "block";
  }
};

function showHideCountries() {
  var countryExpand = document.querySelector(".country__expand");

  if(countryExpand.style.display !== "none") {
    countryExpand.style.display = "none";
  } else {
    countryExpand.style.display = "block";
  }
};

// function setActive() {
//   var activeTab = document.querySelector(".tab");
//   var allTabs = document.getElementsByClassName("tab");
//   activeTab.style.className="active";
// };
