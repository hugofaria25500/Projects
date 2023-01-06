
/*##############################*/
/*##############################*/
/*##############################*/
/* CHALLENGES */
/*##############################*/
/*##############################*/
/*##############################*/

let finalChallengeForEachLevel = [
    /*LEVEL 1*/ 
    /*110*/ "Ask the directions to random persons - (5 Girls, 5 Boys).",
    /*32*/ "Ask the time to random persons - (5 Girls, 5 Boys).",
    /*111*/ "Hold eye contact, for a day to everyone who is looking at you.", 
    /*74*/ "Ask strangers to rate yourself - (4 Girls, 1 Boy).",
    /*110*/ "Ask strangers to rate your perfum - (4 Girls, 1 Boy).",
    /*75*/ "Ask to strangers what would be their perfect date and note that - (4 Girls, 1 Boy).",
    /*2*/ "Get a girl phone number - (5 Girls).", //2
    
    /*LEVEL 2*/
    /*10*/ "Take some photos with strangers - (5 Girls, 5 Boys).",
    /*84*/ "Ask random people to borrow some money to you - (5 Girls, 5 Boys).",
    /*18*/ "Ask random people to give you some compliments - (5 Girls, 5 Boys).",
    /*36*/ "Ask random people about guilty pleasures - (5 Girls, 5 Boys).",
    /*65*/ "Enter Omegle and chat 5 minutes straight with 3 Persons.",
    /*70*/ "Go to 3 different houses and ask to take a photo on their sofa.",
    /*71*/ "Exchanging secrets with strangers - (5 Girls, 5 Boys).",
    /*72*/ "Exchanging crazy stories with strangers - (5 Girls, 5 Boys).",
    /*109*/ "Write motivational notes and give them to strangers - (5 Girls, 5 Boys).",
    /*112*/ "Compliment the outfit or the hairstyle of random persons - (5 Girls, 5 Boys).",
    /*113*/ "Try a new look on yourself.",
    /*114*/ "Hug random girls - (3 Girls).", //3

    /*LEVEL 3*/
    /*21*/ "Aproach 10 diferent girls and ask their number/social midia.",
    /*31*/ "Gift random person.",
    /*38*/ "Tell to 3 different girls that you love them.",
    /*42*/ "Give random people ridiculous draws of themselfs.",
    /*43*/ "Offering shots to random person.",
    /*64*/ "Asking random people for hugs.",
    /*117*/ "Create a podcast.",
    /*118*/ "Tell a joke to a random person - (5 Girls, 5 Boys).",
    /*73*/ "Acidentally show an embaress photo of yourself to strangers.",
    /*80*/ "Ask for a condom to random person.",
    /*115*/ "Reconnect with a friend.",
    /*116*/ "Call 5 different friend and ask them what is their best memorie about you.",
    /*91*/ "Go out with a randomized friend of your list.", //4

    /*LEVEL 4*/
    /*57*/ "Join a strip bar.",
    /*3*/ "Pick up a girl.",
    /*118*/ "Use a different outfit.",
    /*119*/ "Ask a random person if she could wear that clothes to your sister/brother.",
    /*25*/ "Ask advice to a random person.",
    /*33*/ "Participate in a karoke night.", 
    /*34*/ "Ask 3 girls to give her hand and justify with a nonsense idea.",
    /*41*/ "Call a random person and tell that he/she won the lotery.",
    /*46*/ "Act as a mute person and aproach random person.",
    /*51*/ "Pass a night in a florest, alone.",
    /*120*/ "Go to the cinema alone.",
    /*55*/ "Get a basic ride.",
    /*58*/ "Saying yes to evertything for a week.",
    /*63*/ "Staring at girls in a elevator steps.",
    /*87*/ "Start a youtube channel.",
    /*96*/ "Buy a poop shaped birthday cake for your best friend.",
    /*105*/ "Eat the hottest pepper chips with someone.", //3

    /*LEVEL 5*/
    /*47*/ "Help someone you dont know.",
    /*81*/ "Ask a girls number without talking.", 
    /*95*/ "Convince someone that you came from the future.",
    /*104*/ "Sell the most ridiculous thing you have.",
    /*107*/ "Greet people with vaseline on your hand.",  
    /*4*/ "Invite a stranger to just watch some movie in cinema.",
    /*7*/ "Talk at a supermarket speaker.",
    /*9*/ "Lunching with a homeless guy.",
    /*14*/ "Invite a hot girl to go out on a date.",
    /*19*/ "Ask to speak to the store manager and arrange a meeting.",
    /*59*/ "Arrange a date for two random person.",
    /*79*/ "Go to a stand up comedy show with a stranger.",
    /*83*/ "Go to a musuem with a stranger.",
    /*85*/ "Sleep in the beach with a stranger.",
    /*97*/ "Go up to strangers and act like lifelong friends.",
    /*99*/ "Talk to a stranger with helio.",
    /*121*/ "Speaking only english for 3 days.",
    /*122*/ "Go to the restaurant and ask a new plate.",
    /*123*/ "Exchange a clip for a lunch (Every strategy is valid).", //3

    /*LEVEL 6*/
    /*1*/ "Kiss a girl.",
    /*94*/ "Accuse someone fart in a elevator.",
    /*27*/ "Dance with 3 girls.",
    /*124*/ "Take a book with an awkward cover in public.",
    /*37*/ "Go out in pijama.",
    /*125*/ "Eat something really awkward in public.",
    /*126*/ "Hold eye contact from the outside to the person who are eating, for a minute.",
    /*39*/ "Scream something awkward, higher as you can in 5 different places.",
    /*86*/ "Sleep with a homeless stranger.",
    /*106*/ "Eat baby food with a stranger.",
    /*61*/ "Eat one of the most hottest peppers with a stranger.",
    /*89*/ "Invite a random person to go to the oceanonarium.", //3
    
    /*LEVEL 7*/
    /*24*/ "Go shop with a stranger.",
    /*40*/ "Get drunk with a stranger.",
    /*90*/ "Invite a random person to go with you to a fun fair.",
    /*6*/ "Go out with strangers.",
    /*13*/ "Sleep in a stranger house.",
    /*16*/ "Meet some turists or strangers and show the city.",
    /*26*/ "Go out and join a random group at night.",
    /*53*/ "Realize someones dream.",
    /*127*/ "A week acting based on a coin flip.",
    /*76*/ "Cooking With a stranger.",
    /*93*/ "Go play sports with strangers.",
    /*82*/ "Go to a sex shop in a date.", //1

    /*LEVEL 8*/
    /*22*/ "Hug Challenge.",
    /*23*/ "Go to some party where you dont know anynone.",
    /*103*/ "Go out alone 3 times.",
    /*78*/ "5 different Dates.",
    /*128*/ "Kiss 3 different girls.",
    /*12*/ "Invite five random people to dinner in the same place.",
    /*28*/ "Ask to the cafe/restaurant to sing to you the ´The Birthaday´.",
    /*29*/ "Get a ride on a boat.",
    /*129*/ "Kiss 2 different girls in one night.", //2

    /*LEVEL 9*/
    /*30*/ "Do an dance workshop.",
    /*49*/ "Swim without clothes.",
    /*50*/ "Wearing a ridiculous costume and go out.",
    /*52*/ "Camping with a stranger.",
    /*62*/ "Sneaking to an abandoned place with random person.",
    /*66*/ "Do a random workshop with a girl.",
    /*100*/ "Bring a music speaker with you and put strange sounds in public.",
    /*101*/ "Watch hentai in publIc.",
    /*108*/ "Burp is higher as you can in public.",
    /*130*/ "Engage a girl much oldern than you.",
    /*131*/ "Participate in a volunteer action.",
    /*132*/ "Bodyshot on 2 girls.", //3

    /*LEVEL 10*/
    /*17*/ "Go to a nudism beach.",
    /*48*/ "Gather random people and eat something that anyone didnt never eat.",
    /*54*/ "Go out at a concert show with a stranger.",
    /*60*/ "Make a painting and sell it on a gallery.",
    /*69*/ "Give a ride to a 3 different people.",
    /*77*/ "Prepare a dish with a random girl.",
    /*88*/ "Go to a hotel with a stranger.",
    /*133*/ "Receive a twerk from a gils.",
    /*134*/ "Make a ridiculous dance on the disco.", //2

    /*LEVEL 11*/
    /*8*/ "Crossing the whole country by a ride.",
    /*15*/ "Invite random people to my own party.",
    /*20*/ "Raise funds for an association.",
    /*135*/ "Participate on a threate.",
    /*35*/ "Pretending to have a phone call, while having an awkward conversation.",
    /*44*/ "Travel with a friend.",
    /*136*/ "Drive naked.",
    /*137*/ "Kiss 2 girls at the same time.",
    /*138*/ "Ask a random girl to give your her pants.",
    /*67*/ "Have a sexual experience.",
    /*98*/ "Laugh randomly for 5 minutes on a public place.", //4

    /*LEVEL 12*/
    /*142*/ "Sex.",
    /*5*/ "Play an instrument in public.",
    /*139*/ "Participate on a radio show.",
    /*11*/ "Entertainment session (talk) in a school.",
    /*45*/ "Travel with a stranger.",
    /*56*/ "Travel alone for a few days.",
    /*68*/ "Sex in a random place.",
    /*92*/ "RoadTrip with a friend or a stranger.",
    /*140*/ "Fake bachelor party.",
    /*141*/ "Participate in a tv show." //3
    ]
    
    let challengesLevels = [
    /*LEVEL 1*/
    /*110*/ "Ask the directions to random persons - (5 Girls, 5 Boys).",
    /*32*/ "Ask the time to random persons - (5 Girls, 5 Boys).",
    /*111*/ "Hold eye contact, for a day to everyone who is looking at you.", 
    /*74*/ "Ask strangers to rate yourself - (4 Girls, 1 Boy).",
    /*110*/ "Ask strangers to rate your perfum - (4 Girls, 1 Boy).",
    /*75*/ "Ask to strangers what would be their perfect date and note that - (4 Girls, 1 Boy).",
    /*2*/ "Get a girls phone number - (5 Girls).",
/*7*//*FINAL LELVEL*/ finalChallengeForEachLevel[Math.floor(Math.random()*7)],
    /*LEVEL 2*/
    /*10*/ "Take some photos with strangers - (5 Girls, 5 Boys).",
    /*84*/ "Ask random people to borrow some money - (5 Girls, 5 Boys).",
    /*18*/ "Ask random people to give you some compliments - (5 Girls, 5 Boys).",
    /*36*/ "Ask random people about guilty pleasures - (5 Girls, 5 Boys).",
    /*65*/ "Enter Omegle and chat 5 minutes straight with 3 Persons.",
    /*70*/ "Go to 3 different houses and ask to take a photo on their sofa.",
    /*71*/ "Exchanging secrets with strangers - (5 Girls, 5 Boys).",
    /*72*/ "Exchanging crazy stories with strangers - (5 Girls, 5 Boys).",
    /*109*/ "Write motivational notes and give them to strangers - (5 Girls, 5 Boys).",
    /*112*/ "Compliment the outfit or the hairstyle of random persons - (5 Girls, 5 Boys).",
    /*113*/ "Try a new look on yourself.",
    /*114*/ "Hug random girls - (3 Girls).",
/*20*//*FINAL LELVEL*/ finalChallengeForEachLevel[Math.floor(Math.random()*12+7)],
    /*LEVEL 3*/
    /*21*/ "Aproach 10 diferent girls and ask their number/social midia.",
    /*31*/ "Gift random person.",
    /*38*/ "Tell to 3 different girls that you love them.",
    /*42*/ "Give random people ridiculous draws of themselfs.",
    /*43*/ "Offering shots to random person.",
    /*64*/ "Asking random people for hugs.",
    /*117*/ "Create a podcast.",
    /*118*/ "Tell a joke to a random person - (5 Girls, 5 Boys).",
    /*73*/ "Acidentally show an embaress photo of yourself to strangers.",
    /*80*/ "Ask for a condom to random person.",
    /*115*/ "Reconnect with a friend.",
    /*116*/ "Call 5 different friend and ask them what is their best memorie about you.",
    /*91*/ "Go out with a randomized friend of your list.", 
/*34*//*FINAL LELVEL*/ finalChallengeForEachLevel[Math.floor(Math.random()*13+19)],
    /*LEVEL 4*/
    /*140*/ "Say 'I love you' to 3 different girls.",
    /*57*/ "Join a strip bar.",
    /*3*/ "Pick up a girl.",
    /*118*/ "Use a different outfit.",
    /*119*/ "Ask a random person if she could wear that clothes to your sister/brother.",
    /*25*/ "Ask advice to a random person.",
    /*33*/ "Participate in a karoke night.", 
    /*34*/ "Ask 3 girls to give her hand and justify with a nonsense idea.",
    /*41*/ "Call a random person and tell that he/she won the lotery.",
    /*46*/ "Act as a mute person and aproach random person.",
    /*51*/ "Pass a night in a florest, alone.",
    /*120*/ "Go to the cinema alone.",
    /*55*/ "Get a basic ride.",
    /*58*/ "Saying yes to evertything for a week.",
    /*63*/ "Staring at girls in a elevator steps.",
    /*87*/ "Start a youtube channel.",
    /*96*/ "Buy a poop shaped birthday cake for your best friend.",
    /*105*/ "Eat the hottest pepper chips with someone.",
/*53*//*FINAL LELVEL*/ finalChallengeForEachLevel[Math.floor(Math.random()*18+32)],
    /*LEVEL 5*/
    /*47*/ "Help someone you dont know.",
    /*81*/ "Ask a girls number without talking.", 
    /*95*/ "Convince someone that you came from the future.",
    /*104*/ "Sell the most ridiculous thing you have.",
    /*107*/ "Greet people with vaseline on your hand.",  
    /*4*/ "Invite a stranger to just watch some movie in cinema.",
    /*7*/ "Talk at a supermarket speaker.",
    /*9*/ "Lunching with a homeless guy.",
    /*14*/ "Invite a hot girl to go out on a date.",
    /*19*/ "Ask to speak to the store manager and arrange a meeting.",
    /*59*/ "Arrange a date for two random person.",
    /*79*/ "Go to a stand up comedy show with a stranger.",
    /*83*/ "Go to a musuem with a stranger.",
    /*85*/ "Sleep in the beach with a stranger.",
    /*97*/ "Go up to strangers and act like lifelong friends.",
    /*99*/ "Talk to a stranger with helio.",
    /*121*/ "Speaking only english for 3 days.",
    /*122*/ "Go to the restaurant and ask a new plate.",
    /*123*/ "Exchange a clip for a lunch (Any strategy is valid).",
/*73*//*FINAL LELVEL*/ finalChallengeForEachLevel[Math.floor(Math.random()*19+50)],
    /*LEVEL 6*/
    /*1*/ "Kiss a girl.",
    /*94*/ "Accuse someone fart in a elevator.",
    /*27*/ "Dance with 3 girls.",
    /*124*/ "Take a book with an awkward cover in public.",
    /*37*/ "Go out in pijama.",
    /*125*/ "Eat something really awkward in public.",
    /*126*/ "Hold eye contact from the outside to the person who are eating, for a minute.",
    /*39*/ "Scream something awkward, higher as you can in 5 different places.",
    /*86*/ "Sleep with a homeless stranger.",
    /*106*/ "Eat baby food with a stranger.",
    /*61*/ "Eat one of the most hottest peppers with a stranger.",
    /*89*/ "Invite a random person to go to the oceanonarium.",
/*86*//*FINAL LELVEL*/ finalChallengeForEachLevel[Math.floor(Math.random()*12+69)],
    /*LEVEL 7*/
    /*24*/ "Go shop with a stranger.",
    /*40*/ "Get drunk with a stranger.",
    /*90*/ "Invite a random person to go with you to a fun fair.",
    /*6*/ "Go out with strangers.",
    /*13*/ "Sleep in a stranger house.",
    /*16*/ "Meet some turists or strangers and show the city.",
    /*26*/ "Go out and join a random group at night.",
    /*53*/ "Realize someones dream.",
    /*127*/ "A week acting based on a coin flip.",
    /*76*/ "Cooking With a stranger.",
    /*93*/ "Go play sports with strangers.",
    /*82*/ "Go to a sex shop in a date.",
/*99*//*FINAL LELVEL*/ finalChallengeForEachLevel[Math.floor(Math.random()*12+81)],
    /*LEVEL 8*/
    /*22*/ "Hug Challenge.",
    /*23*/ "Go to some party where you dont know anynone.",
    /*103*/ "Go out alone 3 times.",
    /*78*/ "5 different Dates.",
    /*128*/ "Kiss 3 different girls.",
    /*12*/ "Invite five random people to dinner in the same place.",
    /*28*/ "Ask to the cafe/restaurant to sing to you the ´The Birthaday´.",
    /*29*/ "Get a ride on a boat.",
    /*129*/ "Kiss 2 different girls in one night.",
/*109*//*FINAL LELVEL*/ finalChallengeForEachLevel[Math.floor(Math.random()*9+93)],
    /*LEVEL 9*/
    /*30*/ "Do an dance workshop.",
    /*49*/ "Swim without clothes.",
    /*50*/ "Wearing a ridiculous costume and go out.",
    /*52*/ "Camping with a stranger.",
    /*62*/ "Sneaking to an abandoned place with random person.",
    /*66*/ "Do a random workshop with a girl.",
    /*100*/ "Bring a music speaker with you and put strange sounds in public.",
    /*101*/ "Watch hentai in publIc.",
    /*108*/ "Burp is higher as you can in public.",
    /*130*/ "Engage a girl much oldern than you.",
    /*131*/ "Participate in a volunteer action.",
    /*132*/ "Bodyshot on 2 girls.",
/*122*//*FINAL LELVEL*/ finalChallengeForEachLevel[Math.floor(Math.random()*12+102)],
    /*LEVEL 10*/
    /*17*/ "Go to a nudism beach.",
    /*48*/ "Gather random people and eat something that anyone didnt never eat.",
    /*54*/ "Go out at a concert show with a stranger.",
    /*60*/ "Make a painting and sell it on a gallery.",
    /*69*/ "Give a ride to a 3 different people.",
    /*77*/ "Prepare a dish with a random girl.",
    /*88*/ "Go to a hotel with a stranger.",
    /*133*/ "Receive a twerk from a gils.",
    /*134*/ "Make a ridiculous dance on the disco.", 
/*132*//*FINAL LELVEL*/ finalChallengeForEachLevel[Math.floor(Math.random()*9+114)],
    /*LEVEL 11*/
    /*8*/ "Crossing the whole country by a ride.",
    /*15*/ "Invite random people to my own party.",
    /*20*/ "Raise funds for an association.",
    /*135*/ "Participate on a threate.",
    /*35*/ "Pretending to have a phone call, while having an awkward conversation.",
    /*44*/ "Travel with a friend.",
    /*136*/ "Drive naked.",
    /*137*/ "Kiss 2 girls at the same time.",
    /*138*/ "Ask a random girl to give your her pants.",
    /*67*/ "Have a sexual experience.",
    /*98*/ "Laugh randomly for 5 minutes on a public place.", 
/*144*//*FINAL LELVEL*/ finalChallengeForEachLevel[Math.floor(Math.random()*11+123)],
    /*LEVEL 12*/
    /*67*/ "Sex.",
    /*5*/ "Play an instrument in public.",
    /*139*/ "Participate on a radio show.",
    /*11*/ "Entertainment session (talk) in a school.",
    /*45*/ "Travel with a stranger.",
    /*56*/ "Travel alone for a few days.",
    /*68*/ "Sex in a random place.",
    /*92*/ "RoadTrip with a friend or a stranger.",
    /*140*/ "Fake bachelor party.",
    /*141*/ "Participate in a tv show.",
/*154*//*FINAL LELVEL*/ finalChallengeForEachLevel[Math.floor(Math.random()*10+134)]
]

