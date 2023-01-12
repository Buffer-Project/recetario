import { useState } from "react"

export default function NuevaReceta() {
    const [tituloReceta, setTituloReceta] = useState("")
    const [ingredientes, setIngredientes] = useState([""])
    const [preparacion, setPreparacion] = useState([""]) 

    const recopilar = () => {
        const nuevaReceta = {}
        nuevaReceta.nombreReceta = tituloReceta;
        
        console.log(nuevaReceta)
    }

    const anadirInputPreparacion = () => {

        return (
            <ol className="div-preparacion">
                {preparacion.map((instruccion, posicion) => (
                    <li><input className="input-nuevaReceta" value={instruccion} onChange={(e)=>{handleChangePreparacion(e.target.value, posicion)}} placeholder="Preparacion"/></li>
                ))}
            </ol>
        )
    }

    const handleChangePreparacion = (nuevoValor, posicion) => {
        const preparacionTemporal = [...preparacion]
        preparacionTemporal[posicion] = nuevoValor
        setPreparacion([...preparacionTemporal])
    }


    const agrandarHookPreparacion = () => {
        setPreparacion([...preparacion, ""])
    }


    const anadirInputIngredientes = () => {

        return (
            <ul>{ingredientes.map(() => (
                <div id="div-input-ingredientes">
                    <li><input className="input-nuevaReceta" value={""} placeholder="Ingrediente" /></li>
                    <input className="input-nuevaReceta" value={""} placeholder="Cantidad" />
                </div>
            ))} </ul>
        )
    }

    const agrandarHookIngredientes = () => {

        setIngredientes([...ingredientes, ""])
    }


    return (
        <div id="div-nueva-receta">
            <div id="nueva-receta">
                <h1>
                    Compartí tu receta!
                </h1>
                <div id="form-nuevaReceta">
                    <p>Titulo de la receta</p>
                    <input className="input-nuevaReceta" value={tituloReceta} onChange={(event) => { setTituloReceta(event.target.value) }} placeholder={"Título"}></input>
                    <p>Ingredientes</p>
                    {anadirInputIngredientes()}
                    <button className="añadir-div" onClick={() => agrandarHookIngredientes()}> + </button>
                    <p>Preparación</p>
                    {anadirInputPreparacion()}
                    <button className="añadir-div" onClick={() => agrandarHookPreparacion()}> +  </button><br /><br />
                    <button onClick={() => recopilar()}>Publicar!</button>
                </div>
            </div>
            
        </div>

    )
}


