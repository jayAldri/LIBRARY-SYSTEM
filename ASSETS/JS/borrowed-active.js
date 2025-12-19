let borrowedBooks = []; // To keep track of borrowed books

function borrowBook(index) {
  const book = books[index];
  if (book.status === "Borrowed") {
    alert("This book is already borrowed.");
    return;
  }

  // Show borrow modal
  const borrowModal = new bootstrap.Modal(document.getElementById('borrowModal'));
  document.getElementById('borrowBookName').value = book.title;
  document.getElementById('borrowBookAuthor').value = book.author;
  document.getElementById('borrowMember').value = "";
  document.getElementById('borrowDueDate').value = "";

  borrowModal.show();

  // Handle confirm borrow
  const borrowForm = document.getElementById('borrowForm');
  borrowForm.onsubmit = function (e) {
    e.preventDefault();

    const member = document.getElementById('borrowMember').value;
    const dueDate = document.getElementById('borrowDueDate').value;
    const borrowedDate = new Date().toLocaleDateString('en-US', {month:'long', day:'numeric', year:'numeric'});

    if (!member || !dueDate) {
      alert("Please select a member and due date.");
      return;
    }

    // Update book status
    book.status = "Borrowed";
    saveAndRender();

    // Add to borrowed active
    borrowedBooks.push({
      title: book.title,
      member: member,
      borrowedDate: borrowedDate,
      dueDate: dueDate
    });

    renderBorrowedActive();
    borrowModal.hide();
  };
}

function renderBorrowedActive() {
  const container = document.getElementById('borrow-active');
  container.innerHTML = "";

  borrowedBooks.forEach((b, i) => {
    const div = document.createElement('div');
    div.className = "d-flex p-2 border mb-2 align-items-center justify-content-between";

    div.innerHTML = `
      <div class="col">${b.title}</div>
      <div class="col">${b.member}</div>
      <div class="col">${b.borrowedDate}</div>
      <div class="col">${b.dueDate}</div>
      <div class="col">
        <button class="btn btn-sm btn-success" onclick="returnBook(${i})">Return</button>
      </div>
    `;

    container.appendChild(div);
  });
}

function returnBook(index) {
  const returnedBook = borrowedBooks.splice(index, 1)[0];
  
  // Append to return history
  const historyContainer = document.createElement('div');
  historyContainer.className = "d-flex p-2 border border-danger justify-content-center align-items-center text-center";

  const returnedDate = new Date().toLocaleDateString('en-US', {month:'long', day:'numeric', year:'numeric'});

  historyContainer.innerHTML = `
    <div class="col">${returnedBook.title}</div>
    <div class="col">${returnedBook.member}</div>
    <div class="col">${returnedBook.borrowedDate}</div>
    <div class="col">${returnedDate}</div>
  `;

  document.querySelector('#borrow-history .text-container').appendChild(historyContainer);

  // Update book status to Available
  const book = books.find(b => b.title === returnedBook.title);
  if (book) book.status = "Available";
  saveAndRender();

  // Re-render borrowed active
  renderBorrowedActive();
}
