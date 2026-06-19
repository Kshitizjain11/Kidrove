# KidRove — AI & Robotics Summer Workshop

A full-stack web application for **KidRove's AI & Robotics Summer Workshop** — a landing page where parents can learn about the workshop and enroll their children (ages 8–14).

## Tech Stack

| Layer    | Technology                                  |
| -------- | ------------------------------------------- |
| Frontend | React 18, Vite, Axios, Tailwind CSS         |
| Backend  | Express 5, Mongoose, Zod                    |
| Database | MongoDB Atlas                               |
| Dev      | Nodemon, PostCSS, Autoprefixer              |

## Project Structure

```
gema/
├── frontend/               # React + Vite app
│   └── src/
│       ├── App.jsx          # Root component
│       ├── main.jsx         # Entry point
│       ├── index.css        # Global styles
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── HeroSection.jsx
│       │   ├── WorkshopDetails.jsx
│       │   ├── FAQ.jsx
│       │   ├── Sidebar.jsx
│       │   ├── BookingModal.jsx   # Enrollment form (axios POST)
│       │   ├── Toast.jsx
│       │   └── Footer.jsx
│       └── data/            # Static data files
│
├── backend/                # Express API
│   ├── server.js           # App entry point
│   ├── config/
│   │   └── db.js           # MongoDB connection
│   ├── model/
│   │   └── registration.js # Mongoose Enquiry model
│   ├── schema/
│   │   └── enquirySchema.js # Zod validation schema
│   └── routes/
│       └── registrationRoute.js  # POST /enquiry
│
└── .gitignore
```

## Getting Started

### Prerequisites

- **Node.js** v18+
- **npm**
- A **MongoDB Atlas** cluster (or local MongoDB)

### 1. Clone the repo

```bash
git clone https://github.com/Kshitizjain11/Kidrove.git
cd Kidrove
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

Start the server:

```bash
npx nodemon server.js
```

The API will be running at `http://localhost:3000`.

### 3. Setup Frontend

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend/` directory:

```env
VITE_API_URL=http://localhost:3000
```

Start the dev server:

```bash
npm run dev
```

The app will open at `http://localhost:5173`.

## API Reference

### `POST /enquiry`

Register a child for the workshop.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "childAge": 10,
  "workshopName": "AI & Robotics Summer Workshop"
}
```

**Validation (Zod):**

| Field          | Type   | Rules                          |
| -------------- | ------ | ------------------------------ |
| `name`         | string | min 2 characters               |
| `email`        | string | valid email, unique per user   |
| `phone`        | string | exactly 10 digits              |
| `childAge`     | number | between 8 and 14               |
| `workshopName` | string | defaults to workshop name      |

**Responses:**

| Status | Body                                                                 |
| ------ | -------------------------------------------------------------------- |
| `200`  | `{ "success": true, "message": "Registration successful. ..." }`    |
| `400`  | `{ "success": false, "message": "User already registered." }`       |
| `400`  | `{ "success": false, "errors": [...] }` (validation errors)         |
| `500`  | `{ "success": false, "message": "Something went wrong. ..." }`      |

## License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.
