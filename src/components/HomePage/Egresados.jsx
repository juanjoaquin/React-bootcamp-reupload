import React from "react";
import "../HomePage/homeStyle.css"
import HomeSlider from "./HomeSlider";


const Egresados = () => {
    return (
        <div>
            <div className="card-container">
                <div className="card-text-slider">
                    <h2 className="card-container-h2">NUESTROS EGRESADOS</h2>
                    <p className="card-container-p">Sabemos la importancia que tiene esto para vos, por eso te mostramos donde están ahora
                        <br />los ex-alumnos nuestros, que en su momento, tenían la misma ambición que vos.
                    </p>
                </div>
                <HomeSlider />
            </div>
        </div>
    );
};

export default Egresados