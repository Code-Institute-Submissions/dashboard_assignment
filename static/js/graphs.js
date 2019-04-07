queue()
    .defer(d3.csv, "data/class_results.csv")
    .await(makeGraphs);
    
function makeGraphs(error, resultsData){
    var ndx = crossfilter(resultsData);
    
    resultsData.forEach(function (d){
        d.result = parseInt(d.result);
    });
    
    show_gender_balance(ndx);
    show_subject_ratio(ndx);
    show_grade_ratio(ndx);
    show_average_result_per_subject(ndx);
    show_average_result_by_gender(ndx);
    
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