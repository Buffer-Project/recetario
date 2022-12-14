import { useState } from 'react'
import { Dialog } from 'primereact/dialog';
export default function Header() {

   const [visible, setVisible] = useState(false)
   const [username, setUsername] = useState("")

   return (
      <header>
         <Dialog onHide={() => { setVisible(false) }} visible={visible} draggable={false} dismissableMask={true} closable={false}>
            <div>Usuario o Email</div>
            <input value={username} onChange={(event) => { setUsername(event.target.value) }} placeholder={""} />
            <div>
               Contraseña
            </div>
            <input type="password" placeholder={"Contraseña"}></input>
            <button onClick={() =>alert("Se ha logueado correctamente!")}>
               Submit
            </button>
         </Dialog>
         <div id="div_logo">
            <a href="App.js">
               <img id="icono_inicio" src="https://png.pngtree.com/png-vector/20210303/ourmid/pngtree-cat-paw-shape-cartoon-white-chef-hat-png-image_2987315.jpg"></img>
            </a>
         </div>
         <nav id="nav_bar">
            <ul className="navBar">
               <li><a href=""></a>Platos </li>
               <li><a href=""></a>Bebidas </li>
               <li><a href=""></a>Postres </li>
               <li><a href=""></a>Publica tu receta </li>
            </ul>
            <div onClick={() => setVisible(true)} id="boton_login-register">
               Inicio de Sesión / Registro
            </div>
         </nav>
      </header>

   )
}