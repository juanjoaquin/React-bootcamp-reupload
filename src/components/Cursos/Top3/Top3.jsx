import React from "react";
import "../ItemListID/StyleItemList.css"
import top3 from "../../../assets/top3.png"
import top3Img from "../../../assets/top-img-1.jpg"
import top3Img2 from "../../../assets/top-img-2.jpg"
import top3Img3 from "../../../assets/top-img-3.jpg"

const Top3 = () =>  {
    return( 
        <div>
            
            <img src={top3} className="img-top3" />
            

            
            <div className="top-3-container">
                <div className="top-3-texto">
                    <h2 className="titulo-top-3">¿Qué es Top 3?</h2>
                    <p className="p-top-3">El top 3 está dedicado a destacar y reconocer los logros más destacados de nuestros alumnos y sus proyectos. 
                        Es una forma de celebrar la excelencia, el esfuerzo y la creatividad que nuestros 
                        estudiantes han demostrado durante el curso del Bootcamp.
                        Los proyectos presentados en el "Top 3" son una fuente de inspiración para toda la comunidad, mostrando el potencial que se puede alcanzar con dedicación, perseverancia y la aplicación adecuada de las habilidades adquiridas durante el Bootcamp. Estos proyectos sirven como una plataforma para que nuestros alumnos destaquen y muestren su talento a futuros empleadores y a la industria en general.</p>
                </div>
                <img src={top3Img} className="top-img-1" />
            </div>


            <div className="top-3-container-2">
            <img src={top3Img2} className="top-img-2" />
                <div className="top-3-texto-2">
                    <h2 className="titulo-top-3-2">¿Qué significa?</h2>
                    <p className="p-top-3-2"><span style={{fontWeight: "600"}}>Los primeros tres cursantes que cumplan con todos los requisitos para la apobración del curso</span>,
                    y que sus proyectos finales destaquen de manera sobresaliente, <span style={{fontWeight: "600"}}>serán premiados otorgándoles pasantías laborales
                    de 6 meses con algunas de las empresas con las que estamos asociados</span>.
                    Esto significa que incluso podrán quedar de forma permanente en estas grandes empresas. 
                    Esto será decidido por un comité especial más el profesor/a que haya brindado el curso.
                    </p>
                </div>
                
            </div>

            <div className="top-3-container-3">
                
                <div className="top-3-texto-3">
                    <h2 className="titulo-top-3-3">¿Con ser top 3 me alcanza?</h2>
                    <p className="p-top-3-3">No, no alcanza, la única manera es que el comité junto el/la profesor/a vean que tu proyecto final, y tu dedicación durante el curso fue realmente
                    buena para que puedas obtener esta premiación. De los últimos 30 alumnos que alcanzaron el top 3, solamente 10 de ellos obtuvieron este gran beneficio.
                    En caso de que hayas sido seleccionado, se te será notificado a la semana siguiente de la corrección de tu proyecto final.
                    Y serás vos mismo el que decida si queres formar parte o no, no es obligatorio aceptarlo.  
                    </p>
                </div>
                <img src={top3Img3} className="top-img-3"/>
            </div>
        </div>
    );
};

export default Top3