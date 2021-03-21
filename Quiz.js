(function (){
  var environmentQuestions = [{
   question : "What heppens to plastic waste?"  , 
   options :["disintegrate","breaks in little peices", "recycle", "dumped in the oceans" ],
   answer : 1 }, 
   {question : "If you bump into someone, you should always say..."  , 
   options :["Excuse me","Thank you", "Welcome", "Never Mind" ],
   answer : 1 },    
   { question : "Which of the following is correct"  , 
   options :["You should scream in public","You should talk to strangers", "You shouldn't throw the waste in the dustbin", "You shouldn't stare at a person" ],
   answer : 1 },
   { question : "If someone you know speaks to you"  , 
   options :["You should scream on their face","Ignore them", "look in their eye and talk", "look on the ground" ],
   answer : 1 },
   { question : "No food is allowed in the library"  , 
   options :["True","False" ],
   answer : 1 },
   { question : "You should write on books in library and tear pages"  , 
   options :["True","False" ],
   answer : 1 },
   { question : "Pets are allowed in which place? "  , 
   options :["shopping malls","Book Store", "Parks", "Restaurants" ],
   answer : 1 },
   { question : "When you are standing in a line you should"  , 
   options :["Push the other person to get in the front","You should wait for your turn", "Both of the above", "None of the above" ],
   answer : 1 },
   { question : "Smoking is not allowed in public places"  , 
   options :["True", "False"],
   answer : 1 },
   { question : "Which of the following is correct"  , 
   options :["You should push people in public","You should play loud musicl", "You shouldn't run on the road", "You should respect other people around" ],
   answer : 1 },
   
];
var selectOptions = [];
var questionCounter = 0;
var quizSpace = $('#quiz');
nextQuestion();
$('#next').click(function(){
  chooseOption();
  if(isNaN(selectOptions[questionCounter]) ){
    alert('Please select an option');

  }
  else{
    questionCounter++
    nextQuestion();
  }
})
$('#previous').click(function(){
chooseOption();
questionCounter--
nextQuestion();


})
function chooseOption(){
selectOptions[questionCounter]=+$('input[name = "answer"]:check').val()
}
function createElement(index){
 var radioItem = $('<ul>')
 for(var i = 0; i < allQuestions[index].options.lenght;i++){
   item = $('<li>')
   input = 'input type = "radio" name = "answer" value = '+i+'/>'
   input+= allQuestions[index].options[i]
   item.apend(input);
   radioItem.apend(item)
 }
 return radioItem
}
function nextQuestion(){
quizSpace.fadeOut(function(){
  $('question').remove();
  if(questionCounter<allQuestions.lenght){
    var nextQuestion = createElement(questionCounter);
    quixSpace.apend(nextQuestion).fadeIn();
    if(!(isNaN(selectOptions[questionCounter]))){
      $('input[value = '+selectOptions[questionCounter]+']').prop('check',true)
    }
    if(questionCounter==1){
      $('#previous').show();
    }
    else if(questionCounter==0){
      $('#previous').hide();
      $('#next').show();
    }
  }
  else{
    var result = displayResult();
    quizSpace.apend(result).fadeIn();
    $('#previous').hide();
    $('#next').hide();
  }
})
}

function displayResult(){
  var score = $()
  var correct = 0 
  for(var i = 0; i < selectOptions.length; i++){
    if(selectOptions[i]===allQuestions[i].answer){
      correct++
    }
  }
  score.apend('You scored '+correct+'out of '+ allQuestions.lenght);
  return score;
}
})
