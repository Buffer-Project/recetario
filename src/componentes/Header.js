import { useState } from 'react'
import { Dialog } from 'primereact/dialog';
import usuarios from "../json/Usuarios.json"


import { Link } from 'react-router-dom';
export default function Header() {

   const [visible, setVisible] = useState(false)
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")
   const [user, setUser] = useState({})

   const [register, setRegister] = useState(true)
   const[newuser, setNewuser] = useState("")
   const [newname, setNewname] = useState("")
   const[newpassword, setNewpassword] = useState("")
   const[cnewpassword, setCnewpassword] = useState("")
   const[newmail, setNewmail] = useState("")

   const handleLogin = () => {
      for (let i = 0; i < usuarios.length; i++) {

         if (usuarios[i].password === password && usuarios[i].username === username) {
            setUser(usuarios[i])
            setVisible(false)
         }


      }
   }

   const handleRegister = () => {

         }

   const loguearse = () => {
      setVisible(true)
      setRegister(true)
         }



   return (
      <header>
         <Dialog onHide={() => { setVisible() }} visible={visible} draggable={false} dismissableMask={true} closable={false}>
            {
               register
                  ?
                  <div>
                     <div className='Titulo-login'> Ingresar a Recepedia</div>
                     <div>Usuario</div>
                     <input value={username} onChange={(event) => { setUsername(event.target.value) }} placeholder={""} />
                     <div>Contraseña</div>
                     <input type="password" value={password} onChange={(event) => { setPassword(event.target.value) }} placeholder={""}></input>
                     <button onClick={() => handleLogin()}>
                        Iniciar Sesión
                     </button>
                     No tienes cuenta?
                     <button onClick={() => setRegister(!register)}>
                        Registrarse
                     </button>
                  </div>


                  : <div>
                     <div className='Titulo-login'>Registrarse en Recepedia</div>
                     <div>Usuario</div>
                     <input value={newuser} onChange={(event) => { setNewuser(event.target.value) }} placeholder={""} />
                     <div>Nombre</div>
                     <input value={newname} onChange={(event) => { setNewname(event.target.value) }} placeholder={""} />
                     <div>Correo Electronico</div>
                     <input value={newmail} onChange={(event) => { setNewmail(event.target.value) }} placeholder={""} />
                     <div>Contraseña</div>
                     <input type="password" value={newpassword} onChange={(event) => { setNewpassword(event.target.value) }} placeholder={""}></input>
                     <div>Confirmar Contraseña</div>
                     <input type="password" value={cnewpassword} onChange={(event) => { setCnewpassword(event.target.value) }} placeholder={""}></input>
                     <button onClick={() => handleRegister}>Registarte</button>
                     Tienes cuenta?
                     <button onClick={() => setRegister(!register)}>
                        Volver atras
                     </button>
                  </div>
            }


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
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBPjW-HJAeJyvcXBJcZ-VspgyqXvfs-Nd4Kz3wug04w&s" alt="lupa"></img>
               </div>
            </div>
            <div onClick={() => loguearse()} id="boton_login-register">
               {!user.name ? "Inicio de Sesión / Registro" : "Hola, " + user.name + "!"}
            </div>
         </nav>
      </header>

   )
}