document.addEventListener("DOMContentLoaded", function () {

  const borrowModal = document.getElementById("borrowModal");
  const borrowForm = document.getElementById("borrowForm");

  /* ===============================
     OPEN MODAL & FILL BOOK DATA
  =============================== */
  borrowModal.addEventListener("show.bs.modal", function (event) {
    const button = event.relatedTarget;

    document.getElementById("borrowBookId").value = button.dataset.id;
    document.getElementById("borrowBookName").value = button.dataset.title;
    document.getElementById("borrowBookAuthor").value = button.dataset.author;
  });

  /* ===============================
     CONFIRM BORROW
  =============================== */
  borrowForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const book = {
      id: document.getElementById("borrowBookId").value,
      title: document.getElementById("borrowBookName").value,
      author: document.getElementById("borrowBookAuthor").value,
      member: document.getElementById("borrowMember").value,
      borrowedDate: new Date().toLocaleDateString(),
      dueDate: document.getElementById("borrowDueDate").value
    };

    let activeBorrowed = JSON.parse(localStorage.getItem("activeBorrowed")) || [];

    if (activeBorrowed.some(b => b.id === book.id)) {
      alert("This book is already borrowed.");
      return;
    }

    activeBorrowed.push(book);
    localStorage.setItem("activeBorrowed", JSON.stringify(activeBorrowed));

    bootstrap.Modal.getInstance(borrowModal).hide();
    borrowForm.reset();

    renderActiveBorrowed();
  });

  /* ===============================
     RENDER ACTIVE BORROWED
  =============================== */
  function renderActiveBorrowed() {
    const container = document.querySelector("#activeBorrowedList .text-container");
    container.innerHTML = "";

    const activeBorrowed = JSON.parse(localStorage.getItem("activeBorrowed")) || [];

    activeBorrowed.forEach((book, index) => {
      container.innerHTML += `
        <div class="d-flex p-2 border mb-2 text-center align-items-center">
          <div class="col">${book.title}</div>
          <div class="col">${book.member}</div>
          <div class="col">${book.borrowedDate}</div>
          <div class="col">
            <button class="btn btn-danger btn-sm"
              onclick="returnBook(${index})">
              Return
            </button>
          </div>
        </div>
      `;
    });
  }

  /* ===============================
     RETURN BOOK
  =============================== */
  window.returnBook = function (index) {
    let activeBorrowed = JSON.parse(localStorage.getItem("activeBorrowed")) || [];
    let returnHistory = JSON.parse(localStorage.getItem("returnHistory")) || [];

    const returnedBook = activeBorrowed[index];
    returnedBook.returnedDate = new Date().toLocaleDateString();

    returnHistory.push(returnedBook);
    activeBorrowed.splice(index, 1);

    localStorage.setItem("activeBorrowed", JSON.stringify(activeBorrowed));
    localStorage.setItem("returnHistory", JSON.stringify(returnHistory));

    renderActiveBorrowed();
    renderReturnHistory();
  };

  /* ===============================
     RENDER RETURN HISTORY
  =============================== */
  function renderReturnHistory() {
    const container = document.querySelector(".borrow-history .text-container");

    container.innerHTML = `
      <div class="d-flex p-2 border mb-2 text-center fw-bold">
        <div class="col">Book</div>
        <div class="col">Member</div>
        <div class="col">Borrowed Date</div>
        <div class="col">Returned Date</div>
      </div>
    `;

    const returnHistory = JSON.parse(localStorage.getItem("returnHistory")) || [];

    returnHistory.forEach(book => {
      container.innerHTML += `
        <div class="d-flex p-2 border mb-2 text-center">
          <div class="col">${book.title}</div>
          <div class="col">${book.member}</div>
          <div class="col">${book.borrowedDate}</div>
          <div class="col">${book.returnedDate}</div>
        </div>
      `;
    });
  }

  /* ===============================
     INITIAL LOAD
  =============================== */
  renderActiveBorrowed();
  renderReturnHistory();

});
