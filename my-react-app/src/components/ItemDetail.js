import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import Counter from "./Counter";

function ItemDetail() {
  const { category, agregarProductoAlCarrito } = useContext(AppContext);
  const { bebida } = useParams();
  const [esteProducto, setEsteProducto] = useState({});

  useEffect(() => {
    const estaBebida = category.find((b) => b.title == bebida);
    setEsteProducto(estaBebida);
  }, [category]);

  return (
    <>
      {esteProducto && (
        <div className="drinkDetail">
          <h1 className="mb-2">{esteProducto.title}</h1>
          <img width="100" height="100" src={esteProducto.imageId} />
          <h3 style={{ fontStyle: "italic" }}>"{esteProducto.description}"</h3>
          <hr />
          <h5 style={{ textAlign: "justify" }}>
            {esteProducto.itemDescription}
          </h5>
          <br />
          <div className="m-2">
            <Counter />
          </div>
          <Link to="/carrito">
            <button
              onClick={() => agregarProductoAlCarrito(esteProducto)}
              className="btn btn-outline-primary"
            >
              Realizar compra 🛒
            </button>
            <br />
          </Link>

          <Link to="/nuestrosProductos">
            <button className="btn btn-outline-danger mt-1">
              Volver a Productos
            </button>
            <br />
          </Link>
        </div>
      )}
    </>
  );
}

export default ItemDetail;
