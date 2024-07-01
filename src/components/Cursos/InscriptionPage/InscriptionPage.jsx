import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../InscriptionPage/InscriptionStyle.css"


const InscriptionPage = () => {
    const { title } = useParams()

    // const [nombre, setNombre] = useState("")

    // const onchangeNombre = (e) => {
    //     setNombre(e.target.value)
    // }

    const [formCompleto, setFormCompleto] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    /*     const [errorNombre, setErrorNombre] = useState(false);
        const [errorApellido, setErrorApellido] = useState(false); */
    const [formError, setFormError] = useState({})

    const idValidation = () => {
        return <>AA{Math.floor(Math.random() * 91123271)}00ZZ</>;
    }

    const formState = {
        nombre: "",
        apellido: "",
        edad: "",
        email: "",
        confirmarEmail: "",
        nacionalidad: "",
        ciudad: "",
        documento: ""
    }
    const [values, setValues] = useState(formState)

    const validateForm = () => {
        let error = {}
        if (values.nombre === "") {
            error.nombre = <p style={{ color: "red", fontWeight: "600", fontSize: "12px" }}>*Nombre requerido</p>;
        }
        if (values.apellido === "") {
            error.apellido = <p style={{ color: "red", fontWeight: "600", fontSize: "12px" }}>*Apellido requerido</p>;
        }
        if (values.edad.length === 0 || values.edad < 0) {
            error.edad = <p style={{ color: "red", fontWeight: "600", fontSize: "12px" }}>*Edad requerida</p>;
        }
        if (values.email === "" || values.email !== values.confirmarEmail) {
            error.email = <p style={{ color: "red", fontWeight: "600", fontSize: "12px" }}>*Email requerido</p>;
            error.confirmarEmail = <p style={{ color: "red", fontWeight: "600", fontSize: "12px" }}>*El email deben ser iguales</p>;
        }
        if (values.nacionalidad === "") {
            error.nacionalidad = <p style={{ color: "red", fontWeight: "600", fontSize: "12px" }}>*Nacionalidad requerida</p>
        }
        if (values.ciudad === "") {
            error.ciudad = <p style={{ color: "red", fontWeight: "600", fontSize: "12px" }}>*Residencia requerida</p>;
        }
        if (values.documento < 0 || values.documento.length === 0 || values.documento.length >= 7) {
            error.documento = <p style={{ color: "red", fontWeight: "600", fontSize: "12px" }}>*Documento requerido</p>;
        }



        setFormError({ ...error })

        return Object.keys(error).length < 1;
    }

    //Desestructuro el value={} y el name={} de los respectivos inputs
    // y se los paso a cada uno como un onChange={}
    const onSubmit = async (e) => {
        e.preventDefault()

        let isValid = validateForm()

        if (isValid) {
            setFormCompleto(true)
        }
        else {
            setErrorMessage(true)
        }

        /* 
        if (values.nombre === "") {
            setErrorNombre(true);
        } else {
            setErrorNombre(false);
        }
        
        if (values.apellido === "") {
            setErrorApellido(true);
        } else {
            setErrorApellido(false);
        } */
        // else {
        //     setFormCompleto(true)
        // }
        setValues(formState)

    }

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value })
    }




    return (
        <div className="body-form">
            {/* <p>Te inscribiste al curso de la categoría: {title}</p> */}
            <div className="form-container">
                <div>

                    <form action="" className="form-inscripcion" onSubmit={onSubmit}>
                        
                            <div className="titulo-form-container">
                                <h2 className="titulo-form-h2">Ya estás a un solo paso de ser estudiante en MOCHOCODER.</h2>
                            </div>
                            
                        
                        <label>Nombre</label>
                        <input type="text" placeholder="Escriba su nombre" name="nombre"
                            value={values.nombre} onChange={handleOnChange} /*value={nombre} onChange={onchangeNombre} */ />
                        {/* {errorNombre && <div><label>No puede estar vacío</label></div>} */}
                        <label>{formError.nombre}</label>
                        <label>Apellido</label>
                        <input type="text" placeholder="Escriba su apellido" name="apellido"
                            value={values.apellido} onChange={handleOnChange} />
                        {/* {errorApellido && <label>No puede estar vacío</label>} */}
                        <label>{formError.apellido}</label>

                        <label>Edad</label>
                        <input type="number" placeholder="Ponga su edad" name="edad"
                            value={values.edad} onChange={handleOnChange} />
                        <label>{formError.edad}</label>

                        <label>Email</label>
                        <input type="email" placeholder="Escriba su email" name="email"
                            value={values.email} onChange={handleOnChange} />
                        <label>{formError.email}</label>

                        <label>Confirmar email</label>
                        <input type="email" placeholder="Confirmé su email" name="confirmarEmail"
                            value={values.confirmarEmail} onChange={handleOnChange} />
                        <label htmlFor="">{formError.confirmarEmail}</label>

                        <label>Nacionalidad</label>
                        <input type="text" placeholder="Nacionalidad" name="nacionalidad"
                            value={values.nacionalidad} onChange={handleOnChange} />
                        <label>{formError.nacionalidad}</label>

                        <label>Residencia</label>
                        <input type="text" placeholder="Donde vive actualmente" name="ciudad"
                            value={values.ciudad} onChange={handleOnChange} />
                        <label>{formError.ciudad}</label>

                        <label>DNI</label>
                        <input type="number" placeholder="Número de documento" name="documento"
                            value={values.documento} onChange={handleOnChange} />
                        <label>{formError.documento}</label>

                        <button type="submit" className="button-inscription">Confirmar inscripción</button>
                        {formCompleto && <p>Felicitaciones te inscribiste en <span style={{fontWeight: "600"}}>{title}</span> tu número de validacion es: <span style={{fontWeight: "600"}}>  {idValidation()}</span></p>}

{errorMessage && <p style={{color:"red", fontWeight: "700"}}>Debe completar todos los formularios</p>}
                    </form>



                </div>
            </div>
        </div>
    );
};

export default InscriptionPage;
