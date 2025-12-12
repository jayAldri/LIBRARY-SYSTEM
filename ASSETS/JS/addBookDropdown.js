function toggleStatus() {
  document.getElementById("add-dropdown-menu-status").style.display = document.getElementById("add-dropdown-menu-status").style.display === "block" ? "none" : "block";
}

function toggleGenre() {
  document.getElementById("add-dropdown-menu-genre").style.display = document.getElementById("add-dropdown-menu-genre").style.display === "block" ? "none" : "block";
}

function addSelectGenre(element) {
  document.querySelectorAll(".dropdown-menu li").forEach (li => {
    li.classList.remove("active");
  });

  element.classList.add("active");

  document.getElementById("add-select-genre").textContent = element.textContent;

  document.getElementById("add-dropdown-menu-genre").style.display = "none";


}

function addSelectStatus(element) {

  document.querySelectorAll(".dropdown-menu li").forEach(li => {
    li.classList.remove("active");
  });


  element.classList.add("active");


  document.getElementById("add-select-status").textContent = element.textContent;


  document.getElementById("add-dropdown-menu-status").style.display = "none";
}

document.addEventListener("click", function(e) {
  if (!document.querySelector(".add-genre-dropdown").contains(e.target)) {
    document.getElementById("add-dropdown-menu-genre").style.display = "none";
  }
});

document.addEventListener("click", function(e) {
  if (!document.querySelector(".add-status-dropdown").contains(e.target)) {
    document.getElementById("add-dropdown-menu-status").style.display = "none";
  }
});