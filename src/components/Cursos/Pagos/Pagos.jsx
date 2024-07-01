import React from "react";
import "../ItemListID/StyleItemList.css"
import { Link } from "react-router-dom";
import personaPago from "../../../assets/persona-pago.png"
import visa from "../../../assets/visa.png"
import american from "../../../assets/american.png"
import mastercard from "../../../assets/mastercard.png"


const Pagos = ({product}) => {
    return(
        <div>
            <div className="precios-container">
                <div className="cuadro-precios">
                <div className="precios-textos">
                    <h1 className="curso-precios-h1">Precio del curso</h1>
                    <h3 className="oferta-h3">Aprovechá nuestra oferta en todos los cursos:</h3>
                    <h4 className="precio-anterior">Precio anterior: <span style={{textDecoration: "line-through"}}>$120</span></h4>
                    <p className="p-precio"> ${product.price}</p>
                {/* <Link className="link-detail" to={`/inscription/${product.title}`} >
                <button className="link-detail" >Quiero inscribirme</button>
                </Link>  */}
                
                <Link className="link-detail" to={`/inscription/${product.title}`}>INSCRIBIRME</Link>
                <div className="pagos-container">
                    <h4 className="h4-pagos">Métodos de pagos con tarjeta de crédito.</h4>
                    <div className="imagenes-tarjeta">
                    <img src={visa} className="tarjeta-1" />
                    <img src={american} className="tarjeta-2" />
                    <img src={mastercard} className="tarjeta-3" />
                    </div>
                </div>
                </div>
                
                <img src={personaPago} className="persona-pago" />
                
                </div>

            </div>
            
        </div>
    );
};

export default Pagos;