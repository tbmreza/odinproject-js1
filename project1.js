let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {

}

Book.prototype.info = function () {        
  let read_info;
  if (this.read) {
    read_info = "read.";
  } else {
    read_info = "not read yet.";
  }
  const information = this.title + " by " + this.author + ", " + this.pages + " pages, " + read_info;
  return information;
}

const hobbit = new Book("The Hobbits", "JRR Tolkien", "340", true);
console.log(hobbit.info())