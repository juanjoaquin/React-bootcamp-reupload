import React, { useState, useEffect } from "react";
import ItemListID from "../ItemListID/ItemListID";
import "../ItemListID/StyleItemList.css";
import Banner from "./Banner";
import error from "../../../assets/error.png"

const ItemListContainerCursos = () => {
    const [dataCursos, setDataCursos] = useState([]);
    const [search, setSearch] = useState("")


const searcher = (e) => {
    setSearch(e.target.value)
}

const filter = !search ? dataCursos : dataCursos.filter((dato) => 
dato.category.toLowerCase().includes(search.toLocaleLowerCase()) || 
dato.title.toLowerCase().includes(search.toLocaleLowerCase()))

const noResults = () => {
    if(filter.length === 0) {
        return <div>
            <h3 className="h3-noresults">Oops, lo que buscabas no se encuentra! <br/>
            Intentá buscando de otra forma.</h3>
            <img src={error} className="img-error" />
        </div> 
        
    }
    
    else {
        return null
    }
}

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch("../../CursosDataBase.json");
                const data = await response.json();
                setDataCursos(data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    return (
        <div>
            
            <Banner />
            <div className="input-container">
            <h3 className="input-h3">Buscá el curso que quieras ver, o por su orientación.</h3>
            
            <input type="text" 
            value={search} 
            onChange={searcher} 
            placeholder="Buscar por titulo o por orientación"
            className="input-input"/>
            {noResults()}
            </div>        
        <div className="itemlist-container">
            
            {filter.map((product) => {
                return (
                    <div key={product.id}>
                        <ItemListID product={product} />
                        
                    </div>
                );
            })}
        </div>
        </div>
    );
};

export default ItemListContainerCursos;
