import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Recipes from './pages/Recipes/Recipes';
import TrabalheConosco from './pages/TrabalheConosco/TrabalheConosco';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/receitas" element={<Recipes />} />
        <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
