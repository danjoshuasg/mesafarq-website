import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Producto from './Pages/Producto';
import Productos from './Pages/Productos';
import Servicios from './Pages/Servicios';
import ProductosCategorias from './Pages/ProductosCategorias';
import Inicio from './Pages/Inicio';
import Acerca from './Pages/Acerca';
import Blog from './Pages/Blog';
import FAQ from './Pages/FAQ';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>

          <Route path='/mesafarq-website' element={<Inicio/>}/>

          <Route path='/acerca' element={<Acerca/>}/>

          <Route path='/productos' element={<Productos/>}/>

          <Route path='/esterilizacion' element={<ProductosCategorias categoria="Esterilizacion"/>}/>

          <Route path='/dental' element={<ProductosCategorias categoria="Dental"/>}/>

          <Route path='/veterinario' element={<ProductosCategorias categoria="Veterinario"/>}/>

          <Route path='/producto' element={<Producto/>}>
            <Route path=':productoId' element={<Producto/>}/>
          </Route>

          <Route path='/servicios' element={<Servicios/>}/>

          <Route path='/blog' element={<Blog/>}/>

          <Route path='/faq' element={<FAQ/>}/>
        </Routes>

        
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
