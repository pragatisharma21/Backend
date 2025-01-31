# Backend Setup Guide

## 📌 Project Overview
This backend provides APIs for user authentication, including file uploads using both **local storage** and **ImageKit**. The local storage upload is commented out in the code, and ImageKit is used by default.

## 🛠️ Tech Stack
- **Node.js** (Express.js)
- **MongoDB** (Mongoose ORM)
- **Multer** (For file uploads)
- **ImageKit** (For cloud file storage)
- **Dotenv** (For environment variables)
- **Nodemon** (For development server)

## 🚀 Getting Started
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Ershivnandan/multerImagekit.git
cd multerImagekit
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add the following variables:
```env
PORT=8080
CLIENT_URI= # Your client domain
MONGO_URI= # Your MongoDB connection URI
IMAGEKIT_API= # Your ImageKit API key
PRIVATE_KEY= # Your ImageKit private key
IMAGKIT_URLENDPOINT= # Your ImageKit URL endpoint
```

### 4️⃣ Start the Development Server
Use **nodemon** for live reloading during development:
```sh
npm run dev
```
This runs:
```sh
nodemon server.js
```

## 📂 Project Structure
```
├── src/
│   ├── config/
│   │   ├── Db.js             # MongoDB setup
│   │   ├── ImageKit.js       # ImageKit setup
│   ├── Controllers/
│   │   ├── UserController.js # User authentication logic
│   ├── Middlewares/
│   │   ├── Upload.js         # Multer setup for file uploads
│   ├── Models/
│   │   ├── UserModel.js      # User schema (MongoDB)
│   ├── Routes/
│   │   ├── UserRoutes.js     # User routes
│   ├── Utils/
│   │   ├── UploadToImageKit.js # Helper function to upload files to ImageKit
├── Uploads/
│   ├── 1736675592167.png     # Sample image uploaded using multer & fs
├── .env                      # Environment variables (Ignored in Git)
├── Server.js                 # Main server file
├── package.json              # Dependencies & scripts
```

## 🔧 API Endpoints
### 📝 User Signup
**Endpoint:** `POST /users/signup`

**Request Body (multipart/form-data):**
```
name: "John Doe"
email: "johndoe@example.com"
password: "securepassword"
file: [Upload Any File]
```

**Response:**
```json
{
  "message": "User registered successfully",
  "user": {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "avatar": "https://ik.imagekit.io/..."
  }
}
```

## 📌 Notes
- If you want to use **local file storage**, uncomment the necessary lines in `UserController.js` and `upload.js`.
- Ensure that the ImageKit API keys are correctly set up in `.env`.
- The uploaded file will be stored in ImageKit, and its URL will be saved in the database.

## 💡 Contribution
Feel free to contribute to this project by creating issues or submitting pull requests.

## 📄 License
This project is licensed under the **MIT License**.

