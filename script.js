// Question 1 - vowel and consonant counter
function countChars(str) {
  let vowels = 0;
  let spaces = 0;
  let consonants = 0;
  const vowArray = ['a', 'e', 'i', 'o', 'u'];
  str = str.toLowerCase().split('');
  console.log(str);
  for (const i in str) {
    if (vowArray.includes(str[i])) {
      vowels++;
    } else if (str[i] === ' ') {
      spaces++;
    } else {
      consonants++;
    }
  }
  console.log(vowels);
  console.log(spaces);
  console.log(consonants);
}
countChars('Testing');

//  Question 2 - palindrome identifier
// grab last digit and move it to front of new string, then drop it from temp
function palindromeIdentifier() {
  const inputNum = document.querySelector('#palindromeform').valueAsNumber;
  let reversedNum = 0;
  let tempNum = inputNum;
  while (tempNum != 0) {
    reversedNum = reversedNum * 10 + (tempNum % 10);
    tempNum = Math.floor(tempNum / 10);
  }
  if (inputNum === reversedNum) {
    document.querySelector('#palindromeResult').textContent =
      'This is a palindrome!';
  } else {
    document.querySelector('#palindromeResult').textContent =
      'This is not a palindrome!';
  }
}

// Question 3 - tip calculator
function tipCalc() {
  let subtotal = document.querySelector('#subtotalEntry').value;
  const gratuityRate = document.querySelector('#gratuityEntry').value;
  const gratuity = (gratuityRate / 100) * subtotal;
  const total = gratuity + subtotal * 1;
  subtotal = subtotal * 1 + 0;
  document.querySelector('#subtotal-display').textContent = subtotal;
  document.querySelector('#gratuity-display').textContent = gratuity;
  document.querySelector('#total-display').textContent = total;
}
