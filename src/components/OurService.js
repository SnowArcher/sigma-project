import { useState } from "react";
import { AllServices } from "./AllServices";
import { InteriorDesign } from "./InteriorDesign";
import { Architecture } from "./Architecture";
import { Planning } from "./Planning";

export function OurService() {
    const [currentContent, setContent] = useState(1);
    return (
        <div className="services" id='services'>
            <h4>WHAT WE DO</h4>
            <h1>Our Service</h1>
            <ul className="services__links">
                <li className={`services__links_item ${currentContent === 1? "active":""}`} onClick={() => {setContent(1)}}>ALL</li>
                <li className={`services__links_item ${currentContent === 2? "active":""}`} onClick={() => {setContent(2)}}>INTERIOR DESIGN</li>
                <li className={`services__links_item ${currentContent === 3? "active":""}`} onClick={() => {setContent(3)}}>ARCHITECTURE</li>
                <li className={`services__links_item ${currentContent === 4? "active":""}`} onClick={() => {setContent(4)}}>PLANNING</li>
            </ul>
            <div className="services__content">
                {currentContent === 1 && <AllServices />}
                {currentContent === 2 && <InteriorDesign />}
                {currentContent === 3 && <Architecture />}
                {currentContent === 4 && <Planning />}
            </div>
        </div>
    )
}