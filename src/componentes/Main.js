export default function Main() {

    return (
        <main>
            <input type="text" class="nav-search-input" aria-label="Ingresá lo que quieras encontrar" name="as_word" placeholder="Buscar productos, marcas y más…" maxlength="120" autofocus="" autocapitalize="none" autocorrect="off" spellcheck="false" autocomplete="off" tabindex="2" value="" aria-activedescendant="" aria-controls="cb1-list" aria-autocomplete="list" id="cb1-edit" aria-expanded="false" role="combobox"></input>
            <section id="carrouselDeRecetas">
                <div>
                    <h3 id="autorReceta">Autor de la receta</h3>
                </div>
                <div id="imagenesDeRecetas">

                </div>
                <div id="nombreDeReceta">
                        <p>
                            Nombre de la receta
                        </p>
                </div>
            </section>

        </main>

    )
}