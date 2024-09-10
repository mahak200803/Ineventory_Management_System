import logo from './logo.svg';
import './App.css';
import Catalogue from './Pages/Catalogue';
import ProductList from './Pages/ProductList';
import Landing from './Pages/Landing';
import Sales from './Pages/Sales';


import { Routes, Route } from "react-router-dom"
import Createcategory from './Pages/CreateCategory';
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={ <Landing/> } />
    <Route path="/catalogue" element={ <Catalogue/> } />
    <Route path="/product" element={ <ProductList/> } />
    <Route path="/category" element={ <Createcategory/> } />
    <Route path="/sales" element={<Sales/>} />
   </Routes>
    </div>
  );
}

export default App;
