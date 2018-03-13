export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  return this.body.split(" ").length;
};

Entry.prototype.vowelCount = function() {
  var vowels = ['a','e','i','o','u'];
  var lower = this.body.toLowerCase();
  var letters = lower.split("");
  var vowelNum = 0;
  letters.forEach(function(element) {
    if (vowels.includes(element)) {
      ++vowelNum;
    }
  });
  return vowelNum;
};

Entry.prototype.consCount = function() {
  var vowels = ['a','e','i','o','u'];
  var lower = this.body.toLowerCase();
  var letters = lower.split("");
  var consNum = 0;
  letters.forEach(function(element) {
    if (!vowels.includes(element) && /[a-z]/.test(element))
    {
      ++consNum;
    }
  });
  return consNum;
};

Entry.prototype.getTeaser = function() {
  var sentences = this.body.split(". ");
  var firstSentence = sentences[0];
  if (firstSentence.split(" ").length > 8)
  {
    firstSentence = firstSentence.split(" ").slice(0, 8).join(" ") + "...";
  }
  return firstSentence;
}
