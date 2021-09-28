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

// myFunction validacija

const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const phonenr = document.getElementById('phonenr');

function myFunction(){
  if(firstname.value == "")
  {
  alert("Įveskite vardą.");
}
else if (lastname.value == "")
{
    alert("Įveskite pavardę.");
}
else if(phonenr.value == "")
{
  alert("Įveskite savo telefono numerį.");
}
else{
  document.getElementById('monthly').checked = true;
  firstname.value = "";
  lastname.value = "";
  phonenr.value = "";
  alert("Sukurta.")
}
}
// myFunction2 validacija

const firstname1 = document.getElementById('firstname1');
const lastname1 = document.getElementById('lastname1');
const phonenr1 = document.getElementById('phonenr1');

function myFunction1(){
  if(firstname1.value == "")
  {
  alert("Įveskite vardą.");
}
else if (lastname1.value == "")
{
    alert("Įveskite pavardę.");
}
else if(phonenr1.value == "")
{
  alert("Įveskite savo telefono numerį.");
}
else{
  document.getElementById('personal').checked = true;
  firstname1.value = "";
  lastname1.value = "";
  phonenr1.value = "";
  alert("Sukurta.")
}
}
var swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  }
});
