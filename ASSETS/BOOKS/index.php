<link href="../../ASSETS/BOOTSTRAP-v5.3/css/bootstrap.min.css" rel="stylesheet">

<script src="../../ASSETS/JQUERY/jquery-3.6.0.min.js"></script>
<script src="../../ASSETS/BOOTSTRAP-v5.3/js/bootstrap.bundle.min.js"></script>


  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  




<link rel="stylesheet" href="../../ASSETS/CSS/header.css">
<link rel="stylesheet" href="../../ASSETS/CSS/books.css">
<link rel="stylesheet" href="../../ASSETS/CSS/main.css">


<?php include "../../header.php"?>


<section class="sect3">
    <div class="monitor">

      <div class="monitor2">
        <img src="../../ASSETS/IMAGES/ICONS/book.png" alt="">
        <div class="monitor-content">
          <p id="total-books">1</p>
          <p>Total books</p>
        </div>
      </div>

      <div class="monitor2">
        <img src="../../ASSETS/IMAGES/ICONS/book (1).png" alt="">
        <div class="monitor-content">
          <p id="available-books">1</p>
          <p>Available books</p>
        </div>
      </div>

      <div class="monitor2">
        <img src="../../ASSETS/ICON/stopwatch.png" alt="">
        <div class="monitor-content">
          <p id="borrowed-books">0</p>
          <p>Borrowed books</p>
        </div>
      </div>

      <div class="monitor2">
        <img src="../../ASSETS/IMAGES/ICONS/bookmark.png" alt="">
        <div class="monitor-content">
          <p id="reserved-books">0</p>
          <p>Reserved books</p>
        </div>
      </div>

    </div>
  </section>


  <section class="sect2">

    <div class="search-bar">
      <div class="search-box">
        <i class="fas fa-search col-sm-8"><img src="
        ../../ASSETS/IMAGES/ICONS/loupe.png" alt=""></i>
        <input class="col-sm-8" type="text" placeholder="search by title or author...">
      </div>

      <div class="genre-dropdown">
        <button class="dropdown-btn" onclick="toggleDropdown()">
          <span id="selected-genre">All Genres</span>
          <i class="arrow"></i>
        </button>

        <ul class="dropdown-menu" id="dropdown-menu">
          <li onclick="selectGenre(this)">All Genres</li>
          <li onclick="selectGenre(this)">Fiction</li>
          <li onclick="selectGenre(this)">Non-Fiction</li>
          <li onclick="selectGenre(this)">Science Fiction</li>
          <li onclick="selectGenre(this)">Fantasy</li>
          <li onclick="selectGenre(this)">Mystery</li>
          <li onclick="selectGenre(this)">Romance</li>
          <li onclick="selectGenre(this)">Biography</li>
          <li onclick="selectGenre(this)">History</li>
          <li onclick="selectGenre(this)">Science</li>
          <li onclick="selectGenre(this)">Self-Help</li>
        </ul>
      </div>


      <div class="status-dropdown">
        <button class="dropdown-btn" onclick="toggleStatus()">
          <span id="selected-status">All Status</span>
          <i class="arrow"></i>
        </button>

        <ul class="dropdown-menu" id="dropdown-menu-status">
          
          <li onclick="selectStatus(this)">Available</li>
          <li onclick="selectStatus(this)">Borrowed</li>
          <li onclick="selectStatus(this)">Reserved</li>
        </ul>
      </div>

      


    </div>
  </section>

  <section class="sect3">
    <div class="container row g-3 mt-4">
      <!-- <div id="books" class="books card p-3 d-flex flex-column  justify-content-between shadow-sm contact-item col-sm-3">

        <img src="../../ASSETS/IMAGES/BOOKS/book1.jpg" alt="">
        <div class="">
          <h4 id="title">The Great Gatsby</h4>
          <p id="author" class="author">by F. Scott Fitzgerald</p>
        </div>
        <p id="status" class="status">Status: Available</p>
        <p id="genre" class="genre">Genre: Romance</p>

        <div class="buttons align-items-center d-flex justify-content-center ">
          <button class="btn btn-sm btn-outline-secondary ms-2">Borrowed</button>
          <button class="btn btn-sm btn-outline-danger  ms-4">Reserved</button>
        </div>


        <div class="buttons align-items-center d-flex justify-content-center ">
          <button class="btn  btn-sm btn-outline-secondary ms-2" data-bs-toggle="modal" data-bs-target="#editBookModal">Edit</button>
          <button class="btn btn-sm btn-outline-danger  ms-4">Delete</button>
      </div> -->

        <!--THIS CONTAINER DISPLAYS BOOKS EVERY TIME YOU ADD BOOK-->
      <div id="booksContainer" class="container"></div>
    </div>
  </section>








<!-- EDIT BOOKS MODAL -->
<div class="modal fade" id="editBookModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title">Edit Book Details</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body">
        <form id="editBookForm">

          <div class="mb-3">
            <label class="form-label">Book title</label>
            <input type="text" class="form-control" required>
          </div>

          <div class="mb-3">
            <label class="form-label">Author name</label>
            <input type="text" class="form-control" required>
          </div>

          <div class="row">
            
            <div class="dropdown col-sm-6 mt-3">
              <label class="form-label">Genre*</label>
              <button  class="btn btn-secondary dropdown-toggle w-100" data-bs-toggle="dropdown" aria-expanded="false">
                Select Genre
              </button>
              <ul class="dropdown-menu w-100" id="dropdown-menu">
                <li><a class="dropdown-item" href="#">Fiction</a></li>
                <li><a class="dropdown-item" href="#">Non-Fiction</a></li>
                <li><a class="dropdown-item" href="#">Science Fiction</a></li>
                <li><a class="dropdown-item" href="#">Fantasy</a></li>
                <li><a class="dropdown-item" href="#">Mystery</a></li>
                <li><a class="dropdown-item" href="#">Romance</a></li>
                <li><a class="dropdown-item" href="#">Biography</a></li>
                <li><a class="dropdown-item" href="#">History</a></li>
                <li><a class="dropdown-item" href="#">Science</a></li>
                <li><a class="dropdown-item" href="#">Self-Help</a></li>
              </ul>
            </div>

            <div class="dropdown col-sm-6 mt-3">
              <label class="form-label">Status*</label>
              <button class="btn btn-secondary dropdown-toggle w-100" data-bs-toggle="dropdown" aria-expanded="false">
                Select Status
              </button>
              <ul class="dropdown-menu w-100">
                <li><a class="dropdown-item" href="#">Available</a></li>
                <li><a class="dropdown-item" href="#">Borrowed</a></li>
                <li><a class="dropdown-item" href="#">Reserved</a></li>
              </ul>
            </div>

            <div class="mb-3 mt-3">
              <label for="imageUpload" class="form-label">Upload Image</label>
              <input class="form-control" type="file" id="imageUpload" accept="image/*">
            </div>

            <div class="mb-3">
              <label class="form-label">Shelf/Location</label>
              <input type="text" class="form-control" required>
            </div>

          </div>
        </form>
      </div>

      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button class="btn btn-primary">Save Changes</button>
      </div>

    </div>
  </div>
</div>




  

  <script src="../../ASSETS/JS/search-dropdown.js"></script>
  <script src="../../ASSETS/JS/addBooks.js"></script>
