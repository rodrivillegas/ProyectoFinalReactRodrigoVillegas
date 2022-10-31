import { useContext, useEffect } from "react";
import { AppContext } from "./AppContext.js";
import { useNavigate } from "react-router-dom";

function Formulario() {
  const navigate = useNavigate();
  const {
    setNombre,
    nombre,
    dni,
    setDni,
    productosEnCarrito,
    getTotalPrice,
    setProductosEnCarrito,
    email,
    setEmail,
    addSingleDoc,
    idOrden,
    setIdOrden
  } = useContext(AppContext);

  useEffect (()=>{
    setIdOrden (Math.random(0,1200) * 100)
  },[])

  const handleFormData = (e) => {
    e.preventDefault();
    setProductosEnCarrito([]);
    addSingleDoc({
      comprador: {
        id: idOrden,
        nombre: nombre,
        DNI: dni,
        email: email,
      },
      items: productosEnCarrito,
      totalPrice: getTotalPrice(),
    });
    navigate("/ordenGenerada");
  };
  console.log(productosEnCarrito);

  const getCantidadProductos = () => {
    let cantidad = 0;
    for (let producto of productosEnCarrito) {
      cantidad = cantidad + producto.cantidad;
    }
    return cantidad;
  };

  return (
    <div className="text-center m-5">
      <h1>Perfecto!! 🍻 </h1>
      <h2 style={{ fontStyle: "italic", marginTop: "1rem" }}>
        Su orden tiene "{getCantidadProductos()}" bebida/s por un total de $
        {getTotalPrice()}.00 pesos.
      </h2>
      <form className="m-3 form-control-lg" onSubmit={handleFormData}>
        <h4>Ingrese sus datos para confirmar la orden y preparar su pedido</h4>
        <input
          className="mt-3 mb-3 formularioOrden text-center form-control-lg"
          style={{ fontStyle: "italic" }}
          placeholder="Nombre y apellido"
          onChange={(e) => setNombre(e.target.value)}
        />
        <br />
        <input
          className="formularioOrden text-center mb-3 form-control-lg"
          style={{ fontStyle: "italic" }}
          placeholder="Ingrese su D.N.I."
          onChange={(e) => setDni(e.target.value)}
        />
        <br />
        <input
          className="formularioOrden text-center mb-3 form-control-lg"
          style={{ fontStyle: "italic" }}
          placeholder="Ingrese su e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button className="btn btn-primary">Generar orden!</button>
      </form>
      <div className="text-center">
        <button
          className="btn btn-outline-danger"
          onClick={() => navigate("/")}
        >
          Volver al inicio 🏠
        </button>
      </div>
    </div>
  );
}

export default Formulario;
