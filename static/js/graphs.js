queue()
    .defer(d3.csv, "data/class_results.csv")
    .await(makeGraphs);
    
function makeGraphs(error, resultsData){
    var ndx = crossfilter(resultsData);
    
    resultsData.forEach(function (d){
        d.age = parseInt(d.age);
        d.result = parseInt(d.result);
    });
    
    show_gender_balance(ndx);
    show_subject_ratio(ndx);
    show_grade_ratio(ndx);
    
    show_average_result_per_subject(ndx);
    show_average_result_by_gender(ndx);
    
    show_correlation_between_age_and_result(ndx);
    
    show_percent_that_are_honour_male(ndx, "Male", "#show_percent_that_are_honour_male");
    
    
    
    dc.renderAll();
    
}    

function show_gender_balance(ndx){
    var dim = ndx.dimension(dc.pluck('sex'));
    var group = dim.group();
    
    dc.pieChart("#gender-balance")
        .height(300)
        .radius(120)
        .dimension(dim)
        .group(group)
        .transitionDuration(1500);
    
}

function show_subject_ratio(ndx){
    var subject_dim = ndx.dimension(dc.pluck('discipline'))
    var total_subjects = subject_dim.group();
    
    dc.pieChart("#subject-ratio")
        .height(300)
        .radius(120)
        .dimension(subject_dim)
        .group(total_subjects)
        .transitionDuration(1500);
}

function show_grade_ratio(ndx){
    var grade_dim = ndx.dimension(dc.pluck('grade'))
    var total_grade = grade_dim.group();
    
    dc.pieChart("#grade-ratio")
        .height(300)
        .radius(120)
        .dimension(grade_dim)
        .group(total_grade)
        .transitionDuration(1500);
}


function show_average_result_per_subject(ndx){
    var subject_average_dim = ndx.dimension(dc.pluck("discipline"));
    
    function add_item(p, v){
        p.count++;
        p.total += v.result;
        p.average = p.total/p.count;
        return p;
    }
    
    function remove_item(p, v){
        p.count--;
        if(p.count == 0) {
            p.total = 0;
            p.average = 0;
        } else{
            p.total -= v.result;
            p.average = p.total / p.count;
        }
            return p;
    }
    
    function initialise() {
        return {count: 0, total: 0, average: 0};
    }
    
    var averageResultBySubject = subject_average_dim.group().reduce(add_item, remove_item, initialise);
    
    dc.barChart("#average-result-by-subject")
        .width(350)
        .height(250)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(subject_average_dim)
        .group(averageResultBySubject)
        .valueAccessor(function(d){
            return d.value.average.toFixed(1);
        })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(false)
        .xAxisLabel("Subject")
        .yAxis().ticks(6);
}

function show_average_result_by_gender(ndx){
    
    var gender_average_dim = ndx.dimension(dc.pluck("sex"));
    
    function add_item(p, v){
        p.count++;
        p.total += v.result;
        p.average = p.total/p.count;
        return p;
    }
    
    function remove_item(p, v){
        p.count--;
        if(p.count == 0) {
            p.total = 0;
            p.average = 0;
        } else{
            p.total -= v.result;
            p.average = p.total / p.count;
        }
            return p;
    }
    
    function initialise() {
        return {count: 0, total: 0, average: 0};
    }
    
    var averageResultByGender = gender_average_dim.group().reduce(add_item, remove_item, initialise);
    
    dc.barChart("#average-result-by-gender")
        .width(350)
        .height(250)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(gender_average_dim)
        .group(averageResultByGender)
        .valueAccessor(function(d){
            return d.value.average.toFixed(1);
        })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(false)
        .xAxisLabel("Gender")
        .yAxis().ticks(6);
}


function show_correlation_between_age_and_result(ndx) {
     var ageColors = d3.scale.ordinal()
        .domain(["Female", "Male"])
        .range(["orange", "blue"]);
        
    var resultDim = ndx.dimension(dc.pluck("result"));
    var studentResultDim = ndx.dimension(function(d){
        return [d.result, d.age, d.sex];
    });
    
    var resultGroup = studentResultDim.group();
    
    var minResult = resultDim.bottom(1)[0].result;
    var maxResult = resultDim.top(1)[0].result;
    
    dc.scatterPlot("#correlation_between_age_and_result")
       .width(600)
       .height(300)
       .dimension(studentResultDim)
       .group(resultGroup)
       .x(d3.scale.linear().domain([minResult, maxResult]))
       .brushOn(false)
       .symbolSize(8)
       .clipPadding(10)
       .yAxisLabel("Age")
       .xAxisLabel("Result")
       .title(function(d) {
            return " Score: " + d.key[0];
        })
        .colorAccessor(function (d) {
            return d.key[2];
        })
       .colors(ageColors)
       .margins({top: 10, right: 50, bottom: 75, left: 75})
       .yAxis().ticks(6);
}


function show_percent_that_are_honour_male(ndx, sex, element){

    var percentageThatAreHonourMale = ndx.groupAll().reduce(
        function(p, v) {
            if (v.sex === sex) {
                p.count++;
                if(v.result >= 70) {
                    p.are_honour++;
                }
                
            }
            return p;
        },
        function(p, v) {
            if (v.sex === sex) {
                p.count--;
                if(v.result >= 70) {
                    p.are_honour--;
                }
            }
            return p;
        },
        function() {
            return {count: 0, are_honour: 0};    
        },
    );
    
    dc.numberDisplay(element)
        .formatNumber(d3.format(".2%"))
        .valueAccessor(function (d) {
            if (d.count == 0) {
                return 0;
            } else {
                return (d.are_honour / d.count);
            }
        })
        .group(percentageThatAreHonourMale)
}