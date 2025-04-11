function renderTable() {
    const table = document.getElementById("bookTable");
    table.innerHTML = "<tr><th>Title</th><th>Author</th><th>Year</th><th>Genre</th></tr>";
    bookData.forEach(book => {
      table.innerHTML += `
        <tr>
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.year}</td>
          <td>${book.genre}</td>
        </tr>`;
    });
  }
