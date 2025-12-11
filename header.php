<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Library System</title>

  <link href="../../ASSETS/BOOTSTRAP-v5.3/css/bootstrap.min.css" rel="stylesheet">
  <script src="../../ASSETS/BOOTSTRAP-v5.3/js/bootstrap.bundle.min.js"></script>
  <script src="../../ASSETS/JQUERY/jquery-3.6.0.min.js"></script>


  <script src="ASSETS/JQUERY/jquery-3.6.0.min.js"></script>

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

            <div class="dropdown col-sm-6 mt-3">
              <label class="form-label">Genre*</label>
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Select Genre
              </button>
              <ul class="dropdown-menu">
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
              <label class="form-label">Status *</label>
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Select Status
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Available</a></li>
                <li><a class="dropdown-item" href="#">Borrowed</a></li>
                <li><a class="dropdown-item" href="#">Reserved</a></li>
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
        <button type="submit" form="myForm" class="btn btn-primary">Submit</button>
      </div>

    </div>

  </div>
</div>

  <script src="ASSETS/JS/search-dropdown.js"></script>
</body>
</html>