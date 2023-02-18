import { useEffect, useState } from "react"
import { getAllRecetas } from "../api/recetaService"
import { Galleria } from 'primereact/galleria';

export default function Landing() {

    const [recetas, setRecetas] = useState([])

    useEffect(() => {
        getAllRecetas().then(
            (res) => setRecetas(res.data)
        )
    }
    )

    const itemTemplate = (item) => {
        return <img src={item.foto} alt={ "imagen de " + item.titulo} style={{ width: '100%', display: 'block' }} />;
    }


    return (
        <div id="landing">

            <div className="card">
                <Galleria className="galeria" value={recetas} numVisible={5} circular style={{ maxWidth: '300px' }}
                    showThumbnails={false} showItemNavigators item={itemTemplate}/>
            </div>

        </div>

    )
}