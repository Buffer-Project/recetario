import { useState } from "react"

export default function NuevaReceta() {
    const [tituloReceta, setTituloReceta] = useState("")
    const [ingredientes, setIngredientes] = useState([{ "ingrediente": "", "cantidad": "" }])
    const [preparacion, setPreparacion] = useState([""])



    const anadirInputPreparacion = () => {

        return (
            <ol className="div-preparacion">
                {preparacion.map((item, posicion) => (
                    <li><input className="input-nuevaReceta" value={item} onChange={(e) => { handleChangePreparacion(e.target.value, posicion) }} placeholder="Preparacion" /></li>
                ))}
            </ol>
        )
    }

    const agrandarHookPreparacion = () => {
        setPreparacion([...preparacion, ""])
    }

    const handleChangePreparacion = (nuevoValor, posicion) => {
        const preparacionTemporal = [...preparacion]
        preparacionTemporal[posicion] = nuevoValor
        setPreparacion([...preparacionTemporal])
    }

    const handleChangeIngrediente = (nuevoValor, posicion) => {
        const ingSinCant = [...ingredientes]
        ingSinCant[posicion].ingrediente = nuevoValor
        setIngredientes([...ingSinCant])
        console.log(ingredientes)
    }

    const handleChangeCantidad = (nuevoValor, posicion) => {
        const ingredientesConCantidad = [...ingredientes]
        ingredientesConCantidad[posicion].cantidad = nuevoValor
        setIngredientes([...ingredientesConCantidad])

    }

    const recopilar = () => {
        const nuevaReceta = {}
        nuevaReceta.nombreReceta = tituloReceta;
        nuevaReceta.ingredientes = ingredientes;
        nuevaReceta.preparacion = preparacion;

        console.log(nuevaReceta)
    }


    const anadirInputIngredientes = () => {

        return (
            <ul>{ingredientes.map((item, posicion) => (
                <div id="div-input-ingredientes">
                    <li><input className="input-nuevaReceta" value={item.ingrediente} onChange={(e) => { handleChangeIngrediente(e.target.value, posicion) }} placeholder="Ingrediente" /></li>
                    <input className="input-nuevaReceta" value={item.cantidad} onChange={(e) => { handleChangeCantidad(e.target.value, posicion) }} placeholder="Cantidad" />
                </div>
            ))} </ul>
        )
    }

    const agrandarHookIngredientes = () => {

        setIngredientes([...ingredientes, {"ingrediente":"", "cantidad":""}])
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


