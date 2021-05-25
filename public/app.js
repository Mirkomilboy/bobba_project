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
    document.querySelector('.warning').classList.toggle('hidden');
});

// =============== accordion ===============
const menuLinks = document.querySelectorAll(".accordion .accordionBtn");

menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        let menuContent = link.nextElementSibling;
        let active = document.querySelector(".accordion .accordionMain.active");
        
        link.classList.toggle('active')
        

        if(link.classList.contains('active')){
            menuContent.style.height = menuContent.scrollHeight + "px";
            link.querySelector("svg").style.transform = "rotate(180deg)";
        } else {
            menuContent.style.height ="0";
            link.querySelector("svg").style.transform = "rotate(0deg)";
        }

        // if (menuContent) {
            // link.classList.toggle('active')

            // if (link.parentElement.classList.contains("active")) {
            //     link.parentElement.classList.remove("active");
            //     active.lastElementChild.style.height = "0";
            //     link.querySelector("svg").style.transform = "rotate(0deg)";
            // } else {
            //     link.parentElement.classList.add("active");
            //     menuContent.style.height = menuContent.scrollHeight + "px";
            //     link.querySelector("svg").style.transform = "rotate(180deg)";
            // }
        // }
    });
});

// ========================== chart.js
let myChart = document.getElementById('myChart').getContext('2d');

let LineChart = new Chart(myChart, {
    type:'line',
    data:{
        labels:[
            '01',
            '06',
            '11',
            '16',
            '21',
            '26',
            '31',
            '01'
        ],
        datasets:[{
            label:'Traffic',
            data: [{x: '01', y: 10000}, {x: '06', y: 30000}, {x: '11', y: 50000}, {x: '16', y: 40000}, {x: '21', y: 90000}, {x: '26', y: 70000}, {x: '31', y: 80000}, {x: '01', y: 70000},],
            borderColor: '#247FDA'
        }],
    },
    options:{
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});