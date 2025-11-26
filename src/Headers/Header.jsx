import {useNavigate} from "react-router-dom";
import './Header.css';
import Logo from '../assets/TravelWebLogo.png';


function Header(){      
    const navigate = useNavigate();
    const handleBack = () => {
    navigate(-1);
    };
    const handleMain = () => {
    navigate("/");
    };
    return(    

    <header className='header-container'>
        <button className="back-button" onClick={handleBack}>◀</button>
        <div className="logo" onClick={handleMain}><img src={Logo} alt="TravelWeb"/></div>
        <div className="actions">
            <button className="cart">🛒 Carrito</button>
        </div>
    </header>
    )
}

export default Header;