import { Entry } from './journal';
import './styles.css';

$(document).ready(function() {
  $('#entry-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var entry = new Entry(title, body);
    $('#entries').append("<h2>" + entry.title + "</h2>");
    $('#entries').append("<p>" + entry.firstSentence() + "...</p>");
    $('#entries').append("<p>" + entry.wordCount() + " words, " + entry.vowelCount() + " vowels, " + entry.consCount() + " consonants.</p>");
  });
});
