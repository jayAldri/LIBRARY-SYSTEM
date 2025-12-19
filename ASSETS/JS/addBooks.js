let books = [];
let editIndex = null;

/* ===============================
   LOAD BOOKS ON PAGE LOAD
================================ */
window.onload = function () {
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
    renderBooks();
  }
};

/* ===============================
   SAVE TO LOCALSTORAGE + RENDER
================================ */
function saveAndRender() {
  localStorage.setItem("books", JSON.stringify(books));
  renderBooks();
}

/* ===============================
   RENDER BOOK CARDS
================================ */
function renderBooks() {
  const container = document.getElementById("booksContainer");
  container.innerHTML = "";

  books.forEach((book, index) => {
    const card = document.createElement("div");
    card.className = "books card p-3 mb-4";
    card.dataset.status = book.status;

    card.innerHTML = `
      <div class="d-flex">
        <img src="${book.image || 'default-book.png'}"
             style="width:120px;height:180px;object-fit:cover;border-radius:5px"
             class="me-3">

        <div>
          <h5>${book.title}</h5>
          <p><strong>Author:</strong> ${book.author}</p>
          <p class="status-text"><strong>Status:</strong> ${book.status}</p>
          <p><strong>Genre:</strong> ${book.genre}</p>
          <p><strong>Location:</strong> ${book.location}</p>
        </div>
      </div>

      <div class="mt-3">
        <button class="btn btn-outline-secondary btn-sm borrow-btn" onclick="openBorrowModal(${index})">Borrow</button>
        <button class="btn btn-outline-secondary btn-sm ms-2" onclick="reserveBook(${index})">Reserve</button>
      </div>

      <div class="mt-2">
        <button class="btn btn-outline-primary btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#editBookModal"
          onclick="openEditModal(${index})">Edit</button>

        <button class="btn btn-danger btn-sm ms-2" onclick="deleteBook(${index})">Delete</button>
      </div>
    `;

    container.appendChild(card);
  });

  updateMonitorCounts();
}

/* ===============================
   BORROW MODAL LOGIC
================================ */
function openBorrowModal(index) {
  const book = books[index];
  document.getElementById("borrowBookName").value = book.title;
  document.getElementById("borrowBookAuthor").value = book.author;
  document.getElementById("borrowForm").dataset.index = index;

  const borrowModal = new bootstrap.Modal(document.getElementById("borrowModal"));
  borrowModal.show();
}

// Confirm borrow
document.getElementById("borrowForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const index = this.dataset.index;
  const member = document.getElementById("borrowMember").value;
  const dueDate = document.getElementById("borrowDueDate").value;

  if (!member || !dueDate) {
    alert("Please select a member and due date");
    return;
  }

  // Update status
  books[index].status = "Borrowed";
  saveAndRender();

  // Add to borrow-active
  const borrowActive = document.getElementById("borrow-active");
  const book = books[index];
  const borrowedDate = new Date().toLocaleDateString();

  borrowActive.innerHTML += `
    <div class="d-flex p-2 border mb-2 align-items-center">
      <div class="col">${book.title}</div>
      <div class="col">${member}</div>
      <div class="col">${borrowedDate}</div>
      <div class="col">${dueDate}</div>
      <div class="col">
        <button class="btn btn-sm btn-success" onclick="returnBook(this, ${index}, '${member}', '${borrowedDate}', '${dueDate}')">Return</button>
      </div>
    </div>
  `;

  bootstrap.Modal.getInstance(document.getElementById("borrowModal")).hide();
  this.reset();
});

/* ===============================
   RETURN BOOK
================================ */
function returnBook(button, index, member, borrowedDate, dueDate) {
  books[index].status = "Available";
  saveAndRender();

  // Remove from borrow-active
  button.parentElement.parentElement.remove();

  // Add to return history
  const returnHistory = document.getElementById("borrow-history").querySelector(".text-container");
  const returnedDate = new Date().toLocaleDateString();
  returnHistory.innerHTML += `
    <div class="d-flex p-2 border mb-2 text-center">
      <div class="col">${books[index].title}</div>
      <div class="col">${member}</div>
      <div class="col">${borrowedDate}</div>
      <div class="col">${returnedDate}</div>
    </div>
  `;
}

/* ===============================
   RESERVE BOOK
================================ */
function reserveBook(index) {
  if (books[index].status === "Reserved") return alert("Already reserved");
  books[index].status = "Reserved";
  saveAndRender();
}

/* ===============================
   DELETE BOOK
================================ */
function deleteBook(index) {
  if (confirm("Delete this book?")) {
    books.splice(index, 1);
    saveAndRender();
  }
}

/* ===============================
   EDIT BOOK LOGIC
================================ */
function openEditModal(index) {
  editIndex = index;
  const book = books[index];

  document.getElementById("editIndex").value = index;
  document.getElementById("editTitle").value = book.title;
  document.getElementById("editAuthor").value = book.author;
  document.getElementById("editGenre").value = book.genre;
  document.getElementById("editStatus").value = book.status;
  document.getElementById("editLocation").value = book.location;
}

// Save edit
document.getElementById("saveEditBtn").addEventListener("click", function () {
  const index = document.getElementById("editIndex").value;
  books[index].title = document.getElementById("editTitle").value;
  books[index].author = document.getElementById("editAuthor").value;
  books[index].genre = document.getElementById("editGenre").value;
  books[index].status = document.getElementById("editStatus").value;
  books[index].location = document.getElementById("editLocation").value;

  saveAndRender();
  bootstrap.Modal.getInstance(document.getElementById("editBookModal")).hide();
});

/* ===============================
   MONITOR COUNTERS
================================ */
function updateMonitorCounts() {
  let total = books.length;
  let available = 0;
  let borrowed = 0;
  let reserved = 0;

  books.forEach(book => {
    if (book.status === "Available") available++;
    if (book.status === "Borrowed") borrowed++;
    if (book.status === "Reserved") reserved++;
  });

  document.getElementById("total-books").textContent = total;
  document.getElementById("available-books").textContent = available;
  document.getElementById("borrowed-books").textContent = borrowed;
  document.getElementById("reserved-books").textContent = reserved;
}
