var highChart = {

    chartTable: function() {
        $.ajax({
            url: 'rest/visitors',
            method: 'GET',
            dataType: 'json',
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Authorization", localStorage.getItem("user_token"));
            },
            success: function(data) {
                let categories = [];
                let menData = [];
                let womenData = [];
    
                data.forEach(item => {
                    categories.push(item.categories);
                    menData.push(parseInt(item.men));
                    womenData.push(parseInt(item.women));
                });
    
                Highcharts.chart('container', {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Rented cars by gender'
                    },
                    xAxis: {
                        categories: categories
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
                        data: menData
                    }, {
                        name: 'Women',
                        data: womenData
                    }]
                });
            },
            error: function(error) {
                console.log('Error:', error);
            }
        });
    },
};
    

    /*chartTable: function() {
        $.ajax({
            url: 'rest/visitors', // Adjust this path to your backend endpoint
            method: 'GET',
            dataType: 'json',
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Authorization", localStorage.getItem("user_token"));
            },
            success: function(data) {
                Highcharts.chart('container', {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Rented cars by gender'
                    },
                    xAxis: {
                        categories: data.categories // use data from the server
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
                        data: data.men // use data from the server
                    }, {
                        name: 'Women',
                        data: data.women // use data from the server
                    }]
                });
            },
            error: function(error) {
                console.log('Error:', error);
            }
        });
    },
    
   


};*/



/*Highcharts.chart('container', {
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
});*/
