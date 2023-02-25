import { Rating } from 'primereact/rating';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getRecetaById } from '../api/recetaService';
import { Skeleton } from 'primereact/skeleton';
import UserContext from '../Context/UserContext';


export default function VisorRecetas() {
    const { currentUser, } = useContext(UserContext)
    const { id } = useParams();
    const [value, setValue] = useState("")
    const [recetaVisualizada, setRecetaVisualizada] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [esElAutor, setEsElAutor] = useState(false)
    const navigate = useNavigate()

    recetaVisualizada.autor = { nombre: "Franco" }

    useEffect(() => {
        getRecetaById(id).then(
            (resultado) => {

                setRecetaVisualizada(resultado.data)
                setIsLoading(false)
                if (currentUser.name === recetaVisualizada.autor.nombre) {
                    setEsElAutor(true)
                }
            }

        )
    }, []
    )

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

        navigate(`/EditarReceta/${id}`,{ state: { recetaAEditar : id } })
    }




    return (
        <div>

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
                                <button className='boton-editar-receta' onClick={() => editarReceta()}>Editar Receta</button>
                                :
                                null

                        }
                    </div>
            }
            <div className='rating'>
                <p><b>Dejanos tu opinion!</b></p>
                <Rating value={value} onChange={(e) => setValue(e.value)} stars={5} cancel={false} />
            </div>
        </div>
    )
}

