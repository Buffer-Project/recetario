import recetas from "./Recetas.json"
export default function VisorRecetas() {

    const mostrarIngredientes = () => {
         
        return(
            <div>{recetas[0].ingredientes.map(item => (
                <p>{item.cantidad} de {item.ingrediente}</p>
                
            ))}</div>
            )

    }


    return (

        <div>
            <header>
                Receta de {recetas[0].nombreReceta}
            </header>
            <div>
                <p>Ingredientes</p>
                {mostrarIngredientes()}
            </div>
        </div>



    )
}