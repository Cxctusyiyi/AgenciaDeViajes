import './Recomendados.css';
import {viajes} from './viajes.json';
function Recomendados() {

    return(
        <div className="recomendados-container">
            <h2>Recomendados para ti</h2>
            <div className="recomendados-list">
                
                    {viajes.slice(0,4).map((d) => (
                              <div key={d.id} className="recomendado-item">
                                <img className='recomendado-imagen' src={d.foto} alt={d.nombre} />
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
