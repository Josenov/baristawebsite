import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ScrollToTop from "../utils/ScrollToTop.js"




const Main = () => {
  return (
    <div className="overflow-hidden ">
      <ScrollToTop/>
      <Header />
      <Outlet />
      <Footer />
    </div>

  )
}

export default Main