import { Rating } from 'primereact/rating';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import recetas from "./Recetas.json"
export default function VisorRecetas() {
    const { id } = useParams();
    const receta = recetas.filter((receta) => receta.id===id)[0]
    const [value, setValue] = useState("")
    const mostrarIngredientes = () => {

        return (
            <ul>{receta.ingredientes.map(item => (
                <li>{item.cantidad} de {item.ingrediente}</li>

            ))}</ul>
        )

    }

    const mostrarPreparacion = () => {

        return (
            <ol>{receta.preparacion.map(item => (
                <li>{item}</li>

            ))}</ol>
        )

    }






    return (
        <div>
            <header id="header-visor">
                <p>{receta.nombreReceta}</p>
            </header>
            <div id="fecha-publicacion">
                Publicado el xx/xx/xxxx
            </div>
            <div className="imagen-receta">
                <img src={receta.imagenReceta} alt="imagen-receta"></img>
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