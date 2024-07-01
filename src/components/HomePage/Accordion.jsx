import React from "react";
import { useState } from "react";
import { Display } from "react-bootstrap-icons";


const Accordion = ({ sections }) => {

    const accordionStyles = {
        maxWidth: "600px",
        margin: "0 auto",

    };

    const accordionTtitleStyles = {
        display: "flex",
        justifyContent: "space-between",
        cursor: "pointer",
        padding: "5px",
        background: "#ffff",
        marginTop: "20px",
        borderBottom: "1px solid #000",
        fontFamily: "Montserrat",
        fontWeight: "600",

    };

    const accordionContentStyles = {
        padding: "5px",
        background: "#f3f2f2",
        fontFamily: "Montserrat",
        
    }

    const AccordionSection = ({ section, isActiveSection, setActiveIndex, sectionIndex }) => {
        const toggleSection = () => {
            const nextIndex = isActiveSection ? null : sectionIndex;
            setActiveIndex(nextIndex);
        };
        
        return (
            <div>
                <div style={accordionTtitleStyles} onClick={toggleSection}>
                    <div>{section.title}</div>
                    <div>{isActiveSection ? "-" : "+"}</div>
                </div>
                {isActiveSection && <div style={accordionContentStyles}>{section.content} </div>}
            </div>
        )
    }

    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div style={accordionStyles}>
            {sections.map((section, index) => {
                return (
                    <AccordionSection section={section} key={index}
                        isActiveSection={index === activeIndex}
                        setActiveIndex={setActiveIndex}
                        sectionIndex={index}/>
                )
            })}
        </div>
    );
};

export default Accordion