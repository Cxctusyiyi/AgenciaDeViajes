import './Recomendados.css';

function Recomendados() {

    return(
        <div className="recomendados-container">
            <h2>Recomendados para ti</h2>
            <div className="recomendados-list">
                <div className="recomendado-item">
                    <img src="https://via.placeholder.com/200x150?text=Destino+1" alt="Destino 1" />
                    <h3>Destino 1</h3>
                </div>
                <div className="recomendado-item">
                     <img src="https://via.placeholder.com/200x150?text=Destino+2" alt="Destino 2" />
                    <h3>Destino 2</h3>
                </div>
                <div className="recomendado-item">
                    <img src="https://via.placeholder.com/200x150?text=Destino+3" alt="Destino 3" />
                    <h3>Destino 3</h3>
                </div>

                <div className="recomendado-item">
                    <img src="https://via.placeholder.com/200x150?text=Destino+4" alt="Destino 4" />
                    <h3>Destino 4</h3>
                </div>

            </div>
        </div>


    );


}


export default Recomendados;
