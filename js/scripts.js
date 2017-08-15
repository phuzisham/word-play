$(document).ready(function(){
  $("#sentence").submit(function(event){
    event.preventDefault();
    var words = $("#userSentence").val().split(" ");
    
    var newWords = words.filter(function(word) {
        return word.length > 3;
    });

    newWords = newWords.reverse().join(' ');
    alert(newWords);
  });
});
