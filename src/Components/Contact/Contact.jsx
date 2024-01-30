import React from 'react'
import style from './Contact.module.css'
import video from '../../assets/Videos/bgVideo.mp4'

export default function Contact() {
  return (
  <>
  <section id={`${style.hero}  `} className='position-relative'>
  <video className={` ${style.video}    `} src={video} typeof='video/mp4'  loop playsInline muted autoPlay/>

  <div className={` position-absolute  start-0 top-0 end-0 bottom-0    `}>
          <div className=' d-flex align-items-center justify-content-center h-100 '>

            <div className={` row     `}>
              <div className=' col-12  px-md-2 px-0 '>
                <h1 className={`${style.title} text-white`}  >Contact With U<i className={`main_color fa-solid fa-bolt  ${style.logo}`}></i> </h1>

              </div>
              
            </div>
          </div>
        </div>
  </section>

  <section id="contact " className={`${style.bgColor} my-5 `}>
    <div className={` bg-transparent  container  `}>
      <div className="row py-5 gy-5  ">
        <div className={`${style.card} col-12 col-sm-12 col-md-6 col-lg-3 text-center  position-relative`}>
          <div className={`${style.icon} rounded-circle d-flex align-items-center justify-content-center position-absolute  start-50  border  `}>

          <a   target='_blank' href="tel:+020 155 503 8454" className='main_color'>  <i class="fa-solid fa-phone fa-xl"></i>  </a>
          </div>
      <div className="number bg-white px-3 py-5   rounded-4 border border-white  ">
          <h4 className={`${style.info_title}`}>Contact With Phone Number</h4>
          <a   target='_blank' href="tel:+020 155 503 8454" className={`${style.info} d-block text-decoration-none mb-2 `}>(+020) 155 503 8454</a>
          <a   target='_blank' href="tel:+020 155 503 8454" className={`${style.info} text-decoration-none `}>(+020) 155 503 8454 </a>
      </div>
        </div>
        <div className={`${style.card} col-12 col-sm-12 col-md-6 col-lg-3 text-center  position-relative`}>
          <div className={`${style.icon} email rounded-circle d-flex align-items-center justify-content-center position-absolute  start-50  border  `}>

          <a   target='_blank' href='mailto:thunderagencyy@gmail.com'className='main_color' ><i class="fa-solid fa-envelope fa-xl"></i> </a>   
          </div>
      <div className="Email bg-white px-3 py-5   rounded-4 border border-white  ">
          <h4 className={`${style.info_title}`}>Email</h4>
          <a   target='_blank' href='mailto:thunderagencyy@gmail.com' className={`${style.info} d-block text-decoration-none mb-2 `}>thunderagencyy@gmail.com</a>
          <a   target='_blank' href='mailto:thunderagencyy@gmail.com' className={`${style.info} text-decoration-none `}>thunderagencyy@gmail.com </a>
      </div>
        </div>
        <div className={`${style.card} col-12 col-sm-12 col-md-6 col-lg-3 text-center  position-relative`}>
          <div className={`${style.icon} location rounded-circle d-flex align-items-center justify-content-center position-absolute  start-50  border  `}>

          <a   target='_blank' className='main_color'  href="https://www.google.com/maps/place/Thunder+Agency/@30.2860619,31.7630438,17z/data=!3m1!4b1!4m6!3m5!1s0x1457fd874b72cb91:0x41dc69a73c888a9d!8m2!3d30.2860619!4d31.7604689!16s%2Fg%2F11l6c3dh8c?entry=ttu" >
            
            <i class="fa-solid fa-location-dot fa-xl"></i>
            </a> 
          </div>
      <div className="number bg-white px-3 py-5   rounded-4 border border-white  ">
       <h4 className={`${style.info_title}`}>Location</h4>   
          <a   target='_blank' href="https://www.google.com/maps/place/Thunder+Agency/@30.2860619,31.7630438,17z/data=!3m1!4b1!4m6!3m5!1s0x1457fd874b72cb91:0x41dc69a73c888a9d!8m2!3d30.2860619!4d31.7604689!16s%2Fg%2F11l6c3dh8c?entry=ttu" className={`${style.info} d-block text-decoration-none mb-2 `}>
           10th of Ramadan City 1, Al-Sharqia Governorate 7065324
            </a>
      
      </div>
        </div>
        <div className={`${style.card} col-12 col-sm-12 col-md-6 col-lg-3 text-center  position-relative`}>
          <div className={`${style.icon} location rounded-circle d-flex align-items-center justify-content-center position-absolute  start-50  border  `}>

          <a   className='main_color'  >
            
          <i class="fa-solid fa-clock fa-xl"></i>
            </a> 
          </div>
      <div className="number bg-white px-3 py-5   rounded-4 border border-white  ">
       <h4 className={`${style.info_title}`}>Work Times</h4>  
       <a    className={`${style.info} d-block text-decoration-none  d-block  `}>
          Every Day
            </a> 
          <a    className={`${style.info} d-block text-decoration-none mb-2 `}>
          From 10 AM TO 10 PM
            </a>
      
      </div>
        </div>
      </div>
    </div>
  </section>

  <section id="Application">
    <h2 className={` fw-bolder  h1  text-center`}>Contact Us</h2>
<div className="container w-75 m-auto">
  <div className="row">
    <div className="col-12">
      <input type="text" className='form-control' placeholder='Enter Your Name' />
      <input type="number" className='form-control my-4' placeholder='Enter Your Number' />
      <input type="email" className='form-control my-4' placeholder='Enter Your Email' />
      <textarea type="text" className='form-control my-4' placeholder='Message...' />
      <button className='btn btn-outline-info mb-3'> Submit Now  </button>
    </div>
  </div>
</div>

<div className="col-12 p-0 m-0">
<div className="mapouter w-100 ">
  <div className="gmap_canvas w-100">
    <iframe  
    className='w-100'
    height={500}
     id="gmap_canvas" 
     src="https://maps.google.com/maps?q=Thunder%20Agency,%207QP6+C5H%D8%8C%20%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%B9%D8%A7%D8%B4%D8%B1%20%D9%85%D9%86%20%D8%B1%D9%85%D8%B6%D8%A7%D9%86%D8%8C%20%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9%20%D8%A7%D9%84%D8%B4%D8%B1%D9%82%D9%8A%D8%A9%207065324&t=&z=13&ie=UTF8&iwloc=&output=embed" />
     <style dangerouslySetInnerHTML={{__html: ".mapouter{{ position: 'relative', textAlign: 'right', height: '100%', width: '100%' }}" }} />
     <style dangerouslySetInnerHTML={{__html: ".gmap_canvas {overflow:hidden;background:none!important;height:500px;width:'100%';}" }} />
     </div>
</div>
</div>

  <div>

  </div>
  </section>
  </>  
  )
  
}