/*##############################*/
/*##############################*/
/*##############################*/
/* JQUERYS PROJECT */
/*##############################*/
/*##############################*/
/*##############################*/

/*##############################*/
/* FIRST VIEW */
/*##############################*/

var tasks = document.querySelector(".taskContainer");
var buttons = document.querySelector(".buttonContainer");

var task = document.getElementById("tasksLayer");
var nextBtn =  document.getElementById("nextTask");
var doneBtn = document.getElementById("doneTask");
var tasksContent = document.getElementById("tasksContentLayer");
var checkFinalLevel = document.getElementById("check");

var lateral1Level = document.getElementById("lateralLevel1");
var lateral2Level = document.getElementById("lateralLevel2");
var lateral3Level = document.getElementById("lateralLevel3");
var lateral4Level = document.getElementById("lateralLevel4");
var lateral5Level = document.getElementById("lateralLevel5");
var lateral6Level = document.getElementById("lateralLevel6");
var lateral7Level = document.getElementById("lateralLevel7");
var lateral8Level = document.getElementById("lateralLevel8");
var lateral9Level = document.getElementById("lateralLevel9");
var lateral10Level = document.getElementById("lateralLevel10");
var lateral11Level = document.getElementById("lateralLevel11");
var lateral12Level = document.getElementById("lateralLevel12");

var levelsButton = document.getElementById("levelsBtn");
var lateralLevelsButton = document.getElementById("lateralButtons");
var diaryButton = document.getElementById("diaryBtn");
var expectationsButton = document.getElementById("expectationsBtn");
var teamButton = document.getElementById("teamBtn");
var soundButton = document.getElementById("soundBtn");

/*##############################*/
/* LEVELS */
/*##############################*/
var levels = document.querySelector(".levelsContainer");

var level1 = document.getElementById("level1");
var level2 = document.getElementById("level2");
var level3 = document.getElementById("level3");
var level4 = document.getElementById("level4");
var level5 = document.getElementById("level5");
var level6 = document.getElementById("level6");
var level7 = document.getElementById("level7");
var level8 = document.getElementById("level8");
var level9 = document.getElementById("level9");
var level10 = document.getElementById("level10");
var level11 = document.getElementById("level11");
var level12 = document.getElementById("level12");

