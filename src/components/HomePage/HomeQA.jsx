import React from "react";
import "../HomePage/homeStyle.css"
import Accordion from "./Accordion";

const HomeQA = () => {
    
    const accordionData = [
        {
            title: "¿Qué es Mocho Coder?",
            content: "Somos un bootcamp, un programa de formación intensivo que ofrece entrenamiento en habilidades técnicas específicas, como desarrollo web, ciencia de datos, diseño gráfico, entre otros.  Solemos tener programas que van desde las 12 semanas, o 6 meses y estamos acá para preparar a los alumnos para una carrera en un campo tecnológico o creativo."
        },
        {
            title: "¿Cuál es la duración y estructura de este bootcamp en particular?",
            content: "Este bootcamp en particular tiene una duración de 12 semanas, hasta 6 mses. Está estructurado en módulos temáticos que cubren diferentes aspectos del desarrollo web, incluyendo diseño, programación, bases de datos y proyectos prácticos para aplicar los conocimientos adquiridos."
        },
        {
            title: "¿Se proporciona algún tipo de certificación al finalizar el bootcamp?",
            content: "Sí, al completar con éxito todas las etapas del bootcamp, los participantes recibirán un certificado que acredita su finalización satisfactoria del programa. Este certificado puede ser una ventaja al buscar empleo en el campo tecnológico."
        },
        {
            title: "¿Cuál es el proceso de registro para participar en este bootcamp?",
            content: "Para registrarte en el bootcamp, debes completar el formulario de inscripción en línea disponible en el curso que desees inscribirte. Una vez enviado el formulario, recibirás un correo electrónico de confirmación con más instrucciones y detalles sobre el proceso de cursada."
        },
        {
            title: "¿Se necesitan tener conocimientos previos?",
            content: "No, no se requiere que los participantes tengan cierto conocimiento previo en desarrollo web y programación básica. Es recomendable que los interesados realicen una evaluación previa para asegurarse en que campo quieren desarrollarse."
        },
        {title: "¿Cuál es el costo del bootcamp y existen opciones de financiamiento?",
        content: "El costo del bootcamp puede variar según la ubicación y la duración del programa. Sin embargo, ofrecemos opciones de financiamiento y planes de pago flexibles para que los participantes puedan acceder a la formación sin dificultades financieras. Puedes obtener más información sobre las opciones de financiamiento durante el proceso de registro."
        }
    ]

    return(
        <div>
            <div>
                <div className="FAQ-titulo">
                    <h1 className="faq-h1">F A Q s</h1>
                    
                </div>
                
            <Accordion sections={accordionData} />
            </div>
        </div>
    );
};

export default HomeQA;
