
function removeBook() {
    const title = document.getElementById("removeTitle").value;
    const initialLength = bookData.length;
    bookData = bookData.filter(book => book.title !== title);
    
    if (bookData.length < initialLength) {
      renderTable();
      alert("Book removed.");
    } else {
      alert("Book not found.");
    }
  }
