import { Rating } from 'primereact/rating';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getById } from '../api/recetaService';



export default function VisorRecetas() {
    const { id } = useParams();
    const [value, setValue] = useState("")
    const [recetaVisualizada, setRecetaVisualizada] = useState({})

    useEffect(()=>{
        getById(id).then(
            resultado => setRecetaVisualizada(resultado.data)

        )},[id]
    )





    const mostrarIngredientes = () => {
        if (recetaVisualizada.ingredientes) {
            return (
                <ul>{recetaVisualizada.ingredientes.map(item => (
                    <li>{item.cantidad} de {item.ingrediente}</li>

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
            <header id="header-visor">
                <p>{recetaVisualizada.titulo}</p>
            </header>
            <div id="fecha-publicacion">
                Publicado el xx/xx/xxxx
            </div>
            <div className="imagen-receta">
                <img src={recetaVisualizada.foto} alt="imagen-receta"></img>
            </div>

            <div className="lista-ingredientes">
                <p id="titulo-ingredientes"><b>Ingredientes:</b></p>
                {mostrarIngredientes()}
            </div>
            <div className="preparacion">
                <p id="titulo-preparacion"><b>Preparacion</b></p>
                {mostrarPreparacion()}
            </div>
            <div className='rating'>
                <p><b>Dejanos tu opinion!</b></p>
                <Rating value={value} onChange={(e) => setValue(e.value)} stars={5} cancel={false} />
            </div>
        </div>







    )
}