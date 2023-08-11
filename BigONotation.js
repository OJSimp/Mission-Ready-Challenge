// --- Fibonacci Sequence --- //

const fibIttoerate = document.getElementById("fibonacci");
const fibGenearateButton = document.getElementById("fibGenerate");
const fibAnswerContainer = document.getElementById("fibonacci-answer");

fibGenearateButton.addEventListener("click", () => {
  const fibIndex = fibIttoerate.value;

  // get the two proceeding numbers and add them together in an loop

  const fibonacciSequence = [0, 1]; // Start with the first two Fibonacci numbers

  for (let i = 2; i < fibIndex; i++) {
    const nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextNumber);
  }
  updateFibonacci(fibonacciSequence);
});

// Big - O = O(n)

function updateFibonacci(fibonacciSequence) {
  fibAnswerContainer.innerHTML = "";
  fibonacciSequence.forEach((number) => {
    console.log(number);
    const fibAnswer = document.createElement("span");
    fibAnswer.textContent = number + " ";
    fibAnswerContainer.appendChild(fibAnswer);
  });
}

// Big - O = O(n^2)

// --- Factorial of a Number --- //

const factGenearateButton = document.getElementById("factGenerate");
const factNumber = document.getElementById("factorial");
const factAnswerContainer = document.getElementById("factorial-answer");

factGenearateButton.addEventListener("click", () => {
  let n = factNumber.value;

  let factor = 1;
  for (i = 2; i <= n; i++) {
    factor = factor * i;
  }

  updateFactorial(factor);
});

// Big - O = O(n)

const updateFactorial = (factor) => {
  factAnswerContainer.innerHTML = "";

  const factAnswer = document.createElement("span");
  factAnswer.textContent = factor;

  factAnswerContainer.appendChild(factAnswer);
};

// --- Prime Number --- //