var eachLevelContent = document.getElementById("levelsContent");
var levelsHeader = document.getElementById("levels");
var levelsBackButton = document.getElementById("levelsBackBtn");

/*##############################*/
/* DIARY */
/*##############################*/

var diary = document.querySelector(".diaryContainer");
var diaryTitle = document.getElementById("diaryHeader");
var diarySubTitle = document.getElementById("diarySubHeader");
var textBox = document.getElementById("text");
var diaryBackButton = document.getElementById("diaryBackBtn");
var diarySaveButton = document.getElementById("diarySaveBtn");

/*##############################*/
/* EXPECTATIONS */
/*##############################*/

var expectations = document.querySelector(".expectationsContainer");
var expectationsTitle = document.getElementById("expectationsHeader");
var expectationsInformation = document.getElementById("expectationsContent");
var expectationsBackButton = document.getElementById("expectationsBackBtn");

/*##############################*/
/* TEAM */
/*##############################*/

var team = document.querySelector(".teamContainer");
var teamTitle = document.getElementById("teamHeader");
var photo = document.getElementById("myPhoto");
var description = document.getElementById("myDescription");
var teamBackButton = document.getElementById("teamBackBtn");

/*##############################*/
/* SOUND */
/*##############################*/

var audioElement = document.createElement('audio');
var sound = document.querySelector(".soundContainer");

/*##############################*/
/*##############################*/
/*##############################*/
/* VARIABLE AND FUNCTIONS*/
/*##############################*/
/*##############################*/
/*##############################*/

let level1Complete = false;
let level2Complete = false;
let level3Complete = false;
let level4Complete = false;
let level5Complete = false;
let level6Complete = false;
let level7Complete = false;
let level8Complete = false;
let level9Complete = false;
let level10Complete = false;
let level11Complete = false;
let level12Complete = false;

let lateral1LevelDisabled = false;
let lateral2LevelDisabled = false;
let lateral3LevelDisabled = false;
let lateral4LevelDisabled = false;
let lateral5LevelDisabled = false;
let lateral6LevelDisabled = false;
let lateral7LevelDisabled = false;
let lateral8LevelDisabled = false;
let lateral9LevelDisabled = false;
let lateral10LevelDisabled = false;
let lateral11LevelDisabled = false;
let lateral12LevelDisabled = false;

let soundOn = false;

let counter = 0;

let positionFinalLevel = [7,20,34,53,73,86,99,109,122,132,144,154]; //position -1

/*##############################*/
/* lATERAL LEVELS APPEARANCE*/
/*##############################*/

/*
function clickOnLateralLevel1 (){
    counter = 0;
    checkFinalLevel.style.visibility="hidden";
    nextBtn.style.visibility="hidden";
    doneBtn.style.visibility ="visible";
    taskNumber();
    tasksContent.innerHTML = `${challengesLevels[counter]}`;
    task.innerHTML = `TASK#${counter+1}`;

    if (Number(localStorage.getItem("counterValue")) == counter) {
        localStorage.removeItem("counterValue");
        Number(localStorage.setItem("couterValue", counter));
    }

    lateral1LevelDisabled = true;

    lateral1Level.disabled = true;

    localStorage.setItem("lateral1", lateral1LevelDisabled); 
}
*/

function clickOnLateralLevel2 (){
    counter = 8;
    checkFinalLevel.style.visibility="hidden";
    nextBtn.style.visibility="hidden";
    doneBtn.style.visibility ="visible";
    taskNumber();
    tasksContent.innerHTML = `${challengesLevels[counter]}`;
    task.innerHTML = `TASK#${counter+1}`;

    if (Number(localStorage.getItem("counterValue")) != counter) {
        localStorage.removeItem("counterValue");
        Number(localStorage.setItem("couterValue", counter));
    }

    lateral2LevelDisabled = true
    localStorage.setItem("lateral2", lateral2LevelDisabled);

    lateral2Level.disabled = true;
}

function clickOnLateralLevel3 (){
    counter = 21;
    checkFinalLevel.style.visibility="hidden";
    nextBtn.style.visibility="hidden";
    doneBtn.style.visibility ="visible";
    taskNumber();
    tasksContent.innerHTML = `${challengesLevels[counter]}`;
    task.innerHTML = `TASK#${counter+1}`;

    if (Number(localStorage.getItem("counterValue")) != counter) {
        localStorage.removeItem("counterValue");
        Number(localStorage.setItem("couterValue", counter));
    }

    lateral3LevelDisabled = true
    localStorage.setItem("lateral3", lateral3LevelDisabled);

    lateral3Level.disabled = true;
}

function clickOnLateralLevel4 (){
    counter = 35;
    checkFinalLevel.style.visibility="hidden";
    nextBtn.style.visibility="hidden";
    doneBtn.style.visibility ="visible";
    taskNumber();
    tasksContent.innerHTML = `${challengesLevels[counter]}`;
    task.innerHTML = `TASK#${counter+1}`;

    if (Number(localStorage.getItem("counterValue")) != counter) {
        localStorage.removeItem("counterValue");
        Number(localStorage.setItem("couterValue", counter));
    }

    lateral4LevelDisabled = true
    localStorage.setItem("lateral4", lateral4LevelDisabled);

    lateral4Level.disabled = true;
}

function clickOnLateralLevel5 (){
    counter = 54;
    checkFinalLevel.style.visibility="hidden";
    nextBtn.style.visibility="hidden";
    doneBtn.style.visibility ="visible";
    taskNumber();
    tasksContent.innerHTML = `${challengesLevels[counter]}`;
    task.innerHTML = `TASK#${counter+1}`;

    if (Number(localStorage.getItem("counterValue")) != counter) {
        localStorage.removeItem("counterValue");
        Number(localStorage.setItem("couterValue", counter));
    }

    lateral5LevelDisabled = true
    localStorage.setItem("lateral5", lateral5LevelDisabled);

    lateral5Level.disabled = true;
}

function clickOnLateralLevel6 (){
    counter = 74;
    checkFinalLevel.style.visibility="hidden";
    nextBtn.style.visibility="hidden";
    doneBtn.style.visibility ="visible";
    taskNumber();
    tasksContent.innerHTML = `${challengesLevels[counter]}`;
    task.innerHTML = `TASK#${counter+1}`;

    if (Number(localStorage.getItem("counterValue")) != counter) {
        localStorage.removeItem("counterValue");
        Number(localStorage.setItem("couterValue", counter));
    }

    lateral6LevelDisabled = true
    localStorage.setItem("lateral6", lateral6LevelDisabled);

    lateral6Level.disabled = true;
}

function clickOnLateralLevel7 (){
    counter = 87;
    checkFinalLevel.style.visibility="hidden";
    nextBtn.style.visibility="hidden";
    doneBtn.style.visibility ="visible";
    taskNumber();
    tasksContent.innerHTML = `${challengesLevels[counter]}`;
    task.innerHTML = `TASK#${counter+1}`;

    if (Number(localStorage.getItem("counterValue")) != counter) {
        localStorage.removeItem("counterValue");
        Number(localStorage.setItem("couterValue", counter));
    }

    lateral7LevelDisabled = true
    localStorage.setItem("lateral7", lateral7LevelDisabled);

    lateral7Level.disabled = true;
}

function clickOnLateralLevel8 (){
    counter = 100;
    checkFinalLevel.style.visibility="hidden";
    nextBtn.style.visibility="hidden";
    doneBtn.style.visibility ="visible";
    taskNumber();
    tasksContent.innerHTML = `${challengesLevels[counter]}`;
    task.innerHTML = `TASK#${counter+1}`;

    if (Number(localStorage.getItem("counterValue")) != counter) {
        localStorage.removeItem("counterValue");
        Number(localStorage.setItem("couterValue", counter));
    }

    lateral8LevelDisabled = true
    localStorage.setItem("lateral2", lateral8LevelDisabled);

    lateral8Level.disabled = true;
}

function clickOnLateralLevel9 (){
    counter = 110;
    checkFinalLevel.style.visibility="hidden";
    nextBtn.style.visibility="hidden";
    doneBtn.style.visibility ="visible";
    taskNumber();
    tasksContent.innerHTML = `${challengesLevels[counter]}`;
    task.innerHTML = `TASK#${counter+1}`;

    if (Number(localStorage.getItem("counterValue")) != counter) {
        localStorage.removeItem("counterValue");
        Number(localStorage.setItem("couterValue", counter));
    }

    lateral9LevelDisabled = true
    localStorage.setItem("lateral9", lateral9LevelDisabled);

    lateral9Level.disabled = true;
}

function clickOnLateralLevel10 (){
    counter = 123;
    checkFinalLevel.style.visibility="hidden";
    nextBtn.style.visibility="hidden";
    doneBtn.style.visibility ="visible";
    taskNumber();
    tasksContent.innerHTML = `${challengesLevels[counter]}`;
    task.innerHTML = `TASK#${counter+1}`;

    if (Number(localStorage.getItem("counterValue")) != counter) {
        localStorage.removeItem("counterValue");
        Number(localStorage.setItem("couterValue", counter));
    }

    lateral10LevelDisabled = true
    localStorage.setItem("lateral10", lateral10LevelDisabled);

    lateral10Level.disabled = true;
}

function clickOnLateralLevel11 (){
    counter = 133;
    checkFinalLevel.style.visibility="hidden";
    nextBtn.style.visibility="hidden";
    doneBtn.style.visibility ="visible";
    taskNumber();
    tasksContent.innerHTML = `${challengesLevels[counter]}`;
    task.innerHTML = `TASK#${counter+1}`;

    if (Number(localStorage.getItem("counterValue")) != counter) {
        localStorage.removeItem("counterValue");
        Number(localStorage.setItem("couterValue", counter));
    }

    lateral11LevelDisabled = true;
    localStorage.setItem("lateral11", lateral11LevelDisabled);

    lateral11Level.disabled = true;
}

function clickOnLateralLevel12 (){
    counter = 145;
    checkFinalLevel.style.visibility="hidden";
    nextBtn.style.visibility="hidden";
    doneBtn.style.visibility ="visible";
    taskNumber();
    tasksContent.innerHTML = `${challengesLevels[counter]}`;
    task.innerHTML = `TASK#${counter+1}`;

    if (Number(localStorage.getItem("counterValue")) != counter) {
        localStorage.removeItem("counterValue");
        Number(localStorage.setItem("couterValue", counter));
    }

    lateral12LevelDisabled = true
    localStorage.setItem("lateral12", lateral12LevelDisabled);

    lateral12Level.disabled = true;
}

/*##############################*/
/* DONCE CLICK ACTION*/
/*##############################*/

