import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetailCursos from "../ItemDetailCursos/ItemDetailCursos";

const ItemDetailContainerCursos = () => {
    const [dataCursos, setDataCursos] = useState([])
    const { category } = useParams()

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch("../../CursosDataBase.json")
                const data = await response.json()
                const cursosByCategory = data.filter((product) => product.category === category)
                setDataCursos(cursosByCategory)
            }
            catch {
                console.log(error)
            }
        }
        getData()
    }, [category])

    return (
        <div>
            {dataCursos.map((product) => {
                return (
                    <div key={product.id}>
                        {dataCursos && <ItemDetailCursos product={product} />}
                    </div>
                )
            })}
        </div>
    );
};

export default ItemDetailContainerCursos;