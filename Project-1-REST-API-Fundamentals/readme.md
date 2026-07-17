# REST API Fundamentals

A simple REST API built using **Node.js** and **Express.js**.

## Features

- Create a local Express server
- GET all users
- GET user by ID
- POST a new user
- PUT update user
- DELETE user
- JSON responses
- Proper HTTP status codes
- Error handling middleware

## Tech Stack

- Node.js
- Express.js
- JavaScript

## Installation

Clone the repository

```bash
git clone https://github.com/yourusername/REST-API-Fundamentals.git
```

Go to project directory

```bash
cd REST-API-Fundamentals
```

Install dependencies

```bash
npm install
```

Run the project

```bash
node server.js
```

The server will start at

```
http://localhost:3000
```

## API Endpoints

### Home

```
GET /
```

### Get All Users

```
GET /api/users
```

### Get User By ID

```
GET /api/users/:id
```

### Create User

```
POST /api/users
```

Request Body

```json
{
    "name":"John",
    "email":"john@example.com",
    "age":21
}
```

### Update User

```
PUT /api/users/:id
```

### Delete User

```
DELETE /api/users/:id
```

## Author

Prince Patra