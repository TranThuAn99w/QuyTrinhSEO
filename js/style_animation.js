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
        
        $("#procedure__step-"+i).click(function(){
            var count = lastProc + 1;
            
            console.log("last-procedure--"+lastProc);
            console.log("last-indicator--"+lastIndic);
            console.log("current-Index--" +count);
            console.log("=========================");
            if(count < procedures.length){
            showProcedure(count, lastProc);
            showIndicator(count, lastIndic);
            lastProc = count;
            lastIndic = count;
            var htmlIndicator = $("#indicator-"+count).html();
            $("#get-name-step").html(htmlIndicator);
            
            }
        })
        $("#indicator-"+i).click(function(){
            var currentIndex = $(this).index();
            console.log("last-procedure--"+lastProc);
            console.log("last-indicator--"+lastIndic);
            console.log("current-Index--" +currentIndex);
            console.log("=========================");

            showProcedure(currentIndex, lastProc);
            showIndicator(currentIndex, lastIndic);

            lastProc = currentIndex;
            lastIndic = currentIndex;
        });
        $("#indicator-mb-"+i).click(function(){
            $("#indicators-mb").hide();
            var currentIndex = $(this).index();
            console.log("last-procedure--"+lastProc);
            console.log("last-indicator--"+lastIndic);
            console.log("current-Index--" +currentIndex);
            console.log("=========================");

            showProcedure(currentIndex, lastProc);
            showIndicator(currentIndex, lastIndic);

            $("#indicator-mb-"+currentIndex).addClass("selected");
            $("#indicator-mb-"+lastProc).removeClass("selected");

            lastProc = currentIndex;
            lastIndic = currentIndex;
            
            var htmlIndicator = $("#indicator-"+currentIndex).html();
            $("#get-name-step").html(htmlIndicator);
        });
   }
    var lastProc = $(".show").index();
    var lastIndic = $(".active").index();
//    $("#button_right").click(function(e){
//     e.preventDefault();
//     var count = lastProc + 1;

//     console.log("last-procedure--"+lastProc);
//     console.log("last-indicator--"+lastIndic);
//     console.log("current-Index--" +count);
//     console.log("=========================");

//     if(count < procedures.length){
//         showProcedure(count, lastProc);
//         showIndicator(count, lastIndic);
//     lastProc = count;
//     lastIndic = count;
//     }
//     });

//    $("#button_left").click(function(e){
//     e.preventDefault();
//     var count = lastProc - 1;

//     console.log("last-procedure--"+lastProc);
//     console.log("last-indicator--"+lastIndic);
//     console.log("current-Index--" +count);
//     console.log("=========================");

//     if(count>=0){
//         showProcedure(count, lastProc);
//         showIndicator(count, lastIndic);
//     lastProc = count;
//     lastIndic = count;
//     }
//     });

    $("#button_right-mb").click(function(e){
        e.preventDefault();
        console.log("last-procedure--"+lastProc);
        console.log("last-indicator--"+lastIndic);
        console.log("current-Index--" +count);
        console.log("=========================");

        $(this).css("color", "#ef004a");
        $("#button_left-mb").css("color", "#fff");

        var count = lastProc + 1;
        if(count < procedures.length){
            $("#procedure__step-"+count).addClass("show");
            $("#procedure__step-"+count).removeClass("hide");

            $("#procedure__step-"+lastProc).removeClass("show");
            $("#procedure__step-"+lastProc).addClass("hide");
            lastProc = count;
            var htmlIndicator = $("#indicator-"+count).html();
            $("#get-name-step").html(htmlIndicator);
        }else{
            $(this).css("color", "#ccc")
        }
    });

    $("#button_left-mb").click(function(e){
        e.preventDefault();
        console.log("last-procedure--"+lastProc);
        console.log("last-indicator--"+lastIndic);
        console.log("current-Index--" +count);
        console.log("=========================");

        $(this).css("color", "#ef004a");
        $("#button_right-mb").css("color", "#fff");

        var count = lastProc - 1;
        if(count >= 0){
            $("#procedure__step-"+count).addClass("show");
            $("#procedure__step-"+count).removeClass("hide");

            $("#procedure__step-"+lastProc).removeClass("show");
            $("#procedure__step-"+lastProc).addClass("hide");
            lastProc = count;
            var htmlIndicator = $("#indicator-"+count).html();
            console.log(htmlIndicator);
            $("#get-name-step").html(htmlIndicator);
        }else{
            $(this).css("color", "#ccc")
        }
    });
    $("#show-menu-btn").click(function(e){
        e.preventDefault();
        $("#indicators-mb").show();
        console.log("ok");
        
    })
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