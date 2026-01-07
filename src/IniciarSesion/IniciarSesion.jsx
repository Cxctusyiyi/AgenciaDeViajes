import "./IniciarSesion.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../Headers/HeaderMain.jsx";


function IniciarSesion({users}) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ usuario: "", contraseña: "" });
    const [error, setError] = useState("");

    const handleRegistro = () => {
        navigate("/registro");
    };


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        
       const response = await fetch( "http://127.0.0.1:8000/usuarios/login" ,{

        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            usuario: formData.usuario,
            contraseña: formData.contraseña
        }),
       });
        
       const data = await response.json();

       if(response.ok){
        console.log("Login correcto", data);
        localStorage.setItem("usuario", data.usuario.usuario);
        navigate("/");
       } else console.log("Error en el login", data);

        
    };

    return(
    <div>
        <Header />

        <div className="iniciar-contenido">
            <h2>Iniciar Sesión</h2>
            <form className="iniciar-form" onSubmit={handleSubmit}>
                <label>
                    Usuario:
                    <input type="text" name="usuario" value={formData.usuario} onChange={handleChange} required />
                </label>
                <label>
                    Contraseña:
                    <input type="password" name="contraseña" value={formData.contraseña} onChange={handleChange} required/>
                </label>
                <button type="submit">Iniciar Sesión</button>
                <p>No tienes cuenta? <span onClick={handleRegistro} className="registro">Registrate</span> </p>
            </form>
             {error && <p style={{ color: "red" }}>{error}</p>}
        </div>    

    </div>
        
    )

}

export default IniciarSesion;


