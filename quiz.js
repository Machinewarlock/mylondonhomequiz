var questionNumber = 1;
var score = 0;

function showQuestion(question) {
  $('p').hide();
  // does the paragraph have a length greater than zero
  // i.e. does it exist?!
  if ($("p:nth-of-type("+ question + ")").length > 0){
    // show it if it does
    $("p:nth-of-type("+ question + ")").show();
  } else {
    // show the paragraph with an id of final
    $("#final").show();
  }
}

$('span').click(function() {
  if ($(this).hasClass("correct")) {
    score++;
  }
  $('.score').html(score);
  questionNumber++;
  showQuestion(questionNumber); // load the next question
});

showQuestion(questionNumber);

$.ajax({
  url: "https://api.forecast.io/forecast/004c891d3227671408bc5f081431dee0/51.507351,-0.127758",
  jsonp: "callback",
  dataType: "jsonp",
  success: function(data) {
    $('#weather').html( "It looks like it's " + data.currently.summary + " in London! Enjoy the quiz!"  );
  }
});

if (data.currently.precipType == 'rain') {
  $('#weather').html( "It looks like it might be raining in London - all the more reason to be trying my quiz!"  );
} else {
    $('#weather').html( "It looks like it's " + data.currently.summary + " in London! Enjoy the quiz!");
}
