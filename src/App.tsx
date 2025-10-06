import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import RestaurantMenu from "./Components/RestaurantMenu";
import Profile from "./Components/ProfileClass";

function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "about",
        element: <About />,
        children: [
          { path: "profile", element: <Profile /> },
        ],
      },
      { path: "contact", element: <Contact /> },
      { path: "restaurant/:resId", element: <RestaurantMenu /> },
    ],
  },
  { path: "login", element: <Login /> },
]);

export default appRouter;   // 👈 export router instead of App
