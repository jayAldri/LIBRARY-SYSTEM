let books = JSON.parse(localStorage.getItem("books") || "[]");

/* ===============================
   OPEN BORROW MODAL
================================ */
function openBorrowModal(index) {
  const book = books[index];
  document.getElementById("borrowBookName").value = book.title;
  document.getElementById("borrowBookAuthor").value = book.author;
  document.getElementById("borrowForm").dataset.index = index;

  const borrowModal = new bootstrap.Modal(document.getElementById("borrowModal"));
  borrowModal.show();
}

/* ===============================
   CONFIRM BORROW
================================ */
document.getElementById("borrowForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const index = this.dataset.index;
  const member = document.getElementById("borrowMember").value;
  const dueDate = document.getElementById("borrowDueDate").value;

  if (!member || !dueDate) return alert("Select member & due date");

  const book = books[index];
  book.status = "Borrowed";
  localStorage.setItem("books", JSON.stringify(books));

  // Add to borrow-active container
  const container = document.querySelector("#borrow-active .text-container");
  const borrowedDate = new Date().toLocaleDateString();

  const row = document.createElement("div");
  row.className = "d-flex p-2 border mb-2 text-center";
  row.innerHTML = `
    <div class="col">${book.title}</div>
    <div class="col">${member}</div>
    <div class="col">${borrowedDate}</div>
    <div class="col">${dueDate}</div>
    <div class="col">
      <button class="btn btn-sm btn-success">Return</button>
    </div>
  `;

  // Add return button logic
  row.querySelector("button").addEventListener("click", function() {
    returnBook(row, index, member, borrowedDate, dueDate);
  });

  container.appendChild(row);

  bootstrap.Modal.getInstance(document.getElementById("borrowModal")).hide();
  this.reset();
});

/* ===============================
   RETURN BOOK
================================ */
function returnBook(row, index, member, borrowedDate, dueDate) {
  // Update book status
  books[index].status = "Available";
  localStorage.setItem("books", JSON.stringify(books));

  // Remove from borrow-active
  row.remove();

  // Add to return history
  const returnContainer = document.querySelector("#borrow-history .text-container");
  const returnedDate = new Date().toLocaleDateString();

  const historyRow = document.createElement("div");
  historyRow.className = "d-flex p-2 border mb-2 text-center";
  historyRow.innerHTML = `
    <div class="col">${books[index].title}</div>
    <div class="col">${member}</div>
    <div class="col">${borrowedDate}</div>
    <div class="col">${returnedDate}</div>
  `;

  returnContainer.appendChild(historyRow);
}
