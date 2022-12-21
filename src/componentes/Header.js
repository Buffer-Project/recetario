import { useState } from 'react'
import { Dialog } from 'primereact/dialog';
import usuarios from "./Usuarios.json"
export default function Header() {

   const [visible, setVisible] = useState(false)
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")
   const [user, setUser] = useState({})

   const handleLogin = () => {
      for (let i = 0; i < 4; i++) {

         if (usuarios[i].password === password && usuarios[i].username === username) {
            setUser(usuarios[i])
            setVisible(false)
         }


      }
   }

   return (
      <header>
         <Dialog onHide={() => { setVisible(false) }} visible={visible} draggable={false} dismissableMask={true} closable={false}>
            <div>Usuario o Email</div>
            <input value={username} onChange={(event) => { setUsername(event.target.value) }} placeholder={"Usuario"} />
            <div>
               Contraseña
            </div>
            <input type="password" value={password} onChange={(event) => { setPassword(event.target.value) }} placeholder={"Contraseña"}></input>
            <button onClick={() => handleLogin()}>
               Submit
            </button>
         </Dialog>
         <div id="div_logo">
            <a href="Landing.js">
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
               {!user.name ? "Inicio de Sesión / Registro" : "Hola, " + user.name +"!"}
            </div>
         </nav>
      </header>

   )
}