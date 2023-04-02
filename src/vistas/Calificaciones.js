import React from "react";
import { Rating } from 'primereact/rating';


export default function Calificaciones (props) {




if(props.calif !=null)
    return (
        <div className="CajaCalificiones">
            <h1>Calificaciones:</h1>
   
            {                              
                props.calif.map(item => (
               <p>{item.comentario} 
                <Rating value={item.puntuacion} readOnly cancel={false} />
                </p>
                ))
            }
            
        </div>
    )
}