import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './Components/Navbar'
import ActivityList from './Components/ActivityList'
import Form from './Components/Form'

function App() {

  const [activity, setActivity] = useState({
    descripcion: '',
    duracion_calendario: '',
    costo_acumulado: 0,
    costo: 0,
    duracion: '',
    comienzo: '',
    fin: '',
    predecesoras: '',
    nombre_recursos: '',
    /* id_sub:0,
    actividad_final:0, */
  })

  const [activities, setActivities] = useState([])

  const [listUpdated, setListUpdated] = useState(false)

  useEffect(() => {
    const getActivities = () => {
      fetch('http://localhost:4000/api')
      .then(res => res.json())
      .then(res => setActivities(res))
    }
    getActivities()
    setListUpdated(false)
  }, [listUpdated])

  return (
    <Fragment>
      <Navbar brand='Actividad App'/>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 style={{textAlign: 'center'}}>Lista de las actividades</h2>
            <ActivityList activity={activity} setActivity={setActivity} activities={activities} setListUpdated={setListUpdated}/>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2 style={{textAlign: 'center'}}>Formulario de actividades</h2>
            <Form activity={activity} setActivity={setActivity}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
