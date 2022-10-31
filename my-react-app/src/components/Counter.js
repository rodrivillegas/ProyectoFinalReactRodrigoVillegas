import { useContext } from "react";
import { AppContext } from "./AppContext";

function Counter() {
  const { contador, setContador } = useContext(AppContext);

  return (
    <div className="text-center contador">
      <button
        onClick={() => contador > 1 && setContador(contador - 1)}
        className="px-3 fs-4 botonContadorIzq"
      >
        👎
      </button>
      <h4>Cantidad: {contador}</h4>
      <button onClick={() => setContador(contador + 1)} className="px-3 fs-4 botonContadorDer">
        👍
      </button>
    </div>
  );
}

export default Counter;
