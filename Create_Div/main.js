$(function(){
$(".container").contextmenu(function(e){
    e.preventDefault();
    var top=e.pageY;
    var left=e.pageX;
    $(".contextmenu").css({"top":top+'px',"left":left+'px',"display":"block"});
})
$(".container").click(function(){
    $(".contextmenu").css("display","none");
})


$(".createmonth").click(function(){
    $(".contextmenu").css("display","none");
    $(".addmonth").css("display","block");
})

function addm(){
    $(".addmonth").css("display","none");
    var newmonth=$("#month").val();
    $('.container').append('<div class="months">'+newmonth+'</div>');   
    $("#month").val("");
}

$("#add").click(function(){
    addm();  
})
$("#month").keyup(function(e){
    if(e.keyCode==13){
        addm();
    }
})

})


