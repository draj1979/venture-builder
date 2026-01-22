import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Model from './pages/Model';
import Portfolio from './pages/Portfolio';
import BuildWithUs from './pages/BuildWithUs';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';

import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/model" element={<Model />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/build" element={<BuildWithUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
