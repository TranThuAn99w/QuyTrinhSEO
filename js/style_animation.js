    const procedures = $(".procedure");
    const indicators = $(".indicator");

$(document).ready(function(){

   for (let i = 0; i < procedures.length; i++) {
        if(i!==0){
            $("#procedure__step-"+i).addClass("hide");
            $("#indicator-"+i).addClass("unactive");
        }else{
            $("#procedure__step-"+i).addClass("show");
            $("#indicator-"+i).addClass("active");
        }
        var lastProc = $(".show").index();
        var lastIndic = $(".active").index();
        $("#indicator-"+i).click(function(){
            var currentIndex = $(this).index();
            console.log("last-procedure--"+lastProc);
            console.log("last-indicator--"+lastIndic);
            console.log("current-Index--" +currentIndex);
            console.log("=========================");

            showProcedure(currentIndex, lastProc);
            showIndicator(currentIndex, lastIndic);

            // $("#procedure__step-"+currentIndex).removeClass("hide");
            // $("#procedure__step-"+currentIndex).addClass("show");
            // $("#indicator-"+currentIndex).removeClass("unactive");
            // $("#indicator-"+currentIndex).addClass("active");

            // $("#procedure__step-"+lastProc).addClass("hide");
            // $("#procedure__step-"+lastProc).removeClass("show");
            // $("#indicator-"+lastIndic).addClass("unactive");
            // $("#indicator-"+lastIndic).removeClass("active");
            lastProc = currentIndex;
            lastIndic = currentIndex;
        });
   }
    var lastProc = $(".show").index();
    var lastIndic = $(".active").index();
   $("#button_right").click(function(e){
    e.preventDefault();
    var count = lastProc + 1;

    console.log("last-procedure--"+lastProc);
    console.log("last-indicator--"+lastIndic);
    console.log("current-Index--" +count);
    console.log("=========================");

    if(count < procedures.length){
        showProcedure(count, lastProc);
        showIndicator(count, lastIndic);
    // $("#procedure__step-"+count).removeClass("hide");
    // $("#procedure__step-"+count).addClass("show");
    // $("#indicator-"+count).removeClass("unactive");
    // $("#indicator-"+count).addClass("active");

    // $("#procedure__step-"+lastProc).addClass("hide");
    // $("#procedure__step-"+lastProc).removeClass("show");
    // $("#indicator-"+lastIndic).addClass("unactive");
    // $("#indicator-"+lastIndic).removeClass("active");
    lastProc = count;
    lastIndic = count;
    }
    });

   $("#button_left").click(function(e){
    e.preventDefault();
    var count = lastProc - 1;

    console.log("last-procedure--"+lastProc);
    console.log("last-indicator--"+lastIndic);
    console.log("current-Index--" +count);
    console.log("=========================");

    if(count>=0){
        showProcedure(count, lastProc);
        showIndicator(count, lastIndic);
    // $("#procedure__step-"+count).removeClass("hide");
    // $("#procedure__step-"+count).addClass("show");
    // $("#indicator-"+count).removeClass("unactive");
    // $("#indicator-"+count).addClass("active");

    // $("#procedure__step-"+lastProc).addClass("hide");
    // $("#procedure__step-"+lastProc).removeClass("show");
    // $("#indicator-"+lastIndic).addClass("unactive");
    // $("#indicator-"+lastIndic).removeClass("active");
    lastProc = count;
    lastIndic = count;
    }
    });

    function showIndicator(x, currentIndex){
        $("#indicator-" + x).removeClass("unactive");
        $("#indicator-" + x).addClass("active");

        $("#indicator-" + currentIndex).addClass("unactive");
        $("#indicator-" + currentIndex).removeClass("active");
    }
    
    function showProcedure(x, currentIndex){
        if((x===0)||(x===3)){
            $("#procedure__step-"+x).addClass("show animate__fadeInRight");
            $("#procedure__step-"+x).removeClass("hide animate__fadeInUp");

            $("#procedure__step-"+currentIndex).removeClass("show animate__fadeInRight");
            $("#procedure__step-"+currentIndex).addClass("hide animate__fadeInUp");
            
        }else if((x===1)||(x===2)||(x===4)||(x===5)||(x===6)){
            
            $("#procedure__step-"+x).addClass("show animate__fadeInUp");
            $("#procedure__step-"+x).removeClass("hide animate__fadeInRight");

            $("#procedure__step-"+currentIndex).removeClass("show animate__fadeInUp");
            $("#procedure__step-"+currentIndex).addClass("hide animate__fadeInRight");
        }else{
            return;
        }
    }
});