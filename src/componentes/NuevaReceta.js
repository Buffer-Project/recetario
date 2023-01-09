import { useState } from "react"





export default function NuevaReceta() {
    const [tituloReceta, setTituloReceta] = useState("")
    const [ingredientes, setIngredientes] = useState([""])
    const [preparacion, setPreparacion] = useState([""])

    const recopilar = () => {
        const nuevaReceta = {}
        nuevaReceta.nombreReceta = tituloReceta;

        console.log("nueva receta: ", nuevaReceta)
    }

    function ArmarIngredientes(){
        const [receta, setReceta] = useState({ingrediente: "", cantidad:"",})
    }

    const handleSave = (event) => {
        const {ingrediente, cantidad} = event.target;
        setReceta((receta) => ({ ...receta, [ingrediente]: cantidad }));
    }

    const anadirInputPreparacion = () => {

        return (
            <div className="div-preparacion">{preparacion.map(() => (
                <input className="input-nuevaReceta" value={""} placeholder="Preparacion" ></input>
            ))}</div>
        )
    }

    const agrandarHookPreparacion = () => {
        setPreparacion([...preparacion, ""])
    }

    const anadirInputIngredientes = () => {

        return(
            <div>{ingredientes.map(() =>(
                <div id="div-input-ingredientes">
                <input className="input-nuevaReceta" value={""} onChange={handleSave()} placeholder="Ingrediente"/>
                <input className="input-nuevaReceta" value={""} onChange={handleSave()}placeholder="Cantidad"/> 
                </div>
            ) )} </div>
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


