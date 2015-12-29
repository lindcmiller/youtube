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
  var countryExpand = document.querySelector(".country__expand");

  if(langExpand.style.display !== "none") {
    langExpand.style.display = "none";
  } else {
    langExpand.style.display = "block";
    countryExpand.style.display = "none";
  }
};

function showHideCountries() {
  var langExpand = document.querySelector(".language__expand");
  var countryExpand = document.querySelector(".country__expand");

  if(countryExpand.style.display !== "none") {
    countryExpand.style.display = "none";
  } else {
    countryExpand.style.display = "block";
    langExpand.style.display = "none";
  }
};

window.onload = function()  {
  var activeTab = document.querySelector("li.tab");
  activeTab.addEventListener( 'click' , setActive() );
};

function setActive() {
  var activeTab = document.querySelector("li.tab");
  var allTabs = document.getElementsByClassName("li.tab");
  for(var index = 0; index < allTabs.length; index++) {
    if (allTabs[index].className === 'active__underline') {
      allTabs.classList.remove('active__underline');
    }
  }
  activeTab.className = "active__underline";
};
