<link href="../../ASSETS/BOOTSTRAP-v5.3/css/bootstrap.min.css" rel="stylesheet">
<link href="../../ASSETS/BOOTSTRAP-v5.3/css/bootstrap-grid.min.css" rel="stylesheet">

<script src="../../ASSETS/JQUERY/jquery-3.6.0.min.js"></script>
<script src="../../ASSETS/BOOTSTRAP-v5.3/js/bootstrap.bundle.min.js"></script>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">




<link rel="stylesheet" href="../../ASSETS/CSS/header.css">
<link rel="stylesheet" href="../../ASSETS/CSS/books.css">
<link rel="stylesheet" href="../../ASSETS/CSS/main.css">
<link rel="stylesheet" href="../../ASSETS/CSS/borrow.css">


<?php include "../../header.php"?>

<section class="borrow-section">
  <div class="borrow-active" id="borrow-active"></div>




  <div class="borrow-history" id="borrow-history">
    <h1>Return History</h1>
    <div class=" text-container">
      <div id="history-container" class="d-flex  p-2 border border-danger justify-content-center align-items-center text-center">
        <div class="col ">
          <p id="book">Book</p>
        </div>
        <div class="col ">
          <p id="member">Member</p>
        </div>
        <div class="col ">
          <p id="borrowed">Borrowed</p>
        </div>
        <div class="col ">
          <p id="Returned">Returned</p>
        </div>
      </div>

      <div id="history-container" class="d-flex p-2 border border-danger justify-content-center align-items-center text-center">
        <div class="col ">
          <p id="book">The Great Gatsby</p>
        </div>
        <div class="col ">
          <p id="member">Jay</p>
        </div>
        <div class="col ">
          <p id="borrowed">December 02,2025</p>
        </div>
        <div class="col ">
          <p id="Returned">December 11, 2025</p>
        </div>
      </div>


    </div>
  </div>
</section>

<script src="../../ASSETS/JS/borrowed-active.js"></script>
