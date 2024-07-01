import React from "react";
import { Link } from "react-router-dom";

const ItemListCursos = ({product}) => {
    return(
        <div> 
            <h3>{product.title}</h3>
        <p>{product.description}</p>
            <p>{product.category}</p>
            <Link to={`/cursos/${product.category}`}><button>Más informacion</button></Link>
        </div>
    );
};

export default ItemListCursos