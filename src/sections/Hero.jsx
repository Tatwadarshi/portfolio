import React, { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer';
import { asset_server_base_url, words } from '../constants'
import Button from '../components/Button'
import HeroEperience from '../components/HeroModels/HeroEperience'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import AnimatedCounter from '../components/AnimatedCounter'

const Hero = () => {
  const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
  useGSAP(() => {
    gsap.fromTo(".hero-text h1",
      {y: 50, opacity: 0},
      {y: 0, opacity: 1, duration: 1, ease: "power2.inOut", stagger: 0.3}
    )
  })
  return (
    <section id='hero' className='relative overflow-hidden'>
      <div className='absolute top-0 left-0 z-10'>
        <img src={asset_server_base_url+"/images/bg.jpg"} alt="background" className=''/>
      </div>

      <div className='hero-layout'>
        {/* Left: Hero Content */}
        <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
          <div className='flex flex-col gap-7'>
            <div className="hero-text">
              <h1 >
                <span>Transforming </span> 
                <span className='slide'>
                  <span className='wrapper'>
                    {words.map((word) => (
                      <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                        <img src={asset_server_base_url+word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'/>
                        <span className='text-cyan-400'>
                        {word.text}
                        </span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into connected solutions</h1>
            </div>
            <p className=' text-white-50 md:text-xl text-lg relative z-10 pointer-events-none xl:w-[50%]'>
              Hi, I'm Tatwadarshi — where agriculture meets code. I build IoT systems, design in CAD, develop full-stack apps & web apps, and create 3D visuals that solve real problems.
            </p>

            <Button className="md:w-80 md:h-16 w-60 h-12 self-center xl:self-start"
            id="button"
            arrow={true}
            arrowDirection={"down"}
            text="See My Work"
            action={()=>{
                  const target = document.getElementById("counter");
                  if (target) {
                    const offset = window.innerHeight * 0.15;
                    const top = target.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({
                      top,
                      behavior: 'smooth'
                    });
                  }
                }}
            />

          </div>
        </header>
        {/* Right: 3D Model */}
        <figure>
          <div className="hero-3d-layout">
            {false ?  <><img className=' relative top-48' src={asset_server_base_url+'/images/room_preview.png'} alt='Room' /> <p className='self-center text-center relative top-18 p-4 text-2xl text-orange-500'>Please use desktop or laptop for better experience</p></> : <HeroEperience />}
            {/* <HeroEperience /> */}
          </div>
        </figure>
      </div>
        <AnimatedCounter started={false}/>
    </section>
  )
}

export default Hero
