// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// Instantiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const boo2 = new Book('Book Two', 'Jane Doe', '2016');

console.log(book1);
