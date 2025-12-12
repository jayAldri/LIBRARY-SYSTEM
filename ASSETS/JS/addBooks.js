let books = [];
let editBook = null;



window.onload = function() {
    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
        books = JSON.parse(storedBooks);
        renderBooks();
    }
}

function renderBooks() {
  const container = document.getElementById("booksContainer");
  container.innerHTML = "";

  books.forEach((book, index) => {
      const card = document.createElement("div");
      card.className = "card p-3 mb-2";
      
      card.innerHTML = `
          <div>
              <h5 class="mb-1">${book.title}</h5>
              <p class="mb-1">Author: ${book.author}</p>
              <p class="mb-1">ISBN: ${book.isbn}</p>
          </div>

          <div>
            <button class="btn btn-sm btn-outline-secondary ms-2" onclick="viewBookDetails(${index})" ">Borrowed</button>
            <button class="btn btn-sm btn-outline-secondary ms-2" onclick="returnBookDetails(${index})" ">Reserved</button>
          </div>

          <div>
              <button class="btn btn-sm btn-outline-secondary ms-2" onclick="editBookDetails(${index})" data-bs-toggle="modal" data-bs-target="#editBookModal">Edit</button>
              <button class="btn btn-sm btn-outline-danger ms-4" onclick="deleteBook(${index})">Delete</button>
          </div>


      `;
      container.appendChild(card);
  });
}


function deleteBook(index) {
  books.splice(index, 1);
  localStorage.setItem("books", JSON.stringify(books));
  renderBooks();
}

function saveAndRender() {
  localStorage.setItem("books", JSON.stringify(books));
  renderBooks();
}

function clearInputs() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
}

document.getElementById("addBookForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const newBook = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        isbn: document.getElementById("isbn").value
    };
    books.push(newBook);
    saveAndRender();
    clearInputs();
    $('#fillUpModal').modal('hide');
});