import React from "react";
import { useState } from "react";
import swal from "sweetalert";
import { useContext } from "react";
import { AppContext } from "./AppContext.js";

function Contacto() {
  const { addComentariosDoc } = useContext(AppContext);

  const [nombre, setNombre] = useState("");
  const [contacto, setDatosContacto] = useState("");
  const [comentario, setComentario] = useState("");

  const handleFormData = (e) => {
    e.preventDefault();
    addComentariosDoc({
      comprador: {
        nombre: nombre,
        datosContacto: contacto,
        comentario: comentario,
      },
    });
    setNombre("");
    setDatosContacto("");
    setComentario("");
  };

  return (
    <>
      <h2 className="contacto">
        ¡¿Necesitas trabajo?! Sugerencias, dudas o quejas... <br /> Ponte en
        contacto con nosotros.
      </h2>
      <form className="formulario row g-3" onSubmit={handleFormData}>
        <input
          className="mb-3 form-control-lg"
          placeholder="Completa con tu nombre y apellido"
          onChange={(e) => setNombre(e.target.value)}
          style={{ fontStyle: "italic" }}
        />
        <br />
        <input
          className="mb-3 form-control-lg"
          placeholder="Ingresa tus datos de contacto"
          onChange={(e) => setDatosContacto(e.target.value)}
          style={{ fontStyle: "italic" }}
        />
        <input
          className="mb-3 form-control-lg"
          placeholder="Ingresa tus comentarios"
          onChange={(e) => setComentario(e.target.value)}
          style={{ fontStyle: "italic" }}
        />
        <br />
        <button
          onClick={() => {
            if (
              (nombre.length > 2, comentario.length > 2, contacto.length > 2)
            ) {
              swal({
                title: "Tus comentarios fueron enviados exitosamente!",
                text: "A la brevedad nos pondremos en contacto.",
                icon: "success",
              });
            } else {
              swal({
                title: "Oops...!",
                text: "¡No se admiten campos vacíos!",
                icon: "error",
                dangerMode: true,
              });
              return;
            }
          }}
          className="btn btn-primary contactoForm"
        >
          Enviar comentarios 😊
        </button>
      </form>
    </>
  );
}

export default Contacto;
