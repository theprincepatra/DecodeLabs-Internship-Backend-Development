# Database Integration (CRUD)

This project is the second backend development project completed during my DecodeLabs internship.

## Features

- Express.js Server
- MongoDB Atlas Connection
- Mongoose ODM
- User Schema
- CRUD Operations
- Duplicate Email Validation
- Error Handling Middleware
- RESTful API Design

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv

## Installation

Clone the repository

```bash
git clone https://github.com/your-username/DecodeLabs-Backend-Projects.git
```

Go to the project

```bash
cd 02-Database-Integration-CRUD
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

Start the server

```bash
node server.js
```

Or (if using nodemon)

```bash
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | / | Home Route |
| GET | /api/users | Get All Users |
| GET | /api/users/:id | Get User By ID |
| POST | /api/users | Create User |
| PUT | /api/users/:id | Update User |
| DELETE | /api/users/:id | Delete User |

## Sample POST Request

```json
{
    "name":"Prince",
    "email":"prince@gmail.com",
    "age":20
}
```

## Author

Prince Patra