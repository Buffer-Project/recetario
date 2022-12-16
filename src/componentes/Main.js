import { Routes, Route } from "react-router-dom"
import ListaRecetas from "./ListaRecetas"
import Landing from "./Landing"

export default function Main () {
    return (
        <Routes>
            <Route exact path={"/"} element={<Landing/>} />
            <Route path={"/recetas"} element={<ListaRecetas/>} />
        </Routes>
    )
}