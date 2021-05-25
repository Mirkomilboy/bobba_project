'use strict';
// =============== menu toggle ===============
const menu = document.querySelector('.hamburger');
const sideBar = document.querySelector('.sideBar');

menu.addEventListener('click', function () {
    sideBar.classList.toggle('hidden');
})

// =============== warning text ===============
const btn = document.querySelector('.btnWarning');

btn.addEventListener('click', function () {
    console.log('clicked');
    document.querySelector('.warning').classList.add('hidden');
    document.querySelector('.warning').classList.remove('flex');
});

// =============== accordion ===============
const menuLinks = document.querySelectorAll(".accordion .accordionBtn");
menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    let menuContent = link.nextElementSibling;
    let active = document.querySelector(".accordion .accordionMain.active");

    if (menuContent) {
          if (link.parentElement.classList.contains("active")) {
            link.parentElement.classList.remove("active");
            active.lastElementChild.style.height = "0";
            link.querySelector("svg").style.transform = "rotate(0deg)";
          } else {
            link.parentElement.classList.add("active");
            menuContent.style.height = menuContent.scrollHeight + "px";
            link.querySelector("svg").style.transform = "rotate(180deg)";
          }
      }
  });
});























// ========================== chart.js
// const config = {
//     type: 'line',
//     data,
//     options: {}
//   };

//   const labels = [
//     '01',
//     '06',
//     '11',
//     '16',
//     '21',
//     '26',
//     '31',
//     '01',
//   ];
//   const data = {
//     labels: labels,
//     datasets: [{
//       label: 'My First dataset',
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgb(255, 99, 132)',
//       data: [10.000, 30.000, 60.000, 90.000, 120.000],
//     }]
//   };

//   var myChart = new Chart(
//     document.getElementById('myChart'),
//     config
//   );