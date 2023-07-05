Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Rented cars by gender'
    },
    xAxis: {
        categories: ['2017/18', '2018/19', '2019/20', '2020/21','2021/22']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Rented Cars(%)'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    series: [{
        name: 'Men',
        data: [120, 250, 500, 657, 1202]
    }, {
        name: 'Women',
        data: [78, 370, 400, 830, 909]
    }]
});
