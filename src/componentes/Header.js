import { useState } from 'react'
import { Dialog } from 'primereact/dialog';
import usuarios from "./Usuarios.json"


import { Link } from 'react-router-dom';
export default function Header() {

   const [visible, setVisible] = useState(false)
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")
   const [user, setUser] = useState({})

   const handleLogin = () => {
      for (let i = 0; i < usuarios.length; i++) {

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
            <Link to={"./"}>
               <img id="icono_inicio" src="https://png.pngtree.com/png-vector/20210303/ourmid/pngtree-cat-paw-shape-cartoon-white-chef-hat-png-image_2987315.jpg" alt=''></img>
            </Link>
         </div>
         <nav id="nav_bar">
            <ul className="navBar">
               <li>Platos</li>
               <li>Bebidas</li>
               <li>Postres</li>
               <Link id='boton-nuevaReceta' to={"./NuevaReceta"} >
                  <li>
                     Publica tu receta
                  </li>
               </Link>
            </ul>
            <div id="div-searchbar">
               <input id="searchbar" type="search" placeholder="Buscar recetas, postres, ingredientes, y más..." ></input>
               <div id="div-icono-lupa">
                  <Link to={"./recetas"} >
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBPjW-HJAeJyvcXBJcZ-VspgyqXvfs-Nd4Kz3wug04w&s" alt="lupa"></img>
                  </Link>
               </div>
            </div>
            <div onClick={() => setVisible(true)} id="boton_login-register">
               {!user.name ? "Inicio de Sesión / Registro" : "Hola, " + user.name + "!"}
            </div>
         </nav>
      </header>

   )
}