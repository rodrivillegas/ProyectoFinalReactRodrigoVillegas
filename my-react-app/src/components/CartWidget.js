import carrito from "../components/image/carrito.png";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <div>
      <Link to="/carrito">
        <img src={carrito} className="carrito" alt="Carrito" title="CARRITO"/>
      </Link>
    </div>
  );
}

export default CartWidget;
