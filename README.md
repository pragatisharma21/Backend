📌 Backend Project - Setup Guide
🚀 Prerequisites
Before running this project, ensure you have the following installed:

Node.js (v16 or later) - Download
npm or yarn (Package Manager)
MongoDB (If using MongoDB locally, ensure it’s running)
Postman (For API testing - optional)
🛠 Installation & Setup
1️⃣ Clone the repository:

sh
Copy
Edit
git clone <repo-url>
cd <project-folder>
2️⃣ Install dependencies:

sh
Copy
Edit
npm install
3️⃣ Set up environment variables:
Create a .env file in the root directory and configure:

sh
Copy
Edit
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret_key>
4️⃣ Run the server:

sh
Copy
Edit
npm run dev
(Default port is 5000, change in .env if needed)

📌 Project Structure
bash
Copy
Edit
📂 backend-project
 ┣ 📂 src
 ┃ ┣ 📂 config       # Database & other configurations  
 ┃ ┣ 📂 controllers  # Business logic for APIs  
 ┃ ┣ 📂 middleware   # Authentication & other middlewares  
 ┃ ┣ 📂 models       # Mongoose/Database models  
 ┃ ┣ 📂 routes       # API routes  
 ┃ ┗ 📂 utils        # Helper functions  
 ┣ 📄 .env           # Environment variables  
 ┣ 📄 server.js      # Entry point  
 ┣ 📄 package.json   # Dependencies & scripts  
 ┗ 📄 README.md      # Project documentation  
🔥 API Endpoints
Method	Route	Description	Auth Required
POST	/auth/signup	Register new user	❌
POST	/auth/login	User login & JWT token	❌
GET	/users	Get all users	✅
POST	/data	Add new data entry	✅
(For full API details, refer to routes folder)

✨ Technologies Used
Node.js + Express.js
MongoDB + Mongoose
JWT Authentication
Bcrypt for Password Hashing
dotenv for Environment Variables
