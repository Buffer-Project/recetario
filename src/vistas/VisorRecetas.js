import { Rating } from 'primereact/rating';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecetaById } from '../api/recetaService';
import { Skeleton } from 'primereact/skeleton';

export default function VisorRecetas() {
    const { id } = useParams();
    const [value, setValue] = useState("")
    const [recetaVisualizada, setRecetaVisualizada] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getRecetaById(id).then(
            (resultado) => {
                setRecetaVisualizada(resultado.data)
                setIsLoading(false)
            }

        )
    }, [id]
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
                            <p>Hecha por {recetaVisualizada.autor}</p>
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
                    </div>
            }
            <div className='rating'>
                <p><b>Dejanos tu opinion!</b></p>
                <Rating value={value} onChange={(e) => setValue(e.value)} stars={5} cancel={false} />
            </div>
        </div>







    )
}

