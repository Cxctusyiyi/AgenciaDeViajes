import './MisReservas.css';
import '../Headers/HeaderMain.jsx';
import Header from '../Headers/HeaderMain.jsx';
import { useEffect,useState } from 'react';


function MisReservas(){

    const [reservas, setMisReservas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [usuarioActual, setUsuario] = useState(null);

    useEffect(() => {
      const datosGuardados = localStorage.getItem("usuario");
      if (datosGuardados) {
        try {
          const usuarioObj = JSON.parse(datosGuardados);
          setUsuario(usuarioObj);
        } catch (e) {
          setUsuario(null);
        }
      }
    }, []);

    useEffect(() => {
      if (usuarioActual?.id) {
        const fetchReservas = async () => {
          try {
            const response = await fetch(`http://127.0.0.1:8000/misreservas?usuario_id=${usuarioActual.id}`);
            if (response.ok) {
              const data = await response.json();
              setMisReservas(data);
            }
          } catch (err) {
            console.error('Error cargando reservas:', err);
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
        fetchReservas();
      } else {
        setLoading(false);
      }
    }, [usuarioActual]);

    const handleClick = (item) => {
      console.log("Reserva seleccionada:", item);
    };

    if (loading) return <div><Header /><p>Cargando reservas...</p></div>;
    if (error) return <div><Header /><p>Error: {error}</p></div>;
    if (!usuarioActual) return <div><Header /><p>Por favor, inicia sesión para ver tus reservas</p></div>;

    return(
        <div>
        <Header/>
        {reservas.length > 0 ? (
          reservas.map((d) => (
            <div key={d.id} className="reservas-usuario" onClick={() => handleClick(d)}>
              <img className='imagen-reserva' src={d.foto} alt={d.nombre_item} />             
              <h3>{d.nombre_item} - {d.precio}€</h3>
            </div>
          ))
        ) : (
          <p>No tienes reservas aún</p>
        )}
        </div>
    )

}



export default MisReservas;
