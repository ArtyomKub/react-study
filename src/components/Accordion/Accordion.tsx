import React from "react";

type AccordionTitlePropsType = {
    title: string
}

export function Accordion(props: AccordionTitlePropsType) {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle(props:AccordionTitlePropsType) {
    return (
        <div>
            {props.title}
            <h3>Menu</h3>
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