import React from "react";
import "../HomePage/homeStyle.css"
import persona1 from "../../assets/persona1.jpg"
import persona2 from "../../assets/persona2.jpg"
import persona3 from "../../assets/persona3.jpg"
import persona4 from "../../assets/persona4.jpg"
import persona5 from "../../assets/persona5.jpg"



const HomeStaff = () => {
    return (
        <div>
            <div className="home-staff-container">
                <div className="home-staff-titulo">
                    <h2 className="home-staff-h2">PROFESORES Y STAFF</h2>
                    <h3 className="home-staff-p">Tenemos a los mejores profesores de la región, graduados en la plataforma.  </h3>
                    <h3 className="home-staff-p">Y un Staff dedicado para brindarte una mejor experiencia en tu cursada, conócelos.</h3>
                </div>
                <div className="card-staff-container">
                    <div className="card-staff">
                        <img src={persona2} className="persona-img" />
                        <div className="texto-profe-card">
                        <h3 className="h3-texto-profe-card">Paula Sanchez</h3>
                        <p className="p-texto-profe-card">Co Fundadora - CEO</p>
                        <i className="bili bi-linkedin"></i>
                        <i class="bigi bi-github"></i>
                        </div>
                    </div>

                    <div className="card-staff">
                        <img src={persona1} className="persona-img" />
                        <div className="texto-profe-card">
                        <h3 className="h3-texto-profe-card">Alexander Smith</h3>
                        <p className="p-texto-profe-card"> Program Manager</p>
                        <i className="bili bi-linkedin"></i>
                        <i class="bigi bi-github"></i>
                        </div>
                    </div>

                    <div className="card-staff">
                        <img src={persona3} className="persona-img" />
                        <div className="texto-profe-card">
                        <h3 className="h3-texto-profe-card">Cristina Aguilera</h3>
                        <p className="p-texto-profe-card">Profesora en Full stack</p>
                        <i className="bili bi-linkedin"></i>
                        <i class="bigi bi-github"></i>
                        </div>
                    </div>

                    <div className="card-staff">
                        <img src={persona4} className="persona-img" />
                        <div className="texto-profe-card">
                        <h3 className="h3-texto-profe-card">Noora Muñoz</h3>
                        <p className="p-texto-profe-card">Profesora en Diseño UI/UX</p>
                        <i className="bili bi-linkedin"></i>
                        <i class="bigi bi-github"></i>
                        </div>
                    </div>

                    <div className="card-staff">
                        <img src={persona5} className="persona-img" />
                        <div className="texto-profe-card">
                        <h3 className="h3-texto-profe-card">Mariano Andujar</h3>
                        <p className="p-texto-profe-card">Profesor en JavaScript</p>
                        <i className="bili bi-linkedin"></i>
                        <i class="bigi bi-github"></i>
                        </div>
                    </div>

                    {/* <img src={persona1} className="persona-img" />
                <img src={persona3} className="persona-img" />
                <img src={persona4} className="persona-img" />
                <img src={persona5} className="persona-img" /> */}
                </div>
            </div>
        </div>
    );
};

export default HomeStaff