import Carousel from "./components/Carousel"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"


function App() {
  

  return (
    <div className="overflow-hidden">
      <Header/>
      
      <Home/>
      <Carousel/>
      <Footer/>
      
    </div>
  )
}

export default App
