document.getElementById("add-money-btn").addEventListener("click", function () {
  document.getElementById("for-add-money").classList.remove("heide");
  document.getElementById("for-cash-out").classList.add("heide");
});
document.getElementById("cash-out-btn").addEventListener("click", function () {
  document.getElementById("for-add-money").classList.add("heide");
  document.getElementById("for-cash-out").classList.remove("heide");
});

// for calculating the total amount
document.getElementById("add-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const amount = parseFloat(document.getElementById("amount").value);
  const balance = parseFloat(document.getElementById("t-balance").textContent);
  if (document.getElementById("pin").value === "1234") {
    const newBalance = balance + amount;
    document.getElementById("t-balance").textContent = newBalance;
    document.getElementById("amount").value = "";
    document.getElementById("pin").value = "";
  } else alert("Incorrect PIN");
});

// for calculating the total amount
document.getElementById("cash-out-b").addEventListener("click", function (e) {
  e.preventDefault();
  const amount = parseFloat(document.getElementById("amount2").value);
  console.log(amount);
  const balance = parseFloat(document.getElementById("t-balance").textContent);
  console.log(balance);
  if (document.getElementById("pin2").value === "1234") {
    const newBalance2 = balance - amount;
    document.getElementById("t-balance").textContent = newBalance2;
    amount2.value = "";
    document.getElementById("pin2").value = "";
  } else alert("Incorrect PIN");
});
