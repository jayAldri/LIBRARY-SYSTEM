
function toggleStatus() {
  document.getElementById("dropdown-menu-status").style.display = document.getElementById("dropdown-menu-status").style.display === "block" ? "none" : "block";
}




function toggleDropdown() {
  document.getElementById("dropdown-menu").style.display =
    document.getElementById("dropdown-menu").style.display === "block"
      ? "none"
      : "block";
}








function selectGenre(element) {

  document.querySelectorAll(".dropdown-menu li").forEach(li => {
    li.classList.remove("active");
  });


  element.classList.add("active");


  document.getElementById("selected-genre").textContent = element.textContent;


  document.getElementById("dropdown-menu").style.display = "none";
}

function selectStatus(element) {

  document.querySelectorAll(".dropdown-menu li").forEach(li => {
    li.classList.remove("active");
  });


  element.classList.add("active");


  document.getElementById("selected-status").textContent = element.textContent;


  document.getElementById("dropdown-menu-status").style.display = "none";
}

document.addEventListener("click", function(e) {
  if (!document.querySelector(".genre-dropdown").contains(e.target)) {
    document.getElementById("dropdown-menu").style.display = "none";
  }
});

document.addEventListener("click", function(e) {
  if (!document.querySelector(".status-dropdown").contains(e.target)) {
    document.getElementById("dropdown-menu-status").style.display = "none";
  }
});