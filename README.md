<h1>ProductStore: A PERN Stack CRUD App</h1>
<p>A full-stack CRUD (Create, Read, Update, Delete) application built with PostgreSQL, Express, React, and Node.js, styled with TailwindCSS + DaisyUI, and featuring Zustand for state management, rate limiting, and bot detection.</p>

<h2> Features</h2>
<ul>
  <li> Create, Read, Update, and Delete operations</li>
  <li> PostgreSQL as the database</li>
  <li> Express.js for backend API</li>
  <li> React with Vite for frontend</li>
  <li> Zustand for global state management</li>
  <li> TailwindCSS + DaisyUI for UI</li>
  <li> Rate limiting and bot detection</li>
</ul>

<h2> Tech Stack</h2>
<p><strong>Frontend:</strong> React (Vite) + TailwindCSS + DaisyUI + Zustand</p>
<p><strong>Backend:</strong> Node.js + Express.js</p>
<p><strong>Database:</strong> PostgreSQL</p>
<p><strong>Security:</strong> Rate limiting & bot detection</p>

<h2>Installation & Setup</h2>

<h3>1️ Clone the repository</h3>
<pre><code>git clone https://github.com/your-username/your-repo.git
cd your-repo</code></pre>

<h3>2️ Backend Setup</h3>
<pre><code>cd backend
npm install</code></pre>

<p>Create a <code>.env</code> file in the <code>backend/</code> folder:</p>
<pre><code>DATABASE_URL=your_postgres_connection_string
PORT=5000</code></pre>

<p>Start the backend:</p>
<pre><code>npm run dev</code></pre>

<h3>3️ Frontend Setup</h3>
<pre><code>cd frontend
npm install</code></pre>

<p>Start the frontend:</p>
<pre><code>npm run dev</code></pre>

<h2>API Endpoints</h2>
<table>
  <tr>
    <th>Method</th>
    <th>Endpoint</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>GET</td>
    <td><code>/api/items</code></td>
    <td>Fetch all items</td>
  </tr>
  <tr>
    <td>GET</td>
    <td><code>/api/items/:id</code></td>
    <td>Get item by ID</td>
  </tr>
  <tr>
    <td>POST</td>
    <td><code>/api/items</code></td>
    <td>Create a new item</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td><code>/api/items/:id</code></td>
    <td>Update an item</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td><code>/api/items/:id</code></td>
    <td>Delete an item</td>
  </tr>
</table>







