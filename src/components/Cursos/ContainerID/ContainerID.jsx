import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetailID from "../ItemDetailID/ItemDetailID";

const ContainerID = () => {
    const [dataCursos, setDataCursos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch("../../CursosDataBase.json");
                const data = await response.json();
                const productFind = data.find((product) => product.id === parseInt(id));
                setDataCursos(productFind);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [id]);


    return (
        <div>
            {dataCursos && <ItemDetailID product={dataCursos}  />}
        </div>
    );
};

/* return (
    <div>
        <div key={dataCursos.id}>
            {dataCursos.title}
        </div>
    </div>
);
}; */

export default ContainerID;
