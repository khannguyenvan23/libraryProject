/**
 * Make Book Object
 * contructor properties: title, author, pages, read: accept true or false
 * method: book.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
 * 
 */


 // A constructor for making book object
 let myLibrary = [
     {
    title: "Eloquent JavaScript: A Modern Introduction to Programming",
    author: "Marijn Haverbeke",
    pages:"227",
    read: "false",
    id: "1"
 },
 {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    pages:"174",
    read: "false",
    id: "2"
 },
 {
    title: "You Don't Know JS: Scope & Closures",
    author: "Kyle Simpson",
    pages:"105",
    read: "false",
    id: "3"
 }
 ,{
    title: "Head First JavaScript Programming: A Brain-Friendly Guide",
    author: "Elisabeth Freeman, Eric Freeman",
    pages:"704",
    read: "false",
    id: "4"
 }

];

 function Book(title, author, pages, read = false,id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
    //Return all infomation of Book Object
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read is done' :'not read yet'}`
    }  
 }

 // Display UI

 function renderHMTL(book){
    
    const domListBook =  document.querySelector(".listBook");
    
        domListBook.innerHTML += `
        <div class="listBook__box" data-id="${book.id}">
            <div class="ListBook__content">
                <div class="ListBook__title">${book.title}</div>
                <div class="ListBook__author">
                    <p>Author By</p>
                    <p>${book.author}</p>
                </div>
                <div class="ListBook__status">
                    <p>Status</p>
                    <p class="changeStatus">${ book.read == "true" ? 'Read <i class="icon-ok"></i></p>' : 'Not Read O' }
                    
                </div>
                <div class="ListBook__pages">
                    <p>Pages</p>
                    <p>${book.pages}</p>
                </div>
                <div class="ListBook__remove btn btn-outline-primary btn-sm">
                    <i class="icon-trash icon-large"></i>
                </div>
            </div>
         </div>`;
 }
 function render(myLibrary){
    const item = document.querySelector(`[data-id='${myLibrary.id}']`);

    // add this if block
    if (myLibrary.deleted) {
      // remove the item from the DOM
      item.remove();
      return
    }
    myLibrary.forEach(book=>{
        renderHMTL(book);
    })
    
 }

 // Add book
 function addBookToLibrary() {
    // Get DOM AND GET VALUE
    const DOM = {
        titleBook:document.getElementById("titleBook"),
        authorBook: document.getElementById("authorBook"),
        pagesBook:document.getElementById("pagesBook"),
        readCheck:document.getElementById("readCheckBook")
        
    }
    
    // handle value
    function getValue(dom){
        if(dom.value && dom.value !== ""){
            return dom.value;
        }
        return ;
    }
    // Clear input
    function clearInput(){
        DOM.titleBook.value = "";
        DOM.authorBook.value = "";
        DOM.pagesBook.value = "";
        DOM.readCheck.value = "";

    }
    // Make function create Object form book
    
        
        // Get Value Input

        const title = getValue(DOM.titleBook);
        const author =getValue(DOM.authorBook);
        const pages = getValue(DOM.pagesBook);
        const readCheckValue = getValue(DOM.readCheck);

        // Push new Object input to array
        if(title || author || pages){
            let myBook = new Book(title, author, pages, readCheckValue ,Date.now() + "");
            myLibrary.push(myBook);
            renderHMTL(myBook);
        }else {
            alert("Please Enter Valid value");
        }
        
        // Clear input after addNewBook
        clearInput();
        
    
    
    // AddEventListent to addNewBook
  


  }
function changeStatus(itemKey){
    // Find Book in Array
    const indexBook =myLibrary.findIndex(book =>book.id === itemKey);
    if(myLibrary[indexBook].read =="false"){
        myLibrary[indexBook].read = "true";
        return true;
    }else {
        myLibrary[indexBook].read = "false";
        return false;
    }
   
}
function removeBook(itemKey){
    const indexBook =myLibrary.findIndex(book =>book.id === itemKey);
   
    const domListBook =  document.querySelector(".listBook");

    const books = {
        deleted: true,
        ...myLibrary[indexBook]
      };
      // remove the book from the array by filtering it out
      myLibrary = myLibrary.filter(book => book.id !== itemKey);
      
    render(books);
    
}
// Run app

render(myLibrary);

//AddEventListener
document.getElementById("addBook").addEventListener("click", addBookToLibrary);

const listBooks = document.querySelector('.listBook');

listBooks.addEventListener('click', event => {
        
        if (event.target.classList.contains('changeStatus')) {
            //Get a id from listener
          const itemKey = event.target.parentElement.parentElement.parentElement.dataset.id;
          let check = changeStatus(itemKey);
          if(check){
            event.target.innerHTML = 'Read  <i class="icon-ok"></i></p>';
          }else {
            event.target.innerHTML = 'Not Read  O';
          }
        }
        if (event.target.classList.contains('ListBook__remove') || event.target.classList.contains('icon-trash')) {
            //Get a id from listener
          const itemKey = event.target.parentElement.parentElement.dataset.id ? event.target.parentElement.parentElement.dataset.id: event.target.parentElement.parentElement.parentElement.dataset.id ;
         
          removeBook(itemKey);
          
        }
      });
