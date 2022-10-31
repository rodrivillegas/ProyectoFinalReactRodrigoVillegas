import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./AppContext";

function OrdenGenerada() {
  const { 
  nombre,
  dni,
  idOrden,
  email 
  } = useContext(AppContext);

  const navigate = useNavigate();
  return (
    <div className="text-center m-5">
      <h2 style={{ fontStyle: "italic" }}>
        Muchas gracias por tu compra, aquí está tu orden 📝
      </h2>
      <br />
      <div style={{ margin: "10px" }} className="formularioOrden">
        <h2>Nombre: {nombre}</h2>
        <h2>Dni: {dni}</h2>
        <h2>E-mail: {email}</h2>
        <h6>Id de la orden: {idOrden}</h6>
      </div>
      <button
        className="btn btn-outline-danger m-3"
        onClick={() => navigate("/")}
      >
        Volver al inicio 🏠
      </button>
    </div>
  );
}

export default OrdenGenerada;
