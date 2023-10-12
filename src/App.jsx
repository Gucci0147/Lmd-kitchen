
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Singlemeal from "./Pages/Singlemeal";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (  
    <div className="container-md">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/meal/:mealId" element={<Singlemeal />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>       
  );
}

export default App;
