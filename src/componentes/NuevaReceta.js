import { useState } from "react"
import recetas from "./Recetas.json"




export default function NuevaReceta() {
    const [tituloReceta, setTituloReceta] = useState("")
    const [ingredientes, setIngredientes] = useState("")
    const [preparación, setPreparación] = useState("")

    

    

    return (
        <div id="div-nueva-receta">
            <div id="nueva-receta">
                <h1>
                    Compartí tu receta!
                </h1>
                <form>
                <p>Titulo de la receta</p>
                <input value={tituloReceta} onChange={(event) => { setTituloReceta(event.target.value) }} placeholder={"Título"}></input>
                <p>Ingredientes</p>
                <input value={ingredientes} onChange={(event) => { setIngredientes(event.target.value) }} placeholder={"Ingredientes"}></input>
                <p>Preparación</p>
                <input value={preparación} onChange={(event) => { setPreparación(event.target.value) }} placeholder={"Preparación"}></input>
                </form>
            </div>
        </div>
    )
}