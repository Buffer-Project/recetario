
import { useLocation } from "react-router-dom"
<<<<<<< HEAD
import recetas from "./Recetas.json"
=======
import recetas from "../json/Recetas.json"
>>>>>>> franco


export default function ListaRecetas() {

    const { state } = useLocation()
    const { nombreReceta } = state;
<<<<<<< HEAD
    const receta = recetas.filter((receta) => receta.nombreReceta === nombreReceta)[0]
=======
    const receta = recetas.filter((receta) => receta.nombreReceta === nombreReceta)
>>>>>>> franco




    const mostrarCards = () => {
        return (

            <div>{receta.map(item => (
                <div className="card-receta">
                    <div className="card-imagenReceta">
<<<<<<< HEAD

=======
                        <img src={item.imagenReceta} alt="imagen de la receta">

                        </img>
>>>>>>> franco
                    </div>
                    <div className="card-tituloReceta">
                        <p>
                            {item.nombreReceta}
                        </p>
                    </div>
                </div>

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


/*

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

<<<<<<< HEAD
=======

                    

>>>>>>> franco
*/