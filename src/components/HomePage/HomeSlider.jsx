import React from "react";
import Slider from "react-slick";
import christian from "../../assets/christian.jpg"
import daniela from "../../assets/daniela.jpg"
import omar from "../../assets/omar.jpg"
import "../HomePage/homeStyle.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HomeSlider = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="app-home">
            
            <Slider {...settings}>
                <div className="card">
                    <div className="card-top">
                        <img src={christian}  />
                        <h1>Christian Carrizo</h1>
                        <div className="card-bottom">
                            <h4 className="card-h4">Full stack Developer</h4>
                            <p className="card-p">"Gracias a los cursos brindados en Mocho Coder, hoy me desarrollo como Full Stack en una de las empresas más grandes de LATAM. 
                            Me ha servido el aprendizaje, sin ello, hoy no tendría esta gran oportunidad"</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-top">
                        <img src={daniela}  />
                        <h1>Daniela Aguilar</h1>
                        <div className="card-bottom">
                            <h4 className="card-h4">Diseñadora UX/UI</h4>
                            <p className="card-p">"No me gustaba mi trabajo de atención al público. Una amiga me recomendo Mocho Coder, luego de 6 meses de distintos cursos. 
                            Hoy me desempeño <br />como Diseñadora UX/UI full time como freelancer"</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-top">
                        <img src={omar}  />
                        <h1>Ricardo Sastre</h1>
                        <div className="card-bottom">
                            <h4 className="card-h4">Frontend Developer</h4>
                            <p className="card-p">"Siempre fui un apasionado por el diseño y la computadora. Hace poco descrubrí esta clase de "escuela virtual". 
                            Hoy, después de muchos trabajos en mi vida, puedo decir que me apasiona lo que hago"</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default HomeSlider