import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ScrollToTop from "../utils/ScrollToTop.js"




const Main = () => {
  return (
    <>
      <ScrollToTop/>
      <Header />
      <Outlet />
      <Footer />
    </>

  )
}

export default Main