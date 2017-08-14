$(document).ready(function(){
  $("#sentence").submit(function(event){
    event.preventDefault();
    var words = $("#userSentence").val().split(" ");

    var newWords = words.map(function(word) {
      if (word.length > 3) {
        return word;
      }
    });

    newWords = newWords.filter(Boolean).reverse().join(' ');
    alert(newWords);
  });
});
