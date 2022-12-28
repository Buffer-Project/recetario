import { Routes, Route } from "react-router-dom"
import ListaRecetas from "./ListaRecetas"
import Landing from "./Landing"
import VisorRecetas from "./VisorRecetas"
import NuevaReceta from "./NuevaReceta"

export default function Main() {
    return (
        <main>
            <Routes>
                <Route exact path={"/"} element={<Landing />} />
                <Route exact path={"/Landing"} element={<Landing />} />
                <Route path={"/recetas"} element={<ListaRecetas />} />
                <Route exact path={"/receta/:id"} element={<VisorRecetas />} />
                <Route exact path={"/NuevaReceta"} element={<NuevaReceta />} />
            </Routes>
        </main>
    )
}