jQuery(document).ready(function($) {

    $rc = $(".round-thumb");
    $mL = $(".modalL");
    $mR = $(".modalR");
    $modalListOfRules = $(".orderedList");
    var eventRegistrationForm ="";
    
    var eventName = '';

    var menuIn = false;
    
    var description = ""; 
    var vrules =  ["DoTA2 - Team of 5","Counter Strike 1.6 - Team of 5","NFS Most Wanted 2005","FIFA 11", "PS3 (Fifa'15)", "PS3 (WWE)"];

    $cross = $(".spanExitButton");
    $cross.addClass("hideMe");

    function exitModal() {
        $cross.addClass("hideMe");
        $('body').removeClass('noscroll');
        $mR.removeClass("animR").removeClass("showMe");
        $mL.removeClass("animL").removeClass("showMe");
        $('#wrapper').removeClass("lightsDim");
        $("#wrapper").unbind("click", exitModal);$(".nano").nanoScroller({ stop: true });
    }
var imagePath ;
    var arrayOfRules ;

    function showpanel() {
        $cross.removeClass("hideMe");
        

        //        $('body:not("modal")')
    }

    function exitOnclickAnywhere() {
        $("#wrapper").dblclick(exitModal);
    }
    $list = $mL.find("ol");
    
         function fillEverything(){
             var k =0;
            $('body').addClass('noscroll');
             console.log(++k);
            $(".bgRules").css("background","url('')");console.log(++k);
            $(".bgRulesForModalR").css("background","url('')");console.log(++k);
            $modalListOfRules.empty();console.log(++k);
            $list.append("<p>" + description + "</p>" + "<strong id='rulesRules' style='font-size:35px;font-weight:300;font-family:'Source Sans Pro','Open Sans', sans-serif;'><br/></strong>");console.log(++k);
            $mR.css("background", "none");console.log(++k);
            $(".bgRules").css({
            "background": "url('" + imagePath + "') no-repeat"

            });console.log(++k);
            $(".bgRulesForModalR").css({
            "background": "url('" + imagePath + "') no-repeat",
            "background-size": "80% 60%"


            });console.log(++k);
           

            for (i = 0; i < arrayOfRules.length;) {
                $list.append("<li style='color:rgba(255,255,255,1);'>" + (i + 1) + ".&nbsp;&nbsp;" + arrayOfRules[i] + "</li>");
                i++;
            }
             
            
             setTimeout(showpanel, 1900);
        setTimeout(exitOnclickAnywhere, 2000);setTimeout(function(){         $(".nano").nanoScroller({alwaysVisible: true });      $('.rulebook ol li').css("margin-right","7px");         }, 2400);
        
        $mR.addClass("showMe").addClass("animR");
        $mL.addClass("showMe").addClass("animL");
        $('#wrapper').addClass("lightsDim");
        }
    
    $rc.click(function() {
        eventName = $(this).attr('id');
        switch (eventName) { 
            case 'pwned': 
                imagePath = "/page/pwnedthumb.jpg"; 
                arrayOfRules = vrules;
                description =  "<h1>PwNed</h1><br><br><h2>Event Details will be here soon!</h2>";
                eventRegistrationForm = "#";
                break;

           
        }
        fillEverything();
    });

    $cross.click(exitModal);



    
    


});
