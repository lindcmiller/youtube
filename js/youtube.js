function showHide() {
  var navExpand = document.querySelector(".nav__expand");
  var pushContentRight = document.querySelector(".content__right");
  var pushNavRight = document.querySelector(".nav__right");

  if(navExpand.style.display !== "none") {
    navExpand.style.display = "none";
    pushContentRight.style.padding = "0";
    pushNavRight.style.padding = "0";
  } else {
    navExpand.style.display = "inline-block";
    pushContentRight.style.padding = "0 0 0 225px";
    pushNavRight.style.padding = "0 0 0 225px";
  }
};

//make these reusable for both

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
  var allCenterTabs = document.getElementsByClassName("tab");
  for(var index = 0; index < allCenterTabs.length; index++) {
    allCenterTabs[index].addEventListener( 'click' , setActiveUnderline );
  }

  var allExpandTabs = document.getElementsByClassName("nav__expand-tab");
  for(var index = 0; index < allExpandTabs.length; index++) {
    allExpandTabs[index].addEventListener( 'click' , setActiveFill );
  }
};

function setActiveUnderline(event) {
  document.querySelector(".active__underline").classList.remove('active__underline');
  event.target.classList.add('active__underline');
};

function setActiveFill(event) {
  document.querySelector(".active__fill").classList.remove('active__fill');
  event.target.classList.add('active__fill');
};
