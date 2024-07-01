import React from "react";
import { Link } from "react-router-dom";
import "../HomePage/homeStyle.css"
import programadorIMG from "../../assets/programador.jpg"


const HomeBanner = () => {
    return(
        <div>
                    <div className="container-home">
                <img src={programadorIMG} className="programadorIMG" />
                <div className="titulo-home">
                    <h1>Aprendé con nosotros a programar
                        <br />Invertimos en tu aprendizaje</h1>
                    <p className="p-home">Tenemos distintos cursos de Frontend, Backend, Full stack <br />
                        Desarrollo Mobile, y Diseño UX/UI</p>
                    <p className="p-home">No solamente brindamos cursos, también ofrecemos libros escritos <br />
                        por los propios profesores que te acompañaran en el camino</p>
                    <div className="center-button">
                    <Link to="/cursos">
                        <button className="bn632-hover bn20">Ver cursos</button>
                    </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomeBanner