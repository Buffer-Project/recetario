import React from "react";
import { Rating } from 'primereact/rating';


export default function Calificaciones(props) {




    if (props.calif != null)
        return (
            <div>
                <div>
                    <h3>Calificaciones:</h3>
                </div>
                <div className="Calificaciones">

                    {
                        props.calif.map(item => (
                            <p>{item.comentario}
                                <Rating value={item.puntuacion} readOnly cancel={false} />
                            </p>
                        ))
                    }

                </div>
            </div>
        )
}