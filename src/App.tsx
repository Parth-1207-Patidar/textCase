import './App.css'
import AboutAccordion from './components/About'
import ContactUs from './components/Contact';
import Navbar from './components/Navbar'
import TextBox from './components/TextBox'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className=" h-full ">
        <Navbar />
        <Routes>
        <Route path="/" element={<TextBox/>}/>
        <Route path="/about" element={<AboutAccordion/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
    </div>
    </Router>
  )
}

export default App
