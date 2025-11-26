    import './HeaderMain.css';
    import {useNavigate, useLocation} from "react-router-dom";
    import Logo from '../assets/TravelWebLogo.png';
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
    const handleCart = () => {
    navigate("/carrito");
    }
    const location = useLocation(); 
    const pathVerMas = location.pathname === "/vermas"; 
    return (
      
    <header className="main-menu">
      
      {pathVerMas && (
        <button className="back-button" onClick={handleBack}>◀</button>
      )}

      <div className="logo" onClick={handleMain} ><img src={Logo} alt='>TravelWeb'/></div>

      
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