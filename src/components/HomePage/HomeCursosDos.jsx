import React from "react";
import "../HomePage/homeStyle.css"
import { Link } from "react-router-dom";

const HomeCursosDos = () => {
    return(
        <div>
            <div className="home-cursos-container-dos">
                <div className="home-cursos-sub">
                <p className="diseño-subtitulo">DISEÑO:</p>
                </div>
            <div className="card-container-curso">
                <div className="card-curso-children">
                    <h2 className="h2-children-card">Diseño de interfaces de usuario </h2>
                    <li>Diseño exclusivo de interfaces</li>
                    <li>50% online 50% clases grabadas</li>
                    <li>Duración de 3 meses</li>
                    <li>4 horas, 1 vez a la semana</li>
                    <h2 className="home-curso-price">$59.99</h2>


                        <Link to="/curso/1" className="button-card">Ver curso</Link>


                </div>
                <div className="card-curso-children">
                    <h2 className="h2-children-card">Diseño gráfico, modelo básico</h2>
                    <li>Diseño gráfico para principiantes</li>
                    <li>100% online</li>
                    <li>Duración de 3 meses</li>
                    <li>4 horas, 2 veces a la semana</li>
                    <h2 className="home-curso-price">$59.99</h2>

                        <Link to="/curso/18" className="button-card">Ver curso</Link>


                </div>
                <div className="card-curso-children">
                    <h2 className="h2-children-card">Diseño UI</h2>
                    <li>Diseño UI para principiantes a 100% </li>
                    <li>100% online</li>
                    <li>Duración de 2 meses</li>
                    <li>2 horas, 2 veces a la semana</li>
                    <h2 className="home-curso-price">$69.99</h2>

                        <Link to="/curso/23" className="button-card">Ver curso</Link>

                </div>
                <div className="card-curso-children">
                    <h2 className="h2-children-card"> Diseño UX, fundamentos</h2>
                    <li>Fundamentos sobre Diseño UX</li>
                    <li>100% online</li>
                    <li>Duración de 2 meses</li>
                    <li>2 horas, 2 veces a la semana</li>
                    <h2 className="home-curso-price">$49.99</h2>

                        <Link to="/curso/21" className="button-card">Ver curso</Link>

                </div>
            </div>
            </div>
        </div>
    );
};

export default HomeCursosDos