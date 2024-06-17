import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ScrollToTop from "../utils/ScrollToTop.js"
import ScrollToTopButton from "../components/ScrollToTopButton.jsx"




const Main = () => {
  return (
    <div className="overflow-hidden  ">
      <ScrollToTopButton/>
      <ScrollToTop/>
      <Header />
      <Outlet />
      <Footer />
    </div>

  )
}

export default Main