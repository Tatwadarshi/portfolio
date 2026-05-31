import React, { useRef, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Button from '../components/Button';
import TitleHeader from '../components/TitleHeader';
import { asset_server_base_url } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    projects.forEach((project, index) => {
      if (project) {
        gsap.fromTo(project,
          {
            opacity: 0, y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: (index + 1) * 0.3, // Stagger the animations
            scrollTrigger: {
              trigger: project,
              start: "top 80%",
              end: "bottom 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    gsap.fromTo(sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);



  return (
    <section id='work' ref={sectionRef} className='app-showcase'>

      <div className='w-full'>
        <TitleHeader
          title={"My Top Projects"}
          sub={"These are some of my projects. Check it out!!!"}
        />
        <div className='showcaselayout mt-15 pt-8'>
          {/* LEFT */}
          <div className='first-project-wrapper' ref={project1Ref}>
            <div className='project'>
              <div className='image-wrapper'>
                <img className="drop-shadow-[0px_8px_8px_#9982f6]" src={asset_server_base_url+"/images/projects/project1.png"} alt="Project 1" />
              </div>

              <div className='text-content flex flex-col gap-4'>
                <h2 className='title'>Control & Monitor your IoT with internet with a User-Friendly app called <span className='highlight'>SyncMon</span></h2>
                <p className='text-white-50 md:text-xl'>An android app for managing and monitoring IoT devices built using <span className='highlight'>Android Studio</span></p>
                <Button
                  className='md:w-100 md:h-16 w-80 h-12 self-center xl:self-start'
                  arrow={true}
                  id={"project1btn"}
                  action={() => window.open('https://github.com/Tatwadarshi/SyncMon')}
                  arrowDirection={"right"}
                  text={"Know More About SyncMon"}
                />
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className='project-list-wrapper overflow-hidden'>
            <div className='project' ref={project2Ref}>

              <div className='image-wrapper overflow-hidden overscroll-contain overflow-y-auto scrollbar-thin scrollbar-thumb-purple-600'>
                <video src={asset_server_base_url+"/images/projects/project2_1.mkv"} autoPlay muted loop></video>
                <video src={asset_server_base_url+"/images/projects/project2_3.mp4"} autoPlay muted loop></video>
                <video src={asset_server_base_url+"/images/projects/project2.mp4"} autoPlay muted loop></video>
                <img src={asset_server_base_url+"/images/projects/project2_1.jpg"} alt="Project 2" />
                <img src={asset_server_base_url+"/images/projects/project2_2.jpg" }alt="Project 2" />
                <img src={asset_server_base_url+"/images/projects/project2_3.jpg"} alt="Project 2" />
              </div>
              <h2 className='title'>Many <span className='highlight'>CAD</span> Project for my clients</h2>
            </div>

            <div className='project' ref={project3Ref}>
              <a href='https://github.com/Tatwadarshi/Vowel_Hilighter/tree/master#this-is-my-first-project-in-javascript' target='_blank'>
                <iframe className='image-wrapper scrollbar-thumb-purple-600' src="https://tatwadarshi.github.io/Vowel_Hilighter/" width="100%" height="500px" frameBorder="0">
                  <div className='image-wrapper'>
                    <img src={asset_server_base_url+"/images/projects/project3.png"} alt="Project 3" />
                  </div>
                </iframe>
                <h2 className='title'>Project: <span className='highlight'> Vowel Highlighter </span> </h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection   
