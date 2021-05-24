// warning text
const btn = document.querySelector('.btnWarning');

btn.addEventListener('click', function () {
    console.log('clicked');
    document.querySelector('.warning').classList.add('hidden');
    document.querySelector('.warning').classList.remove('flex');
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