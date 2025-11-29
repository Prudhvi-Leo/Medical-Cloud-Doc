# 🚀 MediCloudConnect – Doctor Appointment Booking System

LIVE : https://medical-cloud-doc.vercel.app/

A full-stack **MERN** based appointment booking platform for doctors, patients, and admins.

---

## 🌟 Overview

**MediCloudConnect** is a complete healthcare appointment management system where:

- 🧑‍⚕️ **Doctors** manage availability, appointments, and dashboard insights  
- 👤 **Users** book appointments, update profiles, make dummy payments  
- 🛠️ **Admins** add doctors, manage availability & view platform stats  

---

## ✨ Features

### 👤 User Features
- JWT-based authentication (Register/Login)
- Browse all doctors
- Filter by speciality
- Book appointments (dynamic 30-min slots)
- Cancel appointments
- View booking history
- Update profile (Cloudinary image upload)
- Dummy Razorpay payment simulation

### 🧑‍⚕️ Doctor Features
- Login and manage appointments
- Mark appointment Completed/Cancelled
- Dashboard: earnings, patients count, appointments stats
- Update profile: availability, fees, address, etc.

### 🛠️ Admin Features
- Admin login
- Add new doctors
- Manage doctor availability
- View all doctors
- View all appointments
- Dashboard overview

---

## 🛠️ Tech Stack

### Frontend
- React 19  
- Tailwind CSS  
- React Router DOM 7  
- Axios  
- React Toastify  

### Backend
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT Authentication  
- Multer  
- Cloudinary  
- Razorpay (Simulated)  

### Deployment
- **Frontend** → Vercel  
- **Admin** → Vercel  
- **Backend** → Render / Railway / Local server  

---

## 📁 Project Structure

```
Doc/
│
├── frontend/      → Patient App (React)
│
├── admin/         → Admin Dashboard (React)
│
└── backend/       → Node + Express API
```

---

## ⚙️ Local Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourname/MediCloudConnect.git
cd MediCloudConnect
```

---

## 🔧 Backend Setup

### 2️⃣ Install dependencies & run backend
```bash
cd backend
npm install
npm run dev
```

Create `.env` file inside **backend/**
```
MONGODB_URI=
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_SECERET_KEY=
ADMIN_EMAIL=
ADMIN_PASSWORD=
JWT_SECRET=
CURRENCY=
```

Backend runs on **http://localhost:5000**

---

## 💻 Frontend Setup

### 3️⃣ Install dependencies & run frontend
```bash
cd frontend
npm install
npm run dev
```

Create **frontend/.env**
```
VITE_BACKEND_URL=http://localhost:5000
```

Runs on **http://localhost:5173**

---

## 🧑‍💼 Admin App Setup
(Will update after admin folder details.)

---

## 🔌 API Routes Overview

### **User Routes** (`/api/user`)
- POST /register
- POST /login
- GET /get-profile
- POST /update-profile
- POST /book-appointment
- GET /appointments
- POST /cancel-appointment
- POST /payment-razorpay
- POST /verifyRazorpay

### **Doctor Routes** (`/api/doctor`)
- POST /login
- GET /appointments
- POST /complete-appointment
- POST /cancel-appointment
- GET /dashboard
- GET /profile
- POST /update-profile

### **Admin Routes** (`/api/admin`)
- POST /login
- POST /add-doctor
- GET /appointments
- GET /dashboard
- POST /change-availability

---

## 🛡️ Required Environment Variables

```
MONGODB_URI=
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_SECERET_KEY=
ADMIN_EMAIL=
ADMIN_PASSWORD=
JWT_SECRET=
CURRENCY=
```

---

### 🧑‍💼 Admin Panel – Overview
```
The Admin Panel is a dedicated React application that allows platform administrators to manage the doctor appointment system. It provides full control over doctors, appointments, and global platform data.

This panel is built with React 19, React Router v7, Axios, and React Toastify, and is deployed separately on Vercel.
```

### 🧩 Features Included
## 💼 Admin Features
```
Admin Login with JWT Authentication

View Dashboard Metrics

Total Doctors

Total Appointments

Total Patients

Latest Appointments

Add New Doctors (with Cloudinary image upload)

View and Manage All Doctors

View Full Appointment List

Update Doctor Availability

🧑‍⚕️ Doctor Features (Inside Admin Panel Login)

Doctor Dashboard (Earnings, Appointments Count, Patients, Recent Appointments)

View All Appointments

Complete or Cancel Appointments

Update Doctor Profile (Fees, Address, Availability, etc.)
```
### 🗂️ Folder Structure
```
admin/
│── src/
│   ├── pages/
│   │   ├── admin/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── AddDoctor.jsx
│   │   │   ├── DoctorsList.jsx
│   │   │   ├── AllAppointments.jsx
│   │   ├── Doctor/
│   │   │   ├── DoctorDashboard.jsx
│   │   │   ├── DoctorAppointment.jsx
│   │   │   ├── DoctorProfile.jsx
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   ├── context/
│   │   ├── AdminContext.jsx
│   │   ├── DoctorContext.jsx
│   │   ├── AppContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│── package.json
│── README.md

```
## 🚀 Deployment Guide

### Frontend / Admin (Vercel)
1. Push to GitHub  
2. Import project on Vercel  
3. Add environment variable:  
```
VITE_BACKEND_URL=https://your-backend-url
```
4. Deploy


### Backend (Render/Railway)
- Upload backend folder or connect GitHub repo  
- Add all `.env` values  
- Deploy  
- Copy the backend URL & update Vercel frontend env variable  

---

## 🙋‍♂️ Author

**Prudhvi**  
Full Stack MERN Developer  
Specialized in backend, cloud integration & scalable systems.


