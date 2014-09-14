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
    
    
    
    
    var intro = 'I start to think, and then I sink <br> Into the paper, like I was ink <br> When I\'m writing I\'m trapped in between the line <br> I escape, when I finish the rhyme...';
    
    var direct = 'Welcome to the Lyricist Lounge <br> <br> How deep is your hip-hop knowledge? <br>  This is a game of "Who Wrote That Rhyme?" <br> You will be given a verse from a hip-hop track in this very display  <br> Select the emcee who penned the gem over from the right-hand side bar  <br> 5 verses total, 5 emcees, and each correct answer earns you a mic  <br> 5 mics is perfection';
        
    var question1 = new Verses("The soul's escaping <br> Through this hole that is gaping <br> This world is mine for the taking <br> Make me king <br> As we move toward a New World Order <br> A normal life is boring <br> But superstardom's <br> Close to post-mortem",'answer2',"Eminem","Lose Yourself","8 Mile Soundtrack");
    
    var question2 = new Verses("I wish I could <br> Become a magician to abracadabra all the sadder <br> Thoughts of me, thoughts of she, thoughts of he <br> Asking what happened to the feeling that her and me had <br> I pray so much about it need some knee pads <br> It happened for a reason one can't be mad <br> So know this, know that everything's cool <br> And yes, I will be present for the first day of school <br> And graduation...",'answer5', "Andre 3000","Ms. Jackson","Stankonia");
    
    var question3 = new Verses("Wipe the sweat off my dome, spit the phlegm on the streets <br> Suede Timbs on my feet makes my cipher complete <br> Whether cruising in a Six cab or Montero Jeep <br> I can't call it; the beats make me falling asleep <br> I keep falling, but never falling six feet deep <br> I'm out for Presidents to represent me <br> I'm out for Dead Presidents to represent me",'answer3',"Nas","The World is Yours","Illmatic");
      
    var question4 = new Verses("I dumbed down for my audience to double my dollars <br> They criticized me for it, yet they all yell \"holla\" <br> If skills sold, truth be told, I'd probably be <br> Lyrically, Talib Kweli <br> Truthfully, I wanna rhyme like Common Sense <br> (But I did 5 mill') - I ain't been rhyming like Common since",'answer1',"Jay Z","Moment of Clarity","The Black Album");

    var question5 = new Verses("You'd dropped me off by the dungeon <br> Never came in, but I knew that you were wondrin' <br> Now are these \[fellas\] in this house up to something <br> Selling crack sack by sacks so they could function <br> W-w-well, yes and no <br> Yes we were selling it but no it wadn't blow <br> Cook it in the basement then move it at a show <br> Then grab the microphone and everybody yelled \"ho!\"",'answer5',"Andre 3000","A Day in the Life of Benjamin Andre","My Beautiful Dark Twisted Fantasy");
    
    /*
    var question6 = new Verses("Tryin' to control the fits of panic <br> Unwritten and unraveled, it's the dead man's pedantic <br> Whatever, <br> See it's really just a matter of semantics <br> When everybody's fresh out of collateral to damage <br> And my splaying got me praying like a mantis <br> I begin to vanish <br> Feel the pull of the blank canvas <br> I\'m contemplating that special dedication <br> To whoever it concern, my letter of resignation <br> Fading back to black, my dark coronation <br> The heat of the day, the long robe of muerte <br> That soul is in the atmosphere like airplay <br> If there\'s a Heaven I can\'t find a stairway",'answer5',"Black Thought","Make My","Undun");
    
    var question7 = new Verses("Some come in the form of codependence <br> A lot of times only end up being codefendants <br> Ten bucks say they tell for a lower sentence <br> And leave you up under the jail, begging for a penance <br> It don't make no sense, what happened to the loyalty? <br> Honor amongst crooks, trust amongst royalty <br> I'd rather go out in a blaze, than give 'em the glory <br> (How many of us have...) a similar story",'answer1', "MF Doom","Deep Fried Frenz","Mmm..Food?");
    
    var question8 = new Verses("My grandma taught me courage <br> She told me never let the grizzly bears eat your porridge <br> Or you'll just be a carcass dying slowly in the forest <br> I could never thank her for it <br> But I can slay a devil when I see one <br> Steady practice mastery of self so not to be one <br> Life is like a re-run, season after season <br> Bombs on the train, bombs on the plane <br> Of disgruntled citizens being tried for treason",'answer3',"Jay Electronica","Annikan's Prayer","Scratches & Demo Tape");
      
    var question9 = new Verses("Only in America could you find a way to earn a healthy buck <br> And still keep your attitude on self-destruct",'answer1',"MF Doom","Rhymes Like Dimes","Operation: Doomsday");

    var question10 = new Verses("A fraudulent match for the torturous wrath of the horseman in black <br> The sorcerer laughs <br> Foes in the bath with a cauldron of rats, gone in a flash <br> The forces of life <br> Absorbed in a fight with the wrong and the right <br> The author was typing, the water was icy, the slaughter was pricey <br> The martyr was light-skinned with chartered indictments <br> that started in high school <br> His father was Michael, he shot him with a rifle <br> A product of the cycle",'answer2',"Edan","Murder Mystery","Beauty and the Beat");
*/

    
    //Starting point for first time game
    function brandNew(){
        $('#mic').hide();
        $('#sidebar').hide();
        $('#lyrics').append(intro).hide().fadeIn(3000);
        $('#continue').hide().delay(3000).fadeIn(3000);
    }
    
    
    //Game instructions
    function instructions(){
        $('#continue').on('click', function(){
            $(this).hide().delay(8000).fadeIn(3000).off().click(Questions);
                $('#mic').hide().fadeIn(3000);
                $('#lyrics').text('');
                $('#lyrics').append(direct).hide().fadeIn(3000);
                $('#sidebar').hide().delay(6000).fadeIn(3000);
        });
    }


    brandNew();
    instructions();
    
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
    
    
    function compare(){
        if(selection == correct){
            count++;
            $('#lyrics').text('');
            $('#lyrics').append('<h3 id="feedback">YESSIR!</h3>');
            $('#lyrics').append('<h4>'+ currentQ.emcee + '</h4>');
            $('#lyrics').append('<h5>This gem is from "'+currentQ.track+'" off of the "'+ currentQ.album +'" album</h5>');
            $('#lyrics').append('<h5>' + count + ' out of 5 mics</h5>');
        }else{
            $('#lyrics').text('');
            $('#lyrics').append('<h3 id="feedback">W R O N G ! ! !</h3>');
            $('#lyrics').append('<h4>This gem was penned by ' + currentQ.emcee + '</h4>');
            $('#lyrics').append('<h5>The track is "'+currentQ.track+'" from the "'+ currentQ.album +'" album</h5>');
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
        $('#lyrics').append('<h3 id="feedback">Status:</h3>');
        $('#lyrics').append('<h5>' + count + ' out of 5 mics</h5>');
        if(count==5){
            $('#lyrics').append('<h5>Legend</h5>');
        }else if(count==4){
            $('#lyrics').append('<h5>Master</h5>');
        }else if(count==3){
            $('#lyrics').append('<h5>Respected</h5>');
        }else if(count==2){
            $('#lyrics').append('<h5>Weak Sauce</h5>');
        }else if(count==1){
            $('#lyrics').append('<h5>Whack!</h5>');
        }else{
            $('#lyrics').append('<h5>Really?</h5>');
        }            
    }
    
});

