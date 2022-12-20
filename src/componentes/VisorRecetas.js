import recetas from "./Recetas.json"
export default function VisorRecetas() {

    const receta = recetas[0]
    console.log(receta)
    console.log(recetas)

    return (

        <div>
            {receta.name} hola
        </div>


    )
}