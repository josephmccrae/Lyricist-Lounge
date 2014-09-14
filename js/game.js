$(document).ready(function(){
    
    //Variables
    var selection;
    var correct;
    var currentQ;
    var qNum = 0;
    var count = 0;
    
    
    function Verses(question, answer, emcee, phrase, track, album){
        this.question = question;
        this.answer = answer;
        this.emcee = emcee;
        this.phrase = phrase;
        this.track = track;
        this.album = album;
    }
    
    
    
    
    var intro = 'I start to think, and then I sink <br> Into the paper, like I was ink <br> When I\'m writing I\'m trapped in between the line <br> I escape, when I finish the rhyme...';
    
    var direct = 'Welcome to the Lyricist Lounge <br> <br> How deep is your hip-hop knowledge? <br>  This is a game of "Who Wrote That Rhyme?" <br> You will be given a verse from a hip-hop track in this very display  <br> Select the emcee who penned the gem over from the right-hand side bar  <br> 5 verses total, 5 emcees, and each correct answer earns you a mic  <br> 5 mics is perfection';
        
    var question1 = new Verses("I had a ghetto boy bop, a Jay-Z boycott <br> Cause he said that he never prayed to God, he prayed to Gotti <br> I\'m thinking \"golly, God, guard me from the ungodly\" <br> But by my 30th watching of \"Streets is Watching\" <br> I was back to giving props again and that was bothering",'answer4', "Lupe Fiasco","Rarified Form","Hurt Me Soul","Food & Liquor");
    
    var question2 = new Verses("Some come in the form of codependence <br> A lot of times only end up being codefendants <br> Ten bucks say they tell for a lower sentence <br> And leave you up under the jail, begging for a penance <br> It don't make no sense, what happened to the loyalty? <br> Honor amongst crooks, trust amongst royalty <br> I'd rather go out in a blaze, than give 'em the glory <br> (How many of us have...) a similar story",'answer1', "MF Doom","yet another drop dead joint","Deep Fried Frenz","Mmm..Food?");
    
    var question3 = new Verses("My grandma taught me courage <br> She told me never let the grizzly bears eat your porridge <br> Or you'll just be a carcass dying slowly in the forest <br> I could never thank her for it <br> But I can slay a devil when I see one <br> Steady practice mastery of self so not to be one <br> Life is like a re-run, season after season <br> Bombs on the train, bombs on the plane <br> Of disgruntled citizens being tried for treason",'answer3',"Jay Electronica","Wordsmith","Annikan's Prayer","Scratches & Demo Tape");
      
    var question4 = new Verses("Tryin' to control the fits of panic <br> Unwritten and unraveled, it's the dead man's pedantic <br> Whatever, <br> See it's really just a matter of semantics <br> When everybody's fresh out of collateral to damage <br> And my splaying got me praying like a mantis <br> I begin to vanish <br> Feel the pull of the blank canvas <br> I\'m contemplating that special dedication <br> To whoever it concern, my letter of resignation <br> Fading back to black, my dark coronation <br> The heat of the day, the long robe of muerte <br> That soul is in the atmosphere like airplay <br> If there\'s a Heaven I can\'t find a stairway",'answer5',"Black Thought","One of THE most underrated emcees of our time","Make My","Undun");

    var question5 = new Verses("Pour the hourglass sand in the rusted tin can <br> The looking glass man dressed in robes from Japan <br> The chauffeur of the van with the globe in his hand <br> The roller coaster lands in the ocean <br> Alas, the commotion is matched by the force of the splash <br> The source of the blast was a porcelain gat <br> The orphan in rags <br> A fraudulent match for the torturous wrath of the horseman in black <br> The sorcerer laughs <br> Foes in the bath with a cauldron of rats, gone in a flash <br> The forces of life <br> Absorbed in a fight with the wrong and the right <br> The author was typing, the water was icy, the slaughter was pricey <br> The martyr was light-skinned with chartered indictments <br> that started in high school <br> His father was Michael, He shot him with a rifle <br> A product of the cycle",'answer2',"Edan","A Triple Threat - The Humble Magnificent","Murder Mystery","Beauty and the Beat");

 

    
    
   /* 
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
            $(this).hide().delay(10000).fadeIn(3000).off().click(startGame);
                $('#mic').hide().fadeIn(3000);
                $('#lyrics').text('');
                $('#lyrics').append(direct).hide().fadeIn(3000);
                $('#sidebar').hide().delay(6500).fadeIn(3000);
        });
    }

    
    brandNew();
    instructions();
    */
    
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
            $('#lyrics').append('<h4 id="feedback">'+ currentQ.emcee + ': ' + currentQ.phrase + '</h4>');
            $('#lyrics').append('<h5 id="feedback">This gem is from "'+currentQ.track+'", off of the "'+ currentQ.album +'" album</h5>');
            $('#lyrics').append('<h5>' + count + ' out of 5 mics</h5>');
        }else{
            $('#lyrics').text('');
            $('#lyrics').append('<h3 id="feedback">W R O N G ! ! !</h3>');
            $('#lyrics').append('<h4 id="feedback">This is gem was penned by ' + currentQ.emcee + '</h4>');
            $('#lyrics').append('<h5 id="feedback">The track is "'+currentQ.track+'", from his "'+ currentQ.album +'" album</h5>');
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
     
    Questions();
    
    
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

