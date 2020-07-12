/**
 * Make Book Object
 * contructor properties: title, author, pages, read: accept true or false
 * method: book.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
 * 
 */


 // A constructor for making book object

 function Book(title, author, pages, read = false){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
    //Return all infomation of Book Object
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read is done' :'not read yet'}`
    }
    
 }

 // Create a theHobit from Book contructor
 var theHobit = new Book("The Hobbit", "J.R.R. Tolkien", "295", true);

 console.log(theHobit.info());

 