import React from "react";
import marcamochos from "../../assets/marcasmocho.png"
import itau from "../../assets/itau.png"
import mercadolibre from "../../assets/mercadolibrejpg.jpg"
import paypal from "../../assets/paypal.png"
import santander from "../../assets/santander.png"
import google from "../../assets/google.png"
import bmw from "../../assets/bmw.png"
import "../HomePage/homeStyle.css"


const HomeMarcas = () => {
    return(
        <div>
            <div className="texto-container-homemarcas">
                <h3 className="h3-homemarcas">Construyendo Puentes con las Grandes Empresas</h3>
                <p className="p-homemarcas">En nuestro Bootcamp, no solo te ofrecemos una experiencia educativa transformadora para impulsar tu carrera en el mundo de la tecnología, sino que también te brindamos una oportunidad única de establecer una estrecha relación con algunas de las más grandes y prestigiosas empresas del sector. Creemos que la clave para una carrera exitosa radica en construir conexiones significativas con los líderes de la industria, y eso es precisamente lo que te ofrecemos aquí.</p>
                
                <h3 className="h3-homemarcas">Una Red de Oportunidades</h3>
                <p className="p-homemarcas">En este emocionante viaje, te daremos acceso exclusivo a una amplia red de oportunidades profesionales a través de nuestras alianzas estratégicas con empresas líderes a nivel mundial. Nos enorgullece contar con una comunidad activa de exalumnos que ahora ocupan posiciones destacadas en estas empresas, y están dispuestos a compartir sus conocimientos y experiencias contigo. Además, nuestros programas de mentoría te brindarán la posibilidad de conectarte con expertos y profesionales en activo que te guiarán en cada paso de tu camino hacia el éxito.</p>
            
                <h3 className="h3-homemarcas">Colaboración Directa con Grandes Empresas</h3>
                <p className="p-homemarcas">Una de las características más destacadas de nuestro Bootcamp es la oportunidad de colaborar directamente en proyectos reales con algunas de las empresas más importantes del mundo. Creemos en el aprendizaje práctico, y qué mejor manera de hacerlo que trabajando codo a codo con las mentes detrás de las marcas más reconocidas. Nuestros programas de pasantías y proyectos colaborativos te permitirán sumergirte en entornos de trabajo realistas, donde podrás aplicar tus habilidades recién adquiridas y obtener una visión profunda de cómo operan estas empresas.</p>
            
                <h3 className="h3-homemarcas">Eventos Exclusivos</h3>
                <p className="p-homemarcas">Como estudiante de nuestro Bootcamp, también tendrás acceso a eventos exclusivos organizados en colaboración con nuestras empresas asociadas. Estos eventos van más allá de las típicas ferias de empleo y charlas informativas. Te brindarán la oportunidad de interactuar directamente con representantes de recursos humanos, líderes empresariales y profesionales destacados en un ambiente íntimo y amigable. Podrás mostrar tus habilidades, hacer preguntas, y recibir retroalimentación valiosa que te ayudará a mejorar y adaptarte a las demandas del mercado laboral.</p>
            
                <h3 className="h3-homemarcas">Desarrollo de Habilidades Demandadas por las Empresas</h3>
                <p className="p-homemarcas">Entendemos que para tener éxito en el mundo empresarial actual, no solo necesitas habilidades técnicas, sino también habilidades blandas y una mentalidad adaptable. Por eso, nuestro plan de estudios está cuidadosamente diseñado para equiparte con todas las capacidades necesarias para sobresalir en cualquier entorno laboral. Trabajamos en estrecha colaboración con las empresas para comprender sus necesidades y asegurarnos de que nuestros estudiantes estén bien preparados para afrontar los desafíos del mundo real.</p>
            
                <h3 className="h3-homemarcas">Nuestro Compromiso</h3>
                <p className="p-homemarcas">En nuestro Bootcamp, nos enorgullecemos de ser un puente entre tu talento y las grandes empresas. Nuestra misión es proporcionarte todas las herramientas y oportunidades para que puedas alcanzar tus metas profesionales y destacar en la industria. Creemos en el poder de la educación y las conexiones significativas para cambiar vidas, y estamos comprometidos a ser el catalizador de tu éxito.

No esperes más, únete a nosotros en este emocionante viaje y descubre cómo puedes transformar tu futuro a través de nuestra estrecha relación con las grandes empresas. ¡Te esperamos con los brazos abiertos en nuestro Bootcamp!</p>
            </div>
            <div className="imagenes-homemarcas">
                <div className="children-homemarcas">
                    <img src={bmw} className="img-home-marcas" />
                    <img src={google} className="img-home-marcas" />
                    <img src={santander} className="img-home-marcas" />
                </div>
                <div className="children-homemarcas">
                    <img src={paypal} className="img-home-marcas" />
                    <img src={mercadolibre} className="img-home-marcas-ml" />
                    <img src={itau} className="img-home-marcas" />
                </div>
            </div>
        </div>
    )
}

export default HomeMarcas