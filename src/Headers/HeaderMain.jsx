    import './HeaderMain.css';
    import {useNavigate, useLocation} from "react-router-dom";
    import Logo from '../assets/TravelWebLogo.png';
    import { useState , useEffect} from 'react';
    function Header(){
    
    const navigate = useNavigate();
    const handleBack = () => {
    navigate(-1);
    };
    const handleInic = () => {
    navigate("/iniciarsesion");
    }
    const handleMain = () => {
      navigate("/");
    };

    const handleReservas = () =>{
      navigate("/misreservas");

    }
    const cerrarSesion = () =>{
      localStorage.clear();
      setUsuario(null);
      navigate("/");
    }

    const [usuarioActual, setUsuario] = useState(null);

    useEffect(() => {
    const datosGuardados = localStorage.getItem("usuario");
    if (datosGuardados) {
      try {
        const usuarioObj = JSON.parse(datosGuardados);
        setUsuario(usuarioObj.usuario);
      } catch (e) {
        setUsuario(null);
      }
    }
  }, []);


    const location = useLocation(); 
    const pathVerMas = location.pathname === "/vermas"; 
    const pathMain = location.pathname === "/";
    const pathIniciar = location.pathname === "/iniciarsesion";

 
    return (
      
    <header className="main-menu">
      
    {!pathMain && (
        <button className="back-button" onClick={handleBack}>◀</button>
      )}

      <div className="logo" onClick={handleMain} ><img src={Logo} alt='>TravelWeb'/></div>

      { (pathMain || pathVerMas) && (         
      <div className="search">
        <input type="text" placeholder="Buscar destinos o hoteles..." />
        <button>🔍</button>
      </div>)
    }

    { !usuarioActual ?(
      <div className="actions">
        {!pathIniciar && (<button onClick={handleInic} className="login">Iniciar sesión</button>)}
        
      </div>)

      :( 

         (<div className="actions">
        {!pathIniciar &&(<button onClick={cerrarSesion} className='cerrarSesion'>{usuarioActual}</button>)}
        <button onClick={handleReservas}> Reservas </button>
        </div>)

      )


    }


    </header>
    );
    }

    export default Header;