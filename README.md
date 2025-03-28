# EmployWise-App
# EmployWise App

EmployWise is a simple React-based application that allows user authentication and user management using the Reqres API.

## Features
- User Login and Authentication
- Fetch and Display User List
- Edit User Information
- Delete User
- Pagination for User List

## Installation

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Clone the Repository
```sh
git clone https://github.com/your-repo/employwise-app.git
cd employwise-app
```

### Install Dependencies
```sh
npm install
```

## Running the Project
To start the development server, run:
```sh
npm run dev
```
This will launch the app on `http://localhost:5173/` (or another available port).

## Project Structure
```
EmployWise-App
│── node_modules/
│── public/
│   ├── vite.svg
│── src/
│   ├── pages/
│   │   ├── EditUser.jsx
│   │   ├── Login.jsx
│   │   ├── Users.jsx
│   ├── api.js
│   ├── App.jsx
│   ├── index.jsx
│   ├── style.css
│── .env
│── .gitignore
│── index.html
│── package-lock.json
│── package.json
│── vite.config.js
```

## API Usage
The application integrates with [Reqres API](https://reqres.in/) for user authentication and management.

### Authentication Endpoint
- `POST /api/login`
  - Email: `eve.holt@reqres.in`
  - Password: `cityslicka`
  - Returns a token upon successful login

### Fetch Users
- `GET /api/users?page=1` - Fetch paginated user list

### Edit User
- `PUT /api/users/:id` - Update user details

### Delete User
- `DELETE /api/users/:id` - Remove a user from the list

## Assumptions and Considerations
- The authentication token is stored in `localStorage`.
- Users cannot register; they can only log in with predefined credentials.
- Deleting a user does not persist as the Reqres API is a mock service.
- The application is built using Vite for a fast development experience.

## Troubleshooting
If you encounter errors, try:
```sh
rm -rf node_modules package-lock.json
npm install
npm run dev
```
If `vite` is not recognized, try installing it globally:
```sh
npm install -g vite
```


