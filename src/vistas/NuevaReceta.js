import { useContext, useEffect, useState } from "react"
import { createReceta, getRecetaById, updateReceta } from "../api/recetaService"
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useLocation, useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";
import { Redirect } from 'react-router-dom';


export default function NuevaReceta() {
    const { currentUser, } = useContext(UserContext)
    const [tituloReceta, setTituloReceta] = useState("")
    const [ingredientes, setIngredientes] = useState([{ "ingrediente": "", "cantidad": "" }])
    const [preparacion, setPreparacion] = useState([""])
    const toast = useRef(null);
    const navigate = useNavigate()
    const { state } = useLocation()
    const { recetaAEditar } = state || { recetaAEditar: null };
    let modificarRecetaHecha = false;


    const anadirInputPreparacion = () => {

        return (
            <ol className="div-preparacion">
                {preparacion.map((item, posicion) => (
                    <li><input className="input-nuevaReceta" value={item} onChange={(e) => { handleChangePreparacion(e.target.value, posicion) }} placeholder="Preparacion" /></li>
                ))}
            </ol>
        )
    }

    const agrandarHookPreparacion = () => {
        setPreparacion([...preparacion, ""])
    }

    const handleChangePreparacion = (nuevoValor, posicion) => {
        const preparacionTemporal = [...preparacion]
        preparacionTemporal[posicion] = nuevoValor
        setPreparacion([...preparacionTemporal])
    }

    const handleChangeIngrediente = (nuevoValor, posicion) => {
        const ingSinCant = [...ingredientes]
        ingSinCant[posicion].ingrediente = nuevoValor
        setIngredientes([...ingSinCant])

    }

    const handleChangeCantidad = (nuevoValor, posicion) => {
        const ingredientesConCantidad = [...ingredientes]
        ingredientesConCantidad[posicion].cantidad = nuevoValor
        setIngredientes([...ingredientesConCantidad])

    }



    const crearReceta = () => {
        if (tituloReceta === "" || ingredientes === [{ "ingrediente": "", "cantidad": "" }] || preparacion === []) {
            toast.current.show({
                severity: 'error',
                summary: 'Error',
                detail: 'La receta tiene datos incompletos.'
            })
            return
        }
        const nuevaReceta = {}
        nuevaReceta.titulo = tituloReceta
        nuevaReceta.foto = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDg0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFhUYHSggGCYxGxUVITIhJSkrLi4uFyszODMsNy0tLjABCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBFAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQQFBgMCB//EADcQAQABAwAECwgBBAMAAAAAAAABAgMRBRRTcgQSITEyM1FxkZKxBhUiQVJhotETYnOB8SNCQ//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9ByZADJkADIAAAAAZMgBkyAGTIAZMgBkyAGTIAZMgBkyAGTIAZMgBkyAGTIAmJSiAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmAgBAAAAAAAIBIAAAAAAAAAAAAAAAAAAAAAAAAAJgIAQAAAACASAAAA9LVi5Xy0UVVR2xEzDzdbZoimmmmOSIiIgHM6le2VflNSvbKvyuoyZBy+pXtlX5TUr2yr8rqMmYBy+pXtlX4GpXtlX5XUZMg5fUr2yr8pqV7ZV+V1GTIOX1K9sq/Kale2VfldRkzAOXngd7ZV+WXg69hadtRTXTVEYmumc/eY+YM0AAAAAAAAAEwEAIAAAAAAAAAAdfTzR3OQdfTzR3QDmNIddd35V1jSHXXd+V/QXB4njXZjMxPFp+3JyyDP1G9jP8VeO7l8Od4OwZGneDRiLsRic8Wr79kgxgAAa1vRObMzPWz8VMdn9IMkJjxAdDoTqY3qvVT9oOlb3avWFzQnUxvVeqn7QdK3u1esAygAAAAAAAAATAQAgAAAAAAAAAB19PNHdDkHX080dwOY0h113flc0LwumjNuqcRVOaZnmz2KekOuu78qwOxYumuF01YtUznE5qmObPYy/5KsY41WOzM4fMRnERyzPJER85B9W7c11RTTGapnEQvcN0ZVapiuJ40RHx/ae2Ps0tGcB/ip41XWVRy/0x2QugxdDcBzi7XHJHQifnP1NtERjkjkiOaI5ohIMPTfBOLP8ALTHJVyVx2VdrLddcoiqJpqjMTGJhy/C+Dzarmifly0z20/KQbehOpjeq9VP2g6Vvdq9YXNCdTG9V6qftB0re7V6wDKAAAAAAAAABMBACAAAAAAAAAAHX080d0OQdfTzR3A5jSHXXd+XnYs1XKoop55n/ABEdr00h113flsaI4H/HTx6o+OuPLT2Az9I6Nm18VGaqPnnnpn7rmiOAcXF2uPinoxP/AFjt72oAAAAAKOluDRctzVzVW4mqJ+3zheePDOqu/wBuv0BW0J1Mb1Xqp+0HSt7tXrC5oTqY3qvVT9oOlb3avWAZQAAAAAAAAAJgIAQAAAAAAAAAA6+nmjucg6zg9yK6KaqZzExH+gYF25bp4TXVczNNNczxYxyz8s5X/fln6a/x/bUQDM9+Wfpr/H9nvyz9Nf4/tp4MAzPfln6a/wAf2e/LP01/j+2mAzPfln6a/wAf2e/LP01/j+2ngwDM9+Wfpr/H9vO/pm1VRXTEVZqpqpjPFxyx3tfBgFDQk/8ADG9V6qntB0re7V6w2mFp27FVdNMTmaYnP2mfkDNAAAAAAAAABMBACAAAAAQCUJAAAHpav10dCuqnul5gLGvXtrX4mvXtrX4q4Cxr17a1+Jr17a1+KuAsa9e2tfia9e2tfirgLGvXtrX4mvXtrX4q4Cxr17a1+Jr17a1+KuA954ben/1r8XgAAAAAAAAAAAJgIAQAAAAhIAAAAAAAAAAAAAAAAAAAAAAAAAAAACYCAEAAAAISAISAAAISAAAAAAAAAAAAAAAAAAAAAAAmAgBAAAAAACEgAAAAAAAAAAAAAAAAAAAAAAAAAAJgAH//2Q=="
        nuevaReceta.ingredientes = ingredientes
        nuevaReceta.preparacion = preparacion
        nuevaReceta.autor = currentUser.name

        createReceta(nuevaReceta).then(
            (res) => {
                toast.current.show({
                    severity: 'success',
                    summary: 'Exito!',
                    detail: 'La receta ha sido cargada correctamente'
                });

                setTimeout(() => navigate("/receta/" + res.data.id), 3000)
            },
            (error) => {
                if (error.status === 400) {
                    toast.current.show({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'La receta tiene datos incompletos.'
                    })
                } else {
                    toast.current.show({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Hubo un error de sistema, intente nuevamente en unos minutos.'
                    })
                }
            })




    }


    const anadirInputIngredientes = () => {

        return (
            <ul>{ingredientes.map((item, posicion) => (
                <div id="div-input-ingredientes">
                    <li><input className="input-nuevaReceta" value={item.ingrediente} onChange={(e) => { handleChangeIngrediente(e.target.value, posicion) }} placeholder="Ingrediente" /></li>
                    <input className="input-nuevaReceta" value={item.cantidad} onChange={(e) => { handleChangeCantidad(e.target.value, posicion) }} placeholder="Cantidad" />
                </div>
            ))} </ul>
        )
    }

    const agrandarHookIngredientes = () => {

        setIngredientes([...ingredientes, { "ingrediente": "", "cantidad": "" }])
    }

    useEffect(
        () => {
            if (recetaAEditar !== undefined || null) {
                getRecetaById(recetaAEditar).then(
                    (res) => {
                        setTituloReceta(res.data.titulo)
                        setIngredientes(res.data.ingredientes)
                        setPreparacion(res.data.preparacion)

                    }

                )
            }
        }, [recetaAEditar]
    )

    if (recetaAEditar !== null) {
        modificarRecetaHecha = true
    }

    const guardarCambios = () => {
        const recetaEditada = {}
        recetaEditada.id = recetaAEditar
        recetaEditada.autor = currentUser.name
        recetaEditada.ingredientes = ingredientes
        recetaEditada.preparacion = preparacion
        recetaEditada.foto = "data:image/jpeg;base64,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"
        updateReceta(recetaEditada).then(
            (res) => {
                toast.current.show({
                    severity: 'success',
                    summary: 'Exito!',
                    detail: 'La receta ha sido modificada correctamente'
                });

                setTimeout(() => navigate("/receta/" + res.data.id), 3000)
            },
            (error) => {
                if (error.status === 400) {
                    toast.current.show({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'La receta tiene datos incompletos.'
                    })
                } else {
                    toast.current.show({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Hubo un error de sistema, intente nuevamente en unos minutos.'
                    })
                }
            })

        
    }

    if (currentUser.tipo === "guest") {
        navigate("/")
    }

    return (
        <div id="div-nueva-receta">
            <div className="nueva-receta">
                {
                    modificarRecetaHecha

                        ?

                        <h1>
                            Edita tu receta!
                        </h1>

                        :

                        <h1>
                            Compartí tu receta!
                        </h1>

                }
                <div id="form-nuevaReceta">
                    <p>Titulo de la receta</p>
                    <input className="input-nuevaReceta" value={tituloReceta} onChange={(event) => { setTituloReceta(event.target.value) }} placeholder={"Título"}></input>
                    <p>Ingredientes</p>
                    {anadirInputIngredientes()}
                    <button className="añadir-div" onClick={() => agrandarHookIngredientes()}> + </button>
                    <p>Preparación</p>
                    {anadirInputPreparacion()}
                    <button className="añadir-div" onClick={() => agrandarHookPreparacion()}> +  </button><br /><br />


                    {
                        modificarRecetaHecha

                            ?

                            <Button onClick={() => guardarCambios()} label="Guardar cambios" />

                            :

                            <Button onClick={() => crearReceta()} label="Publicar" />
                    }

                </div>
            </div>



            <Toast ref={toast} />
        </div>

    )
}


