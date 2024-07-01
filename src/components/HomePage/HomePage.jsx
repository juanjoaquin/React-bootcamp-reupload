import React from "react";
import "../HomePage/homeStyle.css"
import WhyMocho from "./WhyMocho";
import HomeStaff from "./HomeStaff";
import HomeQA from "./HomeQA";
import HomeCursos from "./HomeCursos";
import HomeCursosDos from "./HomeCursosDos";
import HomeEmpresas from "./HomeEmpresas";
import HomeBanner from "./HomeBanner";
import Egresados from "./Egresados";



const HomePage = () => {
    return (
        <div>
            <HomeBanner />
            <WhyMocho />
            <HomeStaff />
            <Egresados />
            <HomeQA />
            <HomeCursos />
            <HomeCursosDos />
            <HomeEmpresas />
        </div>
    )
}

export default HomePage