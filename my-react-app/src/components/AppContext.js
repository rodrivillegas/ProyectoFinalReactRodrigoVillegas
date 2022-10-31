import { createContext, useState, useEffect } from "react";
import { getDocs, addDoc, collection, getFirestore } from "firebase/firestore";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);
  const [contador, setContador] = useState(1);
  const [dataForm, setDataForm] = useState([]);
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [idOrden, setIdOrden] = useState(null);

  const obtenerProductos = async () => {
    const db = getFirestore();
    const productCollection = collection(db, "Productos");
    const productSnap = await getDocs(productCollection);
    const productList = productSnap.docs.map((e) => {
      let product = e.data();
      return product;
    });
    return productList;
  };
  useEffect(() => {
    obtenerProductos().then((res) => {
      setCategory(res);
    });
  }, []);

  const db = getFirestore();
  function addSingleDoc(order) {
    const data = collection(db, "ordenes");
    return addDoc(data, order);
  }

  function addComentariosDoc(order) {
    const data = collection(db, "comentarios");
    return addDoc(data, order);
  }

  const agregarProductoAlCarrito = (botella) => {
    setProductosEnCarrito([
      ...productosEnCarrito,
      {
        nombre: botella.title,
        precio: botella.price,
        imagen: botella.imageId,
        cantidad: contador,
      },
    ]);
  };

  const eliminarDelCarrito = (botella) => {
    const nuevoCarrito = productosEnCarrito.filter(
      (bebida) => bebida.nombre != botella.nombre
    );
    setProductosEnCarrito(nuevoCarrito);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    for (let p of productosEnCarrito) {
      totalPrice = totalPrice + p.precio * p.cantidad;
    }
    return totalPrice;
  };

  const data = {
    category,
    productosEnCarrito,
    setProductosEnCarrito,
    agregarProductoAlCarrito,
    contador,
    setContador,
    eliminarDelCarrito,
    getTotalPrice,
    dataForm,
    setDataForm,
    dni,
    setDni,
    nombre,
    setNombre,
    email,
    setEmail,
    addSingleDoc,
    addComentariosDoc,
    idOrden,
    setIdOrden,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export default ContextProvider;
export { AppContext };
