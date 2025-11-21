import './Recomendados.css';
import { useNavigate } from "react-router-dom";

function Recomendados({data}) {


const viajes = data.filter(item => item.tipo === "viaje");
const hoteles = data.filter(item => item.tipo === "hotel");
    const navigate = useNavigate();

    const handleClick = (item) => {
      navigate("/reservar", { state: { item } });
    };


    return(
        <div className="recomendados-container">
            <h2>Recomendados para ti</h2>
            <div className="recomendados-list">               
                    {viajes.slice(5,9).map((d) => (
                              <div key={d.id} className="recomendado-item">
                                <img className='recomendado-imagen' src={d.foto} alt={d.nombre}  onClick={() => handleClick(d)}/>
                                <h3>{d.destino}</h3>
                              </div>
                    ))}           
            </div>
            <footer>
                <button> Ver más viajes y destinos</button>
            </footer>
        </div>

        
    );


}


export default Recomendados;
