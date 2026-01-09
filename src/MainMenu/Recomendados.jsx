import './Recomendados.css';
import { useNavigate } from "react-router-dom";

function Recomendados({data}) {
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate("/reservar", { state: { item } })
  };
  
  const handleVerMas = () => {
    navigate("/vermas");
  }

  if (!data || data.length === 0) {
    return <div className="recomendados-container"><h2>Cargando recomendados...</h2></div>
  }

  const viajes = data.filter(item => item.tipo === "viaje");

  return(
    <div className="recomendados-container">
      <h2>Recomendados para ti</h2>
      <div className="recomendados-list">               
        {viajes.slice(0, 4).map((d) => (
          <div key={d.id} className="recomendado-item" onClick={() => handleClick(d)}>
            <img className='recomendado-imagen' src={d.foto} alt={d.destino} />
            <h3>{d.destino}</h3>
          </div>
        ))}           
      </div>
      <footer>
        <button onClick={handleVerMas}>Ver más viajes y destinos</button>
      </footer>
    </div>
  );
}

export default Recomendados;
