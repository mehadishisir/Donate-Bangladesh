// when i click button go to another html page
// document.getElementById("donation-btn").addEventListener("click", function () {
//   window.location.href = "index.html";
// });
// document.getElementById("history-btn").addEventListener("click", function () {
//   window.location.href = "history.html";
// });
document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "blog.html";
});
document.getElementById("home-btn").addEventListener("click", function () {
  window.location.href = "index.html";
});
document.getElementById("donation-btn").addEventListener("click", function () {
  showSectionByid("donation-section");
});
document.getElementById("history-btn").addEventListener("click", function () {
  showSectionByid("transection-history");
});
