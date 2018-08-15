//future variables below:

// var vowels = /[aeiou]/
// var nonAlpha = /[^abcdefghijklmnopqrstuvwxyz]/i
// var strings = $("#input").val();


$(document).ready(function() {
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var capVowels =/[aeiou]/gi
    var baseInput = $("#userInput").val();
    var vowelCount = baseInput.match(capVowels).length;
    alert(vowelCount);
  });
});
