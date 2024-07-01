import React from "react";
import "../HomePage/homeStyle.css"
import itau from "../../assets/itau.png"
import mercadolibre from "../../assets/mercadolibrejpg.jpg"
import paypal from "../../assets/paypal.png"
import santander from "../../assets/santander.png"
import google from "../../assets/google.png"
import bmw from "../../assets/bmw.png"
import { Link } from "react-router-dom";

const HomeEmpresas = () => {
    return (
        <div className="home-empresas-container">
            <div className="h1-container-empresas">
                <h1 className="h1-tutlo">Mocho Coder & Partnership</h1>
                <h3 className="h3-empresas-titulo">La unión que tenemos con nuestros partners te benefician a vos <br /> a encontrar tu primer trabajo</h3>
                
            </div>

            <div className="home-empresas-img">
                
                <img src={itau} className="imagenes-empresas" />
                <img src={mercadolibre} className="imagenes-empresas-ml" />
                <img src={paypal} className="imagenes-empresas" />
                <img src={santander} className="imagenes-empresas" />
                <img src={google} className="imagenes-empresas" />
                <img src={bmw} className="imagenes-empresas" />
            
            </div>
            <Link to="/marcas" className="link-detalles-empresas">
            <h3 className="detalles-empresas">Conocé en detalles está gran oportunidad...</h3>
            </Link>
            {/* <Link to="/marcas" className="link-empresas">Ver más</Link> */}
        </div>

    );
};

export default HomeEmpresas