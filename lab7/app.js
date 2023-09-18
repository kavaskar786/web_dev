function fetchBooks() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction', true);
    xhr.onload = function() {
      if(this.status === 200) {
        const books = JSON.parse(this.responseText);
        displayBooks(books.items);
      }
    }
    xhr.send();
  }
  
  function displayBooks(books) {
    let output = '';
    books.forEach(function(book) {
      output += `
        <div>
          <h3>${book.volumeInfo.title}</h3>
          <p>${book.volumeInfo.authors.join(', ')}</p>
          <p>${book.volumeInfo.publishedDate}</p>
        </div>
      `;
    });
    document.getElementById('bookList').innerHTML = output;
  }
  
  document.getElementById('fetchBtn').addEventListener('click', fetchBooks);