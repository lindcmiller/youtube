function showHide() {
  var navExpand = document.querySelector(".sidebar");
  var moveNav = document.querySelector(".nav__move");
  var moveContent = document.querySelector(".content__move");

  if(navExpand.style.display == "inline-block") {
    navExpand.style.display = "none";
    moveNav.style.padding = "0";
    moveContent.style.padding = "0";
  } else {
    navExpand.style.display = "inline-block";
    moveNav.style.padding = "0 0 0 225px";
    moveContent.style.padding = "0 0 0 225px";
  }
};

function showHideLanguages() {
  var langExpand = document.querySelector(".language__expand");
  var countryExpand = document.querySelector(".country__expand");
  var restrictedExpand = document.querySelector(".restricted__expand");

  if(langExpand.style.display == "block") {
    langExpand.style.display = "none";
  } else {
    langExpand.style.display = "block";
    countryExpand.style.display = "none";
    restrictedExpand.style.display = "none";
  }
};

function showHideCountries() {
  var langExpand = document.querySelector(".language__expand");
  var countryExpand = document.querySelector(".country__expand");
  var restrictedExpand = document.querySelector(".restricted__expand");

  if(countryExpand.style.display == "block") {
    countryExpand.style.display = "none";
  } else {
    countryExpand.style.display = "block";
    langExpand.style.display = "none";
    restrictedExpand.style.display = "none";
  }
};

function showHideRestricted() {
  var langExpand = document.querySelector(".language__expand");
  var countryExpand = document.querySelector(".country__expand");
  var restrictedExpand = document.querySelector(".restricted__expand");

  if(restrictedExpand.style.display == "block") {
    restrictedExpand.style.display = "none";
  } else {
    restrictedExpand.style.display = "block";
    langExpand.style.display = "none";
    countryExpand.style.display = "none";
  }
};

window.onload = function()  {
  var allCenterTabs = document.getElementsByClassName("header__tab");
  for(var index = 0; index < allCenterTabs.length; index++) {
    allCenterTabs[index].addEventListener( 'click' , setActiveUnderline );
  }

  var allExpandTabs = document.getElementsByClassName("sidebar__tab-link");
  for(var index = 0; index < allExpandTabs.length; index++) {
    allExpandTabs[index].addEventListener( 'click' , setActiveFill );
  }

  var allExpandButtons = document.getElementsByClassName("button__preference");
  for(var index = 0; index < allExpandButtons.length; index++) {
    allExpandButtons[index].addEventListener( 'click' , setActiveDarken );
  }
};

function setActiveUnderline(event) {
  document.querySelector('.active__underline').classList.remove('active__underline');
  event.target.classList.add('active__underline');
};

function setActiveFill(event) {
 var allExpandTabs = document.querySelectorAll('.active__fill');
 for(var index = 0; index < allExpandTabs.length; index++) {
   allExpandTabs[index].classList.remove('active__fill');
 }
 event.currentTarget.classList.add('active__fill');
};

function setActiveDarken(event) {
  if (document.querySelector('.active__darken') == null) {
    event.currentTarget.classList.add('active__darken');
  } else {
    document.querySelector('.active__darken').classList.remove('active__darken');
    event.currentTarget.classList.add('active__darken');
  }
};
