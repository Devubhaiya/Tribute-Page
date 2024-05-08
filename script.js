
document.addEventListener("DOMContentLoaded", function() {
var showMoreBtn = document.getElementById("show-more-btn");
var additionalInfo = document.getElementById("additional-info");

showMoreBtn.addEventListener("click", function() {
if (additionalInfo.style.display === "none") {
  additionalInfo.style.display = "block";
  showMoreBtn.textContent = "Show Less";
} else {
  additionalInfo.style.display = "none";
  showMoreBtn.textContent = "Show More";
}
});
});
