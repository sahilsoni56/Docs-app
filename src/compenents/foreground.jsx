import React, { useRef } from 'react'
import Cards from './Cards'

function Foreground() {


    const ref = useRef();
    const data = [
        {
            desc : "lorem ipsumsdhfbshd dsfhsdf sdfs df sdfjyg",
            filesize : '.8mb',
            close: false ,
             tag: {
                isOpen: false,
                tagTitle : "Download Now",
                tagColor : "green"
             },

        },
        {
            desc : "lorem ipsumsdhfbshd dsfhsdf sdfs df sdfjyg",
            filesize : '.8mb',
            close: false ,
             tag: {
                isOpen: true,
                tagTitle : "Completed",
                tagColor : "blue"
             },

        },
        {
            desc : "lorem ipsumsdhfbshd dsfhsdf sdfs df sdfjyg",
            filesize : '.8mb',
            close: true ,
             tag: {
                isOpen: true,
                tagTitle : "Download Now",
                tagColor : "green"
             },

        },
    ]
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full py-5 h-full flex gap-5 flex-wrap" >
       {
        data.map((e,index)=>{
            return <Cards data = {e} refere = {ref} />
        })
       }
    </div>
  )
}

export default Foreground