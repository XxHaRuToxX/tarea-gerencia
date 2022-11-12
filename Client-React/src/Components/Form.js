import React from 'react';

const Form = ({activity, setActivity}) => {

    const handleChange = e => {
        setActivity({
            ...activity,
            [e.target.name]: e.target.value
        })
    }

    let { descripcion, duracion_calendario, costo_acumulado, costo, duracion, comienzo, fin, predecesoras,
        nombre_recursos, id_sub, actividad_final  } = activity;

    const handleSubmit = (e) => {
        //validación de los datos
        e.preventDefault();
        if (descripcion === '' || duracion_calendario === '' || duracion === '' || comienzo === '' || fin === '' ) {
            alert('Todos los campos son obligatorios')
            return
        }

        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(activity)
        }
        fetch('http://localhost:4000/api', requestInit)
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



    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Descripcion</label>
                <input value={descripcion} name="descripcion" onChange={handleChange} type="text" id="descripcion" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="duracion_calendario" className="form-label">Duracion calendario</label>
                <input value={duracion_calendario} name="duracion_calendario" onChange={handleChange} type="text" id="duracion_calendario" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="costo_acumulado" className="form-label">Costo acumulado</label>
                <input value={costo_acumulado}  name="costo_acumulado" onChange={handleChange} type="number" id="costo_acumulado" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="costo" className="form-label">Costo</label>
                <input value={costo}  name="costo" onChange={handleChange} type="number" id="costo" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="duracion" className="form-label">Duracion</label>
                <input value={duracion}  name="duracion" onChange={handleChange} type="text" id="duracion" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="comienzo" className="form-label">Comienzo</label>
                <input value={comienzo}  name="comienzo" onChange={handleChange} type="text" id="comienzo" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="fin" className="form-label">Fin</label>
                <input value={fin}  name="fin" onChange={handleChange} type="text" id="fin" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="predecesoras" className="form-label">Predecesoras</label>
                <input value={predecesoras}  name="predecesoras" onChange={handleChange} type="text" id="predecesoras" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="recursos_nombre" className="form-label">Nombre de recursos</label>
                <input value={nombre_recursos}  name="recursos_nombre" onChange={handleChange} type="text" id="recursos_nombre" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="id_sub" className="form-label">Sub ID</label>
                <input value={id_sub}  name="id_sub" onChange={handleChange} type="number" id="id_sub" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="actividad_final" className="form-label">Actividad final</label>
                <input value={actividad_final}  name="actividad_final" onChange={handleChange} type="number" id="actividad_final" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    );
}
 
export default Form;