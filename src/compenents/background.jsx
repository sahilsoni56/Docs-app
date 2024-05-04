import React from 'react'

function Background() {
  return (
    <>
    <div className='absolute w-full z-[1] h-screen'></div>
     <div className=" absolute top-[3%] w-full py-10 flex justify-center text-zinc-600 font-semibold text-xl">Documents</div>
    <h1 className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[15vw] leading-none tracking-tighter text-zinc-900 font-bold '>Docs.</h1>
    </>
   
  )
}

export default Background