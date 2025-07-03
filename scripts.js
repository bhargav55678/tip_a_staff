const staffData = {
  "John Doe": {
    role: "Waiter",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    qr: "https://api.qrserver.com/v1/create-qr-code/?data=JohnTipLink&size=200x200"
  },
  "Priya Sharma": {
    role: "Receptionist",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    qr: "https://api.qrserver.com/v1/create-qr-code/?data=PriyaTipLink&size=200x200"
  },
  "Ravi Kumar": {
    role: "Housekeeping",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    qr: "https://api.qrserver.com/v1/create-qr-code/?data=RaviTipLink&size=200x200"
  },
  "Anjali Nair": {
    role: "Chef",
    image: "https://randomuser.me/api/portraits/women/34.jpg",
    qr: "https://api.qrserver.com/v1/create-qr-code/?data=AnjaliTipLink&size=200x200"
  }
};

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.add("hidden"));
  document.getElementById(screenId).classList.remove("hidden");
}

function setupStaffList() {
  const staffList = document.getElementById("staffList");
  staffList.innerHTML = "";
  Object.keys(staffData).forEach((name) => {
    const staff = staffData[name];
    const card = document.createElement("div");
    card.className = "staff-card";
    card.innerHTML = `
      <img src="${staff.image}" alt="${name}" />
      <p><strong>${name}</strong><br>${staff.role}</p>
    `;
    card.onclick = () => showTipScreen(name);
    staffList.appendChild(card);
  });
}

function showTipScreen(name) {
  const staff = staffData[name];
  document.getElementById("tipProfile").innerHTML = `
    <img class="profile-pic" src="${staff.image}" />
    <p><strong>${name}</strong><br>${staff.role}<br>"Happy to serve you!"</p>
  `;
  document.getElementById("qrCode").src = staff.qr;
  showScreen("tipScreen");
}

function submitFeedback() {
  const comments = document.getElementById("comments").value;
  alert("Thanks for your feedback!\n\nComments: " + comments);
  showScreen("venueScreen");
}

window.onload = () => {
  setupStaffList();
  showScreen("venueScreen");
};