function isDone(){

        doneBtn.style.visibility ="hidden";
        nextBtn.style.visibility ="visible";
        checkFinalLevel.style.visibility="visible";

        //conditions to level appear //Need to update
        if (counter == 7){
            level1Complete = true;
            lateral2Level.style.visibility="visible";
            nextBtn.style.visibility ="hidden";
            lateral1Level.style.backgroundColor ="green";
            lateral1Level.style.color ="white";
            lateral1Level.style.cursor = "default";
            localStorage.setItem("level1",level1Complete);
        } else if (counter == 20){
            level2Complete = true;
            lateral3Level.style.visibility="visible";
            nextBtn.style.visibility ="hidden";
            lateral2Level.style.backgroundColor ="green";
            lateral2Level.style.color ="white";
            lateral2Level.style.cursor = "default";
            localStorage.setItem("level2",level2Complete);
        } else if (counter == 34){
            level3Complete = true;
            lateral4Level.style.visibility="visible";
            nextBtn.style.visibility ="hidden";
            lateral3Level.style.backgroundColor ="green";
            lateral3Level.style.color ="white";
            lateral3Level.style.cursor = "default";
            localStorage.setItem("level3",level3Complete);
        } else if (counter == 53){
            level4Complete = true;
            lateral5Level.style.visibility="visible";
            nextBtn.style.visibility ="hidden";
            lateral4Level.style.backgroundColor ="green";
            lateral4Level.style.color ="white";
            lateral4Level.style.cursor = "default";
            localStorage.setItem("level4",level4Complete);
        } else if (counter == 73){
            level5Complete = true;
            lateral6Level.style.visibility="visible";
            nextBtn.style.visibility ="hidden";
            lateral5Level.style.backgroundColor ="green";
            lateral5Level.style.color ="white";
            lateral5Level.style.cursor = "default";
            localStorage.setItem("level5",level5Complete);
        } else if (counter == 86){
            level6Complete = true;
            lateral7Level.style.visibility="visible";
            nextBtn.style.visibility ="hidden";
            lateral6Level.style.backgroundColor ="green";
            lateral6Level.style.color ="white";
            lateral6Level.style.cursor = "default";
            localStorage.setItem("level6",level6Complete);
        } else if (counter == 99){
            level7Complete = true;
            lateral8Level.style.visibility="visible";
            nextBtn.style.visibility ="hidden";
            lateral7Level.style.backgroundColor ="green";
            lateral7Level.style.color ="white";
            lateral7Level.style.cursor = "default";
            localStorage.setItem("level7",level7Complete);
        } else if (counter == 109){
            level8Complete = true;
            lateral9Level.style.visibility="visible";
            nextBtn.style.visibility ="hidden";
            lateral8Level.style.backgroundColor ="green";
            lateral8Level.style.color ="white";
            lateral8Level.style.cursor = "default";
            localStorage.setItem("level8",level8Complete);
        } else if (counter == 122){
            level9Complete = true;
            lateral10Level.style.visibility="visible";
            nextBtn.style.visibility ="hidden";
            lateral9Level.style.backgroundColor ="green";
            lateral9Level.style.color ="white";
            lateral9Level.style.cursor = "default";
            localStorage.setItem("level9",level9Complete);
        } else if (counter == 132){
            level10Complete = true;
            lateral11Level.style.visibility="visible";
            nextBtn.style.visibility ="hidden";
            lateral10Level.style.backgroundColor ="green";
            lateral10Level.style.color ="white";
            lateral10Level.style.cursor = "default";   
            localStorage.setItem("level10",level10Complete);
        } else if (counter == 144){
            level11Complete = true;
            lateral12Level.style.visibility="visible";
            nextBtn.style.visibility ="hidden";
            lateral11Level.style.backgroundColor ="green";
            lateral11Level.style.color ="white";
            lateral11Level.style.cursor = "default";
            localStorage.setItem("level11",level11Complete);
        } else if (counter == 154){
            level12Complete = true;
            nextBtn.style.visibility ="hidden";
            lateral12Level.style.backgroundColor ="green";
            lateral12Level.style.color ="white";
            lateral12Level.style.cursor = "default";
            localStorage.setItem("level12",level12Complete);                  
        } else {
            nextBtn.style.visibility ="visible";
        }
}

/*##############################*/
/*TASK UPDATE NUMBER AND RESPECTIVE ACTIONS*/
/*##############################*/

function taskNumber (){

    for (let i = 0; i < positionFinalLevel.length; i ++){
        if (counter == positionFinalLevel[i]){
            task.innerHTML = `FINAL LELVEL ${i+1}`;
            break;
        } else {
            task.innerHTML = `TASK#${counter+1}`;  
        }
    }
}

/*##############################*/
/* TASK CONTENT APEARENCE*/
/*##############################*/

function getTaskContent (){
    for (let i = 0; i < challengesLevels.length; i++){
        if(counter == i){
            tasksContent.innerHTML = `${challengesLevels[counter]}`; 
        }
    }
}

/*##############################*/
/* NEXT CLICK ACTION*/
/*##############################*/

function nextTaskAction(){
    counter += 1; 
    taskNumber();
    getTaskContent();
    nextBtn.style.visibility ="hidden";
    doneBtn.style.visibility ="visible";
    checkFinalLevel.style.visibility ="hidden";

    if (Number(localStorage.getItem("counterValue")) != counter) {
        localStorage.removeItem("counterValue");
        Number(localStorage.setItem("couterValue", counter));
    }
}

/*##############################*/
/* LEVELS CLICK AND RESPECTIVE ACTIONS*/
/*##############################*/

function clickLevel1 (){
    
    eachLevelContent.style.visibility ="visible";
    levelsBackButton.style.visibility ="visible";

    eachLevelContent.innerHTML = `#1 - ${challengesLevels[0]} <br>
    #2 - ${challengesLevels[1]} <br>
    #3 - ${challengesLevels[2]} <br>
    #4 - ${challengesLevels[3]} <br>
    #5 - ${challengesLevels[4]} <br>
    #6 - ${challengesLevels[5]} <br>
    #7 - ${challengesLevels[6]} <br>
    #F - ${challengesLevels[7]}`;

    //
    level12.style.visibility="hidden";
    level11.style.visibility="hidden";
    level10.style.visibility="hidden";
    level9.style.visibility="hidden";
    level8.style.visibility="hidden";
    level7.style.visibility="hidden";
    level6.style.visibility="hidden";
    level5.style.visibility="hidden";
    level4.style.visibility="hidden";
    level3.style.visibility="hidden";
    level2.style.visibility="hidden";
    level1.style.visibility="hidden";
    //
}

function clickLevel2 (){
    
    eachLevelContent.style.visibility ="visible";
    levelsBackButton.style.visibility ="visible";

    eachLevelContent.innerHTML = `#9 - ${challengesLevels[8]} <br>
    #10 - ${challengesLevels[9]} <br>
    #11 - ${challengesLevels[10]} <br>
    #12 - ${challengesLevels[11]} <br>
    #13 - ${challengesLevels[12]} <br>
    #14 - ${challengesLevels[13]} <br>
    #15 - ${challengesLevels[14]} <br>
    #16 - ${challengesLevels[15]} <br>
    #17 - ${challengesLevels[16]} <br>
    #18 - ${challengesLevels[17]} <br>
    #19 - ${challengesLevels[18]} <br>
    #20 - ${challengesLevels[19]} <br>
    #F - ${challengesLevels[20]} <br>`

    //
    level12.style.visibility="hidden";
    level11.style.visibility="hidden";
    level10.style.visibility="hidden";
    level9.style.visibility="hidden";
    level8.style.visibility="hidden";
    level7.style.visibility="hidden";
    level6.style.visibility="hidden";
    level5.style.visibility="hidden";
    level4.style.visibility="hidden";
    level3.style.visibility="hidden";
    level2.style.visibility="hidden";
    level1.style.visibility="hidden";
    //
}

function clickLevel3 (){
    
    eachLevelContent.style.visibility ="visible";
    levelsBackButton.style.visibility ="visible";

    eachLevelContent.innerHTML = `#22 - ${challengesLevels[21]} <br>
    #23 - ${challengesLevels[22]} <br>
    #24 - ${challengesLevels[23]} <br>
    #25 - ${challengesLevels[24]} <br>
    #26 - ${challengesLevels[25]} <br>
    #27 - ${challengesLevels[26]} <br>
    #28 - ${challengesLevels[27]} <br>
    #39 - ${challengesLevels[28]} <br>
    #30 - ${challengesLevels[29]} <br>
    #31 - ${challengesLevels[30]} <br>
    #32 - ${challengesLevels[31]} <br>
    #33 - ${challengesLevels[32]} <br>
    #34 - ${challengesLevels[33]} <br>
    #F - ${challengesLevels[34]} <br>`

    //
    level12.style.visibility="hidden";
    level11.style.visibility="hidden";
    level10.style.visibility="hidden";
    level9.style.visibility="hidden";
    level8.style.visibility="hidden";
    level7.style.visibility="hidden";
    level6.style.visibility="hidden";
    level5.style.visibility="hidden";
    level4.style.visibility="hidden";
    level3.style.visibility="hidden";
    level2.style.visibility="hidden";
    level1.style.visibility="hidden";
    //
}

function clickLevel4 (){
    
    eachLevelContent.style.visibility ="visible";
    levelsBackButton.style.visibility ="visible";

    eachLevelContent.innerHTML = `#36 - ${challengesLevels[35]} <br>
    #37 - ${challengesLevels[36]} <br>
    #38 - ${challengesLevels[37]} <br>
    #39 - ${challengesLevels[38]} <br>
    #40 - ${challengesLevels[39]} <br>
    #41 - ${challengesLevels[40]} <br>
    #42 - ${challengesLevels[41]} <br>
    #43 - ${challengesLevels[42]} <br>
    #44 - ${challengesLevels[43]} <br>
    #45 - ${challengesLevels[44]} <br>
    #46 - ${challengesLevels[45]} <br>
    #47 - ${challengesLevels[46]} <br>
    #48 - ${challengesLevels[47]} <br>
    #49 - ${challengesLevels[48]} <br>
    #50 - ${challengesLevels[49]} <br>
    #51 - ${challengesLevels[50]} <br>
    #52 - ${challengesLevels[51]} <br>
    #53 - ${challengesLevels[52]} <br>
    #F - ${challengesLevels[53]} <br>`

    //
    level12.style.visibility="hidden";
    level11.style.visibility="hidden";
    level10.style.visibility="hidden";
    level9.style.visibility="hidden";
    level8.style.visibility="hidden";
    level7.style.visibility="hidden";
    level6.style.visibility="hidden";
    level5.style.visibility="hidden";
    level4.style.visibility="hidden";
    level3.style.visibility="hidden";
    level2.style.visibility="hidden";
    level1.style.visibility="hidden";
    //
}

function clickLevel5 (){
    
    eachLevelContent.style.visibility ="visible";
    levelsBackButton.style.visibility ="visible";

    eachLevelContent.innerHTML = `#55 - ${challengesLevels[54]} <br>
    #56 - ${challengesLevels[55]} <br>
    #57 - ${challengesLevels[56]} <br>
    #58 - ${challengesLevels[57]} <br>
    #59 - ${challengesLevels[58]} <br>
    #60- ${challengesLevels[59]} <br>
    #61- ${challengesLevels[60]} <br>
    #62 - ${challengesLevels[61]} <br>
    #63- ${challengesLevels[62]} <br>
    #64 - ${challengesLevels[63]} <br>
    #65 - ${challengesLevels[64]} <br>
    #66 - ${challengesLevels[65]} <br>
    #67 - ${challengesLevels[66]} <br>
    #68 - ${challengesLevels[67]} <br>
    #69 - ${challengesLevels[68]} <br>
    #70 - ${challengesLevels[69]} <br>
    #71 - ${challengesLevels[70]} <br>
    #72 - ${challengesLevels[71]} <br>
    #73 - ${challengesLevels[72]} <br>
    #F - ${challengesLevels[73]} <br>`

    //
    level12.style.visibility="hidden";
    level11.style.visibility="hidden";
    level10.style.visibility="hidden";
    level9.style.visibility="hidden";
    level8.style.visibility="hidden";
    level7.style.visibility="hidden";
    level6.style.visibility="hidden";
    level5.style.visibility="hidden";
    level4.style.visibility="hidden";
    level3.style.visibility="hidden";
    level2.style.visibility="hidden";
    level1.style.visibility="hidden";
    //
}

