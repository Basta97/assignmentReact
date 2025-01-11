import "./App.css";
import { Home } from "./components/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import About from "./components/about/About.jsx";
import Parent from "./components/parent/Parent.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Parent />,
      children: [
        { path: "", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "*", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
