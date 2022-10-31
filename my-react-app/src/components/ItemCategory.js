import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./AppContext";

const ItemCategory = () => {
  const { category } = useContext(AppContext);
  const { categoria } = useParams();
  const [bebidasPorCategoria, setBebidasPorCategoria] = useState([]);

  useEffect(() => {
    const listaDeBebidas = category.filter((b) => b.categoryId == categoria);
    setBebidasPorCategoria(listaDeBebidas);
  }, [category, categoria]);

  return (
    <>
      <h1
        className="text-center"
        style={{ fontStyle: "italic", marginTop: "1rem" }}
      >
        Productos x CATEGORÍA:
      </h1>
      {bebidasPorCategoria.length > 0 && (
        <div className="row text-center mb-4 mt-3">
          {bebidasPorCategoria.map((bebida, index) => {
            return (
              <div key={index} className="bebidasEnCat">
                <h5>➡{bebida.categoryId}</h5>
                <h2>{bebida.title}</h2>
                <h3>💲{bebida.price}.00</h3>
                <h4 style={{ fontStyle: "italic" }}>"{bebida.description}"</h4>
                <hr />
                <Link
                  to={`/${bebida.title}`}
                  style={{ textDecoration: "none" }}
                >
                  <button className="btn btn-outline-info">
                    Ver detalle 📋
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
            );
          })}
        </div>
      )}
    </>
  );
};
export default ItemCategory;
