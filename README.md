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

## 🔧 Project Structure

```
package.json
backend/
  package.json
  src/
    server.js
    config/
      db.js
    controllers/
      recipeController.js
    models/
      recipeModel.js
    routes/
      recipeRoutes.js
frontend/
  eslint.config.js
  index.html
  package.json
  postcss.config.js
  README.md
  tailwind.config.js
  vite.config.js
  public/
  src/
    App.jsx
    index.css
    main.jsx
    components/
      Loader.jsx
      Navbar.jsx
      RecipeCard.jsx
      RecipeNotFound.jsx
    lib/
      axios.js
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