function clickLevel6 (){
    
    eachLevelContent.style.visibility ="visible";
    levelsBackButton.style.visibility ="visible";

    eachLevelContent.innerHTML =`#75 - ${challengesLevels[74]} <br>
    #76 - ${challengesLevels[75]} <br>
    #77 - ${challengesLevels[76]} <br>
    #78 - ${challengesLevels[77]} <br>
    #79 - ${challengesLevels[78]} <br>
    #80 - ${challengesLevels[79]} <br>
    #81 - ${challengesLevels[80]} <br>
    #82 - ${challengesLevels[81]} <br>
    #83 - ${challengesLevels[82]} <br>
    #84 - ${challengesLevels[83]} <br>
    #85 - ${challengesLevels[84]} <br>
    #86 - ${challengesLevels[85]} <br>
    #F - ${challengesLevels[86]} <br>`

    //
    level12.style.visibility="hidden";
    level11.style.visibility="hidden";
    level10.style.visibility="hidden";
    level9.style.visibility="hidden";
    level8.style.visibility="hidden";
    level7.style.visibility="hidden";
    level6.style.visibility="hidden";
    level5.style.visibility="hidden";
    level4.style.visibility="hidden";
    level3.style.visibility="hidden";
    level2.style.visibility="hidden";
    level1.style.visibility="hidden";
    //
}

function clickLevel7 (){
    
    eachLevelContent.style.visibility ="visible";
    levelsBackButton.style.visibility ="visible";

    eachLevelContent.innerHTML = `#88 - ${challengesLevels[87]} <br>
    #89 - ${challengesLevels[88]} <br>
    #90 - ${challengesLevels[89]} <br>
    #91 - ${challengesLevels[90]} <br>
    #92 - ${challengesLevels[91]} <br>
    #93- ${challengesLevels[92]} <br>
    #94- ${challengesLevels[93]} <br>
    #95 - ${challengesLevels[94]} <br>
    #96- ${challengesLevels[95]} <br>
    #97 - ${challengesLevels[96]} <br>
    #98 - ${challengesLevels[97]} <br>
    #99 - ${challengesLevels[98]} <br>
    #F - ${challengesLevels[99]} <br>`

    //
    level12.style.visibility="hidden";
    level11.style.visibility="hidden";
    level10.style.visibility="hidden";
    level9.style.visibility="hidden";
    level8.style.visibility="hidden";
    level7.style.visibility="hidden";
    level6.style.visibility="hidden";
    level5.style.visibility="hidden";
    level4.style.visibility="hidden";
    level3.style.visibility="hidden";
    level2.style.visibility="hidden";
    level1.style.visibility="hidden";
    //
}

function clickLevel8 (){
    
    eachLevelContent.style.visibility ="visible";
    levelsBackButton.style.visibility ="visible";

    eachLevelContent.innerHTML = `#101 - ${challengesLevels[100]} <br>
    #102 - ${challengesLevels[101]} <br>
    #103 - ${challengesLevels[102]} <br>
    #104 - ${challengesLevels[103]} <br>
    #105 - ${challengesLevels[104]} <br>
    #106 - ${challengesLevels[105]} <br>
    #107 - ${challengesLevels[106]} <br>
    #108 - ${challengesLevels[107]} <br>
    #109 - ${challengesLevels[108]} <br>
    #F - ${challengesLevels[109]} <br>`

    //
    level12.style.visibility="hidden";
    level11.style.visibility="hidden";
    level10.style.visibility="hidden";
    level9.style.visibility="hidden";
    level8.style.visibility="hidden";
    level7.style.visibility="hidden";
    level6.style.visibility="hidden";
    level5.style.visibility="hidden";
    level4.style.visibility="hidden";
    level3.style.visibility="hidden";
    level2.style.visibility="hidden";
    level1.style.visibility="hidden";
    //
}

function clickLevel9 (){
    
    eachLevelContent.style.visibility ="visible";
    levelsBackButton.style.visibility ="visible";

    eachLevelContent.innerHTML = `#111 - ${challengesLevels[110]} <br>
    #112 - ${challengesLevels[111]} <br>
    #113 - ${challengesLevels[112]} <br>
    #114 - ${challengesLevels[113]} <br>
    #115 - ${challengesLevels[114]} <br>
    #116 - ${challengesLevels[115]} <br>
    #117 - ${challengesLevels[116]} <br>
    #118 - ${challengesLevels[117]} <br>
    #119 - ${challengesLevels[118]} <br>
    #120 - ${challengesLevels[119]} <br>
    #121 - ${challengesLevels[120]} <br>
    #122 - ${challengesLevels[121]} <br>
    #F - ${challengesLevels[122]} <br>`

    //
    level12.style.visibility="hidden";
    level11.style.visibility="hidden";
    level10.style.visibility="hidden";
    level9.style.visibility="hidden";
    level8.style.visibility="hidden";
    level7.style.visibility="hidden";
    level6.style.visibility="hidden";
    level5.style.visibility="hidden";
    level4.style.visibility="hidden";
    level3.style.visibility="hidden";
    level2.style.visibility="hidden";
    level1.style.visibility="hidden";
    //
}

function clickLevel10(){
    
    eachLevelContent.style.visibility ="visible";
    levelsBackButton.style.visibility ="visible";

    eachLevelContent.innerHTML = `#124 - ${challengesLevels[123]} <br>
    #125 - ${challengesLevels[124]} <br>
    #126 - ${challengesLevels[125]} <br>
    #127 - ${challengesLevels[126]} <br>
    #128 - ${challengesLevels[127]} <br>
    #129 - ${challengesLevels[128]} <br>
    #130 - ${challengesLevels[129]} <br>
    #131 - ${challengesLevels[130]} <br>
    #132 - ${challengesLevels[131]} <br>
    #F - ${challengesLevels[132]} <br>`

    //
    level12.style.visibility="hidden";
    level11.style.visibility="hidden";
    level10.style.visibility="hidden";
    level9.style.visibility="hidden";
    level8.style.visibility="hidden";
    level7.style.visibility="hidden";
    level6.style.visibility="hidden";
    level5.style.visibility="hidden";
    level4.style.visibility="hidden";
    level3.style.visibility="hidden";
    level2.style.visibility="hidden";
    level1.style.visibility="hidden";
    //
}

function clickLevel11 (){
    
    eachLevelContent.style.visibility ="visible";
    levelsBackButton.style.visibility ="visible";

    eachLevelContent.innerHTML = `#134 - ${challengesLevels[133]} <br>
    #135 - ${challengesLevels[134]} <br>
    #136 - ${challengesLevels[135]} <br>
    #137 - ${challengesLevels[136]} <br>
    #138 - ${challengesLevels[137]} <br>
    #139- ${challengesLevels[138]} <br>
    #140- ${challengesLevels[139]} <br>
    #141 - ${challengesLevels[140]} <br>
    #142 - ${challengesLevels[141]} <br>
    #143- ${challengesLevels[142]} <br>
    #144- ${challengesLevels[143]} <br>
    #F- ${challengesLevels[144]} <br>`

    //
    level12.style.visibility="hidden";
    level11.style.visibility="hidden";
    level10.style.visibility="hidden";
    level9.style.visibility="hidden";
    level8.style.visibility="hidden";
    level7.style.visibility="hidden";
    level6.style.visibility="hidden";
    level5.style.visibility="hidden";
    level4.style.visibility="hidden";
    level3.style.visibility="hidden";
    level2.style.visibility="hidden";
    level1.style.visibility="hidden";
    //
}

function clickLevel12 (){
    
    eachLevelContent.style.visibility ="visible";
    levelsBackButton.style.visibility ="visible";

    eachLevelContent.innerHTML = `#146 - ${challengesLevels[145]} <br>
    #147 - ${challengesLevels[146]} <br>
    #148 - ${challengesLevels[147]} <br>
    #149 - ${challengesLevels[148]} <br>
    #150 - ${challengesLevels[149]} <br>
    #151 - ${challengesLevels[150]} <br>
    #152 - ${challengesLevels[151]} <br>
    #153 - ${challengesLevels[152]} <br>
    #154 - ${challengesLevels[153]} <br>
    #F - ${challengesLevels[154]} <br>`
    //
    level12.style.visibility="hidden";
    level11.style.visibility="hidden";
    level10.style.visibility="hidden";
    level9.style.visibility="hidden";
    level8.style.visibility="hidden";
    level7.style.visibility="hidden";
    level6.style.visibility="hidden";
    level5.style.visibility="hidden";
    level4.style.visibility="hidden";
    level3.style.visibility="hidden";
    level2.style.visibility="hidden";
    level1.style.visibility="hidden";
    //
}

/*##############################*/
/* WHEN LEVELS BUTTON IS CLICKED*/
/*##############################*/

