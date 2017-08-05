$(document).ready(function(){
    $("#burger-submit").on("click",function(){
        if( $("#burger-name").val().trim().length==0)
            return;

        var newBurger={
            burgerName:$("#burger-name").val().trim()
        };
    $("#burger-name").val("");
    $.post("/", newBurger, function() {
        getBurgers();
      });
    });

    $(document).on("click",".btn-devour",function(){
        var dataObj={
            id:$(this).attr("data-burgerid")
        }
            $.ajax({
            method: "PUT",
            url: "/",
            data:dataObj
          }).done(function(){
              getBurgers();
          });
    });


    function getBurgers(){
         var nodevourHtml;
         var devourHtml;
         $("#uldevoured").empty();
         $("#ulNotdevoured").empty();
         $.get("/json",function(data){
              for(i=0;i<data.length;i++){
                  if(data[i].devoured)
                    $("#uldevoured").append("<li class=\"list-group-item list-group-item-success\">"+data[i].burger_name+"</li>");
                  else
                    $("#ulNotdevoured").append("<li class=\"list-group-item list-group-item-warning\">"+data[i].burger_name+"<button data-burgerid=\""+
                                                data[i].id+"\" type=\"button\" class=\"btn-default btn-devour\">devour it!</button></li>");
              }
         });
    }

});