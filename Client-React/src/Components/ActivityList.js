import React from 'react';

const ActivityList = ({activity, setActivity, activities, setListUpdated}) => {


    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:4000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
    }

    let { descripcion, duracion_calendario, costo_acumulado, costo, duracion, comienzo, fin, predecesoras,
        nombre_recursos } = activity;

    const handleUpdate = id => {
        // edicion = parseInt(edicion, 10)
        // validación de los datos
        if (descripcion === '' || duracion_calendario === '' || duracion === '' || comienzo === '' || fin === '' ) {
            alert('Todos los campos son obligatorios')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(activity)
        }
        fetch('http://localhost:4000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setActivity({
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

        setListUpdated(true)
    }


    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Sub id</th>
                    <th>Actividad final</th>
                    <th>Descripcion</th>
                    <th>Duracion calendario</th>
                    <th>Costo acumulado</th>
                    <th>Costo</th>
                    <th>Duracion</th>
                    <th>Comienzo</th>
                    <th>Fin</th>
                    <th>Predecesoras</th>
                    <th>Nombre recursos</th>
                </tr>
            </thead>
            <tbody>
                {activities && activities.map(activity => (
                    <tr key={activity.id}>
                        <td>{activity.id}</td>
                        <td>{activity.id_sub}</td>
                        <td>{activity.actividad_final}</td>
                        <td>{activity.descripcion}</td>
                        <td>{activity.duracion_calendario}</td>
                        <td>{activity.costo_acumulado}</td>
                        <td>{activity.costo}</td>
                        <td>{activity.duracion}</td>
                        <td>{activity.comienzo}</td>
                        <td>{activity.fin}</td>
                        <td>{activity.predecesoras}</td>
                        <td>{activity.nombre_recursos}</td>
                        <td>
                            <div className="mb-3">
                                <button onClick={() => handleDelete(activity.id)} className="btn btn-danger">Eliminar</button>
                            </div>
                            <div className="mb-3">
                                <button onClick={() => handleUpdate(activity.id)} className="btn btn-dark">Actualizar</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default ActivityList;