# 🌐 Citizen Complaint Portal

A web-based platform that enables citizens to report local issues directly to government departments and track their resolution.  
This project promotes transparency, accountability, and efficient governance — supporting **UN Sustainable Development Goals (SDG) 16** and **SDG 11**.

---

## 📌 Table of Contents
- [Problem Statement](#-problem-statement)
- [Abstract](#-abstract)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [How It Works](#-how-it-works)
- [Sustainable Development Goals](#-sustainable-development-goals)
- [Future Improvements](#-future-improvements)
- [Contributors](#-contributors)

---

## ❗ Problem Statement

Citizens often face challenges in reporting local issues such as damaged roads, waste accumulation, or irregular utilities.  
Existing systems are slow, unresponsive, and lack transparency.  
People remain unaware of complaint status or departmental actions.  

Thus, there is a need for a **centralized and transparent digital platform** where citizens can raise concerns, tag the appropriate departments, and view community-wide issues — strengthening accountability and trust in local governance.

---

## 💡 Abstract

The **Citizen Complaint Portal** allows users to log in securely using their Aadhaar number and phone number.  
They can submit complaints with a short description, select the relevant department, and upload images as evidence.  
All complaints are stored locally (via `localStorage`), visible to both users and admins.  

An **Admin Dashboard** enables officials to view, filter, and update the status of each complaint (Pending, In Progress, Resolved).  
By improving citizen participation and institutional responsiveness, the portal supports:
- **SDG 16: Peace, Justice and Strong Institutions**
- **SDG 11: Sustainable Cities and Communities**

---

## ⚙️ Features

- 🔐 **Aadhaar & Phone Login Validation**  
  Ensures identity verification and secure access.

- 📝 **Complaint Submission Form**  
  Allows users to enter title, description, and department.

- 📸 **Image Upload & Preview**  
  Attach proof of the issue visually.

- 🌍 **Community Complaint Page**  
  Displays complaints submitted by all users for transparency.

- 🧑‍💼 **Admin Dashboard**  
  Lets officials update complaint status.

- 🔍 **Search Functionality**  
  Quickly find complaints by keyword or department.

- 💾 **LocalStorage and Database Integration**  
  Stores user info, complaints, and updates.

- 🎨 **Responsive UI**  
  Clean, modern, and mobile-friendly design.

---

## 🧰 Tech Stack

| Component | Technology Used |
|------------|----------------|
| Frontend | HTML5, CSS3, JavaScript, Flask, MySQL |
| Storage | Browser `localStorage`, MySQL |
| Design | Responsive layout with Flexbox and CSS Grid |
| Validation | Regex for Aadhaar (12 digits) and Phone (10 digits) |

---

## 🔄 How It Works

1. **User Login**  
   - Aadhaar and phone number validated on login.  
   - Data stored locally for session management.

2. **Complaint Submission**  
   - User fills form, attaches an image, and selects department.  
   - Complaint saved in `localStorage`.

3. **Community Page**  
   - Fetches all complaints and displays them in card format.  
   - Allows searching/filtering.

4. **Admin Dashboard**  
   - Officials can log in, view all complaints, and change their status.

---

## 🌏 Sustainable Development Goals

| SDG | Name | Contribution |
|------|------|--------------|
| **16** | Peace, Justice and Strong Institutions | Increases transparency and citizen participation in governance. |
| **11** | Sustainable Cities and Communities | Helps maintain urban infrastructure and cleanliness through active feedback. |

> _“Building strong institutions begins with listening to the people they serve.”_

---

## 🚀 Future Improvements

- ✅ Real-time database ( MongoDB )
- ✅ Role-based authentication (citizen / official)
- ✅ Complaint tracking via ID
- ✅ Integration with UIDAI API for Aadhaar verification
- ✅ Email or SMS notifications on status updates

---

## 👩‍💻 Contributors

- **Amrit [Lead Developer & Designer]**  
  Student | Web Developer | Loves exploring new ideas and solutions.
- **Kartik [Back End Developer Developer & Pitcher]**  
  Student | Back End Developer | Passionate about Data Science and Machine Learning.
- **Aman [Front End Developer & Designer]**  
  Student | Web Developer | Exploring the technologies and finding what suites him.
- **Yash [App Developer & Pitcher]**  
  Student | App Developer | Passionate about civic technology and innovation.

---

### 🏁 License
This project is created under MIT license for educational and social innovation purposes.
