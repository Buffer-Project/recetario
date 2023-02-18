
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { getAllRecetas } from "../api/recetaService"



export default function ListaRecetas() {

    const { state } = useLocation()
    const { textoBuscado } = state || { textoBuscado: "" }
    const [recetas, setRecetas] = useState([])

    useEffect(() => {
        getAllRecetas().then(
            (resultado) => setRecetas(resultado.data)
        )
    }, [recetas])

    const recetasSinErrores = recetas.filter((receta) => receta.titulo != null && receta.preparacion != null && receta.ingredientes != null)
    
    const recetasFiltradas = recetasSinErrores.filter((receta) => receta.titulo.toLowerCase().includes(textoBuscado.toLowerCase()))






    const mostrarCards = () => {
        return (

            <div id="dashboard-de-recetas">{recetasFiltradas.map(receta => (
                <Link to={"/receta/" + receta.id} className="linkReceta">
                    <div className="card-receta">
                        <div className="card-imagenReceta">
                            <img src={receta.foto} alt="imagen de la receta">

                            </img>
                        </div>
                        <div className="card-tituloReceta">
                            <p>
                                {receta.titulo}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}</div>

        )

    }

    return (
        <div id="div-gral-ListaRecetas">
            <div id="contenedor-de-filtros-y-recetas">
                <div id="div-filtros">

                </div>

                <div className="contenedorRecetas">
                    {mostrarCards()}
                </div>


            </div>
        </div>
    )

}


