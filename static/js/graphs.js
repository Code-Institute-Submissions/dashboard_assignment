queue()
    .defer(d3.csv, "data/class_results.csv")
    .await(makeGraphs);
    
function makeGraphs(error, resultsData){
    var ndx = crossfilter(resultsData);
    
    show_gender_balance(ndx);
    
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