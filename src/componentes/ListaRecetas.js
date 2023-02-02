
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { getAll } from "../api/recetaService"



export default function ListaRecetas() {
    
    const { state } = useLocation()
    const { textoBuscado } = state || {textoBuscado: ""}
    const [recetas, setRecetas] = useState([])


    const recetasFiltradas = recetas.filter((receta) => receta.titulo.toLowerCase().includes(textoBuscado.toLowerCase()))
    
    getAll().then(
        resultado => setRecetas(resultado.data)
    )
    


    const mostrarCards = () => {
        return (

            <div id="dashboard-de-recetas">{recetasFiltradas.map(item => (
                <Link to={"/receta/" + item.id} className="linkReceta">
                    <div className="card-receta">
                        <div className="card-imagenReceta">
                            <img src={item.foto} alt="imagen de la receta">

                            </img>
                        </div>
                        <div className="card-tituloReceta">
                            <p>
                                {item.titulo}
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


