$(document).ready(function(){
    $("#search").on("click", function(){
    var searchWord = $("#searcher").val();
     $.ajax({
     type:"GET",
     url:"https://en.wikipedia.org/w/api.php?action=opensearch&search='+ searchWord+'&format=json",
     dataType:"json",
     success: function(data){
         $("#output1").html("");
         for (var i = 0; i< data[1].length; i++){
        $("#output1").prepend("<li><a href='"+data[3][i]+"'>'"+data[1][i]+"'</a><p>'"+data[2][i]+"'</p></li>"); 
             
     }}
     error: function(errorMessage){
        alert("An error occured, Please try again later");
     }
     });//ajax request ends
    
    });
   
});
