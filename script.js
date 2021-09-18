function changeHeader(evt, cityName) {
  var i, exploreContent, tablinks;
  exploreContent = document.getElementsByClassName("explore-content");
  for (i = 0; i < exploreContent.length; i++) {
    exploreContent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementsByClassName("tablinks")[0].click();

// burger
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0";
}
