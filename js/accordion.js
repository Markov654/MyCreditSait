
let accTask = document.querySelectorAll(".accordion");


for (i = 0; i < accTask.length; i++) {
  accTask[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panelText = this.nextElementSibling;
    if (panelText.style.display === "block") {
      panelText.style.display = "none";
    } else {
      panelText.style.display = "block";
    }
  });
}

