# Natours - Tour Booking Application

A full-featured Node.js/Express-based REST API for tour management and booking. This application allows users to browse tours, manage their accounts, and book adventures with a seamless experience.

## 🌟 Features

- **Tour Management**: Browse, filter, and view detailed tour information
- **User Authentication**: Secure user registration and login system
- **User Profiles**: Manage user accounts and preferences
- **Tour Booking**: Reserve and manage tour bookings
- **RESTful API**: Well-structured API endpoints following REST conventions
- **Error Handling**: Comprehensive error handling and validation
- **Request Logging**: Morgan middleware for detailed HTTP request logging
- **Environment Configuration**: Secure environment-based configuration with dotenv

## 🛠️ Tech Stack

- **Backend**: Node.js with Express.js
- **Templating**: Pug (Jade)
- **Styling**: Custom CSS
- **Logging**: Morgan
- **Development**: ESLint, Prettier, Nodemon

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/hossam-aboud/natours-app.git
   cd natours
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**
   - Copy `config.env` and set your environment variables:
   ```bash
   NODE_ENV=development
   PORT=3000
   ```

## 🚀 Usage

**Development Mode**

```bash
npm run start:dev
```

Starts the server with Nodemon for auto-reloading during development.

**Production Mode**

```bash
npm run start:prod
```

Runs the server in production environment.

## 📂 Project Structure

```
natours/
├── app.js                 # Express app configuration
├── server.js              # Server entry point
├── config.env             # Environment variables
├── package.json           # Dependencies
├── controllers/
│   ├── tourController.js  # Tour business logic
│   └── userController.js  # User business logic
├── routes/
│   ├── tourRoutes.js      # Tour endpoints
│   └── userRoutes.js      # User endpoints
├── dev-data/
│   ├── data/              # Sample JSON data
│   ├── img/               # Image assets
│   └── templates/         # Pug email templates
├── public/
│   ├── index.html         # Landing page
│   ├── overview.html      # Tours overview
│   ├── tour.html          # Tour detail page
│   ├── css/
│   │   └── style.css      # Styling
│   └── img/               # Frontend images
└── README.md              # This file
```

## 🔌 API Endpoints

### Tours

- `GET /api/v1/tours` - Get all tours
- `GET /api/v1/tours/:id` - Get a specific tour
- `POST /api/v1/tours` - Create a new tour
- `PATCH /api/v1/tours/:id` - Update a tour
- `DELETE /api/v1/tours/:id` - Delete a tour

### Users

- `GET /api/v1/users` - Get all users
- `GET /api/v1/users/:id` - Get a specific user
- `POST /api/v1/users` - Create a new user
- `PATCH /api/v1/users/:id` - Update user details
- `DELETE /api/v1/users/:id` - Delete a user

## 📋 Requirements

- Node.js (v14 or higher)
- npm or yarn package manager

## 👨‍💻 Development

### Available Scripts

```bash
npm run start:dev   # Start in development mode with auto-reload
npm run start:prod  # Start in production mode
```

### Code Quality

The project uses:

- **ESLint** - Code linting with Airbnb configuration
- **Prettier** - Code formatting
- **Nodemon** - Auto-restart during development

## 📝 Environment Variables

Create a `config.env` file in the root directory:

```
NODE_ENV=development
PORT=3000
DATABASE=your_database_url
DATABASE_PASSWORD=your_db_password
```

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👤 Author

Your Name

## 🙏 Acknowledgments

Built as a learning project to demonstrate full-stack Node.js development with Express.

---

**Happy Touring! 🎒✈️**
