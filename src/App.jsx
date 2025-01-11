
import  Home  from "./home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./portfolio/Portfolio.jsx";
import Contact from "./contact/Contact.jsx";
import About from "./about/About.jsx";
import Parent from "./Parent/Parent.jsx";
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Parent />,
      children: [
        { index:true, element: <Home />},
        { path: "", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
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
