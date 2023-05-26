import React from "react";

type AccordionTitlePropsType = {
    titleValue: string
}

export function Accordion(props: AccordionTitlePropsType) {
    return (
        <div>
            <AccordionTitle titleValue={props.titleValue}/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle(props:AccordionTitlePropsType) {
    return (
        <div>
            <h3>{props.titleValue}</h3>
        </div>
    )
}

function AccordionBody() {
    return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
    )
}