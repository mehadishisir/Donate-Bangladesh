// Navbar balance element
const navbarBalanceEl = document.querySelector("nav h4"); // assuming <h4> contains balance
let navbarBalance = parseInt(navbarBalanceEl.innerText); // initial balance

// Donation cards
const cards = document.querySelectorAll("main div.flex.flex-row"); // donation cards

cards.forEach((card) => {
  const donateBtn = card.querySelector("button"); // Donate Now button
  const inputEl = card.querySelector("input"); // donation amount input
  const cardBalanceEl = card.querySelector("div.flex.items-center h4"); // card balance element

  donateBtn.addEventListener("click", () => {
    let donationAmount = parseInt(inputEl.value);
    if (isNaN(donationAmount) || donationAmount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    if (donationAmount > navbarBalance) {
      alert("Insufficient balance in navbar!");
      return;
    }

    // Update navbar balance
    navbarBalance -= donationAmount;
    navbarBalanceEl.innerText = navbarBalance;

    // Update card balance
    let cardBalance = parseInt(cardBalanceEl.innerText);
    cardBalance += donationAmount;
    cardBalanceEl.innerText = cardBalance;

    // Add to transaction history
    const historyList = document.getElementById("transection-history");
    const time = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
      hour12: true,
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const cardTitle = card.querySelector("h1").innerText;
    const li = document.createElement("li");
    li.innerText = `${donationAmount} BDT donated to "${cardTitle}" on ${time}`;
    historyList.prepend(li); // latest on top

    // clear input
    inputEl.value = "";
  });
});
