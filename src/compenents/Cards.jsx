import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload  } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"
function Cards({data , refere}) {
  return (
    <motion.div drag dragConstraints={
        refere
    } whileDrag={{scale:1.3}} dragElastic= {0.8} className="relative p-5 w-52 h-64 rounded-[30px] bg-zinc-900/90 text-white overflow-hidden">
        <FaRegFileAlt  />
        <p className="text-sm mt-5 font-semibold ">{data.desc}</p>
        <div className="footer absolute bottom-0  w-full  left-0">
             <div className="flex items-center justify-between px-4 mb-2">
                <h5>{data.filesize}</h5>
                <span>
                   {data.close? <IoCloseSharp /> : <FaDownload  /> }
                </span>
             </div>
             {
                data.tag.isOpen ?(<div className={`tag w-full ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} py-2 flex items-center justify-center`}>
                <h3 className='text-sm font-semibold '>{data.tag.tagTitle}</h3>
             </div>
             ) : null
             }
             
        </div>

    </motion.div>
  )
}

export default Cards