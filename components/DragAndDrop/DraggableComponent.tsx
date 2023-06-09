import { useDrag } from 'react-dnd'
import '../../app/globals.css'
import Image from 'next/image'

const DraggableComponent = ({id, url, typeName}) =>{

    const [{isDragging}, ref] = useDrag(() => ({
        type: "image",
        item: {id, typeName},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    return (
        <Image
         ref={ref}
            className={(isDragging ? "my-4 mx-6 border-4 border-green-400" : "m-6")}
            key={id}
            src={url}
            alt="logo"
            width="500"
            height="300"
        />
    )
}

export default DraggableComponent;
