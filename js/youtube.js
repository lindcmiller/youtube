function showHide() {
  var navExpand = document.querySelector(".nav__expand");

  if(navExpand.style.display !== "none") {
    navExpand.style.display = "none";
  } else {
    navExpand.style.display = "inline-block";
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
  var allTabs = document.getElementsByClassName("tab");
  for(var index = 0; index < allTabs.length; index++) {
    allTabs[index].addEventListener( 'click' , setActive );
  }
};

function setActive(event) {
  document.querySelector(".active__underline").classList.remove('active__underline');
  event.target.classList.add('active__underline');
};
