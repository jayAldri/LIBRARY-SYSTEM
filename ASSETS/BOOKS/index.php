<link href="../../ASSETS/BOOTSTRAP-v5.3/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="../../ASSETS/CSS/header.css">
<link rel="stylesheet" href="../../ASSETS/CSS/books.css">


<?php include "../../header.php"?>


<section class="sect3">
    <div class="monitor">

      <div class="monitor2">
        <img src="../../ASSETS/IMAGES/ICONS/book.png" alt="">
        <div class="monitor-content">
          <p id="total-books">2</p>
          <p>Total books</p>
        </div>
      </div>

      <div class="monitor2">
        <img src="../../ASSETS/IMAGES/ICONS/book (1).png" alt="">
        <div class="monitor-content">
          <p id="available-books">2</p>
          <p>Available books</p>
        </div>
      </div>

      <div class="monitor2">
        <img src="../../ASSETS/ICON/stopwatch.png" alt="">
        <div class="monitor-content">
          <p id="borrowed-books">2</p>
          <p>Borrowed books</p>
        </div>
      </div>

      <div class="monitor2">
        <img src="../../ASSETS/IMAGES/ICONS/bookmark.png" alt="">
        <div class="monitor-content">
          <p id="reserved-books">2</p>
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


      <div class="genre-dropdown">
        <button class="dropdown-btn" onclick="toggleStatus()">
          <span id="selected-genre">All Status</span>
          <i class="arrow"></i>
        </button>

        <ul class="dropdown-menu" id="dropdown-menu-status">
          
          <li onclick="selectGenre(this)">Available</li>
          <li onclick="selectGenre(this)">Borrowed</li>
          <li onclick="selectGenre(this)">Reserved</li>
        </ul>
      </div>

      


    </div>
  </section>

  <section class="sect3">
    <div class="sect3-content">
      
    </div>
  </section>

  <script src="../../ASSETS/JS/search-dropdown.js"></script>
