import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./AppContext";

const ItemList = () => {
  const { category } = useContext(AppContext);

  return (
    <div>
      <h1
        className="text-center"
        style={{ fontStyle: "italic", marginTop: "1rem" }}
      >
        Nuestros productos:
      </h1>
      <div className="row text-center mb-4 mt-3">
        {category.map((value, index) => {
          return (
            <div key={index} className="col-3 mx-5 text-center">
              <Link to={`/${value.title}`} style={{ textDecoration: "none" }}>
                <div className="estilosBebidasCatalogo">
                  <h2 className="mb-3">◻ {value.title}</h2> <hr/>
                  <h3 style={{ fontStyle: "italic" }}>"{value.description}"</h3>
                  <h4>x {value.size}ml</h4>
                  <h4>Stock: {value.stock}</h4>
                  <h2>💲{value.price}.00</h2>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
