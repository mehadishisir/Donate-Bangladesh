// function for changing button color
function changeButtonColor(id) {
  document.getElementById("donation-btn").classList.remove("bg-[#B4F461]");
  document.getElementById("history-btn").classList.remove("bg-[#B4F461]");
  //    adding color to the clicked button
  document.getElementById(id).classList.add("bg-[#B4F461]");
}
function showSectionByid(id) {
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("transection-history").classList.add("hidden");

  // show section by id
  document.getElementById(id).classList.remove("hidden");
}

// when i click button go to another html page
// function goToPage(url) {
//     window.location

//         .href = url;
// }
