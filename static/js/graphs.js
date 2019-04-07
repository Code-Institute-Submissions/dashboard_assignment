queue()
    .defer(d3.csv, "data/class_results.csv")
    .await(makeGraphs);
    
function makeGraphs(error, resultsData){
    var ndx = crossfilter(resultsData);
    
    show_gender_balance(ndx);
    show_subject_ratio(ndx);
    
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



