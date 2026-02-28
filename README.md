🚀 Blog API (Node.js + TypeScript)

A scalable RESTful Blog API built using Node.js, Express, MongoDB, TypeScript, JWT Authentication, and Zod validation following clean architecture (Controller + Service pattern).



📌 Features

✅ User Registration

✅ User Login (JWT Authentication)

✅ Create Blog Post (title, content, tags)

✅ Get All Blog Posts (Pagination + Search by title)

✅ Get Single Blog Post by ID

✅ Update Own Blog Post (Author Only)

✅ Delete Own Blog Post (Author Only)

✅ Protected Routes

✅ Clean Modular Architecture

✅ Zod Validation Middleware

✅ Centralized Error Handling


🛠 Tech Stack

Node.js

Express.js

TypeScript

MongoDB + Mongoose

JWT (jsonwebtoken)

bcrypt

Zod

http-status-codes


1️⃣ Clone Repository

git clone <your-repo-url>
cd <project-folder>

2️⃣ Install Dependencies

npm install

3️⃣ Setup Environment Variables
Create a .env file in project root:

PORT=8000

MONGO_URI=mongodb://localhost:27017/Blog-Api

JWT_SECRETKEY=your_super_secret_key


4️⃣ Run Project

npm run dev

Server will run on:
http://localhost:8000

🔐 Authentication

After successful login, you will receive a JWT token.
Include it in headers:

Authorization: Bearer <your_token>

📮 API Endpoints
👤 Auth Routes

POST	/api/v1/user/register	Register User

POST	/api/v1/user/login	Login User

📝 Blog Post Routes


POST	/api/v1/post/add	Create Blog Post (Auth Required)

GET	/api/v1/post	Get All Posts (Pagination + Search)

GET	/api/v1/post/:id	Get Single Post

PUT	/api/v1/post/:id	Update Own Post (Auth Required)

DELETE	/api/v1/post/:id	Delete Own Post (Auth Required)


🔎 Pagination & Search
Get Posts with Pagination

GET /api/v1/post?page=1&limit=10

Search Posts by Title

GET /api/v1/post?search=Node JS Developer

📝 Example Create Post Request

{
  "title": "Understanding JWT",
  "content": "JWT is used for authentication in modern applications.",
  "tags": ["node", "jwt", "backend"]
}


👨‍💻 Author

Sahil Vaidya

Backend Developer (Node Js)
