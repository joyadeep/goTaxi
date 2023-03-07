import About from "./pages/About"
import HallMarks from "./pages/HallMarks"
import Header from "./components/Header"
import Landing from "./components/Landing"
import Features from "./pages/Features"
import { useEffect } from "react"
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(()=>{
    Aos.init({duration:2000,once:true})
 },[])
  return (
<div className="font-display">
    <Header/>
    <Landing/>
    <About/>
    <HallMarks/>
    <Features/>
</div>  
  )
}

export default App
