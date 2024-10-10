import React, { useRef } from 'react'
import Card from './Card'

export default function Foreground() {
    const ref = useRef(null);


    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
        },
        {
            desc: "Why are you gay?",
            filesize: ".5mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Fuck you", tagColor: "green" },
        },
    ];
    return (
        <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5'>
           
            {data.map((item,index)=>(
                <Card data={item} reference={ref} />
            ))}
        </div>

    )
}
