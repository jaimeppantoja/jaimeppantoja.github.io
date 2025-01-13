// // Fetch the boxplot data
// fetch('data/boxplot_PricePer_Property.json')
//     .then(response => response.json())
//     .then(data => {
//         const ctx = document.getElementById('boxplotChart').getContext('2d');
//         new Chart(ctx, {
//             type: 'boxplot',
//             data: {
//                 labels: data.labels,
//                 datasets: data.datasets
//             },
//             options: {
//                 scales: {
//                     y: {
//                         title: {
//                             display: true,
//                             text: 'Price (Thousands)'
//                         },
//                         beginAtZero: true
//                     }
//                 },
//                 plugins: {
//                     title: {
//                         display: true,
//                         text: 'Boxplots of Property Prices by Property Type',
//                         font: {
//                             size: 18
//                         }
//                     }
//                 }
//             }
//         });
//     });

// Fetch the histogram data
fetch('data/price_histogram_data.json')
    .then(response => response.json())
    .then(data => {
        const ctx = document.getElementById('histogramChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Price Range (Thousands)'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Count'
                        },
                        beginAtZero: true
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Histogram of Housing Prices',
                        font: {
                            size: 18
                        }
                    }
                }
            }
        });
    });


// // Fetch the scatter plot data
// fetch('data/scatter_plot_data.json')
//     .then(response => response.json())
//     .then(data => {
//         const ctx = document.getElementById('scatterChart').getContext('2d');
//         new Chart(ctx, {
//             type: 'scatter',
//             data: data,
//             options: {
//                 scales: {
//                     x: {
//                         title: {
//                             display: true,
//                             text: 'Size (sq ft)'
//                         },
//                         beginAtZero: true
//                     },
//                     y: {
//                         title: {
//                             display: true,
//                             text: 'Price'
//                         },
//                         beginAtZero: true
//                     }
//                 },
//                 plugins: {
//                     title: {
//                         display: true,
//                         text: 'Scatter Plot of Price vs. Size',
//                         font: {
//                             size: 18
//                         }
//                     }
//                 }
//             }
//         });
//     });
