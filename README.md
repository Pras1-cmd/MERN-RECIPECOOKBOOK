# MERN Recipe Cookbook

A full-stack recipe management application built with the MERN (MongoDB, Express, React, Node.js) stack. This project provides users with the ability to create, view, update, and delete recipes through a modern web interface backed by a RESTful API.

## 🧩 Features

- **User-friendly interface** built with React and Vite
- **CRUD operations** for recipes (Create, Read, Update, Delete)
- **Responsive design** using Tailwind CSS
- **API server** powered by Node.js and Express
- **MongoDB database** for storing recipe data
- **Reusable components** and centralized state management
- **Error handling and loading states** with custom components

# 🍳 MERN Recipe Cookbook

A full-stack recipe management application with MERN stack (MongoDB, Express, React, Node.js) for creating, viewing, and managing recipes.

**Repository:** [GitHub](https://github.com/Pras1-cmd/MERN-RECIPECOOKBOOK)  
**Live Demo:** [RecipeCookbook App](https://recipecookbook-at5t.onrender.com)

## ✨ Features

- CRUD operations for recipes
- Search and filter by title/category
- Responsive design with Tailwind CSS & DaisyUI
- RESTful API with Express.js
- MongoDB database with Mongoose

## 🛠️ Tech Stack

**Backend:** Node.js, Express, MongoDB, Mongoose  
**Frontend:** React 18, Vite, React Router, Axios, Tailwind CSS

## 📦 Prerequisites

- Node.js (v16+)
- npm/yarn
- MongoDB (local or Atlas)

## 🚀 Quick Start

### Backend Setup
```bash
cd backend
npm install
```

Create `.env` file:
```env
PORT=3001
MONGO_URI=mongodb://localhost:27017/recipe-cookbook
```

Start server:
```bash
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Access at `http://localhost:5173`

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/recipes` | Get all recipes (with search/category filters) |
| GET | `/recipes/:id` | Get recipe by ID |
| POST | `/recipes` | Create new recipe |
| PUT | `/recipes/:id` | Update recipe |
| DELETE | `/recipes/:id` | Delete recipe |

## 📝 Recipe Fields

```javascript
{
  title: String (required),
  description: String,
  ingredients: [String] (required),
  instructions: [String] (required),
  category: String (required),
  cookingTime: Number (required),
  difficulty: "Easy" | "Medium" | "Hard" (required),
  createdAt: Date,
  updatedAt: Date
}
```

## 📁 Project Structure

```
backend/
├── src/
│   ├── server.js
│   ├── config/db.js
│   ├── controllers/recipeController.js
│   ├── models/recipeModel.js
│   └── routes/recipeRoutes.js

frontend/
├── src/
│   ├── App.jsx
│   ├── pages/ (Home, Create, Update, DetailPage)
│   ├── components/ (Navbar, RecipeCard, Loader, NotFound)
│   └── lib/ (axios, utils)
```

## 📝 Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | HomePage | View all recipes |
| `/create` | CreatePage | Create new recipe |
| `/recipe/:id` | RecipeDetailPage | View recipe details |
| `/update/:id` | UpdatePage | Edit recipe |

## 🧪 Commands

**Backend:**
```bash
npm start       # Production
npm run dev     # Development
```

**Frontend:**
```bash
npm run dev     # Development server
npm run build   # Build for production
npm run lint    # ESLint check
```

## 🐛 Troubleshooting

- **MongoDB connection fails:** Ensure MongoDB is running and `MONGO_URI` is correct
- **CORS errors:** Verify backend origin in `server.js` matches frontend URL
- **Port in use:** Change PORT in `.env` or kill existing process

## 📚 Resources

[MongoDB](https://docs.mongodb.com/) | [Express](https://expressjs.com/) | [React](https://react.dev/) | [Vite](https://vitejs.dev/) | [Mongoose](https://mongoosejs.com/)

---

**Happy Cooking! 🍽️**
      utils.js
    pages/
      CreatePage.jsx
      HomePage.jsx
      RecipeDetailPage.jsx
      UpdatePage.jsx
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- MongoDB instance (local or hosted)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mern-recipecookbook.git
   cd mern-recipecookbook
   ```

2. **Setup backend**
   ```bash
   cd backend
   npm install
   # or yarn install
   ```
   Create a `.env` file with the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```

3. **Start backend server**
   ```bash
   npm run dev
   ```
   The API will be available at `http://localhost:3000`

4. **Setup frontend**
   ```bash
   cd ../frontend
   npm install
   # or yarn install
   ```

5. **Start frontend development server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` (or the URL shown in your terminal) to view the app.

## 🛠️ Available Scripts

### Backend
- `npm run dev` - start server with nodemon
- `npm start` - start server normally

### Frontend
- `npm run dev` - start Vite development server
- `npm run build` - build production assets
- `npm run preview` - locally preview production build

## 📦 Dependencies

Check `package.json` files in `backend` and `frontend` for full dependency listings. Key libraries include:

- **Backend:** express, mongoose, dotenv, cors, nodemon (dev)
- **Frontend:** react, react-dom, react-router-dom, axios, tailwindcss, vite

## 💡 Usage

- Add a recipe with title, ingredients, instructions, and image URL
- Browse existing recipes on the homepage
- Click a recipe to view details or edit
- Update or delete recipes as needed

## 📁 Configuration

- **Database:** Update `backend/src/config/db.js` to match your MongoDB connection
- **API Base URL:** Adjust in `frontend/src/lib/axios.js` if backend runs on a different port or host

## ✅ Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 📞 Contact

For questions or support, reach out to [chmcs2026.prasenjit.singh@gmail.com] or open an issue on GitHub.

```

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- MongoDB instance (local or hosted)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mern-recipecookbook.git
   cd mern-recipecookbook
   ```

2. **Setup backend**
   ```bash
   cd backend
   npm install
   
   Create a `.env` file with the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```

3. **Start backend server**
   ```bash
   npm run dev
   ```
   The API will be available at `http://localhost:3000`

4. **Setup frontend**
   ```bash
   cd ../frontend
   npm install
   # or yarn install
   ```

5. **Start frontend development server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` (or the URL shown in your terminal) to view the app.

## 🛠️ Available Scripts

### Backend
- `npm run dev` - start server with nodemon
- `npm start` - start server normally

### Frontend
- `npm run dev` - start Vite development server
- `npm run build` - build production assets
- `npm run preview` - locally preview production build

## 📦 Dependencies

Check `package.json` files in `backend` and `frontend` for full dependency listings. Key libraries include:

- **Backend:** express, mongoose, dotenv, cors, nodemon (dev)
- **Frontend:** react, react-dom, react-router-dom, axios, tailwindcss, vite

## 💡 Usage

- Add a recipe with title, ingredients, instructions, and image URL
- Browse existing recipes on the homepage
- Click a recipe to view details or edit
- Update or delete recipes as needed

## 📁 Configuration

- **Database:** Update `backend/src/config/db.js` to match your MongoDB connection
- **API Base URL:** Adjust in `frontend/src/lib/axios.js` if backend runs on a different port or host

## ✅ Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 📞 Contact

For questions or support, reach out to [chmcs2026.prasenjit.singh@gmail.com] or open an issue on GitHub.
