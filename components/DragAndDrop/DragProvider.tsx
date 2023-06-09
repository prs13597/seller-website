import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from "react-dnd"
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import Link from "next/link";

import '../../app/globals.css'

const DragProvider = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className='min-h-screen relative flex flex-col justify-between'>
                <div className='flex justify-around p-4 '>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-700 sm:text-4xl text-center">
                        Create your own Customised Website
                    </h1>
                    <Link className="px-12 py-2 mb-8 text-1xl max-h-min max-w-fit self-end mr-24 text-white bg-black rounded-full" href={"/preview"}>
                        Preview
                    </Link>
                </div>
                <h1 className="text-2xl font-bold tracking-tight text-gray-700 sm:text-2xl text-center">
                    Drag and drop sections to include in your webpage
                </h1>
                <Draggable />
                <Droppable />
                
            </div>
        </DndProvider>    
    );
};

export default DragProvider;
