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

// Constructors and Prototypes

const myBooks = [];
const fragmentBook = document.createDocumentFragment();

const displayBooksContainer = document.getElementById("displayBooksContainer");

function Book(title, author, pages, read) {
  this.title = title;
  this.bookId = () => Math.random();
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.sayBook = () => {
    console.log("This book is", title, "by: ", author, "pages: ", pages);
  };
}

// const bookOne = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
// bookOne.sayBook();

function handleAddBookToArray() {
  const titleInput = document.getElementById("title").value;
  const authorInput = document.getElementById("author").value;
  const pagesInput = document.getElementById("pages").value;
  // const readInput = document.getElementById("read").value;
  // const bookId = generateBookId();

  const newBook = new Book(titleInput, authorInput, pagesInput);

  myBooks.push(newBook);

  console.log(myBooks);

  displayBooks();
}

function displayBooks() {
  displayBooksContainer.innerHTML = "";

  myBooks.forEach((book, index) => {
    // Create book card
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("card");
    bookContainer.setAttribute("data-card", index);

    // Add the card details
    const bookDetailsContainer = document.createElement("div");
    bookDetailsContainer.classList.add("card__details");

    const bookTitle = document.createElement("h4");
    bookTitle.textContent = `Title: ${book.title}`;
    const bookAuthor = document.createElement("span");
    bookAuthor.textContent = `Author: ${book.author}`;
    const bookPages = document.createElement("span");
    bookPages.textContent = `Pages: ${book.pages}`;

    // Add card utility
    const bookUtilityContainer = document.createElement("div");
    bookUtilityContainer.classList.add("card__utilities");

    const bookDeleteButton = document.createElement("button");
    bookDeleteButton.classList.add("btn--primary");
    bookDeleteButton.textContent = "Delete book";
    bookDeleteButton.addEventListener("click", () => deleteBook(index));

    const bookReadButton = document.createElement("button");
    bookReadButton.classList.add("btn--primary");
    bookReadButton.textContent = "Read book";

    // Add information to the html
    bookDetailsContainer.appendChild(bookTitle);
    bookDetailsContainer.appendChild(bookAuthor);
    bookDetailsContainer.appendChild(bookPages);

    bookUtilityContainer.appendChild(bookDeleteButton);
    bookUtilityContainer.appendChild(bookReadButton);

    bookContainer.appendChild(bookDetailsContainer);
    bookContainer.appendChild(bookUtilityContainer);

    fragmentBook.appendChild(bookContainer);
  });

  displayBooksContainer.appendChild(fragmentBook);
}

function deleteBook(index) {
  // Remove the card from the array
  console.log("delete");

  displayBooksContainer.removeChild(displayBooksContainer.children[index]);

  myBooks.splice(index);

  console.log(myBooks);
}
