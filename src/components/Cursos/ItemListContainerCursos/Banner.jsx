import React from "react";
import "../ItemListID/StyleItemList.css";

const Banner = () => {
    return(
        <div className="body-banner">   
            <div className="banner-cursos">
                <div className="banner-textos">
                    <h1 className="h1-banner">Aprende a programar. <br/>Empezá hoy mismo. </h1>
                    <h2 className="h2-banner">Somos el bootcamp con mayor cantidad de cursos variados y disponibles.</h2>
                    <h3 className="h3-banner"><i class="bi bi-check-circle" style={{marginRight:"10px"}}></i>Convertite en Full Stack Developer en 6 meses</h3>
                    <h3 className="h3-banner"><i class="bi bi-check-circle" style={{marginRight:"10px"}}></i>Trabaja en ciberseguridad en 3 meses</h3>
                    <h3 className="h3-banner"><i class="bi bi-check-circle" style={{marginRight:"10px"}}></i>Formate en Diseño UX/UI</h3>

                    </div>
            </div>
        </div>
    );
};

export default Banner