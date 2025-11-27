import Portfolio from './Portfolio/Portfolio';
import All from './Portfolio/Navigation/All'
import Application from './Portfolio/Navigation/Application'
import Product from './Portfolio/Navigation/Product'
import Branding from './Portfolio/Navigation/Branding'
import Books from './Portfolio/Navigation/Book'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
       <BrowserRouter>
       <Portfolio />
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/application" element={<Application />} />
          <Route path="/product" element={<Product />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/books" element={<Books />} />
        </Routes>
       
     </BrowserRouter>
    </>
  );
}

export default App;
