import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteReceta, getRecetaById } from '../api/recetaService';
import { createCalificacion } from '../api/calificacionesService';
import { Skeleton } from 'primereact/skeleton';
import UserContext from '../Context/UserContext';
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import Calificaciones from "./Calificaciones";



export default function VisorRecetas() {
    const { currentUser, } = useContext(UserContext)
    const { id } = useParams();
    const [value, setValue] = useState("")
    const [recetaVisualizada, setRecetaVisualizada] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [esElAutor, setEsElAutor] = useState(false)
    const [logged,setLogged] = useState(false)
    const navigate = useNavigate()
    const [comentario, setComentario] = useState("")
    const [puntuacion, setPuntuacion] = useState("")


    const toast = useRef(null)
    const toastConfirm = useRef(null)

    recetaVisualizada.autor = { nombre: "Franco" }

    

    useEffect(() => {
        getRecetaById(id).then(
            (resultado) => {
                setRecetaVisualizada(resultado.data)
                console.log(resultado.data)
                setIsLoading(false)
                if (currentUser.name === recetaVisualizada.autor.nombre) {
                    setEsElAutor(true)
                }
            }

        )
    }, []
    )

    if(currentUser.tipo === "guest") {
       setLogged(true)
    }

    const handleCalificacion = () => {
        
        if (comentario === "" || puntuacion === null) {
            toast.current.show({
                severity: 'error',
                summary: 'Error',
                detail: 'La calificacion tiene datos incompletos.'
            })
            return
        }
        const nuevaCalificacion = {}
        nuevaCalificacion.comentario = comentario
        nuevaCalificacion.puntuacion = puntuacion

        createCalificacion(recetaVisualizada.id, nuevaCalificacion).then(

            (res) => {
                toast.current.show({
                    severity: 'success',
                    summary: 'Exito!',
                    detail: 'El comentario ha sido cargado correctamente'
                });
                setRecetaVisualizada(res.data)
            },

            (error) => {
                if (error.status === 400) {
                    toast.current.show({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'La calificacion tiene datos incompletos.'
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


    const mostrarIngredientes = () => {
        if (recetaVisualizada.ingredientes) {
            return (
                <ul>{recetaVisualizada.ingredientes.map(item => (
                    <li>{item.ingrediente} <b>Cantidad:</b> {item.cantidad} </li>

                ))}</ul>
            )
        }

    }

    const mostrarPreparacion = () => {
        if (recetaVisualizada.preparacion) {
            return (
                <ol>{recetaVisualizada.preparacion.map(item => (
                    <li>{item}</li>

                ))}</ol>
            )
        }
    }

    const editarReceta = () => {
        navigate("/EditarReceta/" + id, { state: { recetaAEditar: id } })
    }

    const showModalEliminarReceta = () => {
        toastConfirm.current.show({
            severity: 'info',
            sticky: true,
            className: 'border-none',
            content: (
                <div className="flex flex-column align-items-center" style={{ flex: '1' }}>
                    <div className="text-center">
                        <i className="pi pi-exclamation-triangle" style={{ fontSize: '3rem' }}></i>
                        <div className="font-bold text-xl my-3">Estas seguro?</div>
                    </div>
                    <div className="flex gap-2">
                        <Button onClick={(e) => eliminarReceta()} type="button" label="Confirmar"
                            className="p-button-success w-70rem" />
                        <Button onClick={(e) => toastConfirm.current.clear()} type="button" label="Cancelar"
                            className="p-button-warning w-70rem" />
                    </div>
                </div>
            )
        })
    }

    const eliminarReceta = () => {
        deleteReceta(id).then(
            () => {
                toast.current.show({
                    severity: 'success',
                    summary: 'Exito!',
                    detail: 'Receta eliminada con exito'
                })
                setTimeout(() => navigate('/recetas'), 2000)
            },
            (err) => {
                toast.current.show({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Error al eliminar la receta'
                })
            }
        )
    }




    return (
        <div>
            <Toast ref={toast} />
            <Toast ref={toastConfirm} position={"center"} />

            {
                isLoading

                    ?
                    <div>
                        <header className="header-visor">
                            <Skeleton id='sk-titulo' width='162px' height='44px' />
                        </header>
                        <Skeleton id='sk-foto' width='300px' height='216px' borderRadius='0px' />
                        <Skeleton id='sk-ingredientes' height='360px' width='540px' borderRadius='15px' />
                        <Skeleton id='sk-preparacion' width='1040px' height='450px' borderRadius='15px' />
                    </div>
                    :
                    <div>
                        <header className="header-visor">
                            <p>{recetaVisualizada.titulo}</p>
                        </header>
                        <div>
                            <p>Hecha por {recetaVisualizada.autor.nombre}</p>
                        </div>
                        <div className="imagen-receta">
                            <img src={recetaVisualizada.foto} alt="imagen de " />
                        </div>

                        <div className="lista-ingredientes">
                            <p id="titulo-ingredientes"><b>Ingredientes:</b></p>
                            {mostrarIngredientes()}
                        </div>
                        <div className="preparacion">
                            <p id="titulo-preparacion"><b>Preparacion:</b></p>
                            {mostrarPreparacion()}
                        </div>
                        {
                            esElAutor

                                ?
                                <div>
                                    <button className='boton-editar-receta' onClick={() => editarReceta()}>Editar Receta</button>
                                    <button className='boton-editar-receta' onClick={() => showModalEliminarReceta()}>Eliminar Receta</button>
                                </div>
                                :
                                null

                        }
                    <div className='CajaCalificaciones'>
                        <Calificaciones calif={recetaVisualizada.calificaciones}></Calificaciones>
                    </div>
            </div>
            }
            
        </div>
    )
}

