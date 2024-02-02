
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("find-longest-word").addEventListener("click", function() {
    chrome.tabs.executeScript({code: "var longestWord = ''; var regex = /[a-zA-Z]+/g; var text = document.body.innerText; var words = text.match(regex); for(var i=0; i < words.length; i++) { if(words[i].length > longestWord.length) { longestWord = words[i]; } } longestWord;"}, function(result) {
      var longestWord = result[0];
      var wordLength = longestWord.length;
      var output = longestWord + " (" + wordLength + " letters)";
      document.getElementById("result").innerHTML = output;
      highlightVar(longestWord);
    });
  });
});
