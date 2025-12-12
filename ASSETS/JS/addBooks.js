let books = [];

// Load saved books when page loads
window.onload = function () {
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
    renderBooks();
  }
};

// Save to localStorage + re-render
function saveAndRender() {
  localStorage.setItem("books", JSON.stringify(books));
  renderBooks();
}

// RENDER ALL BOOK CARDS
function renderBooks() {
  const container = document.getElementById("booksContainer");
  container.innerHTML = "";

  books.forEach((book, index) => {
    const card = document.createElement("div");
     
    card.className = "card p-3 h-100 mb-5";

    card.innerHTML = `
      <div class="d-flex align-items-start">

        <img src="${book.image ? book.image : 'default-book.png'}" 
             style="width: 100pxs; height: 210px; object-fit: cover; border-radius: 5px;" 
             class="me-3">

        <div>
            <h5 class="mb-1">${book.title}</h5>
            <p class="mb-1"><strong>Author:</strong> ${book.author}</p>
            <p class="mb-1"><strong>Status:</strong> ${book.status}</p>
            <p class="mb-1"><strong>Genre:</strong> ${book.genre}</p>
            <p class="mb-1"><strong>Location:</strong> ${book.location}</p>
        </div>
      </div>

      <div class="d-grid gap-2 d-md-block mt-3">
        <button class="btn btn-outline-secondary ms-2">Borrowed</button>
        <button class="btn  btn-outline-secondary ms-2">Reserved</button>
      </div>

      <div class="d-grid gap-2 d-md-block mt-2">
        <button class="btn  btn-outline-secondary ms-2" data-bs-toggle="modal" data-bs-target="#editBookModal">Edit</button>
          <button class="btn btn-danger" onclick="deleteBook(${index})">Delete</button>
      </div>
    `;

    container.appendChild(card);
  });
}

// DELETE A BOOK
function deleteBook(index) {
  if (confirm("Are you sure you want to delete this book?")) {
    books.splice(index, 1);
    saveAndRender();
  }
}

// FORM SUBMIT — ADD NEW BOOK
document.getElementById("addBookForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;
  const genre = document.getElementById("add-select-genre").textContent;
  const status = document.getElementById("add-select-status").textContent;
  const location = document.getElementById("bookShelf").value;
  const imageFile = document.getElementById("imageUpload").files[0];

  if (genre === "Select Genre" || status === "Select Status") {
    alert("Please choose a genre and status.");
    return;
  }

  // If an image is uploaded → convert to Base64
  if (imageFile) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const newBook = {
        title,
        author,
        genre,
        status,
        location,
        image: e.target.result // Base64
      };

      books.push(newBook);
      saveAndRender();
    };
    reader.readAsDataURL(imageFile);
  } else {
    // No image uploaded
    const newBook = {
      title,
      author,
      genre,
      status,
      location,
      image: null
    };

    books.push(newBook);
    saveAndRender();
  }

  // Close modal
      const modal = bootstrap.Modal.getInstance(document.getElementById("fillUpModal"));
      modal.hide();

  // Reset form fields
  document.getElementById("addBookForm").reset();
  document.getElementById("add-select-genre").textContent = "Select Genre";
  document.getElementById("add-select-status").textContent = "Select Status";
});