function levelsClicked () {
    document.body.style.backgroundImage ="url('/resources/levelsBackground.gif')";
    //task Container
    tasks.style.visibility ="hidden";
    doneBtn.style.visibility="hidden";
    nextBtn.style.visibility="hidden";
    lateralLevelsButton.style.visibility ="hidden";
    lateral1Level.style.visibility ="hidden";
    checkFinalLevel.style.visibility="hidden";
    buttons.style.visibility ="hidden";
    //
    levels.style.visibility="visible";
    level1.style.visibility="visible";
    levelsBackButton.style.visibility ="visible";

    if(level12Complete){
        level12.style.visibility="visible";
        level11.style.visibility="visible";
        level10.style.visibility="visible";
        level9.style.visibility="visible";
        level8.style.visibility="visible";
        level7.style.visibility="visible";
        level6.style.visibility="visible";
        level5.style.visibility="visible";
        level4.style.visibility="visible";
        level3.style.visibility="visible";
        level2.style.visibility="visible";
    } else if (level11Complete) {
        level12.style.visibility="visible";
        level11.style.visibility="visible";
        level10.style.visibility="visible";
        level9.style.visibility="visible";
        level8.style.visibility="visible";
        level7.style.visibility="visible";
        level6.style.visibility="visible";
        level5.style.visibility="visible";
        level4.style.visibility="visible";
        level3.style.visibility="visible";
        level2.style.visibility="visible";
    } else if (level10Complete) {
        level11.style.visibility="visible";
        level10.style.visibility="visible";
        level9.style.visibility="visible";
        level8.style.visibility="visible";
        level7.style.visibility="visible";
        level6.style.visibility="visible";
        level5.style.visibility="visible";
        level4.style.visibility="visible";
        level3.style.visibility="visible";
        level2.style.visibility="visible";
    } else if (level9Complete) {
        level10.style.visibility="visible";
        level9.style.visibility="visible";
        level8.style.visibility="visible";
        level7.style.visibility="visible";
        level6.style.visibility="visible";
        level5.style.visibility="visible";
        level4.style.visibility="visible";
        level3.style.visibility="visible";
        level2.style.visibility="visible";
    } else if (level8Complete) {
        level9.style.visibility="visible";
        level8.style.visibility="visible";
        level7.style.visibility="visible";
        level6.style.visibility="visible";
        level5.style.visibility="visible";
        level4.style.visibility="visible";
        level3.style.visibility="visible";
        level2.style.visibility="visible";
    } else if (level7Complete) {
        level8.style.visibility="visible";
        level7.style.visibility="visible";
        level6.style.visibility="visible";
        level5.style.visibility="visible";
        level4.style.visibility="visible";
        level3.style.visibility="visible";
        level2.style.visibility="visible";
    } else if (level6Complete) {
        level7.style.visibility="visible";
        level6.style.visibility="visible";
        level5.style.visibility="visible";
        level4.style.visibility="visible";
        level3.style.visibility="visible";
        level2.style.visibility="visible";
    } else if (level5Complete) {
        level6.style.visibility="visible";
        level5.style.visibility="visible";
        level4.style.visibility="visible";
        level3.style.visibility="visible";
        level2.style.visibility="visible";
    } else if (level4Complete) {
        level5.style.visibility="visible";
        level4.style.visibility="visible";
        level3.style.visibility="visible";
        level2.style.visibility="visible";
    } else if (level3Complete) {
        level4.style.visibility="visible";
        level3.style.visibility="visible";
        level2.style.visibility="visible";
    } else if (level2Complete) {
        level3.style.visibility="visible";
        level2.style.visibility="visible";
    } else if (level1Complete) {
        level2.style.visibility="visible";
    }

    lateral1Level.style.visibility="hidden";
    lateral2Level.style.visibility="hidden";
    lateral3Level.style.visibility="hidden";
    lateral4Level.style.visibility="hidden";
    lateral5Level.style.visibility="hidden";
    lateral6Level.style.visibility="hidden";
    lateral7Level.style.visibility="hidden";
    lateral8Level.style.visibility="hidden";
    lateral9Level.style.visibility="hidden";
    lateral10Level.style.visibility="hidden";
    lateral11Level.style.visibility="hidden";
    lateral12Level.style.visibility="hidden";
}

/*##############################*/
/* LEVEL BACK BUTTON AND RESPECTIVE ACTIONS */
/*##############################*/

function levelsBackClicked () {

    if(eachLevelContent.style.visibility == "visible") {
        
        eachLevelContent.style.visibility = "hidden";
        levelsClicked();

    } else {
        document.body.style.backgroundImage ="url('/resources/menuBackground.gif')";
        tasks.style.visibility ="visible";
        doneBtn.style.visibility="visible";
        levels.style.visibility="hidden";
        buttons.style.visibility ="visible";
        levelsBackButton.style.visibility ="hidden";
        //
        level12.style.visibility="hidden";
        level11.style.visibility="hidden";
        level10.style.visibility="hidden";
        level9.style.visibility="hidden";
        level8.style.visibility="hidden";
        level7.style.visibility="hidden";
        level6.style.visibility="hidden";
        level5.style.visibility="hidden";
        level4.style.visibility="hidden";
        level3.style.visibility="hidden";
        level2.style.visibility="hidden";
        level1.style.visibility="hidden";
        //
        lateral1Level.style.visibility="visible";

        if(level12Complete){
            lateral12Level.style.visibility="visible";
            lateral11Level.style.visibility="visible";
            lateral10Level.style.visibility="visible";
            lateral9Level.style.visibility="visible";
            lateral8Level.style.visibility="visible";
            lateral7Level.style.visibility="visible";
            lateral6Level.style.visibility="visible";
            lateral5Level.style.visibility="visible";
            lateral4Level.style.visibility="visible";
            lateral3Level.style.visibility="visible";
            lateral2Level.style.visibility="visible";
        } else if (level11Complete) {
            lateral12Level.style.visibility="visible";
            lateral11Level.style.visibility="visible";
            lateral10Level.style.visibility="visible";
            lateral9Level.style.visibility="visible";
            lateral8Level.style.visibility="visible";
            lateral7Level.style.visibility="visible";
            lateral6Level.style.visibility="visible";
            lateral5Level.style.visibility="visible";
            lateral4Level.style.visibility="visible";
            lateral3Level.style.visibility="visible";
            lateral2Level.style.visibility="visible";
        } else if (level10Complete) {
            lateral11Level.style.visibility="visible";
            lateral10Level.style.visibility="visible";
            lateral9Level.style.visibility="visible";
            lateral8Level.style.visibility="visible";
            lateral7Level.style.visibility="visible";
            lateral6Level.style.visibility="visible";
            lateral5Level.style.visibility="visible";
            lateral4Level.style.visibility="visible";
            lateral3Level.style.visibility="visible";
            lateral2Level.style.visibility="visible";
        } else if (level9Complete) {
            lateral10Level.style.visibility="visible";
            lateral9Level.style.visibility="visible";
            lateral8Level.style.visibility="visible";
            lateral7Level.style.visibility="visible";
            lateral6Level.style.visibility="visible";
            lateral5Level.style.visibility="visible";
            lateral4Level.style.visibility="visible";
            lateral3Level.style.visibility="visible";
            lateral2Level.style.visibility="visible";
        } else if (level8Complete) {
            lateral9Level.style.visibility="visible";
            lateral8Level.style.visibility="visible";
            lateral7Level.style.visibility="visible";
            lateral6Level.style.visibility="visible";
            lateral5Level.style.visibility="visible";
            lateral4Level.style.visibility="visible";
            lateral3Level.style.visibility="visible";
            lateral2Level.style.visibility="visible";
        } else if (level7Complete) {
            lateral8Level.style.visibility="visible";
            lateral7Level.style.visibility="visible";
            lateral6Level.style.visibility="visible";
            lateral5Level.style.visibility="visible";
            lateral4Level.style.visibility="visible";
            lateral3Level.style.visibility="visible";
            lateral2Level.style.visibility="visible";
        } else if (level6Complete) {
            lateral7Level.style.visibility="visible";
            lateral6Level.style.visibility="visible";
            lateral5Level.style.visibility="visible";
            lateral4Level.style.visibility="visible";
            lateral3Level.style.visibility="visible";
            lateral2Level.style.visibility="visible";
        } else if (level5Complete) {
            lateral6Level.style.visibility="visible";
            lateral5Level.style.visibility="visible";
            lateral4Level.style.visibility="visible";
            lateral3Level.style.visibility="visible";
            lateral2Level.style.visibility="visible";
        } else if (level4Complete) {
            lateral5Level.style.visibility="visible";
            lateral4Level.style.visibility="visible";
            lateral3Level.style.visibility="visible";
            lateral2Level.style.visibility="visible";
        } else if (level3Complete) {
            lateral4Level.style.visibility="visible";
            lateral3Level.style.visibility="visible";
            lateral2Level.style.visibility="visible";
        } else if (level2Complete) {
            lateral3Level.style.visibility="visible";
            lateral2Level.style.visibility="visible";
            
        } else if (level1Complete) {
            lateral2Level.style.visibility="visible";
        }
    }
}

/*##############################*/
/* DIARY*/
/*##############################*/

function diaryClicked (){

    //IMAGE
    document.body.style.backgroundImage ="url('/resources/diaryBackground.gif')";
    // TASK CONTAINER
    tasks.style.visibility ="hidden";
    doneBtn.style.visibility="hidden";
    nextBtn.style.visibility="hidden";
    lateralLevelsButton.style.visibility ="hidden";
    lateral1Level.style.visibility ="hidden";
    checkFinalLevel.style.visibility="hidden";
    buttons.style.visibility ="hidden";
    //
    lateral1Level.style.visibility="hidden";
    lateral2Level.style.visibility="hidden";
    lateral3Level.style.visibility="hidden";
    lateral4Level.style.visibility="hidden";
    lateral5Level.style.visibility="hidden";
    lateral6Level.style.visibility="hidden";
    lateral7Level.style.visibility="hidden";
    lateral8Level.style.visibility="hidden";
    lateral9Level.style.visibility="hidden";
    lateral10Level.style.visibility="hidden";
    lateral11Level.style.visibility="hidden";
    lateral12Level.style.visibility="hidden";
    //
    //DIARY CONTAINER
    diary.style.visibility ="visible";
    diaryTitle.style.visibility ="visible";
    diarySubTitle.style.visibility ="visible";
    textBox.style.visibility ="visible";
    diaryBackButton.style.visibility ="visible";
    diarySaveButton.style.visibility ="visible";
    //
}

function diaryBackClicked (){

    diary.style.visibility ="hidden";
    diaryTitle.style.visibility ="hidden";
    diarySubTitle.style.visibility ="hidden";
    textBox.style.visibility ="hidden";
    diaryBackButton.style.visibility ="hidden";
    diarySaveButton.style.visibility ="hidden";
    levelsBackClicked();
}

//SAVING INPUT FROM TEXTAREA
function diarySaveClicked() {
    localStorage.setItem("textContent", textBox.value);
}

/*##############################*/
/* EXPECTATIONS */
/*##############################*/

function expectationsClicked (){
    //IMAGE
    document.body.style.backgroundImage ="url('/resources/expectationsBackground.gif')";
    // TASK CONTAINER
    tasks.style.visibility ="hidden";
    doneBtn.style.visibility="hidden";
    nextBtn.style.visibility="hidden";
    lateralLevelsButton.style.visibility ="hidden";
    lateral1Level.style.visibility ="hidden";
    checkFinalLevel.style.visibility="hidden";
    buttons.style.visibility ="hidden";
    //
    lateral1Level.style.visibility="hidden";
    lateral2Level.style.visibility="hidden";
    lateral3Level.style.visibility="hidden";
    lateral4Level.style.visibility="hidden";
    lateral5Level.style.visibility="hidden";
    lateral6Level.style.visibility="hidden";
    lateral7Level.style.visibility="hidden";
    lateral8Level.style.visibility="hidden";
    lateral9Level.style.visibility="hidden";
    lateral10Level.style.visibility="hidden";
    lateral11Level.style.visibility="hidden";
    lateral12Level.style.visibility="hidden";
    //
    expectations.style.visibility ="visible";
    expectationsTitle.style.visibility ="visible";
    expectationsInformation.style.visibility ="visible";
    expectationsBackButton.style.visibility ="visible";
    //    
    expectationsInformation.innerHTML = `Hello fellows! <br> <br>
    First of all I hope you enjoy the game, it was the first project, where I put a lot of dedication and research, certainly there will be much to improve, but in the end I am quite proud of the final product. <br>
    This project is basically about controlling fear and emotions that sometimes prevent us from taking certain attitudes and actions. That said, and being extremely necessary and important in our lives, I decided to make a progressive process that would help me get results in this field, where I will forcefully have to get out of my comfort zone and complete the tasks. Because I want to be better, I want to be successful in life, I want to have achievements, I want to have stories and not regrets. <br>
    Take initiative, the world out there is cold and cruel, there is no room for everyone, do you want to be someone? Stand out, differentiate yourself, improve yourself, conquer... <br> <br>
    What are you waiting for?`
}

