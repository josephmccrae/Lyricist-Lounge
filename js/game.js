$(document).ready(function(){
    
    
    function Verses(number, question, answer, pic, artist, song, album){
        this.number = number;
        this.question = question;
        this.answer = answer;
        this.pic = pic;
        this.artist = artist;
        this.song = song;
        this.album = album;
    }
    
    var question1 = new Verses(1,"I had a ghetto boy bop, a Jay-Z boycott <br> Cause he said that he never prayed to God, he prayed to Gotti <br> I\'m thinking \"golly, God, guard me from the ungodly\" <br> But by my 30th watching of \"Streets is Watching\" <br> I was back to giving props again and that was bothering",4,'<img src="images/lupe.jpg" class="profile" /> <br>',"Lupe Fiasco","Hurt Me Soul","Food & Liquor");
    
    var question2 = new Verses(2,"Some come in the form of codependence <br> A lot of times only end up being codefendants <br> Ten bucks say they tell for a lower sentence <br> And leave you up under the jail, begging for a penance <br> It don't make no sense, what happened to the loyalty? <br> Honor amongst crooks, trust amongst royalty <br> I'd rather go out in a blaze, than give 'em the glory <br> (How many of us have...) a similar story",1, '<img src="images/doom1.gif" class="profile" /> <br>',"MF Doom","Deep Fried Frenz","Mmm..Food?");
    
    var question3 = new Verses(3,"My grandma taught me courage <br> She told me never let the grizzly bears eat your porridge <br> Or you'll just be a carcass dying slowly in the forest <br> I could never thank her for it <br> But I can slay a devil when I see one <br> Steady practice mastery of self so not to be one <br> Life is like a re-run, season after season <br> Bombs on the train, bombs on the plane <br> Of disgruntled citizens being tried for treason",3,"Jay Electronica","Annikan's Prayer","Scratches & Demo Tape");
      
    var question4 = new Verses(4,"Tryin' to control the fits of panic <br> Unwritten and unraveled, it's the dead man's pedantic <br> Whatever, <br> See it's really just a matter of semantics <br> When everybody's fresh out of collateral to damage <br> And my splaying got me praying like a mantis <br> I begin to vanish <br> Feel the pull of the blank canvas <br> I\'m contemplating that special dedication <br> To whoever it concern, my letter of resignation <br> Fading back to black, my dark coronation <br> The heat of the day, the long robe of muerte <br> That soul is in the atmosphere like airplay <br> If there\'s a Heaven I can\'t find a stairway",5,"Black Thought","Make My","Undun");

    var question5 = new Verses(5,"Pour the hourglass sand in the rusted tin can <br> The looking glass man dressed in robes from Japan <br> The chauffeur of the van with the globe in his hand <br> The roller coaster lands in the ocean <br> Alas, the commotion is matched by the force of the splash <br> The source of the blast was a porcelain gat <br> The orphan in rags <br> A fraudulent match for the torturous wrath of the horseman in black <br> The sorcerer laughs <br> Foes in the bath with a cauldron of rats, gone in a flash <br> The forces of life <br> Absorbed in a fight with the wrong and the right <br> The author was typing, the water was icy, the slaughter was pricey <br> The martyr was light-skinned with chartered indictments <br> that started in high school <br> His father was Michael, He shot him with a rifle <br> A product of the cycle",2,"Edan","Murder Mystery","Beauty and the Beat");

    
    $('.lyrics').append(question1.question);
    
    
    
});

