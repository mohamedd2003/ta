import React from 'react'
import style from "./Clients.module.css"
import video from '../../assets/Videos/bgVideo.mp4'


export default function Clients() {
  return (


    <>
    <section id={`${style.hero}  `} className='position-relative'>
<video className={` ${style.clients_video}`} src={video} typeof='video/mp4'  loop playsInline muted autoPlay/>

<div className={` position-absolute  start-0 top-0 end-0 bottom-0    `}>
        <div className=' d-flex align-items-center justify-content-center h-100 '>

          <div className={` row     `}>
            <div className=' col-12  px-md-2 px-0 '>
              <h1 className={`title text-white`}  >Client<i className={`main_color fa-solid fa-bolt  ${style.logo}`}></i> </h1>

            </div>
            
          </div>
        </div>
      </div>
</section>
    </>  
    
  )
}


