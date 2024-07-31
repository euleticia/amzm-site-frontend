import React from "react";
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
            <InformationComponent />
            <MapsComponent />
        </>
    )
}


export default FaleConosco;
