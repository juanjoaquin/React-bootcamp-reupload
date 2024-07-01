import React from "react";
import { Link } from "react-router-dom";
import InscriptionPage from "../InscriptionPage/InscriptionPage";

const ItemDetailCursos = ({product}) => {
    return(
        <div>
            <h2>{product.title}</h2>
            <h3>Precio: ${product.price}</h3>
            <p>Comision: {product.id}</p>
            <p>Fecha:{product.fechas}</p>
            <p>Horario de cursada: {product.horario}</p>
            <Link to={`/inscription/${product.title}`} >
            <button>Inscribirme</button>
            </Link>
            
            
            
        </div>
    );
};

/*            <Link to={`/inscription/${product.title}`} >
            <button>Inscribirme</button>
            </Link>

            */



export default ItemDetailCursos