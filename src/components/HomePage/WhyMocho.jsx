import React from "react";
import "../HomePage/homeStyle.css"
import whyimg from "../../assets/why-img.jpg"
import alumno2 from "../../assets/alumno2.jpg"


const WhyMocho = () => {
    return (
        <div>
            <div className="why-container">
                <div className="why-titulo">
                    <h2 className="why-h2">¿Por qué Mocho Coder?</h2>
                    <p className="why-p">Porque a base de nuestra pasión, creamos esta empresa para brindarte ayuda a <b>VOS</b>, <br />a encaminarte
                        a un mundo nuevo en lo laboral, abriendo la puerta a cientas de<br /> oportunidades que te
                        aparecerán y harán desarrollarte de la forma <br /> más profesional posible.
                    </p>
                </div>
                <img src={whyimg} className="whyimg" />
            </div>
            <div className="alumnos-container">
                <img src={alumno2} className="alumno2" />

                <div className="alumno-titulo">
                    <h2 className="alumno-h2">AVALADOS POR + 150.000 ESTUDIANTES</h2>
                    <p className="alumno-p">Actualmente contamos con más de 150.000 mil estudiantes en nuestra plataforma
                        pero que eso no te haga ruído, para nosotros todos los estudiantes son importantes.<br />
                        Cuando empezamos, el primer mes no superabamos los 100 estudiantes, pero a base de brindar
                        una calidad de enseñanza alta, e inclusión, es la razón principal por la que todos los estudiantes
                        <br />nos prefieren en su camino para nuevas oportunidades.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyMocho;