import About from "./pages/About"
import HallMarks from "./pages/HallMarks"
import Header from "./components/Header"
import Landing from "./components/Landing"
import Features from "./pages/Features"

function App() {

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