function expectationsBackClicked (){
    expectations.style.visibility ="hidden";
    expectationsTitle.style.visibility ="hidden";
    expectationsInformation.style.visibility ="hidden";
    expectationsBackButton.style.visibility ="hidden";
    levelsBackClicked();
}

/*##############################*/
/* TEAM */
/*##############################*/

function teamClicked (){

    document.body.style.backgroundImage ="url('/resources/teamBackground.gif')";
    // TASK CONTAINER
    tasks.style.visibility ="hidden";
    doneBtn.style.visibility="hidden";
    nextBtn.style.visibility="hidden";
    lateralLevelsButton.style.visibility ="hidden";
    lateral1Level.style.visibility ="hidden";
    checkFinalLevel.style.visibility="hidden";
    buttons.style.visibility ="hidden";
    //
    lateral1Level.style.visibility="hidden";
    lateral2Level.style.visibility="hidden";
    lateral3Level.style.visibility="hidden";
    lateral4Level.style.visibility="hidden";
    lateral5Level.style.visibility="hidden";
    lateral6Level.style.visibility="hidden";
    lateral7Level.style.visibility="hidden";
    lateral8Level.style.visibility="hidden";
    lateral9Level.style.visibility="hidden";
    lateral10Level.style.visibility="hidden";
    lateral11Level.style.visibility="hidden";
    lateral12Level.style.visibility="hidden";
    //
    team.style.visibility ="visible";
    teamTitle.style.visibility ="visible";
    photo.style.visibility ="visible";
    description.style.visibility ="visible";
    teamBackButton.style.visibility ="visible";
    //
    description.innerHTML = `"This project was a huge mix of feelings, literally."`
    //
}

function teamBackClicked (){
    team.style.visibility ="hidden";
    teamTitle.style.visibility ="hidden";
    photo.style.visibility ="hidden";
    description.style.visibility ="hidden";
    teamBackButton.style.visibility ="hidden";
    levelsBackClicked();
}

/*##############################*/
/* SOUND */
/*##############################*/

function soundClicked () {

    if(soundOn) {
        audioElement.pause();
        soundButton.innerHTML = `SOUND: OFF`;
        soundOn = false;
    } else {
        audioElement.play();
        soundButton.innerHTML = `SOUND: ON`;
        soundOn = true;
    }
}

/*##############################*/
/*##############################*/
/*##############################*/
/* EVENT LISTENERS*/
/*##############################*/
/*##############################*/
/*##############################*/

/*##############################*/
/* FIRST VIEW*/
/*##############################*/

nextBtn.addEventListener("click", nextTaskAction);
doneBtn.addEventListener("click", isDone);

//lateral1Level.addEventListener("click", clickOnLateralLevel1);
lateral2Level.addEventListener("click", clickOnLateralLevel2);
lateral3Level.addEventListener("click", clickOnLateralLevel3);
lateral4Level.addEventListener("click", clickOnLateralLevel4);
lateral5Level.addEventListener("click", clickOnLateralLevel5);
lateral6Level.addEventListener("click", clickOnLateralLevel6);
lateral7Level.addEventListener("click", clickOnLateralLevel7);
lateral8Level.addEventListener("click", clickOnLateralLevel8);
lateral9Level.addEventListener("click", clickOnLateralLevel9);
lateral10Level.addEventListener("click", clickOnLateralLevel10);
lateral11Level.addEventListener("click", clickOnLateralLevel11);
lateral12Level.addEventListener("click", clickOnLateralLevel12);

/*##############################*/
/* LEVELS*/
/*##############################*/

level1.addEventListener("click", clickLevel1);
level2.addEventListener("click", clickLevel2);
level3.addEventListener("click", clickLevel3);
level4.addEventListener("click", clickLevel4);
level5.addEventListener("click", clickLevel5);
level6.addEventListener("click", clickLevel6);
level7.addEventListener("click", clickLevel7);
level8.addEventListener("click", clickLevel8);
level9.addEventListener("click", clickLevel9);
level10.addEventListener("click", clickLevel10);
level11.addEventListener("click", clickLevel11);
level12.addEventListener("click", clickLevel12);

levelsButton.addEventListener("click", levelsClicked);
levelsBackButton.addEventListener("click", levelsBackClicked);

/*##############################*/
/* DIARY */
/*##############################*/

diaryButton.addEventListener("click", diaryClicked);
diaryBackButton.addEventListener("click",diaryBackClicked);
diarySaveButton.addEventListener("click", diarySaveClicked);

/*##############################*/
/* EXPECTATIONS */
/*##############################*/

expectationsButton.addEventListener("click",expectationsClicked);
expectationsBackButton.addEventListener("click",expectationsBackClicked);

/*##############################*/
/* TEAM */
/*##############################*/

teamButton.addEventListener("click",teamClicked);
teamBackButton.addEventListener("click",teamBackClicked);

/*##############################*/
/* SOUND */
/*##############################*/

soundButton.addEventListener("click", soundClicked);

/*##############################*/
/*##############################*/
/*##############################*/
/* FIRST VIEW*/
/*##############################*/
/*##############################*/
/*##############################*/

lateral1Level.style.visibility="visible";

localStorage.getItem("couterValue");

