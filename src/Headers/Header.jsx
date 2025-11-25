import {useNavigate} from "react-router-dom";
import './Header.css';


function Header(){      
    const navigate = useNavigate();
    const handleBack = () => {
    navigate(-1);
    };
    return(    

    <header className='header-container'>
        <button className="back-button" onClick={handleBack}>◀</button>
        <div className="logo">🌍 TravelApp</div>      
        <div className="actions">
            <button className="cart">🛒 Carrito</button>
        </div>
    </header>
    )
}

export default Header;