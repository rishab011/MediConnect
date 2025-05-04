# 🏥 MediConnect

**MediConnect** is a full-stack web application designed to connect patients and doctors on a centralized platform. Patients can browse doctors, give reviews, and book consultations, while doctors can manage their profiles, view reviews, and keep track of patients.

---

## 🚀 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password encryption

---

## 📁 Project Structure
- /client → React frontend
- /server.js → Express server entry
- /routes → API endpoints
- /models → Mongoose schemas
- /middleware → Auth middlewares
- /config → DB keys and config
- .env → Environment variables


---

## ⚙️ Installation & Setup

### 1. Clone the repo
```bash
git clone https://github.com/rishab011/mediconnect.git
cd mediconnect
```
### 2. Backend Setup
```bash
npm install
```

### 3. Create .env file
```bash
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 4. Run Backend Server
```bash
npx nodemon server.js
```


### 5. Frontend Setup
```bash
cd client
npm install
npm start
```

# 🌐 Features
- 👨‍⚕️ Doctor and Patient Login/Signup

- 📝 Doctors can update profiles and track patients

- ⭐ Patients can browse doctors and leave reviews

- 🔐 Secure authentication using JWT & bcrypt

- 📊 Dashboard for doctors showing handled cases, ratings, etc.

# 📷 Screenshots
![Screenshot 2025-05-04 114254](https://github.com/user-attachments/assets/1f144aac-42e5-49cd-a605-4b46dee5f94a)

![Screenshot 2025-05-04 114307](https://github.com/user-attachments/assets/a87d59af-b48f-4444-960a-59d5a97ca45d)

![Screenshot 2025-05-04 114344](https://github.com/user-attachments/assets/36080711-faad-4ffd-837e-8b928d259f4d)

![Screenshot 2025-05-04 114323](https://github.com/user-attachments/assets/deaea7c3-a7ec-4bb4-b660-ee07843dbe5f)

![Screenshot 2025-05-04 114334](https://github.com/user-attachments/assets/990480d5-478c-47a5-92b1-729861d37b60)
