<link href="../../ASSETS/BOOTSTRAP-v5.3/css/bootstrap.min.css" rel="stylesheet">
<script src="../../ASSETS/JQUERY/jquery-3.6.0.min.js"></script>
<script src="../../ASSETS/BOOTSTRAP-v5.3/js/bootstrap.bundle.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">

<link rel="stylesheet" href="../../ASSETS/CSS/header.css">
<link rel="stylesheet" href="../../ASSETS/CSS/books.css">
<link rel="stylesheet" href="../../ASSETS/CSS/main.css">
<link rel="stylesheet" href="../../ASSETS/CSS/borrow.css">

<?php include "../../header.php" ?>

<section class="borrow-section container mt-4">

  <!-- ACTIVE BORROWED BOOKS -->
  <div class="borrow-active mb-5" id="activeBorrowedList">
    <h3>Currently Borrowed</h3>
    <div class="text-container"></div>
  </div>

  <!-- RETURN HISTORY -->
  <div class="borrow-history">
    <h3>Return History</h3>
    <div class="text-container">
      <div class="d-flex p-2 border mb-2 text-center fw-bold">
        <div class="col">Book</div>
        <div class="col">Member</div>
        <div class="col">Borrowed Date</div>
        <div class="col">Returned Date</div>
      </div>
    </div>
  </div>
</section>

<!-- BORROW MODAL -->
<div class="modal fade" id="borrowModal" tabindex="-1" aria-labelledby="borrowModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <form id="borrowForm">
        <div class="modal-header">
          <h5 class="modal-title" id="borrowModalLabel">Borrow Book</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="borrowBookName" class="form-label">Book Name</label>
            <input type="text" class="form-control" id="borrowBookName" readonly>
          </div>
          <div class="mb-3">
            <label for="borrowBookAuthor" class="form-label">Author</label>
            <input type="text" class="form-control" id="borrowBookAuthor" readonly>
          </div>
          <div class="mb-3">
            <label for="borrowMember" class="form-label">Member</label>
            <select class="form-select" id="borrowMember" required>
              <option value="">Select Member</option>
              <option value="JAY">JAY</option>
              <option value="JAHBI">JAHBI</option>
              <option value="NICKS">NICKS</option>
              <option value="OOGWAY">OOGWAY</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="borrowDueDate" class="form-label">Due Date</label>
            <input type="date" class="form-control" id="borrowDueDate" required>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-primary">Confirm Borrow</button>
        </div>
      </form>
    </div>
  </div>
</div>

<!-- ADD BOOKS CONTAINER (Optional, for testing) -->
<div class="container mt-4">
  <h3>All Books</h3>
  <div id="booksContainer" class="row g-3"></div>
</div>

<script src="../../ASSETS/JS/borrowed-active.js"></script>
