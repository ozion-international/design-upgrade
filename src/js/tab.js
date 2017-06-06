function displayTab(event){
  event.preventDefault();
  var tabLink = event.currentTarget;
  var tab = tabLink.getAttribute('data-tab');
  var tabToShow = document.getElementById("tab-form").querySelectorAll("[data-tab='" + tab + "']")[0];
  var resultToShow = document.getElementById("search-results").querySelectorAll("[data-tab='" + tab + "']")[0];

  var allTabs = document.getElementById("tab-form").querySelectorAll("[data-tab]");
  var allResults = document.getElementById("search-results").querySelectorAll("[data-tab]");
  
  for(i=0; i < allTabs.length; i++ ){
   allTabs[i].style.display = "none";
  }

 for(i=0; i < allResults.length; i++ ){
   allResults[i].style.display = "none";
  }


  tabLink.parentElement.getElementsByClassName("active")[0].classList.remove("active");
  tabLink.classList.add("active");
  tabToShow.style.display = "block";
  resultToShow.style.display = "block";
}

function toggleTab(event){
  event.preventDefault();
  var tabLink = event.currentTarget;
  var tab = tabLink.getAttribute('data-tab');
  var tabToShow = document.getElementById("tab-wrapper").querySelectorAll("[data-tab='" + tab + "']")[0];

  var allTabs = document.getElementById("tab-wrapper").querySelectorAll("[data-tab]");
  
  for(i=0; i < allTabs.length; i++ ){
   allTabs[i].style.display = "none";
  }

  tabLink.parentElement.getElementsByClassName("active")[0].classList.remove("active");
  tabLink.classList.add("active");
  tabToShow.style.display = "block";
}
