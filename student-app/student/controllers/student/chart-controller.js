var chartControllers = angular.module('chartControllers', [])

chartControllers.controller('chartCtrl', ['$scope', function ($scope) {


    function InitChart() {

        var data = [

                {
                    "$id": "1",
                    "EdmxId": "c4d55ab3-9235-4c3d-9838-223fdfffb516",
                    "BuyerCode": "TAMENTLAK",
                    "SupplierCode": "LADTRIANA",
                    "Origin": "IN",
                    "Destination": "AE",
                    "Carrier": null,
                    "PoCount": 3,
                    "Month": "01",
                    "Year": 2015,
                    "Period": 201506
                },
                {
                    "$id": "2",
                    "EdmxId": "fedff2c3-4423-4a88-9cf3-9d2c9e4ba4b3",
                    "BuyerCode": "TAMENTLAK",
                    "SupplierCode": "LADTRIANA",
                    "Origin": "IN",
                    "Destination": "AU",
                    "Carrier": null,
                    "PoCount": 5,
                    "Month": "02",
                    "Year": 2015,
                    "Period": 201506
                },
                {
                    "$id": "3",
                    "EdmxId": "24490e92-97ba-477b-888f-e62a97417757",
                    "BuyerCode": "TAMENTLAK",
                    "SupplierCode": "LADTRIANA",
                    "Origin": "IN",
                    "Destination": "MY",
                    "Carrier": null,
                    "PoCount": 1,
                    "Month": "03",
                    "Year": 2015,
                    "Period": 201506
                },
                {
                    "$id": "4",
                    "EdmxId": "66ae2dc9-759a-4534-8f31-8ceb30a5a1c9",
                    "BuyerCode": "TAMENTLAK",
                    "SupplierCode": "LADTRIANA",
                    "Origin": "IN",
                    "Destination": "LK",
                    "Carrier": null,
                    "PoCount": 10,
                    "Month": "04",
                    "Year": 2015,
                    "Period": 201506
                },
                {
                    "$id": "5",
                    "EdmxId": "66ae2dc9-759a-4534-8f31-8ceb30a5a1c9",
                    "BuyerCode": "TAMENTLAK",
                    "SupplierCode": "LADTRIANA",
                    "Origin": "IN",
                    "Destination": "LK",
                    "Carrier": null,
                    "PoCount": 6,
                    "Month": "05",
                    "Year": 2015,
                    "Period": 201506
                },
                {
                    "$id": "6",
                    "EdmxId": "66ae2dc9-759a-4534-8f31-8ceb30a5a1c9",
                    "BuyerCode": "TAMENTLAK",
                    "SupplierCode": "LADTRIANA",
                    "Origin": "IN",
                    "Destination": "LK",
                    "Carrier": null,
                    "PoCount": 3,
                    "Month": "06",
                    "Year": 2015,
                    "Period": 201506
                }

        ]


        //var data = [
	    //                    {
	    //                        "letter": "A",
	    //                        "frequency": ".08167"
	    //                    },
	    //                    {
	    //                        "letter": "B",
	    //                        "frequency": ".01492"
	    //                    },
	    //                    {
	    //                        "letter": "C",
	    //                        "frequency": ".02782"
	    //                    },
	    //                    {
	    //                        "letter": "D",
	    //                        "frequency": ".04253"
	    //                    },
	    //                    {
	    //                        "letter": "E",
	    //                        "frequency": ".12702"
	    //                    },
	    //                    {
	    //                        "letter": "F",
	    //                        "frequency": ".02288"
	    //                    },
	    //                    {
	    //                        "letter": "G",
	    //                        "frequency": ".02015"
	    //                    },
	    //                    {
	    //                        "letter": "H",
	    //                        "frequency": ".06094"
	    //                    },
	    //                    {
	    //                        "letter": "I",
	    //                        "frequency": ".06966"
	    //                    },
	    //                    {
	    //                        "letter": "J",
	    //                        "frequency": ".00153"
	    //                    },
	    //                    {
	    //                        "letter": "K",
	    //                        "frequency": ".00772"
	    //                    },
	    //                    {
	    //                        "letter": "L",
	    //                        "frequency": ".04025"
	    //                    },
	    //                    {
	    //                        "letter": "M",
	    //                        "frequency": ".02406"
	    //                    },
	    //                    {
	    //                        "letter": "N",
	    //                        "frequency": ".06749"
	    //                    },
	    //                    {
	    //                        "letter": "O",
	    //                        "frequency": ".07507"
	    //                    },
	    //                    {
	    //                        "letter": "P",
	    //                        "frequency": ".01929"
	    //                    },
	    //                    {
	    //                        "letter": "Q",
	    //                        "frequency": ".00095"
	    //                    },
	    //                    {
	    //                        "letter": "R",
	    //                        "frequency": ".05987"
	    //                    },
	    //                    {
	    //                        "letter": "S",
	    //                        "frequency": ".06327"
	    //                    },
	    //                    {
	    //                        "letter": "T",
	    //                        "frequency": ".09056"
	    //                    },
	    //                    {
	    //                        "letter": "U",
	    //                        "frequency": ".02758"
	    //                    },
	    //                    {
	    //                        "letter": "V",
	    //                        "frequency": ".00978"
	    //                    },
	    //                    {
	    //                        "letter": "W",
	    //                        "frequency": ".02360"
	    //                    },
	    //                    {
	    //                        "letter": "X",
	    //                        "frequency": ".00150"
	    //                    },
	    //                    {
	    //                        "letter": "Y",
	    //                        "frequency": ".01974"
	    //                    },
	    //                    {
	    //                        "letter": "Z",
	    //                        "frequency": ".00074"
	    //                    }
        //];


        var margin = {
            top: 20,
            right: 30,
            bottom: 30,
            left: 40
        },

        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

        // scale to ordinal because x axis is not numerical
        var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);

        //scale to numerical value by height
        var y = d3.scale.linear().range([height, 0]);

        var chart = d3.select("#chart")
            //append svg element inside #chart
          .append("svg")
            //set width
          .attr("width", width + (2 * margin.left) + margin.right)
            //set height
          .attr("height", height + margin.top + margin.bottom);


        var xAxis = d3.svg.axis()
          .scale(x)
            //orient bottom because x-axis will appear below the bars
          .orient("bottom");

        var yAxis = d3.svg.axis()
          .scale(y)
          .orient("left");


        x.domain(data.map(function (d) {
            return d.Month
        }));

        y.domain([0, d3.max(data, function (d) {
            return d.PoCount
        })]);

        var bar = chart.selectAll("g")
          .data(data)
          .enter()
          .append("g")
          .attr("transform", function (d, i) {
              return "translate(" + x(d.Month) + ", 0)";
          });

        bar.append("rect")
          .attr("y", function (d) {
              return y(d.PoCount);
          })
          .attr("x", function (d, i) {
              return x.rangeBand() + (margin.left / 4);
          })
          .attr("height", function (d) {
              return height - y(d.PoCount);
          })
            //set width base on range on ordinal data
          .attr("width", 20);

        bar.append("rect")
         .attr("y", function (d) {
             return y(d.PoCount);
         })
         .attr("x", function (d, i) {
             return x.rangeBand() + (margin.left / 4);
         })
         .attr("height", function (d) {
             return height - y(d.PoCount);
         })
           //set width base on range on ordinal data
         .attr("width", 55);

        bar.append("text")
          .attr("x", x.rangeBand() + margin.left)
          .attr("y", function (d) {
              return y(d.PoCount) - 10;
          })
          .attr("dy", ".75em")
          .text(function (d) {
              return d.PoCount;
          });

        chart.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(" + margin.left + "," + height + ")")
          .call(xAxis);



        //function type(d) {
        //    d.letter = +d.letter; // coerce to number
        //    return d;
        //}


        /*forming y axis */
        chart.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + margin.left + ",0)")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("PoCount");

    }

    InitChart();


}]);