import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
import Nav from "../nav/Nav"


function Parent() {
  return (
    <div>
        <Nav />
        <Outlet />
        <Footer />

    </div>
  )
}

export default Parent