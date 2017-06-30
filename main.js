$(document).ready(function(){
    $.ajax({
    type:"POST",
    $("#searching").onClick(
    var searchWord = $("searcher").val();
    );

url:"https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchWord +'&format=jsonfm",
    success: function(response){
    console.log(response);
    },
    });

});