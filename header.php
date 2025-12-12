<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Library System</title>

  <link href="../../ASSETS/BOOTSTRAP-v5.3/css/bootstrap.min.css" rel="stylesheet">

<script src="../../ASSETS/JQUERY/jquery-3.6.0.min.js"></script>
<script src="../../ASSETS/BOOTSTRAP-v5.3/js/bootstrap.bundle.min.js"></script>


  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

  <link rel="stylesheet" href="../../ASSETS/CSS/header.css?v=1.2">
</head>
<body>


  <section class="sect1">
    <header>
      <a href="#" class="header">
        <img src="../../ASSETS/ICON/books.png" alt="">
        <div class="title">
          <h1>Library System</h1>
          <p>Manage your book collection</p>
        </div>
      </a>
    </header>
  </section>

  <section class="sect2">
    <div class="nav">
      <div class="nav-left">

        <div class="nav-icons">
          <a href="../../ASSETS/BOOKS">
            <img src="../../ASSETS/ICON/bookshelf-with-fout-books.png" alt="">
            <p>Bookshelf</p>
          </a>
        </div>

        <div class="nav-icons">
          <a href="../../ASSETS/MEMBER">
              <img src="../../ASSETS/ICON/group.png" alt="">
              <p>Members</p>
          </a>
        </div>
        
        <div class="nav-icons">
          <a href="../../ASSETS/BORROWS">
            <img src="../../ASSETS/ICON/stopwatch.png" alt="">
            <p>Borrows</p>
          </a>
        </div>
      </div>


      <div class="nav-right">
        <div class="add">
          <img src="../../ASSETS/ICON/plus.png" alt="">
          <p>Member</p>
        </div>
        <button type="button"  class="add " data-bs-toggle="modal" data-bs-target="#fillUpModal">
          <img src="../../ASSETS/ICON/plus.png" alt="">
          <p>Book</p>
      </button>
    </div>
  </section>

  


<!--POP UP FILL TO ADD MORE BOOKS-->

  <div class="modal fade" id="fillUpModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- MODAL HEADER -->
      <div class="modal-header">
        <h5 class="modal-title">Add Another Book</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- MODAL BODY -->
      <div class="modal-body">
        <form id="myForm">

          <div class="mb-3">
            <label class="form-label">Book title</label>
            <input type="text" class="form-control" placeholder="Enter book title" required>
          </div>

          <div class="mb-3">
            <label class="form-label">Author name</label>
            <input type="text" class="form-control" placeholder="Enter author name" required>
          </div>

          <!-- <div class="mb-3">
            <label class="form-label">Message</label>
            <textarea class="form-control" rows="3" required></textarea>
          </div> -->

          <div class="row">

            <div class="add-genre-dropdown">
              <label class="form-label">Genre*</label>
              <button class="dropdown-btn" onclick="toggleGenre()">
                <span id="add-select-genre">Select Genre</span>
                <i class="arrow"></i>
              </button>
              <ul class="dropdown-menu" id="add-dropdown-menu-genre">
                <li onclick="addSelectGenre(this)">Fiction</li>
                <li onclick="addSelectGenre(this)">Non-Fiction</li>
                <li onclick="addSelectGenre(this)">Science Fiction</li>
                <li onclick="addSelectGenre(this)">Fantasy</li>
                <li onclick="addSelectGenre(this)">Mystery</li>
                <li onclick="addSelectGenre(this)">Romance</li>
                <li onclick="addSelectGenre(this)">Biography</li>
                <li onclick="addSelectGenre(this)">History</li>
                <li onclick="addSelectGenre(this)">Science</li>
                <li onclick="addSelectGenre(this)">Self-Help</li>
              </ul>
            </div>
            <div class="add-status-dropdown">
              <label class="form-label">Status *</label>
              <button class="dropdown-btn" onclick="toggleStatus()">
                <span id="add-select-status">Select Status</span>
                <i class="arrow"></i>
              </button>
              <ul class="dropdown-menu" id="add-dropdown-menu-status">
                <li onclick="addSelectStatus(this)">Available</li>
                <li onclick="addSelectStatus(this)">Borrowed</li>
                <li onclick="addSelectStatus(this)">Reserved</li>
              </ul>
            </div>


            <div class="mb-3">
              <label for="imageUpload" class="form-label">Upload Image</label>
              <input class="form-control" type="file" id="imageUpload" accept="image/*">
            </div>

            <div class="mb-3">
              <label class="form-label">Shelf/Location</label>
              <input type="text" class="form-control" placeholder="Enter shelf/location" required>
            </div>

          

            
          </div>


        </form>
      </div>
      <!-- MODAL FOOTER -->
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" form="myForm" class="btn btn-primary" >Submit</button>
      </div>

    </div>

  </div>
</div>

  <script src="../../ASSETS/JS/addBookDropdown.js"></script>
</body>
</html>