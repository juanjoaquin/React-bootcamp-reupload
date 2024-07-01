import React from "react";
import "../Footer/footerStyle.css"

const Footer = () => {
    return(
        <div>
            <div className="footer-container">
                <div className="footer-title">
                    <h3 className="h3-footer">Contacto</h3>
                    <div className="footer-contenido">
                    <p>mochocoder@hotmail.com</p>
                <p>011-34-23-43</p>
                <p>Av. Agustin Pujol 545</p>
                <p></p>
                    </div>
                
                </div>
                <div className="footer-title">
                <h3 className="h3-footer">Seguinos</h3>
                <div className="footer-icons">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-github"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-twitter"></i>
                </div>

                </div>
                <div className="footer-title">
                <h3 className="h3-footer">Partners</h3>
                <p>BMW</p>
                <p>Mercado Libre</p>
                <p>Itaú</p>
                <p>Santander</p>
                <p>PayPal</p>
                <p>Google </p>
                </div>
                
            </div>
        </div>
    );
};

export default Footer