//LOCAL STORAGE
 if(localStorage.getItem("level12")) {
    level12Complete = true
    taskNumber();
    getTaskContent();
    levelsBackClicked();
    lateral12Level.style.backgroundColor ="green";
    lateral12Level.style.color ="white";
    lateral12Level.style.cursor = "default";
        lateral11Level.style.backgroundColor ="green";
    lateral11Level.style.color ="white";
    lateral11Level.style.cursor = "default";
    lateral10Level.style.backgroundColor ="green";
    lateral10Level.style.color ="white";
    lateral10Level.style.cursor = "default";
    lateral9Level.style.backgroundColor ="green";
    lateral9Level.style.color ="white";
    lateral9Level.style.cursor = "default";
    lateral8Level.style.backgroundColor ="green";
    lateral8Level.style.color ="white";
    lateral8Level.style.cursor = "default";
    lateral7Level.style.backgroundColor ="green";
    lateral7Level.style.color ="white";
    lateral7Level.style.cursor = "default";
    lateral6Level.style.backgroundColor ="green";
    lateral6Level.style.color ="white";
    lateral6Level.style.cursor = "default";
    lateral5Level.style.backgroundColor ="green";
    lateral5Level.style.color ="white";
    lateral5Level.style.cursor = "default";
    lateral4Level.style.backgroundColor ="green";
    lateral4Level.style.color ="white";
    lateral4Level.style.cursor = "default";
    lateral3Level.style.backgroundColor ="green";
    lateral3Level.style.color ="white";
    lateral3Level.style.cursor = "default";
    lateral2Level.style.backgroundColor ="green";
    lateral2Level.style.color ="white";
    lateral2Level.style.cursor = "default";
    lateral1Level.style.backgroundColor ="green";
    lateral1Level.style.color ="white";
    lateral1Level.style.cursor = "default";
 } else if (localStorage.getItem("level11")) {
    level11Complete = true
    taskNumber();
    getTaskContent();
    levelsBackClicked();
    lateral11Level.style.backgroundColor ="green";
    lateral11Level.style.color ="white";
    lateral11Level.style.cursor = "default";
    lateral10Level.style.backgroundColor ="green";
    lateral10Level.style.color ="white";
    lateral10Level.style.cursor = "default";
    lateral9Level.style.backgroundColor ="green";
    lateral9Level.style.color ="white";
    lateral9Level.style.cursor = "default";
    lateral8Level.style.backgroundColor ="green";
    lateral8Level.style.color ="white";
    lateral8Level.style.cursor = "default";
    lateral7Level.style.backgroundColor ="green";
    lateral7Level.style.color ="white";
    lateral7Level.style.cursor = "default";
    lateral6Level.style.backgroundColor ="green";
    lateral6Level.style.color ="white";
    lateral6Level.style.cursor = "default";
    lateral5Level.style.backgroundColor ="green";
    lateral5Level.style.color ="white";
    lateral5Level.style.cursor = "default";
    lateral4Level.style.backgroundColor ="green";
    lateral4Level.style.color ="white";
    lateral4Level.style.cursor = "default";
    lateral3Level.style.backgroundColor ="green";
    lateral3Level.style.color ="white";
    lateral3Level.style.cursor = "default";
    lateral2Level.style.backgroundColor ="green";
    lateral2Level.style.color ="white";
    lateral2Level.style.cursor = "default";
    lateral1Level.style.backgroundColor ="green";
    lateral1Level.style.color ="white";
    lateral1Level.style.cursor = "default";
 } else if (localStorage.getItem("level10")) {
    level10Complete = true
    taskNumber();
    getTaskContent();
    levelsBackClicked();
    lateral10Level.style.backgroundColor ="green";
    lateral10Level.style.color ="white";
    lateral10Level.style.cursor = "default";
    lateral9Level.style.backgroundColor ="green";
    lateral9Level.style.color ="white";
    lateral9Level.style.cursor = "default";
    lateral8Level.style.backgroundColor ="green";
    lateral8Level.style.color ="white";
    lateral8Level.style.cursor = "default";
    lateral7Level.style.backgroundColor ="green";
    lateral7Level.style.color ="white";
    lateral7Level.style.cursor = "default";
    lateral6Level.style.backgroundColor ="green";
    lateral6Level.style.color ="white";
    lateral6Level.style.cursor = "default";
    lateral5Level.style.backgroundColor ="green";
    lateral5Level.style.color ="white";
    lateral5Level.style.cursor = "default";
    lateral4Level.style.backgroundColor ="green";
    lateral4Level.style.color ="white";
    lateral4Level.style.cursor = "default";
    lateral3Level.style.backgroundColor ="green";
    lateral3Level.style.color ="white";
    lateral3Level.style.cursor = "default";
    lateral2Level.style.backgroundColor ="green";
    lateral2Level.style.color ="white";
    lateral2Level.style.cursor = "default";
    lateral1Level.style.backgroundColor ="green";
    lateral1Level.style.color ="white";
    lateral1Level.style.cursor = "default";
 } else if (localStorage.getItem("level9")) {
    level9Complete = true
    taskNumber();
    getTaskContent();
    levelsBackClicked();
    lateral9Level.style.backgroundColor ="green";
    lateral9Level.style.color ="white";
    lateral9Level.style.cursor = "default";
    lateral8Level.style.backgroundColor ="green";
    lateral8Level.style.color ="white";
    lateral8Level.style.cursor = "default";
    lateral7Level.style.backgroundColor ="green";
    lateral7Level.style.color ="white";
    lateral7Level.style.cursor = "default";
    lateral6Level.style.backgroundColor ="green";
    lateral6Level.style.color ="white";
    lateral6Level.style.cursor = "default";
    lateral5Level.style.backgroundColor ="green";
    lateral5Level.style.color ="white";
    lateral5Level.style.cursor = "default";
    lateral4Level.style.backgroundColor ="green";
    lateral4Level.style.color ="white";
    lateral4Level.style.cursor = "default";
    lateral3Level.style.backgroundColor ="green";
    lateral3Level.style.color ="white";
    lateral3Level.style.cursor = "default";
    lateral2Level.style.backgroundColor ="green";
    lateral2Level.style.color ="white";
    lateral2Level.style.cursor = "default";
    lateral1Level.style.backgroundColor ="green";
    lateral1Level.style.color ="white";
    lateral1Level.style.cursor = "default";
 } else if (localStorage.getItem("level8")) {
    level8Complete = true
    taskNumber();
    getTaskContent();
    levelsBackClicked();
    lateral8Level.style.backgroundColor ="green";
    lateral8Level.style.color ="white";
    lateral8Level.style.cursor = "default";
    lateral7Level.style.backgroundColor ="green";
    lateral7Level.style.color ="white";
    lateral7Level.style.cursor = "default";
    lateral6Level.style.backgroundColor ="green";
    lateral6Level.style.color ="white";
    lateral6Level.style.cursor = "default";
    lateral5Level.style.backgroundColor ="green";
    lateral5Level.style.color ="white";
    lateral5Level.style.cursor = "default";
    lateral4Level.style.backgroundColor ="green";
    lateral4Level.style.color ="white";
    lateral4Level.style.cursor = "default";
    lateral3Level.style.backgroundColor ="green";
    lateral3Level.style.color ="white";
    lateral3Level.style.cursor = "default";
    lateral2Level.style.backgroundColor ="green";
    lateral2Level.style.color ="white";
    lateral2Level.style.cursor = "default";
    lateral1Level.style.backgroundColor ="green";
    lateral1Level.style.color ="white";
    lateral1Level.style.cursor = "default";
 } else if (localStorage.getItem("level7")) {
    level7Complete = true
    taskNumber();
    getTaskContent();
    levelsBackClicked();
    lateral7Level.style.backgroundColor ="green";
    lateral7Level.style.color ="white";
    lateral7Level.style.cursor = "default";
    lateral6Level.style.backgroundColor ="green";
    lateral6Level.style.color ="white";
    lateral6Level.style.cursor = "default";
    lateral5Level.style.backgroundColor ="green";
    lateral5Level.style.color ="white";
    lateral5Level.style.cursor = "default";
    lateral4Level.style.backgroundColor ="green";
    lateral4Level.style.color ="white";
    lateral4Level.style.cursor = "default";
    lateral3Level.style.backgroundColor ="green";
    lateral3Level.style.color ="white";
    lateral3Level.style.cursor = "default";
    lateral2Level.style.backgroundColor ="green";
    lateral2Level.style.color ="white";
    lateral2Level.style.cursor = "default";
    lateral1Level.style.backgroundColor ="green";
    lateral1Level.style.color ="white";
    lateral1Level.style.cursor = "default";
 } else if (localStorage.getItem("level6")) {
    level6Complete = true
    taskNumber();
    getTaskContent();
    levelsBackClicked();
    lateral6Level.style.backgroundColor ="green";
    lateral6Level.style.color ="white";
    lateral6Level.style.cursor = "default";
    lateral5Level.style.backgroundColor ="green";
    lateral5Level.style.color ="white";
    lateral5Level.style.cursor = "default";
    lateral4Level.style.backgroundColor ="green";
    lateral4Level.style.color ="white";
    lateral4Level.style.cursor = "default";
    lateral3Level.style.backgroundColor ="green";
    lateral3Level.style.color ="white";
    lateral3Level.style.cursor = "default";
    lateral2Level.style.backgroundColor ="green";
    lateral2Level.style.color ="white";
    lateral2Level.style.cursor = "default";
    lateral1Level.style.backgroundColor ="green";
    lateral1Level.style.color ="white";
    lateral1Level.style.cursor = "default";
 } else if (localStorage.getItem("level5")) {
    level5Complete = true
    taskNumber();
    getTaskContent();
    levelsBackClicked();
    lateral5Level.style.backgroundColor ="green";
    lateral5Level.style.color ="white";
    lateral5Level.style.cursor = "default";
    lateral4Level.style.backgroundColor ="green";
    lateral4Level.style.color ="white";
    lateral4Level.style.cursor = "default";
    lateral3Level.style.backgroundColor ="green";
    lateral3Level.style.color ="white";
    lateral3Level.style.cursor = "default";
    lateral2Level.style.backgroundColor ="green";
    lateral2Level.style.color ="white";
    lateral2Level.style.cursor = "default";
    lateral1Level.style.backgroundColor ="green";
    lateral1Level.style.color ="white";
    lateral1Level.style.cursor = "default";
 } else if (localStorage.getItem("level4")) {
    level4Complete = true
    taskNumber();
    getTaskContent();
    levelsBackClicked();
    lateral4Level.style.backgroundColor ="green";
    lateral4Level.style.color ="white";
    lateral4Level.style.cursor = "default";
    lateral3Level.style.backgroundColor ="green";
    lateral3Level.style.color ="white";
    lateral3Level.style.cursor = "default";
    lateral2Level.style.backgroundColor ="green";
    lateral2Level.style.color ="white";
    lateral2Level.style.cursor = "default";
    lateral1Level.style.backgroundColor ="green";
    lateral1Level.style.color ="white";
    lateral1Level.style.cursor = "default";
 } else if (localStorage.getItem("level3")) {
    level3Complete = true
    taskNumber();
    getTaskContent();
    levelsBackClicked();
    lateral3Level.style.backgroundColor ="green";
    lateral3Level.style.color ="white";
    lateral3Level.style.cursor = "default";
    lateral2Level.style.backgroundColor ="green";
    lateral2Level.style.color ="white";
    lateral2Level.style.cursor = "default";
    lateral1Level.style.backgroundColor ="green";
    lateral1Level.style.color ="white";
    lateral1Level.style.cursor = "default";
 } else if (localStorage.getItem("level2")) {
    level2Complete = true
    taskNumber();
    getTaskContent();
    levelsBackClicked();
    lateral2Level.style.backgroundColor ="green";
    lateral2Level.style.color ="white";
    lateral2Level.style.cursor = "default";
    lateral1Level.style.backgroundColor ="green";
    lateral1Level.style.color ="white";
    lateral1Level.style.cursor = "default";
 } else if (localStorage.getItem("level1")) {
    level1Complete = true
    taskNumber();
    getTaskContent();
    levelsBackClicked();
    lateral1Level.style.backgroundColor ="green";
    lateral1Level.style.color ="white";
    lateral1Level.style.cursor = "default";
 }


if (counter = 0) {
    tasksContent.innerHTML = `${challengesLevels[0]}`;
    task.innerHTML = `TASK#${counter+1}`;
 } else {  
    counter = Number(localStorage.getItem("couterValue"));
    taskNumber();
    getTaskContent();
 }

lateral1Level.disabled = true; 

console.log(localStorage.getItem("lateral1"));

if (localStorage.getItem("lateral12")) {
    lateral12Level.disabled = true;
    lateral11Level.disabled = true; 
    lateral10Level.disabled = true;
    lateral9Level.disabled = true;
    lateral8Level.disabled = true;
    lateral7Level.disabled = true;
    lateral6Level.disabled = true;
    lateral5Level.disabled = true;
    lateral4Level.disabled = true;
    lateral3Level.disabled = true;
    lateral2Level.disabled = true;
} else if (localStorage.getItem("lateral11")) {
    lateral11Level.disabled = true; 
    lateral10Level.disabled = true;
    lateral9Level.disabled = true;
    lateral8Level.disabled = true;
    lateral7Level.disabled = true;
    lateral6Level.disabled = true;
    lateral5Level.disabled = true;
    lateral4Level.disabled = true;
    lateral3Level.disabled = true;
    lateral2Level.disabled = true;
} else if (localStorage.getItem("lateral10")) {
    lateral10Level.disabled = true;
    lateral9Level.disabled = true;
    lateral8Level.disabled = true;
    lateral7Level.disabled = true;
    lateral6Level.disabled = true;
    lateral5Level.disabled = true;
    lateral4Level.disabled = true;
    lateral3Level.disabled = true;
    lateral2Level.disabled = true;
} else if (localStorage.getItem("lateral9")) {
    lateral9Level.disabled = true;
    lateral8Level.disabled = true;
    lateral7Level.disabled = true;
    lateral6Level.disabled = true;
    lateral5Level.disabled = true;
    lateral4Level.disabled = true;
    lateral3Level.disabled = true;
    lateral2Level.disabled = true;
} else if (localStorage.getItem("lateral8")) {
    lateral8Level.disabled = true;
    lateral7Level.disabled = true;
    lateral6Level.disabled = true;
    lateral5Level.disabled = true;
    lateral4Level.disabled = true;
    lateral3Level.disabled = true;
    lateral2Level.disabled = true;
} else if (localStorage.getItem("lateral7")) {
    lateral7Level.disabled = true;
    lateral6Level.disabled = true;
    lateral5Level.disabled = true;
    lateral4Level.disabled = true;
    lateral3Level.disabled = true;
    lateral2Level.disabled = true;
} else if (localStorage.getItem("lateral6")) {
    lateral6Level.disabled = true;
    lateral5Level.disabled = true;
    lateral4Level.disabled = true;
    lateral3Level.disabled = true;
    lateral2Level.disabled = true;
} else if (localStorage.getItem("lateral5")) {
    lateral5Level.disabled = true;
    lateral4Level.disabled = true;
    lateral3Level.disabled = true;
    lateral2Level.disabled = true;
} else if (localStorage.getItem("lateral4")) {
    lateral4Level.disabled = true;
    lateral3Level.disabled = true;
    lateral2Level.disabled = true;
} else if (localStorage.getItem("lateral3")) {
    lateral3Level.disabled = true;
    lateral2Level.disabled = true;
} else if (localStorage.getItem("lateral2")) {
    lateral2Level.disabled = true;
}

textBox.value = localStorage.getItem("textContent");

//AUDIO
audioElement.setAttribute('src', '/sound/gameSoundtrack.mp3');
audioElement.setAttribute('autoplay', 'autoplay');
audioElement.pause(); 

/*
localStorage.removeItem("level1");
localStorage.removeItem("level2");
localStorage.removeItem("level3");
localStorage.removeItem("level4");
localStorage.removeItem("level5");
localStorage.removeItem("level6");
localStorage.removeItem("level7");
localStorage.removeItem("level8");
localStorage.removeItem("level9");
localStorage.removeItem("level10");
localStorage.removeItem("level11");
localStorage.removeItem("level12");
localStorage.removeItem("lateral1");
localStorage.removeItem("lateral2");
localStorage.removeItem("lateral3");
localStorage.removeItem("lateral4");
localStorage.removeItem("lateral5");
localStorage.removeItem("lateral6");
localStorage.removeItem("lateral7");
localStorage.removeItem("lateral8");
localStorage.removeItem("lateral9");
localStorage.removeItem("lateral10");
localStorage.removeItem("lateral11");
localStorage.removeItem("lateral12");
*/


