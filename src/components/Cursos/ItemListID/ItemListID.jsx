import React from "react";
import { Link } from "react-router-dom";
import "../ItemListID/StyleItemList.css"

const ItemListID = ({product}) => {
    return(
    <div className="sss">
        <div className="card-card">
            <h3 className="h3-card-title">{product.title}</h3>
            <p className="p-card">{product.description}</p>
            <p className="p-card-ori">Orientación: {product.category}</p>
            
            <button className="button-itemlist">
            <Link className="link" to={`/curso/${product.id}`} >
            Ver curso
            </Link>
            </button>
        </div>
        </div>
    );
};

export default ItemListID