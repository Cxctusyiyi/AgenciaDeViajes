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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (users.some(u => u.usuario === formData.usuario) || users.some(u => u.correo === formData.correo) ) {
        setError("Ya existe un usuario con ese nombre/correo.");
        setFormData({
            usuario: "",
            correo: "",
            contraseña: "",
            confirmar: "",
        });
      return;
    }

    if (formData.contraseña !== formData.confirmar) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    navigate("/iniciarsesion");
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

