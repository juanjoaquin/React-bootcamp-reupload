import React from "react";
import "../HomePage/homeStyle.css"
import { Link } from "react-router-dom";


const HomeCursos = () => {
    return (
        <div>
            <div className="home-cards-titulo">
                <h2 className="home-cards-titulo-h2">Nuestros cursos más elegidos por los alumnos</h2>
                <p className="small-titulo">PROGRAMACION:</p>
            </div>
            <div class="card-container-curso">
                <div class="card-curso-children">
                    <h2 className="h2-children-card">Desarrollo Web </h2>
                    <li>Aprendé lo principal de Frontend</li>
                    <li>El curso más intensivo de todo internet</li>
                    <li>Duración de 3 meses</li>
                    <li>4 horas, 2 veces a la semana</li>
                    <h2 className="home-curso-price">$59.99</h2>


      <Link to="/curso/1" className="button-card" >Ver curso</Link>


                </div>
                <div class="card-curso-children">
                    <h2 className="h2-children-card">JavaScript</h2>
                    <li>Complementa Desarrollo web con JavaScript</li>
                    <li>100% online</li>
                    <li>Duración de 3 meses</li>
                    <li>4 horas, 3 veces a la semana</li>
                    <h2 className="home-curso-price">$59.99</h2>

                        <Link className="button-card" to="/curso/03">Ver curso</Link>


                </div>
                <div class="card-curso-children">
                    <h2 className="h2-children-card">Ciberseguridad</h2>
                    <li>Aprendé todo sobre ciberseguridad.</li>
                    <li>100% online</li>
                    <li>Duración de 3 meses</li>
                    <li>4 horas, 2 veces a la semana</li>
                    <h2 className="home-curso-price">$69.99</h2>

                        <Link className="button-card" to="/curso/15">Ver curso</Link>

                </div>
                <div class="card-curso-children">
                    <h2 className="h2-children-card">Introducción a Python</h2>
                    <li>Aprende los conceptos básicos de Python</li>
                    <li>100% online</li>
                    <li>Duración de 3 meses</li>
                    <li>4 horas, 2 veces a la semana</li>
                    <h2 className="home-curso-price">$49.99</h2>

                        <Link to="/curso/05" className="button-card">Ver curso</Link>

                </div>
            </div>
        </div>
    );
};

export default HomeCursos