import { useContext, useRef, useState } from 'react'
import { Dialog } from 'primereact/dialog';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../Context/UserContext';
import { login, register } from '../api/userService';
import { Toast } from 'primereact/toast';
export default function Header() {

   const { currentUser, changeUser } = useContext(UserContext)
   const [visible, setVisible] = useState(false)
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")
   const toast = useRef(null);

   const [estaRegistrado, setEstaRegistrado] = useState(true)
   const [newUser, setNewUser] = useState("")
   const [newName, setNewName] = useState("")
   const [newPassword, setNewPassword] = useState("")
   const [cNewPassword, setCNewPassword] = useState("")
   const [newMail, setNewMail] = useState("")
   const [busqueda, setBusqueda] = useState("")

   const handleLogin = () => {
      const user = {}
      user.username = username;
      user.password = password;
      login(user).then(
         (res) => {
            setVisible(false)
            changeUser(res.data)
         }
      )
   }

   const navigate = useNavigate();


   const handleRegister = () => {
      if (newUser === "" || newName === "" || newPassword === "" || cNewPassword === "" || newMail === "" ) {

         toast.current.show({
            severity: 'error',
            summary: 'Error',
            detail: 'Faltan competar datos'
         })
         return
      }

      if(newPassword !== cNewPassword){
         toast.current.show({
            severity: 'error',
            summary: 'Error',
            detail: 'La contraseña no coincide'
         })
         return
      }

      const user = {}
      user.username = newUser
      user.password = newPassword
      user.name = newName
      user.email = newMail

      register(user).then(
         () => {
            toast.current.show({
               severity: 'success',
               summary: 'Exito!',
               detail: 'Se ha registrado correctamente'
            });
            setVisible(false)
            login(user)
            changeUser(user)
         },
         () => {
            toast.current.show({
               severity: 'error',
               summary: 'Error',
               detail: 'Hubo un error de sistema, intente nuevamente en unos minutos.'
            })

         })


   }

   const loguearse = () => {
      setVisible(true)
      setEstaRegistrado(true)

   }

   const handleClick = () => {

      if (currentUser.tipo === "guest") {
         setVisible(true)
         setEstaRegistrado(true)
      } else {
         navigate("/NuevaReceta")
      }

   }

   return (
      <header>
         <Dialog onHide={() => { setVisible(false) }} visible={visible} draggable={false} dismissableMask={false} closable={true}>
            {
               estaRegistrado
                  ?
                  <div>
                     <div className='Titulo-login'> Ingresar a Recepedia</div>
                     <div>Usuario</div>
                     <input value={username} onChange={(event) => { setUsername(event.target.value) }} placeholder={"Usuario"} />
                     <div>Contraseña</div>
                     <input type="password" value={password} onChange={(event) => { setPassword(event.target.value) }} placeholder={"Contraseña"}></input>
                     <button onClick={() => handleLogin()}>
                        Iniciar Sesión
                     </button>
                     No tienes cuenta?
                     <button onClick={() => setEstaRegistrado(!estaRegistrado)}>
                        Registrarse
                     </button>
                  </div>

                  :
                  <div>
                     <div className='Titulo-login'>Registrarse en Recepedia</div>
                     <div>Usuario</div>
                     <input value={newUser} onChange={(event) => { setNewUser(event.target.value) }} placeholder={"Usuario"} />
                     <div>Nombre</div>
                     <input value={newName} onChange={(event) => { setNewName(event.target.value) }} placeholder={"Nombre"} />
                     <div>Correo Electronico</div>
                     <input value={newMail} onChange={(event) => { setNewMail(event.target.value) }} placeholder={"Email"} />
                     <div>Contraseña</div>
                     <input type="password" value={newPassword} onChange={(event) => { setNewPassword(event.target.value) }} placeholder={"Contraseña"}></input>
                     <div>Confirmar Contraseña</div>
                     <input type="password" value={cNewPassword} onChange={(event) => { setCNewPassword(event.target.value) }} placeholder={"Confirmar Contraseña"}></input>
                     <button onClick={() => handleRegister()}>Registarte</button>
                     Tienes cuenta?
                     <button onClick={() => setEstaRegistrado(!estaRegistrado)}>
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
               <div id='boton-nuevaReceta' onClick={() => handleClick()} >
                  <li>
                     Publica tu receta
                  </li>
               </div>
            </ul>
            <div id="div-searchbar">
               <input id="searchbar" value={busqueda} onChange={(event) => { setBusqueda(event.target.value) }} type="search" placeholder="Buscar recetas, postres, ingredientes, y más..." ></input>

               <button id="div-icono-lupa" onClick={() => navigate("/recetas", { state: { textoBuscado: busqueda } })}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBPjW-HJAeJyvcXBJcZ-VspgyqXvfs-Nd4Kz3wug04w&s" alt="lupa"></img>
               </button>
            </div>
            <div onClick={() => loguearse()} id="boton_login-register">
               {
                  currentUser.name

                     ?

                     "Hola, " + currentUser.name + "!"

                     :

                     "Inicio de Sesión / Registro"
               }
            </div>
         </nav>
         <Toast ref={toast} />
      </header>

   )
}
