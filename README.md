**Z-Food** is a modern food delivery web application, inspired by **Swiggy**, built with a scalable and maintainable tech stack.

### 🔹 Key Features

* Browse restaurants and menus in real-time using the **Swiggy public API**
* Search & filter restaurants by cuisine, rating, and price
* Add items to cart, update quantities, and place orders seamlessly
* Authentication and user session management
* Responsive UI with **Tailwind CSS** for a clean and beautiful design
* Optimized state management for smooth user experience

### 🔹 Frontend (React + TypeScript)

* **React (with TypeScript)** for type-safe, modular, and reusable components
* **React Router** for navigation across Home, Restaurants, and Checkout
* **Redux Toolkit** (or Zustand) for efficient state management
* **Tailwind CSS** for elegant, mobile-first UI

### 🔹 Backend (Node.js + Express)

* **Node.js & Express** backend handling API requests and custom routes
* Integration with **Swiggy APIs** for fetching real-time restaurant and menu data
* RESTful API endpoints for cart, authentication, and orders

You need to write the following commands on the terminal screen(in vscode) so that you can run this project locally.

 …or push an existing repository from the command line
git remote add origin https://github.com/angautamg/zfood.git

Go to the project directory

  cd zfood
Install dependencies

  npm install
Set up environment variables:

* .env - environment variables for this project to run in development environment (fill with actual values for environment variables)
Run the application:

  npm run start
The application will now be running on http://localhost:3000. If you want to Fork repository and want to run locally, follow this guidelines Fork and Clone Github Repository

### 🔹 Tech Stack

* **Frontend:** React.js, TypeScript, Tailwind CSS
* **Backend:** Node.js, Express.js
* **API:** Swiggy API (3rd party integration)
* **Package Management:** npm
* **Deployment:** Vercel (Frontend) & Render/Heroku (Backend)

### 🔹 Highlight

Z-Food combines the **power of TypeScript for safety**, **React for fast UI rendering**, **Express for scalable backend APIs**, and **Tailwind CSS for modern, sleek design** — resulting in a food delivery platform very similar to Swiggy but tailored for learning and portfolio showcase.
