import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Contacto from "./components/Contacto";
import ItemDetail from "./components/ItemDetail";
import Home from "./components/Home";
import ItemCategory from "./components/ItemCategory";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";
import ContextProvider from "./components/AppContext";
import Carrito from "./components/Carrito";
import Formulario from "./components/Formulario";
import OrdenGenerada from "./components/OrdenGenerada";

function App() {
  return (
    <ContextProvider>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/categoria/:categoria"
            element={<ItemCategory />}
          />
          <Route exact path="/nuestrosProductos" element={<ItemList />} />
          <Route exact path="/:bebida" element={<ItemDetail />} />
          <Route exact path="/carrito" element={<Carrito />} />
          <Route exact path="/formulario" element={<Formulario />} />
          <Route exact path="/ordenGenerada" element={<OrdenGenerada />} />
          <Route exact path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </Router>
    </ContextProvider>
  );
}

export default App;
