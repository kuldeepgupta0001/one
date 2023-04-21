import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from './componentes/Header';
import Home from './componentes/Home';
import Footer from "./componentes/Footer";
import Contact from "./componentes/Contact";
import Services from "./componentes/Services";

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={< Home/>}/>
        <Route path="/contact" element={< Contact/>}/>
        <Route path="/service" element={< Services/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
