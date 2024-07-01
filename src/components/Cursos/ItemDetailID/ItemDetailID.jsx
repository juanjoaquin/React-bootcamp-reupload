import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../ItemListID/StyleItemList.css"
// import certificado from "../../../assets/certificado-mochocoder.jpg"
import frontend from "../../../assets/frontend.png"
import Modal from "../../Modal/Modal";
import Top3 from "../Top3/Top3";
import Pagos from "../Pagos/Pagos";


const ItemDetailID = ({ product }) => {

    //<h1 className="h1-detail">Curso de: <br /> {product.title}</h1> 
    // En CSS le puse un text-transform: uppercase

    return (
        <div>
            <div className="container-titulo-detail">
            <div className="block-1"></div>
                <div className="children-titulo-detail">
                    <h1 className="h1-detail">
                        <span className="first-sentence">Curso de:</span> <br /> {product.title}
                        <div className="block-2"></div>
                    </h1>
                </div>
                <img src={frontend} className="img-frontend"/>
            </div>
            <div className="description-container">
                <div className="description-texto">
                    <h2 className="h2-description">Acerca de este curso</h2>
                    <h3 className="h3-description"> {product.description}</h3>
                </div>
            </div>
            <div className="info-detail-container">
                <div className="info-detail-cuadro">
                <p className="p-detail-cuadro">Profesor/a<br /> <span className="spancito">__________</span> <br /> {product.instructor}</p>
                <p className="p-detail-cuadro">Fechas <br /> <span className="spancito">__________</span> <br /> {product.fechas}</p>
                <p className="p-detail-cuadro">Horario de cursada <br /> <span className="spancito">__________</span> <br /> {product.horario}</p>
                <p className="p-detail-cuadro">Modalidad <br /> <span className="spancito">__________</span> <br /> Online</p>
                </div>
            </div>

            <div className="certificado-container">
            
                <div className="texto-certificado">
                    <h1 className="h1-certificado">Te damos un certificado</h1>
                    <h2 className="h2-certificado">Apreciamos tu esfuerzo</h2>
                    <p className="p-certificado">Una vez que finalices el curso respectivo 
                    <br />y cumplas con las condiciones de la cursada, se te 
                    <br /> dará un certificado legitimando tu presencia en <br /> nuestro bootcamp.</p>
                </div>
                
                {/* <img src={certificado} style={{width: "600px", marginLeft: "190px"}}/> */}
                <Modal />
            </div>
            
            <div className="texto-desarrollo-curso">
                    <h1 className="h1-desarrollo-curso">¿Cómo se desarrollan las cursadas?</h1>
                </div>
            <div className="desarrollo-curso-container">
                <div className="card-desarrollo-curso">
                    <h1 className="numero-card-desarrollo">1</h1>
                    <p>Las cursadas se desarrollan en la plataforma Zoom.</p>
                    <p>Deberás tener el 80% de la asistencia para la certificación.</p>
                    <p>Tendrás un tutor durante, y fuera de la cursada que te ayudará.</p>
                </div>

                <div class="triangle"></div>

                <div className="card-desarrollo-curso">
                    <h1 className="numero-card-desarrollo">2</h1>
                    <p>En todas las clases tendrás mini actividades.</p>
                    <p>Cada 3 clases contaras con pre-entregas antes de tu proyecto final.</p>
                    <p>Este mismo, va a haber un plazo de entrega de 7 días.</p>
                </div>
                <div class="triangle"></div>
                <div className="card-desarrollo-curso">
                    <h1 className="numero-card-desarrollo">3</h1>
                    <p>Al finalizar la útlima clase, se te habilitará un proyecto final.</p>
                    <p>Al igual que las pre-entregas, lo realizarás con lo visto en las clases.</p>
                    <p>El plazo de entrega es de 14 días. Si aprobas, se te dará el certificado</p>
                </div>
            </div>
            <div>
                <Top3 />
            </div>
            <div>
                <Pagos product={product}/>
                {/* <p>Precio: ${product.price}</p> */}

            </div>
            


        </div>
    );
};

export default ItemDetailID