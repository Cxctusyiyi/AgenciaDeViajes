    import './HeaderMain.css';
    import {useNavigate} from "react-router-dom";
    
    function Header(){

    const navigate = useNavigate();
    const handleInic = () => {
    navigate("/iniciarsesion");
    }
    const handleCart = () => {
    navigate("/carrito");
    }

    return (
    <header className="main-menu">
     
      <div className="logo">🌍 TravelApp</div>

      
      <div className="search">
        <input type="text" placeholder="Buscar destinos o hoteles..." />
        <button>🔍</button>
      </div>

      
      <div className="actions">
        <button onClick={handleInic} className="login">Iniciar sesión</button>
        <button onClick={handleCart} className="cart">🛒 Carrito</button>
      </div>

    </header>
    );
    }

    export default Header;