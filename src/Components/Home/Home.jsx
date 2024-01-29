import React from 'react'
import style from './Home.module.css'
import video from '../../assets/Videos/bgVideo.mp4'
import aboutPic from '../../assets/Images/about-1.jpg'
import slide2 from '../../assets/Images/slide2.jpg'
import slide3 from '../../assets/Images/slide3.jpg'
import slide4 from '../../assets/Images/slide4.jpg'
import hand from '../../assets/Images/hand.png'
import Albagdady from '../../assets/Images/LOGO/Albaghdady.png'
import Autovroom from '../../assets/Images/LOGO/Autovrooom.png'
import Avanti from '../../assets/Images/LOGO/Avanti.png'
import Cookies from '../../assets/Images/LOGO/cookies .png'
import Drops from '../../assets/Images/LOGO/Drops.png'
import Eagle from '../../assets/Images/LOGO/EAGLE.png'
import Elfayrouz from '../../assets/Images/LOGO/elfayroz.png'
import Car from '../../assets/Images/LOGO/Level car Logo .png'
import Cafe from '../../assets/Images/LOGO/Location Cafe.png'
import Phantom from '../../assets/Images/LOGO/Phantom Balck.png'
import Radio from '../../assets/Images/LOGO/Radio 90.png'
import TRT from '../../assets/Images/LOGO/TRT-.png'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';
import 'swiper/css';


