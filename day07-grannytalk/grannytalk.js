// Warmup exercise Wk2 Tuesday - Dave
// Granny Talk

/*
Write a function 'grannyTalk' what takes a question as an argument and returns a string as her response.

If you talk to Granny normally, she'll reply "SPEAK UP SONNY JIM"

If you talk to her in ALL CAPS, she'll reply "NO, NOT SINCE 1945"

The year will be a random year between 1930 and 1950.

If you say "BYE" to her she'll reply "What's that honey, I didn't hear you.."

bonus: write an additional function 'grandpaTalk' that when called, will call granny for you and interpret her responses incorrectly by swapping vowels randomly in the words of her responses.

sample output of grandpaTalk:

// NO, NOT SINCE incorrect year // whats that sunny
*/


var randomYear = function(min,max){
    return Math.floor(Math.random() * (max - min +1) + min);
}

var randomVowel = function() {
    var vowel = 'aeiou'
    var i = Math.floor(Math.random()*5);
    return vowel[i];
}

var grannyTalk = function(question){
    console.log('Hey granny: ' + question)
    if(question.toUpperCase().includes("BYE")){
        return "What's that honey, I didn't hear you..."
    } else if (question === question.toUpperCase()) {
        return "NO, NOT SINCE " + randomYear(1930, 1950);
    } else {
        return "SPEAK UP";
    } 
}

var deafEars = function(string) {
    var jumbled = ""
    for (i=0; i<string.length; i++) {
        var x = string[i].toLowerCase();
        if (x=='a' || x=='e' || x=='i' || x=='o' || x=='u') {
            jumbled = jumbled + randomVowel();
        } else {
            jumbled = jumbled + x;
        }
    }
    // also needs to get the wrong year
    return jumbled;
}

var grandpaTalk = function(question){
    console.log('Hey Grandpa: ' + question);
    console.log('...Hold on, let me ask Granny...')
    var response = grannyTalk(question);
    var year = "/\d/g";
    // if contains a year then scramble the year (not built yet)
    if (response.indexOf(year) > 0){
        return 'contains a year';
    } else {
        return 'She said ' + deafEars(response);
    }

}

var question1 = "How's the weather Gran?";
var question2 = "I SAID HOW'S THE WEATHER!"
var question3 = "bye"
var question4 = "BYE!"

console.log(grannyTalk(question2));
console.log(grandpaTalk(question2));