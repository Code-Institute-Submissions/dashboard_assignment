queue()
    .defer(d3.csv, "data/class_results.csv")
    .await(makeGraphs);
    
function makeGraphs(error, resultsData){
    var ndx = crossfilter(resultsData);
}    