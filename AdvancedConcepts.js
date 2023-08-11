// // using an interator //

// const obj = {
//   [Symbol.iterator]: function () {
//     let step = 0;
//     const iterator = {
//       next: function () {
//         step++;
//         if (step === 1) {
//           return { value: "yes", done: false };
//         } else if (step === 2) {
//           return { value: "please", done: false };
//         }
//         return { value: undefined, done: true };
//       },
//     };
//     return iterator;
//   },
// };

// for (const word of obj) {
//   console.log(word);
// }

// // using a generator //

// function* generatorFunction() {
//   yield "no";
//   yield "thank you";
// }

// const generatorObj = generatorFunction();

// for (const word of generatorObj) {
//   console.log(word);
// }
