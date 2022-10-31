import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AppContext } from "./AppContext.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Carrito() {
  const navigate = useNavigate();
  const {
    productosEnCarrito,
    eliminarDelCarrito,
    setProductosEnCarrito,
    getTotalPrice,
  } = useContext(AppContext);

  const toastify = () =>
    toast("Tu producto ha sido eliminado del carrito 🚮", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <div>
      {productosEnCarrito.length == 0 ? (
        <>
          <h2
            className="text-center mb-5"
            style={{ fontStyle: "italic", marginTop: "1rem" }}
          >
            Aún no hay productos en tu carrito...
          </h2>
        </>
      ) : (
        <h2
          className="text-center"
          style={{ fontStyle: "italic", marginTop: "1rem" }}
        >
          ENHORABUENA 😉
          <br /> Aquí está tu carrito:
        </h2>
      )}

      <div className="row text-center mb-4 mt-3">
        {productosEnCarrito.map((bebida, index) => {
          return (
            <div key={index} className="text-center bebidasEnCat">
              <h3>{bebida.nombre}</h3>
              <img src={bebida.imagen} width="80" className="mb-2" />
              <h4>💲{bebida.precio},00</h4>
              <h6 className="x">x</h6>
              <h6>Cantidad: {bebida.cantidad}</h6>
              <button
                onClick={() => navigate("/nuestrosProductos")}
                className="btn btn-outline-primary botonEnCarrito"
              >
                Añadir producto
              </button>
              <button
                className="m-2 btn btn-outline-danger"
                onClick={() => {
                  eliminarDelCarrito(bebida);
                  toastify();
                }}
              >
                Eliminar producto
              </button>
              <ToastContainer />
            </div>
          );
        })}
      </div>

      <div className="text-center mb-4">
        {productosEnCarrito.length > 0 && (
          <button
            className="btn btn-outline-danger m-2"
            onClick={() => setProductosEnCarrito([])}
          >
            Vaciar carrito 🛒
          </button>
        )}

        <button
          className="btn btn-outline-danger m-2"
          onClick={() => navigate("/")}
        >
          Volver al inicio 🏠
        </button>
        <button
          onClick={() => navigate("/nuestrosProductos")}
          className="btn btn-outline-primary botonEnCarrito mb-2"
        >
          Navegar por el catálogo
        </button>
        <div className="text-center">
          {productosEnCarrito.length > 0 && (
            <Link to="/formulario">
              <button className="btn btn-success px-5">
                ¡Generar orden de compra!
              </button>
            </Link>
          )}
        </div>
      </div>

      {productosEnCarrito.length > 0 && (
        <div className="text-center">
          <h2 className="totalAPagar">
            Total a pagar: <br />
            💲{getTotalPrice()},00
          </h2>
        </div>
      )}
    </div>
  );
}

export default Carrito;
