jQuery(document).ready(function($) {

    $rc = $(".round-thumb");
    $mL = $(".modalL");
    $mR = $(".modalR");
    $rb = $(".rulebook")
    $modalListOfRules = $(".orderedList");


    var eventName = '';

    var menuIn = false;

    var description = ""; // change the event wise description in the switch case at the end not this

    var byb = "<h1>Culturati</h1><p>Prove to your worrisome mother that all that time spent binge-watching movies, TV series, and scrolling through dank memes wasn’t wasted; win Culturati - the pop-cult quiz @ IIITD.</p>";

	var drk = "<h1>Dilli Walla Quiz</h1><p>This is a Quiz about all things Delhi. Meant to be a tribute to the culture of Delhi, the Quiz would cover everything<br> – the Culture, the Heritage and the History of this majestic metropolis.</br><br>Duration: 3.5 Hours (1.5 for the prelims, 0.5 for checking, 1 for the finals, 0.5 Buffer)</p>";


	var ph = "<h1>Fantasia -The Fantasy World themed quiz</h1><p>Trivialis IIITD’s quizzing club presents Fantasia.Think you’re a master of fantasy ? .. Come find out at Fantasia - The Fantasy World themed quiz </p><p> Rules & Regulations</p>"


	var ve = "<h1>The Jabberwock</h1><p>Trivialis brings to you The Jabberwock, the general quiz event of Odyssey 2015. Expect anything.<br>Organizers : Anudeep Athlur and Shubhorup Biswas</p>";
    var veRules = ["Teams of maximum 2, college or school."," Cross college/school teams allowed.","No usage of electronic devices except watches during any of the rounds"," QM’s decision is final. You may appeal factual correctness but it is ultimately up to the QM whether to accept or reject it."];

	var sports = "<h1>Sports Quiz</h1><p>30 mins prelims and 1 hour final round</p><p>Similar to the concept of alternate realities, even in sports the possibilities are endless and there is no ceiling of improbability. A sports quiz adds a very exciting dimension in the field of quizzing and will be very popular.</p>";



    var bybrules = ["Teams can consist of one or two members.","Six teams will proceed to the finals after a written prelims","This is an open quiz. Cross-college/school teams are allowed. There will be no separate finals for the school category"];

	var drkrules = ["Team Size: 2. Lone wolves allowed, though not recommended.",
					"Extra point in prelims for school students. Rest of the event remains the same for school and college students."];

	var phrules = ["A team can contain a maximum of three members.Lone wolves are allowed",
					"The decision of the quiz master is final and isn’t subject to changes.",
					"The participants will not be allowed to use mobile phones or any other electronic equipment during the quiz.",
					"The qualification stage will be a single round event.",
				   "The Finals will be a multiple round event which will be announced at the time of the event."];



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
                $list.append("<p>" + description + "</p>" + "<strong id='rulesRules' style='font-size:35px;font-weight:300;font-family:'Source Sans Pro','Open Sans', sans-serif;'><br>RULES<br><br></strong>");console.log(++k);
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
        setTimeout(exitOnclickAnywhere, 2000);setTimeout(function(){         $(".nano").nanoScroller({alwaysVisible: true });      $('.rulebook ol li').css("margin-right","7px");         }, 2400);

        $mR.addClass("showMe").addClass("animR");
        $mL.addClass("showMe").addClass("animL");
        $('#wrapper').addClass("lightsDim");
        }
var eventRegistrationForm="#";
    $rc.click(function() {
        eventName = $(this).attr('id');
        switch (eventName) {
            case 'byb':
                imagePath = "/page/culturatiBan.png";
                arrayOfRules = bybrules;
                description = byb;
                eventRegistrationForm = "https://docs.google.com/forms/d/1VGn93KgBjUXaIJdlJv7leZrM7Z50XvFdWc9ivouExNw/viewform";
                break;

            case 'drk':
                imagePath = "/page/dilliwalaQuizBan.png";
                arrayOfRules = drkrules;
                description =  drk;
                eventRegistrationForm = "https://docs.google.com/forms/d/1UYBxim3hILHT-MpdMkRJtFe192rx1e30_33S7JsXAcI/viewform";
                break;

            case 'ph':
                imagePath = "/page/fantasyQuizzingBan.png";
                arrayOfRules = phrules;
                description =  ph;
                eventRegistrationForm = "https://docs.google.com/forms/d/11qxf2u3dPEC_EirNLGt5_g4H2DP7sy_4puufUxqu33c/viewform";
                break;
            case 've':
                imagePath = "/page/generalQuizzingBan.png";
                arrayOfRules = veRules;
                description =  ve;
                eventRegistrationForm = "https://docs.google.com/a/iiitd.ac.in/spreadsheets/d/1OerfBIpw21tYLFhOguINbTAjz5eKQ1YCHnd77WXG9Fs/edit#gid=1477453905";
                break;
			case 'sports':
                imagePath = "/page/sportsQuizBan.png";
                arrayOfRules = null;
                description =  sports;
                eventRegistrationForm = "https://docs.google.com/forms/d/1UkosOuzfa-xw1K1R6zNxWV6pGfHwwie8EDxnwWgUV8w/viewform";
                break;


        }
        fillEverything();
    });

    $cross.click(exitModal);







});
