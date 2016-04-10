// JavaScript source code


var sentence = " ! tests code do us making keeps Cameron   ";
sentence = sentence.replace(/^\s+|\s+$/g, " "); // Trim
sentence = sentence.replace(/\s+/g, " "); // Consolidate

var words = sentence.split(" "); // To array
words = words.reverse(); // Invert word order
sentence = words.join(" "); // Store reversed into sentence

alert(sentence); // Test final result! Click to run ->
console.log(alert);