export default function Home() {
  return (
    <>

      <section className="home position-relative ">
        <video className={` ${style.video} h-100 `} src={video} typeof='video/mp4'  loop playsInline muted autoPlay></video>
        <div className={` position-absolute  start-0 top-0 end-0 bottom-0    `}>
          <div className=' d-flex align-items-center h-100 '>

            <div className={` row me-0 overflow-hidden `}>
              <div className='offset-1 col-8  '>
                <h1 className={`${style.title} main_color`}  >A MARKTING AGANCY. </h1>

              </div>
              <div className={` offset-1  col-sm-5 col-lg-3 mt-sm-3`}>
                <div className="item text-white ">
                  <i className={"fa-brands fa-webflow main_color my-3 fa-3x"}></i>
                  <h3 className={`${style.pop_400}`}>Website Development</h3>
                  <p className={`${style.desc}`}>We facilitate working operations for our clients by reducing the number of clicks in a well designed and secured web application system.. </p>
                </div>
              </div>
              <div className={`col-lg-4 ${style.offset_left} col-sm-6  mt-sm-3  `}>
                <div className="item text-white ">
                  <i className="fa-solid fa-business-time my-3 fa-3x main_color"></i>
                  <h3 className={`${style.pop_400}`}>Business Stratagy</h3>
                  <p className={`${style.desc}`}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered..</p>
                </div>
              </div>
              <div className={` ${style.offset_left}  col-sm-4   offset-lg-0   offset-sm-1 mt-sm-3 me-0 `}>
                <div className="item text-white ">
                  <i className="fa-solid fa-chart-simple main_color my-3 fa-3x"></i>
                  <h3 className={`${style.pop_400}`}>Marketing & Reporting</h3>
                  <p className={`${style.desc}`}> There are many variations of passages of Lorem Ipsum available, but the majority have suffered..</p>
                </div>
              </div>
              <a href="#about" className='main_color text-center'><i class="fa-solid fa-angles-down fa-beat-fade mt-1 fa-2x"></i> </a>
            </div>
          </div>
        </div>
      </section>


      <section id="about">
        <div className="container mt-5  ">
          <div className="row mt-5  mb-xl-5 ">
            <div className="col-lg-4 mb-xl-5  position-relative   ">
              <div className={`${style.pic}`}>
                <img loading='lazy' src={aboutPic} className={` ${style.about_pic}   rounded-4 mt-md-5 `} alt="company" />
              
              </div>
            </div>
            <div className="col-lg-8  ps-5 mt-3   ">
              <div className="details mt-5">
                <div className='col-12'>
                  <h3 className={`${style.pop_700}`}>About</h3>
                  <p className={`mt-3 ${style.pop_300}`}>There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected humour, or randomised words which
                    dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
                </div>
                <div className="row">
                  <div className="whoWeAre mt-5 col-lg-6   ">
                    <h5 className={`${style.pop_500}`}>Who we are</h5>
                    <p className={`mt-3 ${style.pop_300}`}>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                  </div>
                  <div className="whoWeAre ps-2   mt-5 col-lg-6   ">
                    <h5 className={`${style.pop_500}`}>Who we are</h5>
                    <p className={`mt-3 ${style.pop_300}`}>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id={`${style.services}`} className=' mt-xl-5 pt-xl-5   '>
        <div className="container py-5 mt-5">
          <div className="row  ">
            <div className={`col-lg-5 ${style.small_service}`}>
              <h2 className={`${style.pop_700}`}>Services</h2>
              <p className={`${style.pop_300} text-muted`}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
              <a className={`${style.link}   text-decoration-none text-dark`}>Request Custom Service</a>
              <div className={`${style.brdr} mb-5`}></div>
            </div>
            <div className={`col-lg-7`}>
              <div className="row g-3 ">
                <div className={`col-sm-6  px-md-0  ${style.px}`}>
                  <div className={`${style.service}  rounded-4 ${style.py_30} ${style.px_28}  `}>
                    <i className=" mb-2   fa-brands fa-nfc-symbol  fa-3x mb-2 main_color  " ></i>
                    <h3 className={` ${style.Poppins_500}`}>Business Stratagy</h3>
                    <p className={` ${style.poppins_400}`}>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                  </div>
                </div>
                <div className={`col-sm-6  px-md-0  ${style.px} `}>
                  <div className={`${style.service}  rounded-4 ${style.py_30} ${style.px_28} `}>
                    <i className=" mb-2  fa-solid fa-display fa-3x main_color "></i>
                    <h3 className={` ${style.Poppins_500}`}>Website Development</h3>
                    <p className={` ${style.poppins_400}`}>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                  </div>
                </div>
                <div className={`col-sm-6  px-md-0  ${style.px} `}>
                  <div className={`${style.service}  rounded-4 ${style.py_30} ${style.px_28}  `}>
                    <i className=" mb-2  fa-solid fa-mobile-screen fa-3x main_color"></i>
                    <h3 className={` ${style.Poppins_500}`}>Mobile Development</h3>
                    <p className={` ${style.poppins_400}`}>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                  </div>
                </div>
                <div className={`col-sm-6  px-md-0  ${style.px} `}>
                  <div className={`${style.service}  rounded-4 ${style.py_30} ${style.px_28}  `}>
                    <i className=" mb-2  fa-regular main_color fa-3x  fa-lightbulb"></i>
                    <h3 className={` ${style.Poppins_500}`}>Marketing & Reporting</h3>
                    <p className={` ${style.poppins_400}`}>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
      <section id='clients' className=' mt-xl-3 pt-xl-4    '>
        <div className="container py-5 mt-5">
          <div className="row gx-lg-0  gx-sm-5 ">
            <div className={`col-12 ps-5 `}>
              <h2 className={`${style.pop_700}`}>Our Clients</h2>

            </div>
              <div className='col-md-2 col-sm-3 col-6  py-3  ps-5  '>
                <img loading='lazy'  src={Phantom} className={`${style.phantom}`} alt="Logo" />
              </div>
              <div className='col-md-2 col-sm-3 col-6  py-3    '>
                <img loading='lazy' src={Autovroom} className='logo' alt="Logo" />
              </div>
              <div className='col-md-2 col-sm-3 col-6  py-3    '>
                <img loading='lazy' src={TRT} className='logo' alt="Logo" />
              </div>

              
              <div className='col-md-2 col-sm-3 col-6   py-3    '>
                <img loading='lazy' src={Elfayrouz} className='logo' alt="Logo" />
              </div>
              <div className='col-md-2 col-sm-3 col-6  py-3    '>
                <img loading='lazy' src={Eagle} className='logo' alt="Logo" />
              </div>
              
              <div className='col-md-2 col-sm-3 col-6  py-3    '>
                <img loading='lazy' src={Albagdady} className='logo' alt="Logo" />
              </div>
              <div className='col-md-2 col-sm-3 col-6  py-3    '>
                <img loading='lazy' src={Cookies} className='logo ps-5 ' alt="Logo" />
              </div>
              <div className='col-md-2 col-sm-3 col-6  py-3    '>
                <img loading='lazy' src={Car} className='logo ps-3 py-2' alt="Logo" />
              </div>
              <div className='col-md-2 col-sm-3 col-6  py-3    '>
                <img loading='lazy' src={Cafe} className='logo' alt="Logo" />
              </div>
              <div className='col-md-2 col-sm-3 col-6  py-3    '>
                <img loading='lazy' src={Drops} className='logo' alt="Logo" />
              </div>
              <div className='col-md-2 col-sm-3 col-6  py-3    '>
                <img loading='lazy' src={Radio} className='logo' alt="Logo" />
              </div>
              <div className='col-md-2 col-sm-3 col-6  py-3    '>
                <img loading='lazy' src={Avanti} className='logo' alt="Logo" />
              </div>
          </div>
       

        </div>
      </section>
      <section id='works' className=' mt-xl-3 pt-xl-4    '>
        <div className="container py-5 mt-5">
          <div className="row  ">
            <div className={`col-lg-5 ps-5 `}>
              <h2 className={`${style.pop_700}`}>Our Works</h2>
              <p className={`${style.pop_300} text-muted`}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>

            </div>

          </div>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide><img loading='lazy' src={slide4} alt="Logo" className='w-100 h-100 position-relative ' />
            <div className={`overlay start-0 bottom-0 end-0 top-0 position-absolute  ` }><img loading='lazy' src={hand} className='fa-beat-fade w-25 '/> </div></SwiperSlide>
            <SwiperSlide><img loading='lazy' src={slide2} alt="Logo" className='w-100 h-100 ' /></SwiperSlide>
            <SwiperSlide><img loading='lazy' src={slide3} alt="Logo" className='w-100 h-100 ' /></SwiperSlide>
            <SwiperSlide><img loading='lazy' src={slide4} alt="Logo" className='w-100 h-100 ' /></SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>

        </div>
      </section>

      {/* <div className='w-100 '>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe className='w-100 h-100 '  id="gmap_canvas" src="https://maps.google.com/maps?q=Thunder%20Agency,%207QP6+C5H%D8%8C%20%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%B9%D8%A7%D8%B4%D8%B1%20%D9%85%D9%86%20%D8%B1%D9%85%D8%B6%D8%A7%D9%86%D8%8C%20%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9%20%D8%A7%D9%84%D8%B4%D8%B1%D9%82%D9%8A%D8%A9%207065324&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0}>
          </iframe>
          <br />
          <style dangerouslySetInnerHTML={{__html: ".mapouter{{ position: 'relative', textAlign: 'right', height: '100%', width: '100%' }}" }} />
          <style dangerouslySetInnerHTML={{__html: ".gmap_canvas {{ overflow: 'hidden', background: 'none', height: '500px', width: '600px', }}\n            " }} />
        </div>
      </div>
       </div> */}
    </>
  )
}
