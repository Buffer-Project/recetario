import recetas from "./Recetas.json"
export default function VisorRecetas() {

    const mostrarIngredientes = () => {

        return (
            <ul>{recetas[0].ingredientes.map(item => (
                <li>{item.cantidad} de {item.ingrediente}</li>

            ))}</ul>
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
        </div>



    )
}