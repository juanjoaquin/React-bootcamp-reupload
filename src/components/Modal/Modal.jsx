import React from "react";
import { useState, useEffect } from "react";
import certificado from "../../assets/certificado-mochocoder.jpg"
import "../Modal/Modal.css"


const Modal = () => {

    const [mostrarImagen, setMostrarImagen] = useState(false)

    const handleImagen = () => {
        setMostrarImagen(!mostrarImagen)
    }

    useEffect(() => {
        if (mostrarImagen) {
            document.body.classList.add("active-modal");
        } else {
            document.body.classList.remove("active-modal");
        }
    }, [mostrarImagen]);


    return (
        <div>
            <img src={certificado} onClick={handleImagen} className="img-modal" />

            {mostrarImagen && (
                <div className="modal">
                    <div className="overlay" onClick={handleImagen}>
                        <img src={certificado}  onClick={handleImagen} className="overlay-black-img"  />
                        <button className="close-modal" onClick={handleImagen}> X</button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Modal