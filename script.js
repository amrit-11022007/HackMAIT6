// -------- USER LOGIN / SIGNUP ----------
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const aadhar = document.getElementById("aadhar").value.trim();
    const password = document.getElementById("password").value.trim();
    const userType = document.getElementById("userType").value;

    if (!/^\d{12}$/.test(aadhar)) {
      alert("Invalid Aadhar number!");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let existingUser = users.find(u => u.aadhar === aadhar && u.password === password && u.type === userType);

    if (existingUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(existingUser));
      alert("Login successful!");
      window.location.href = userType === "admin" ? "admin.html" : "complaint.html";
    } else {
      if (confirm("User not found. Create new account?")) {
        users.push({
          aadhar,
          password,
          type: userType
        });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Account created successfully!");
      }
    }
  });
}

// -------- SUBMIT COMPLAINT ----------
const complaintForm = document.getElementById("complaintForm");
if (complaintForm) {
  complaintForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const department = document.getElementById("department").value;
    const phone = document.getElementById("phone").value;
    const imageFile = document.getElementById("image").files[0];

    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number!");
      return;
    }

    let reader = new FileReader();
    reader.onload = () => {
      let complaints = JSON.parse(localStorage.getItem("complaints")) || [];
      let user = JSON.parse(localStorage.getItem("loggedInUser"));
      complaints.push({
        id: Date.now(),
        userAadhar: user ? user.aadhar : "Anonymous",
        title,
        description,
        department,
        phone,
        image: reader.result,
        status: "Pending"
      });
      localStorage.setItem("complaints", JSON.stringify(complaints));
      alert("Complaint submitted!");
      complaintForm.reset();
    };
    if (imageFile) reader.readAsDataURL(imageFile);
    else reader.onload();
  });
}

// -------- DISPLAY COMMUNITY COMPLAINTS + SEARCH ----------
const complaintsContainer = document.getElementById("complaintsContainer");
if (complaintsContainer) {
  const renderComplaints = (filter = "") => {
    let complaints = JSON.parse(localStorage.getItem("complaints")) || [];
    complaintsContainer.innerHTML = "";
    complaints
      .filter(c => c.title.toLowerCase().includes(filter.toLowerCase()) || c.department.toLowerCase().includes(filter.toLowerCase()))
      .forEach(c => {
        let div = document.createElement("div");
        div.className = "complaint";
        div.innerHTML = `
          <h3>${c.title}</h3>
          <p>${c.description}</p>
          <p><b>Department:</b> ${c.department}</p>
          <p><b>Status:</b> ${c.status}</p>
          ${c.image ? `<img src="${c.image}" width="100">` : ""}
        `;
        complaintsContainer.appendChild(div);
      });
  };
  renderComplaints();
  document.getElementById("search").addEventListener("input", e => renderComplaints(e.target.value));
}

// -------- ADMIN DASHBOARD ----------
const adminComplaints = document.getElementById("adminComplaints");
if (adminComplaints) {
  let complaints = JSON.parse(localStorage.getItem("complaints")) || [];
  adminComplaints.innerHTML = "";
  complaints.forEach(c => {
    let div = document.createElement("div");
    div.className = "complaint";
    div.innerHTML = `
      <h3>${c.title}</h3>
      <p>${c.description}</p>
      <p><b>Department:</b> ${c.department}</p>
      <p><b>Status:</b> <span>${c.status}</span></p>
      <button onclick="updateStatus(${c.id}, 'In Progress')">In Progress</button>
      <button onclick="updateStatus(${c.id}, 'Resolved')">Resolved</button>
    `;
    adminComplaints.appendChild(div);
  });
}

function updateStatus(id, status) {
  let complaints = JSON.parse(localStorage.getItem("complaints")) || [];
  let index = complaints.findIndex(c => c.id === id);
  if (index !== -1) {
    complaints[index].status = status;
    localStorage.setItem("complaints", JSON.stringify(complaints));
    alert("Status updated!");
    location.reload();
  }
}
// ========== AUTO SLIDESHOW ==========
let slideIndex = 0;
const showSlides = () => {
  let slides = document.querySelectorAll(".slide");
  let dots = document.querySelectorAll(".dot");

  slides.forEach((slide) => (slide.style.display = "none"));
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";

  dots.forEach((dot) => dot.classList.remove("active-dot"));
  dots[slideIndex - 1].classList.add("active-dot");

  setTimeout(showSlides, 4000); // Change every 4 seconds
};
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".slideshow-container")) showSlides();
});