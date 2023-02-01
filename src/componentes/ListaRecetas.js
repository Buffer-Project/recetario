
import { Link, useLocation } from "react-router-dom"
import recetas from "../json/Recetas.json"


export default function ListaRecetas() {
    
    const { state } = useLocation()
    const { nombreReceta } = state;
    const receta = recetas.filter((receta) => receta.nombreReceta === nombreReceta)




    const mostrarCards = () => {
        return (

            <div>{receta.map(item => (
                <Link to={"/receta/" + item.id} target="_blank" className="linkReceta">
                    <div className="card-receta">
                        <div className="card-imagenReceta">
                            <img src={item.imagenReceta} alt="imagen de la receta">

                            </img>
                        </div>
                        <div className="card-tituloReceta">
                            <p>
                                {item.nombreReceta}
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

                <div id="dashboard-de-recetas">
                    {mostrarCards()}
                </div>


            </div>
        </div>
    )

}


