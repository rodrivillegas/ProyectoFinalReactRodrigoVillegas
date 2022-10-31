import { Link } from "react-router-dom";
import logo from "../components/image/logo.png";


const Home = () => {
  return (
    <div className="greetingStyle">
      <h1 style={{ fontWeight: "bolder" }}>Bienvenido a Coder Drinks 🥂</h1>{" "}
      <br />
      <Link to="/nuestrosProductos">
        <button className="btn btn-outline-primary">Nuestros productos</button>
        <br />
        <br />
        <img src={logo} width="300" alt="logo" />
      </Link>
    </div>
  );
};

export default Home;
