📌 CRUD App (PERN Stack)
A full-stack CRUD (Create, Read, Update, Delete) application built with PostgreSQL, Express, React, and Node.js, styled with TailwindCSS + DaisyUI, and featuring Zustand for state management, rate limiting, and bot detection.

🚀 Features
✅ Create, Read, Update, and Delete operations
✅ PostgreSQL as the database
✅ Express.js for backend API
✅ React with Vite for frontend
✅ Zustand for global state management
✅ TailwindCSS + DaisyUI for UI
✅ Rate limiting and bot detection

🛠 Tech Stack
Frontend: React (Vite) + TailwindCSS + DaisyUI + Zustand
Backend: Node.js + Express.js
Database: PostgreSQL
Security: Rate limiting & bot detection

🏗 Installation & Setup
1️⃣ Clone the repository
sh
Copy
Edit
git clone https://github.com/your-username/your-repo.git
cd your-repo
2️⃣ Backend Setup
sh
Copy
Edit
cd backend
npm install
Create a .env file in the backend/ folder:
env
Copy
Edit
DATABASE_URL=your_postgres_connection_string
PORT=5000
Start the backend:
sh
Copy
Edit
npm run dev
3️⃣ Frontend Setup
sh
Copy
Edit
cd frontend
npm install
Start the frontend:
sh
Copy
Edit
npm run dev
🔥 API Endpoints
Method	Endpoint	Description
GET	/api/items	Fetch all items
GET	/api/items/:id	Get item by ID
POST	/api/items	Create a new item
PUT	/api/items/:id	Update an item
DELETE	/api/items/:id	Delete an item
🎨 UI Preview
(Screenshot or GIF of your app)

🤝 Contributing
Feel free to fork, open issues, or submit PRs.

