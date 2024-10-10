import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"


export default function Card({ data, reference }) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.2} className='relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white overflow-hidden py-10 px-8'>
            <FaRegFileAlt />
            <p className='text-sm leading-tight mt-5 font-semibold '>{data.desc}</p>
            <div className='footer absolute bottom-0  w-full  left-0 '>
                <div className='flex items-center justify-between py-3 mb-3 px-5'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {data.close ? <IoMdCloseCircleOutline /> : < LuDownload size=".8em" color='#fff' />}
                    </span>
                </div>
                {
                    data.tag.isOpen && (
                        <div className={`tag w-full flex items-center justify-center py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"}`}>
                            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                        </div>
                    )
                }

            </div>
        </motion.div>
    )
}
