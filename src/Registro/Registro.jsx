import './Registro.css';
import Header from "../Headers/HeaderMain.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Registro({users}){
    const navigate = useNavigate();



 const [formData, setFormData] = useState({
    usuario: "",
    correo: "",
    contraseña: "",
    confirmar: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.contraseña !== formData.confirmar) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
    const response = await fetch("http://127.0.0.1:8000/usuarios/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usuario: formData.usuario,
        correo: formData.correo,
        contraseña: formData.contraseña,
      }),
    });

    if (!response.ok) {
      throw new Error("Error al registrar usuario");
    }

    const data = await response.json();
    console.log(data); 

    

    navigate("/iniciarsesion");
     } catch (err) {
    setError(err.message);
  }
  };

  return (

    <div>

    <Header />
    
    <div className="registro-contenido">
      <h2>Registro</h2>
      <form className="registro-form" onSubmit={handleSubmit}>
        <label>
          Usuario:
          <input
            type="text"
            name="usuario"
            value={formData.usuario}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Correo:
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            name="contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Confirmar contraseña:
          <input
            type="password"
            name="confirmar"
            value={formData.confirmar}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Registrarse</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
    
</div>
  );

}



export default Registro;

