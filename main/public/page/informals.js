jQuery(document).ready(function($) {

    $rc = $(".round-thumb");
    $mL = $(".modalL");
    $mR = $(".modalR");
    $rb = $(".rulebook")
    $modalListOfRules = $(".orderedList");
    var eventRegistrationForm;
    
    var eventName = '';

    var menuIn = false;
    
    var description = ""; // change the event wise description in the switch case at the end not this

    var byb = "<h1>Poker</h1></br>";
    var drk = "<h1>Binge</h1>";
    var drk1 = "<h1>Minute to Win It</h1>";
    var drk2 = "<h1>Photo Booth</h1>";
    var drk3 = "<h1>Pictionary</h1>";
    var drk4 = "<h1>T-Shirt Printing</h1>";


    var ph = "<h1>Paint Ball</h1>";
    var ve = "<h1>Filmy Chakkar</h1>";
    
    var verules = []

    
    
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
            if (arrayOfRules != null) {
                $list.append("<p>" + description + "</p>" + "<strong id='rulesRules' style='font-size:35px;font-weight:300;font-family:'Source Sans Pro','Open Sans', sans-serif;'><br>COMING SOON<br><br></strong>");console.log(++k);
             } else {
                $list.append("<p>" + description + "</p>");console.log(++k); }
            $mR.css("background", "none");console.log(++k);
            $(".bgRules").css({
            "background": "url('" + imagePath + "') no-repeat"

            });console.log(++k);
            $(".bgRulesForModalR").css({
            "background": "url('" + imagePath + "') no-repeat",
            "background-size": "80% 60%"


            });console.log(++k);
           
            if (arrayOfRules != null) {
                for (i = 0; i < arrayOfRules.length;) {
                    $list.append("<li style='color:rgba(255,255,255,1);'>" + (i + 1) + ".&nbsp;&nbsp;" + arrayOfRules[i] + "</li>");
                    i++;
                }
            }
             
            
         $('.registerbtn').prop('href',eventRegistrationForm); // using prop instead attr makes it work. Don't know why.

             setTimeout(showpanel, 1900);
        setTimeout(exitOnclickAnywhere, 2000);setTimeout(function(){         $(".nano").nanoScroller({alwaysVisible: true });      $('.rulebook ol li').css("margin-right","7px !important");         }, 2400);
        
        $mR.addClass("showMe").addClass("animR");
        $mL.addClass("showMe").addClass("animL");
        $('#wrapper').addClass("lightsDim");
        }
    
        var eventRegistrationForm = "";
    $rc.click(function() {
        eventName = $(this).attr('id');
        switch (eventName) { 
            case 'byb': 
                imagePath = "/page/pokerBan.png";
                arrayOfRules = verules;
                description = byb;
                eventRegistrationForm="#";
                break;

            case 'drk': 
                imagePath = "/page/bingeBan.png";
                arrayOfRules = verules;
                description =  drk;
                eventRegistrationForm = "#";
                break;

            case 'ph':
                imagePath = "/page/pballBan.png";
                arrayOfRules = verules;
                description =  ph;
                eventRegistrationForm = "#";
                break;
            case 've':
                imagePath = "/page/filmyBan.png";
                arrayOfRules = verules;
                description =  ve;
                eventRegistrationForm = "#";
                break;
            case 'a':
                            imagePath = "/page/minBan.png";
                            arrayOfRules = verules;
                            description =  drk1;
                            eventRegistrationForm = "#";
                            break;
            case 'b':
                            imagePath = "/page/pboothBan.png";
                            arrayOfRules = verules;
                            description =  drk2;
                            eventRegistrationForm = "#";
                            break;
            case 'c':
                            imagePath = "/page/pictionaryBan.png";
                            arrayOfRules = verules;
                            description =  drk3;
                            eventRegistrationForm = "#";
                            break;
            case 'd':
                            imagePath = "/page/tshirtBan.png";
                            arrayOfRules = verules;
                            description =  drk4;
                            eventRegistrationForm = "#";
                            break;
        }
        fillEverything();
    });

    $cross.click(exitModal);




});