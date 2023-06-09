import { useDrop } from "react-dnd";
import '../../app/globals.css'
import { useState } from "react";
import Home from "../Home/Home1";
import Header from "../Header/Header2";
import Promo from "../Promo/Promo2";
import Footer from "../Footer/Footer";

const TYPES = {
    HEADER: "header",
    HOME: "home",
    CAROUSEL: "carousel", 
    FOOTER: "footer"
};

const MAP_TYPE_TO_COMPONENT = {
    [TYPES.HEADER]: Header,
    [TYPES.HOME]: Home,
    [TYPES.CAROUSEL]: Promo,
    [TYPES.FOOTER]: Footer
}

const Droppable = () => {
    const [components, setComponents] = useState([]);
    const [header, setHeader] = useState("Lorem Ipsum");
    const [{isOver}, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addComponent(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver
        })
    }));

    const addComponent = (component) => {
        setComponents((components) => ([
            ...components,
            component
        ]))
    }

    return (
        <div className="border-4 container mx-auto border-indigo-600
             relative overflow-x-auto scroll-smooth grow" style={{minHeight:"60vh"}} ref={drop}>
            <div>
                {components.map((component) => {
                    const {typeName, id} = component;
                    const Component = MAP_TYPE_TO_COMPONENT[typeName];
                    if (typeName == TYPES.HOME) {
                        return <Component key={id} header={header} setHeader={setHeader} />
                    }

                    return (
                        <Component key={id} />
                    )
                })}
            </div>
        </div>    
    );
};

export default Droppable;
