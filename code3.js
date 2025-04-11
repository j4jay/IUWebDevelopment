function updateBook() {
    const title = document.getElementById("updateTitle").value;
    const author = document.getElementById("updateAuthor").value;
    const year = parseInt(document.getElementById("updateYear").value);
    const genre = document.getElementById("updateGenre").value;
  
    const bookIndex = bookData.findIndex(book => book.title === title);
    if (bookIndex !== -1 && title && author && !isNaN(year) && genre) {
      bookData[bookIndex] = { title, author, year, genre };
      renderTable();
      alert("Book updated successfully.");
    } else {
      alert("Validation failed or book not found.");
    }
  }
