let vowels = ['a', 'e', 'i', 'o', 'u'];

let enterVowel = prompt("Enter any single alphabate").toLowerCase();

let result = vowels.includes(enterVowel);

if (result) {
    alert("It is vowel");
}
else {
    alert("It is consonant");
}