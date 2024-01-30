import React from 'react'
import { Link } from 'react-router-dom'
import style from './Footer.module.css'

export default function Footer() {
  return (

    <>
      <div className={`container-fluid px-0 `}>
        <div className={`row  px-0  g-0  `}>
          <div className={`    col-md-8 ${style.footer_left}  d-flex align-items-center justify-content-center px-0  `}>
            <div className={`${style.overlay} w-100 h-100`}  >

              <div className='text-center px-3  '>
                <h5 className={` ${style.pop_400} py-3  `}>READY TO DO THIS</h5>
                <h2 className={`${style.footer_left_inner}`}>Let's get to work</h2>
                <Link to='/contact' className={`${style.btn} text-decoration-none mb-3   `}> Contact us </Link>
              </div>
            </div>
          </div>
          <div className={`${style.bg_right_footer} col-md-4 text-center  `}>
            <div className={`${style.overlay_right} w-100 h-100  py-5  d-flex align-items-center justify-content-center`}  >
            <div className="contact">
              <h3 className={` ${style.pop_400}  ms-2  `}>Say Hello</h3>
             <a href='mailto:thunderagencyy@gmail.com' className=' fw-bold  mb-2 d-block text-decoration-none text-white  '>thunderagencyy@gmail.com</a>
             <span className='text-white fw-bold '> <span className='main_color'> (+20) </span> 155 503 8454 </span>
             <div className="social mt-2">
              <a href='www.linkedin.com' target='_blank' className='text-decoration-none'>
                <i className={`fa-brands text-white ms-3 fa-lg  fa-linkedin-in ${style.social_icons}`}>
                  </i> 
                  </a>
            <a href='https://www.instagram.com/thunderagency__/?igsh=MTVuMWlmaHM4amM1ZA%3D%3D' target='_blank'><i className={`fa-brands text-white ms-3 fa-lg  fa-instagram ${style.social_icons}`}> </i></a>
            <a href='https://www.facebook.com' target='_blank'><i className={`fa-brands text-white ms-3 fa-lg  fa-facebook-f ${style.social_icons}`}></i></a>
            <a href='https://www.tiktok.com/@thunderagency__?_t=8jRKT9xfZnJ&_r=1' target='_blank'><i className={`fa-brands text-white ms-3 fa-lg  fa-tiktok ${style.social_icons}`}></i></a>
             </div>
    </div >
            </div>

          </div >
        </div >
      </div >
    </>
  )

}

{/* <div className={`$  col-md-6  p-0` } >

<div className="mapouter w-100 ">
  <div className="gmap_canvas">
    <iframe className='w-100' 
    height={400}
     id="gmap_canvas" 
     src="https://maps.google.com/maps?q=Thunder%20Agency,%207QP6+C5H%D8%8C%20%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%B9%D8%A7%D8%B4%D8%B1%20%D9%85%D9%86%20%D8%B1%D9%85%D8%B6%D8%A7%D9%86%D8%8C%20%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9%20%D8%A7%D9%84%D8%B4%D8%B1%D9%82%D9%8A%D8%A9%207065324&t=&z=13&ie=UTF8&iwloc=&output=embed" />
     <style dangerouslySetInnerHTML={{__html: ".mapouter{{ position: 'relative', textAlign: 'right', height: '100%', width: '100%' }}" }} />
     <style dangerouslySetInnerHTML={{__html: ".gmap_canvas {overflow:hidden;background:none!important;height:400px;width:759px;}" }} />
     </div>
</div>
  <div>

  </div>
</div> */}
