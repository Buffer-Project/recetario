import { Link } from 'react-router-dom';
export default function Footer(){

    return (
        <footer id="footer">
            <div className='subs-form-footer'>
                <Link className='menu-footer' to={"./"}>
                <p>Inicio</p>
                </Link>
                <Link className='menu-footer' to={"/recetas"}>
                <p>Recetas</p>
                </Link>
                <Link className='menu-footer' to={"/NuevaReceta"}>
                <p>Publica tu receta</p>
                </Link>
                <Link className='menu-footer' to={"/Contacto"}>
                <p>Contacto</p>
                </Link>

            </div>
            <div id="redes-soc">
                <div id="texto-redes-soc">
                    Redes sociales
                </div>
                <div id="iconos-redes">

                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAY1BMVEX///8AAADg4ODU1NSdnZ1LS0uEhITKysqwsLDw8PD8/PzGxsba2trPz89hYWEnJycYGBhFRUWVlZVpaWm2trbn5+c+Pj4RERF9fX2KioozMzNycnIJCQmoqKhUVFQ4ODgeHh4I8Ym3AAABl0lEQVR4nO3cDXKCMBAF4IiAJAEUKtQ/1Pufsjp1RqVZkmmzazt97wDuNyTRXRhUKmYSW2zrfvk+uyWN+uneaLvpV7NRrCCgzPtxednLUL256gsSqoYASBH0lgQIEardhECE0E4BJAiG2oZiBF17BOwEk/kE3ARDn0Uhgncf8BM8Z0GAYEMErAQdJGAl7F9OWIQJGAkh55GZUAQKGAnODsmVgksQdiAvWWouwuRvw2GTDsVn1oZLMPWdUFu2so8ZSMBKBqAM2SU0bEs/CrkOtRDg0rASgpPUNVCKatrnYgJFtCpyy6DM0Sk4lHIEfXISjnIClZydhFaQULq3wkKQMHcTBLcCRUhAAAEEEEAAAYRriH6h463atfk9xP2VfT7OELGp79xFvcniTXf0DOlJvMki/S4hXj8JAggggAACCCCA8AcI1E1nX84R+9d19hDiuVSTjVNX8QTPec0c8ZRfME2BAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAMI/InRf/uHgGr5X1Vyxjlfcdz94LPoB6UsaDMhyIG4AAAAASUVORK5CYII=" alt=""></img>
                    <img src="data:image/png;base64,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" alt=""></img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAaVBMVEUAAAD////5+fnb29ve3t7v7++SkpLz8/P8/PxkZGTIyMjOzs7p6el5eXmqqqo/Pz+kpKQjIyPAwMCIiIhUVFQbGxuBgYFPT09eXl4vLy86Ojpzc3O4uLg0NDQWFhbU1NSamppISEgLCwt8I+coAAAFAElEQVR4nO2b2YKrIAyGQeuOe8cu2lH7/g957DYVRMCA9lz0v5raOv2EkASSIvxxoU8DfBG+CF+EDRCcNuzKKqhLt4l2H0AgWXBGb+X7MrI2RSgCNFXaOZshND8cgLsqsglCe5gDGHTNptPhNKFZBFcAcNOesUziXhBKDCJ4RwnBoHD0+TC+X6rNIdizVjBW9/iwFf2NmP1E8HbzxmKSACF3+K6ivvy9jvEDoUlRHovXrkTkV40AoaCnXnoPhOT+IvXgBN5JlYBRge8IzvP+M5xBwRK5cvEDIXpdOEPnogMS1P4T4b2cgXNBgASH5yMjvH9fzOVhjSPgNOz95/3Iv4wu59FyggJG8FyCxMbIyal3iqUEPmwQMnxzR9kxRy6yr9P3liiEAPS2FXb16+FbBgEFyxYGaBDS0d8Vaifvn5YYJVH0zLPa+xwEdE3UERpNgpTgiS3cdVT2ELEewc8QH9GOH2EaRQQ9gvwWoRHJ+e8elSzC0SI42/enoFwTpc6XAeB3gIEofTwl5aAZ5XKzzDQI+r8YUQo+dS4kTkKWsgoUv/4Hkvj4gxhCxC/We4SR1Ln0osUBXpOjeDgkbrwtGC13dnWAEXwKIZHfcN03/F0heCIcCsFTuudUhxyXCTZHQiGoP0qdsPsN8KJkEJYkf9c6aUeDyAlyaqInAuNq2e2nPk7aHfFuJgVFsBiEuTghVN4HQQy2BRZBZVEYFmYRdMO+CQQLuisE6neKgHfbIqQcBLzjJXCrKeAhYBuyLKByKQS/CYIqdCyl0yJTyiiE+nHxUGXFfAJlWuMEAOmkXnC1Y4RU/nnzysehH226EF664DHCdvM/UkAhfMQWqN0Bb1u7vloKAX/AHk+ERtg+UKMjphGcs/wew+oYBK19IUwti2BtGZ/u8lgEvR06QBWeILwi1VZKOAjetgvT4yBge0uCA+YhbGoO7GHBK3EDneOClLP70r/csVAuL2kqwHMIm6Wvk3rDaFvjy49bDOgwObuiSqXJBgMxLTbQ1VqycJsP0PSohi0YE/gxnpLKCQGnZm0lgW6NQSBOZZpbNreTtTbaNefbGATSJJ1br5fEtDIEf+2QyRsEZlGuTIC4p7gUgqgXxYQ4y4FFWHt3zz/UpxBWDpczFRZ6RaxqjimfgEFw1ozYcyV5xi8Ay/AqqvgAU++oUWwS6zJbYJo46LXMYb4zYoIA7EeQKeZ9+QzCOuPQC8quvEhpPmX4FVWfucG6MJ3ACYvw/DY7x6xBzK5HAcKwvTIIcZz5DgkC9sO9IVfZS/oxRP2OdjbbWLBA0tYYSculU3R1+qOVzkpbMVS6Ph0dT8HLFhcjhBrZ7FWhW0yO0GkMAdVwC0UItSxSPgtSBKK12T4pEQgRnE7LUae2EoEIodNzTamoFV8FwdYNl4IEQQXBKfa69aIFnXqczX2hv61VNEQeghVlJg6caoXWNBbB8khUZJWJqDQMwcL+WdTuD4f+fDGXJ8VLu6mR4RztouKSGQSzh/ALFsIbwTHXQ/LrgjraB3PcxUaKxj8l8Hce9xVhGzjx7MA/NHn6BT/RsokeYgMMwgARxcDDxnNpL3JFswiDSLj83DWvQ9WIqIKAbwGqXEBxKgut5+ci3ESSSt7U8HssG60fGQkRBllOlFXHlOc58/M+KJudY+DxhQgPecSOwsQty6oO6rgs3ayIop3u1C9C2EhfhC/CF+E/Q/gHyL5BytBlpUwAAAAASUVORK5CYII=" alt=""></img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAY1BMVEUAAAD////Z2dnHx8fLy8tGRkYLCwvm5ube3t7U1NS5ubkGBgbh4eHt7e17e3v4+PiEhISLi4tnZ2dOTk4+Pj4sLCwdHR05OTlbW1tvb28jIyMTExOWlpazs7MYGBinp6eenp5MYId9AAADQ0lEQVR4nO3a65aiMAwA4BTkVkVEZbhf3v8pt4WZ0VGcJSWSPXuan3NEPhnapmlAsAdwAyzBEizBEizBEizBEv4bQpIkcXAIQ8dxIh27MdyHmP660x9QHwzDQxCrCw0J+o6B48o+PZbn4uJ53jXPqo+u9v09LIi979fdR5XlV3XppTiXx3SQbhRo098JgWxOZeF9LLkTPjqvKE9NG7wmhGn1nls/UVJnlhAct7n/FGXwTJDZlgKAqn0kDNsCdKQ/Cen2AoDTPaHnEAAMN4LDIwCIvgkeFyH/IkguAUD7SbjwEbyJEPAJAMKR0HAS0pFw5iScNSHOOQlZrAghpwDAUQTGIamjVQTWt1EvFMD7NgIUinDlJeQCko1TlcfIYgiQqepAPJ3XIUSL8vJbhELSTiQR7JBX6Ny3p/znuYCdFqb0u6VDSGiNCCJpqBAtDGYEIWKiOa2BkylBPQmSvPsE2D3U/VZMxNgfMBNHKNcQ1D4Ue/1TlIBdIh4IagewcpEpADvZPRHWIjzATnUzBCF2hTkhB+zwniUI4RovuBlgqxovCGpDZFgfqaCjIqhZ2+hJdFDTEURisn7VpAQ1Vw0+luAD9pLfCXr9YieoJ5Ginuw7CLp4h/hWH5B52yKCmjCXLx1YwFKCeOdWdSHBKdFDg5bw3kruAgI2kSF/HWPkE9hTD8q4wR4kUM8LDX65pCX02AWHmJD0ZsOQbKVMWtMqck2UskjzMnZHkriZJ46gE7f16etuXSE/W53E79aWy3LA/oSfhMP6ep0H2E3IPSGiKBieV2xrD6t3tGOUxpt7in39GEfDEkdMd6qYGhV6qGo8YwwG5a54ID1db/FFP9KiI+iin0v7hfhwIeImRHDALpXE0R34DwMSEKwHdABXAWJFpYoizorA0j1xi5T/kFAqAlv/xBQO+4FxHv8bx+a872MzEljPzQP2RpKLmAjYlIEw5CeB79j6KgR3a5XzTeBqMOvFjcAzMD9b/b6aDRl6ORrxk7B5y2UmxSNBBDT7s4Ux13gqNmy/rdLw7rbzTchvolRjE7L8pQn5K162YtdLW7Hrx1bsXrrOwlbs2cA0pEc0DekbhyVYgiVYgiVYgiVYgiUsiT/k1DhuKu59RwAAAABJRU5ErkJggg==" alt=""></img>
                </div>
            </div>
            <section id="subs-form">
                <div className="sub">
                    <p>Suscribite para no perderte ninguna novedad!</p>
                    <p>
                        <input type="text" name="nombre" placeholder="Nombre" id="campo-suscripcion-nombre"></input>
                    </p>
                    <p>
                        <input type="email" name="email" placeholder="Ingresa tu email" id="campo-suscripcion-mail"></input>
                    </p>
                    <p>
                        <input id="sub-button" type="submit" value="Suscribirse"></input>
                    </p>
                </div>
            </section>

        </footer>

    )
}