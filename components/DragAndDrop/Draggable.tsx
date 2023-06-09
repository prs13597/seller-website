import '../../app/globals.css'
import DraggableComponent from "./DraggableComponent";


const slides = [
    {
        id: 1,
        url: '/header.png',
        typeName: "header"
    },
    {
        id: 2,
        url: '/home.png',
        typeName: "home"
    },
    {
        id: 3,
        url: '/carousel.png',
        typeName: "carousel"
    },
    {
        id: 4,
        url: '/footer.png',
        typeName: "footer"
    }
];

const Draggable = () => {
    return (
        <div className='container mx-auto relative max-w-screen-xl overflow-x-auto scroll-smooth flex-none'>
            <div className="flex m-8">
                {
                    slides.map((slide) => {
                        return <DraggableComponent key={slide.id} id={slide.id} url={slide.url} typeName={slide.typeName}/>
                    })
                }
            </div>
        </div>    
    );
};

export default Draggable;
