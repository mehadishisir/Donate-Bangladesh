// add utilities to button

function showSectionById(id) {
  const donationSection = document.getElementById("donation-section");
  const historySection = document.getElementById("transection-history");
  const donationBtn = document.getElementById("donation-btn");
  const historyBtn = document.getElementById("history-btn");

  // hide all sections
  donationSection.classList.add("hidden");
  historySection.classList.add("hidden");

  // show the selected section
  document.getElementById(id).classList.remove("hidden");

  // update button colors
  if (id === "donation-section") {
    donationBtn.classList.add("bg-[#B4F461]", "text-gray-900");
    historyBtn.classList.remove("bg-[#B4F461]", "text-gray-900");
  } else if (id === "transection-history") {
    historyBtn.classList.add("bg-[#B4F461]", "text-gray-900");
    donationBtn.classList.remove("bg-[#B4F461]", "text-gray-900");
  }
}

// Event listeners
document.getElementById("donation-btn").addEventListener("click", function () {
  showSectionById("donation-section");
});

document.getElementById("history-btn").addEventListener("click", function () {
  showSectionById("transection-history");
});
