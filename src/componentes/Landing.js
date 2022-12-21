export default function Main() {

    return (
        <div>
            <div id="div-searchbar">
                <input id="searchbar" type="search" placeholder="Buscar recetas, ingredientes, y más..." ></input>
                <div id="div-icono-lupa">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBPjW-HJAeJyvcXBJcZ-VspgyqXvfs-Nd4Kz3wug04w&s" alt="lupa"></img>
                </div>
            </div>
            <section id="carrouselDeRecetas">
                <p>aca iria el carrousel de imagenes de recetas</p>
                <div>
                    <h3 className="autorReceta">Autor de la receta</h3>
                </div>
                <div className="imagenesDeRecetas">

                </div>
                <div className="nombreDeReceta">
                    <p>
                        Nombre de la receta
                    </p>
                </div>
            </section>

        </div>

    )
}