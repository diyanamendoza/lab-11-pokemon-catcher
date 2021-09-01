import { getSeenCounts } from "../utils.js";

let currentData = getSeenCounts();
// map array of names from the counts data
let pokeNames = currentData.map(entry => entry.name);

// filter, map array of captures 
let pokeCaughtStats = currentData.map(entry => entry.caught);

// filter, map array of seens
let pokeSeenStats = currentData.map(entry => entry.seen);

const ctx = document.getElementById('seen-chart');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokeNames,
        datasets: [{
            label: 'Times Seen',
            data: pokeSeenStats,
            backgroundColor:
            [
                'rgba(255, 159, 64, 5)',
                'rgba(255, 159, 64, 5)',
                'rgba(255, 159, 64, 5)',
                'rgba(255, 159, 64, 5)',
                'rgba(255, 159, 64, 5)',
                'rgba(255, 159, 64, 5)',
                'rgba(255, 159, 64, 5)',
                'rgba(255, 159, 64, 5)',
                'rgba(255, 159, 64, 5)',
                'rgba(255, 159, 64, 5)',
                'rgba(255, 159, 64, 5)',
                'rgba(255, 159, 64, 5)',
                'rgba(255, 159, 64, 5)',
                'rgba(255, 159, 64, 5)',
    
            ],
            borderColor: 
            
            [
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
            ],

            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const caughtChart = document.getElementById('caught-chart');
new Chart(caughtChart, {
    type: 'bar',
    data: {
        labels: pokeNames,
        datasets: [{
            label: 'Times Caught',
            data: pokeCaughtStats,
            backgroundColor: [
                'rgb(155, 67, 244)',
                'rgb(155, 67, 244)',
                'rgb(155, 67, 244)',
                'rgb(155, 67, 244)',
                'rgb(155, 67, 244)',
                'rgb(155, 67, 244)',
                'rgb(155, 67, 244)',
                'rgb(155, 67, 244)',
                'rgb(155, 67, 244)',
                'rgb(155, 67, 244)',
                'rgb(155, 67, 244)',
                'rgb(155, 67, 244)',
                'rgb(155, 67, 244)',
                'rgb(155, 67, 244)',
            ],
            // borderColor: [
            //     'rgba(255, 99, 132, 1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)',
            //     'rgba(255, 159, 64, 1)'
            // ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
