
import { useLocation } from "react-router-dom"
import recetas from "./Recetas.json"


export default function ListaRecetas() {

const {search} = useLocation()
const{busqueda} = search
console.log(search)

    return (
        <div id="div-gral-ListaRecetas">
            <div id="contenedor-de-filtros-y-recetas">
                <div id="div-filtros">

                </div>

                <div id="dashboard-de-recetas">
                    <div className="card-receta">
                        <div className="card-imagenReceta">
                            <img src={recetas[0].imagenReceta} alt="imagen de la receta">

                            </img>
                        </div>
                        <div className="card-tituloReceta">
                            <p>
                                {recetas[0].nombreReceta}
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )

}