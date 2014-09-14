$(document).ready(function(){
    
    //Variables
    var selection;
    var correct;
    var currentQ;
    var qNum = 0;
    var count = 0;
    
    
    function Verses(question, answer, emcee, track, album){
        this.question = question;
        this.answer = answer;
        this.emcee = emcee;
        this.track = track;
        this.album = album;
    }
    
    

    var question1 = new Verses("Tryin' to control the fits of panic <br> Unwritten and unraveled, it's the dead man's pedantic <br> Whatever, <br> See it's really just a matter of semantics <br> When everybody's fresh out of collateral to damage <br> And my splaying got me praying like a mantis <br> I begin to vanish <br> Feel the pull of the blank canvas <br> I\'m contemplating that special dedication <br> To whoever it concern, my letter of resignation <br> Fading back to black, my dark coronation <br> The heat of the day, the long robe of muerte <br> That soul is in the atmosphere like airplay <br> If there\'s a Heaven I can\'t find a stairway",'answer5',"Black Thought","Make My","Undun");
    
    var question2 = new Verses("Some come in the form of codependence <br> A lot of times only end up being codefendants <br> Ten bucks say they tell for a lower sentence <br> And leave you up under the jail, begging for a penance <br> It don't make no sense, what happened to the loyalty? <br> Honor amongst crooks, trust amongst royalty <br> I'd rather go out in a blaze, than give 'em the glory <br> (How many of us have...) a similar story",'answer1', "MF Doom","Deep Fried Frenz","Mmm..Food?");
    
    var question3 = new Verses("My grandma taught me courage <br> She told me never let the grizzly bears eat your porridge <br> Or you'll just be a carcass dying slowly in the forest <br> I could never thank her for it <br> But I can slay a devil when I see one <br> Steady practice mastery of self so not to be one <br> Life is like a re-run, season after season <br> Bombs on the train, bombs on the plane <br> Of disgruntled citizens being tried for treason",'answer3',"Jay Electronica","Annikan's Prayer","Scratches & Demo Tape");
      
    var question4 = new Verses("Only in America could you find a way to earn a healthy buck <br> And still keep your attitude on self-destruct",'answer1',"MF Doom","Rhymes Like Dimes","Operation: Doomsday");

    var question5 = new Verses("A fraudulent match for the torturous wrath of the horseman in black <br> The sorcerer laughs <br> Foes in the bath with a cauldron of rats, gone in a flash <br> The forces of life <br> Absorbed in a fight with the wrong and the right <br> The author was typing, the water was icy, the slaughter was pricey <br> The martyr was light-skinned with chartered indictments <br> that started in high school <br> His father was Michael, he shot him with a rifle <br> A product of the cycle",'answer2',"Edan","Murder Mystery","Beauty and the Beat");

    
    //Questions for the game
    function Questions(){
        var qBank = [question1,question2,question3,question4,question5];
        currentQ = qBank[qNum];
        correct = currentQ.answer;
        
        $('#continue').hide();
        $('#lyrics').text('');
        $('#lyrics').append(currentQ.question).hide().fadeIn(1000);
             
        gameOn();
        
        console.log(currentQ.number);
        console.log(currentQ.question);
        console.log(correct);
    }
    
    Questions();
    
    function compare(){
        if(selection == correct){
            count++;
            $('#lyrics').text('');
            $('#lyrics').append('<h3 id="feedback">YESSIR!</h3>');
            $('#lyrics').append('<h4 id="feedback">'+ currentQ.emcee + '</h4>');
            $('#lyrics').append('<h5 id="feedback">This gem is from "'+currentQ.track+'", off of the "'+ currentQ.album +'" album</h5>');
            $('#lyrics').append('<h5>' + count + ' out of 5 mics</h5>');
        }else{
            $('#lyrics').text('');
            $('#lyrics').append('<h3 id="feedback">W R O N G ! ! !</h3>');
            $('#lyrics').append('<h4 id="feedback">This gem was penned by ' + currentQ.emcee + '</h4>');
            $('#lyrics').append('<h5 id="feedback">The track is "'+currentQ.track+'" from the "'+ currentQ.album +'" album</h5>');
            $('#lyrics').append('<h5>You get NO mics, son...</h5>');
        }
    }
    
    //User clicks artist pic to select answer
    function gameOn(){
        $('.apics').one('click',function(){
            $('.apics').off();
            selection = $(this).attr('id');
        
        if(qNum<4){
            compare();
            qNum++;
            $('#continue').hide().delay(500).fadeIn(500).off().click(Questions);
        }else{
            compare();
            $('#continue').hide().delay(500).fadeIn(500).off().click(overview);
        }  
    });
        
    console.log(count);
    
    }
    
   
    function overview(){
        $('#continue').hide();
        $('#lyrics').text('');
        $('#lyrics').append('<h3 id="feedback">Here\'s how you did:</h3>');
        $('#lyrics').append('<h5>' + count + ' out of 5 mics</h5>');
        if(count==5){
            $('#lyrics').append('<h5>Legend</h5>');
        }else if(count==4){
            $('#lyrics').append('<h5>Master</h5>');
        }else if(count==3){
            $('#lyrics').append('<h5>Impressive</h5>');
        }else if(count==2){
            $('#lyrics').append('<h5>Weak</h5>');
        }else{
            $('#lyrics').append('<h5>Whack</h5>');
        }
    }
    
});