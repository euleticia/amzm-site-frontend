import React from "react";
import BackgroundImage from "../../assets/corrimao1.jpeg";
import TitleSectionComponent from "../../components/TitleSectionComponent/TitleSectionComponent";
import MapsComponent from "../../components/MapsComponent/MapsComponent";
import InformationComponent from "../../components/InformationsComponent/InformationComponent";
import TopNavbar from "../../components/Navigation/TopNavbar";
import "./FaleConosco.css";
import WhatsAppButton from "../../components/WhatsappButton";

const FaleConosco = () => {
    return (
        <>
            <TopNavbar showAddresses />
            <WhatsAppButton />
            <TitleSectionComponent
                title="Fale Conosco"
                backgroundImage={BackgroundImage}
            />
            <InformationComponent />
            <MapsComponent />
        </>
    )
}


export default FaleConosco;
