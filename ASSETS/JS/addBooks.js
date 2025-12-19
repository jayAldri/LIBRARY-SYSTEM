let books = JSON.parse(localStorage.getItem("books")) || [];
let borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
let editIndex = null;

/* ===============================
   RENDER BOOKS
================================ */
function renderBooks() {
  const container = document.getElementById("booksContainer");
  container.innerHTML = "";

  books.forEach((book, index) => {
    const card = document.createElement("div");
    card.className = "books card p-3 mb-4";
    card.innerHTML = `
      <div class="d-flex">
        <img src="${book.image || 'default-book.png'}" style="width:120px;height:180px;object-fit:cover;border-radius:5px" class="me-3">
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
        <button class="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#editBookModal" onclick="openEditModal(${index})">Edit</button>
        <button class="btn btn-danger btn-sm ms-2" onclick="deleteBook(${index})">Delete</button>
      </div>
    `;
    container.appendChild(card);
  });

  updateMonitorCounts();
  renderBorrowedActive();
}

/* ===============================
   BORROW MODAL LOGIC
================================ */
function openBorrowModal(index) {
  const book = books[index];
  if (book.status === "Borrowed") return alert("Already borrowed");

  document.getElementById('borrowBookName').value = book.title;
  document.getElementById('borrowBookAuthor').value = book.author;
  document.getElementById('borrowMember').value = "";
  document.getElementById('borrowDueDate').value = "";

  const modal = new bootstrap.Modal(document.getElementById('borrowModal'));
  modal.show();

  const form = document.getElementById('borrowForm');
  form.onsubmit = function (e) {
    e.preventDefault();
    const member = document.getElementById('borrowMember').value;
    const dueDate = document.getElementById('borrowDueDate').value;
    const borrowedDate = new Date().toLocaleDateString('en-US', {month:'long', day:'numeric', year:'numeric'});

    if (!member || !dueDate) return alert("Please select member and due date");

    book.status = "Borrowed";
    saveBooks();

    borrowedBooks.push({
      title: book.title,
      member,
      borrowedDate,
      dueDate
    });
    localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks));

    renderBorrowedActive();
    modal.hide();
    renderBooks();
  };
}

/* ===============================
   RENDER BORROWED ACTIVE
================================ */
function renderBorrowedActive() {
  const container = document.getElementById('borrow-active');
  container.innerHTML = `
    <h2>Borrowed Books</h2>
    <div class="d-flex p-2 border-bottom fw-bold">
      <div class="col">Book</div>
      <div class="col">Member</div>
      <div class="col">Borrowed Date</div>
      <div class="col">Due Date</div>
      <div class="col">Action</div>
    </div>
  `;

  borrowedBooks.forEach((b, i) => {
    const row = document.createElement('div');
    row.className = "d-flex p-2 border-bottom align-items-center";
    row.innerHTML = `
      <div class="col">${b.title}</div>
      <div class="col">${b.member}</div>
      <div class="col">${b.borrowedDate}</div>
      <div class="col">${b.dueDate}</div>
      <div class="col">
        <button class="btn btn-sm btn-success" onclick="returnBook(${i})">Return</button>
      </div>
    `;
    container.appendChild(row);
  });
}

/* ===============================
   RETURN BOOK
================================ */
function returnBook(index) {
  const returnedBook = borrowedBooks.splice(index, 1)[0];

  const historyContainer = document.querySelector('#borrow-history .text-container');
  const div = document.createElement('div');
  div.className = "d-flex p-2 border border-danger justify-content-center align-items-center text-center";
  const returnedDate = new Date().toLocaleDateString('en-US', {month:'long', day:'numeric', year:'numeric'});
  div.innerHTML = `
    <div class="col">${returnedBook.title}</div>
    <div class="col">${returnedBook.member}</div>
    <div class="col">${returnedBook.borrowedDate}</div>
    <div class="col">${returnedDate}</div>
  `;
  historyContainer.appendChild(div);

  const book = books.find(b => b.title === returnedBook.title);
  if (book) book.status = "Available";
  saveBooks();
  renderBooks();
}

/* ===============================
   RESERVE BOOK
================================ */
function reserveBook(index) {
  if (books[index].status === "Reserved") return alert("Already reserved");
  books[index].status = "Reserved";
  saveBooks();
  renderBooks();
}

/* ===============================
   DELETE BOOK
================================ */
function deleteBook(index) {
  if (!confirm("Delete this book?")) return;
  books.splice(index, 1);
  saveBooks();
  renderBooks();
}

/* ===============================
   EDIT BOOK MODAL
================================ */
function openEditModal(index) {
  editIndex = index;
  const book = books[index];
  document.getElementById('editIndex').value = index;
  document.getElementById('editTitle').value = book.title;
  document.getElementById('editAuthor').value = book.author;
  document.getElementById('editGenre').value = book.genre;
  document.getElementById('editStatus').value = book.status;
  document.getElementById('editLocation').value = book.location;
}

document.getElementById('saveEditBtn').onclick = function () {
  const index = parseInt(document.getElementById('editIndex').value);
  books[index].title = document.getElementById('editTitle').value;
  books[index].author = document.getElementById('editAuthor').value;
  books[index].genre = document.getElementById('editGenre').value;
  books[index].status = document.getElementById('editStatus').value;
  books[index].location = document.getElementById('editLocation').value;
  saveBooks();
  renderBooks();
  bootstrap.Modal.getInstance(document.getElementById('editBookModal')).hide();
};

/* ===============================
   SAVE BOOKS + UPDATE MONITOR
================================ */
function saveBooks() {
  localStorage.setItem("books", JSON.stringify(books));
  updateMonitorCounts();
}

function updateMonitorCounts() {
  const total = books.length;
  const available = books.filter(b => b.status === "Available").length;
  const borrowed = books.filter(b => b.status === "Borrowed").length;
  const reserved = books.filter(b => b.status === "Reserved").length;

  document.getElementById("total-books").textContent = total;
  document.getElementById("available-books").textContent = available;
  document.getElementById("borrowed-books").textContent = borrowed;
  document.getElementById("reserved-books").textContent = reserved;
}

/* ===============================
   INITIAL RENDER
================================ */
renderBooks();
