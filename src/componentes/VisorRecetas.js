import { Rating } from 'primereact/rating';
import { useState } from 'react';
import recetas from "./Recetas.json"
export default function VisorRecetas() {
    const [value, setValue] = useState("")
    const mostrarIngredientes = () => {

        return (
            <ul>{recetas[0].ingredientes.map(item => (
                <li>{item.cantidad} de {item.ingrediente}</li>

            ))}</ul>
        )

    }

    const mostrarPreparacion = () => {

        return (
            <ol>{recetas[0].preparacion.map(item => (
                <li>{item}</li>

            ))}</ol>
        )

    }


    return (

        <div>
            <header id="header-visor">
                <p>{recetas[0].nombreReceta}</p>
            </header>
            <div id="fecha-publicacion">
                Publicado el xx/xx/xxxx
            </div>
            <div className="imagen-receta">
                <img src={recetas[0].imagenReceta} alt="imagen-receta"></img>
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