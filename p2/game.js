$(document).ready(function (){
    $(document).keydown(function(e){
        var angle=0;
        if(e.which===37){
            console.log("loaded");
             angle+=20;         
             document.getElementById("arc2").style.transform = "rotate(20deg)"; 

    }
        if(e.which===39){
            angle+=20;
            document.getElementById("arc2").style.transform = "rotate(20deg)"; 

        }
});
});

