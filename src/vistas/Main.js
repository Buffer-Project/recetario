import { Routes, Route } from "react-router-dom"
import ListaRecetas from "../componentes/ListaRecetas"
import Landing from "./Landing"
import VisorRecetas from "./VisorRecetas"
import NuevaReceta from "./NuevaReceta"
import Error404 from "./Error404"
import Contacto from "./Contacto"
export default function Main() {
    return (
        <main>
            <Routes>
                <Route exact path={"/"} element={<Landing />} />
                <Route path={"/recetas"} element={<ListaRecetas />} />
                <Route exact path={"/receta/:id"} element={<VisorRecetas />} />
                <Route exact path={"/NuevaReceta"} element={<NuevaReceta />} />
                <Route exact path={"/Contacto"} element={<Contacto />} />
                <Route path={"*"} element={<Error404 />} />
                <Route exact path={`/EditarReceta/:id`} element={<NuevaReceta />} />
            </Routes>
        </main>

    )
}