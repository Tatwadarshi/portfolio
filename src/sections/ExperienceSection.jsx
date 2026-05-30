import React, { useState, useEffect, useRef } from 'react'
import TitleHeader from '../components/TitleHeader'
import { div, exp } from 'three/tsl'
import { asset_server_base_url } from '../constants'
import GlowCard from '../components/GlowCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { db } from '../appwriteConfig'

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef(null);

  const [expCards, setExpCards] = useState([]);

  useEffect(() => {
    getExpCards();
  }, []);

  const getExpCards = async () => {
    try {
      const { total, rows } = await db.listRows({ databaseId: import.meta.env.VITE_APPWRITE_DB_ID, tableId: import.meta.env.VITE_APPWRITE_EXPCARDS_TB_ID });
      setExpCards(rows); 
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!expCards.length) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray('.timeline-card').forEach((card) => {
        gsap.from(card, {
          xPercent: -100,
          opacity: 0,
          transformOrigin: 'left left',
          duration: 1,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          }
        })
      })

      gsap.to('.timeline', {
        transformOrigin: 'bottom bottom',
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.timeline',
          start: 'top center',
          end: '70% center',
          onUpdate: (self) => {
            gsap.to('.timeline', {
              scaleY: 1 - self.progress,
            })
          }
        }
      })

      gsap.utils.toArray('.expText').forEach((text) => {
        gsap.from(text, {
          xPercent: 0,
          opacity: 0,
          duration: 1,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: text,
            start: 'top 60%',
          }
        })
      })
    }, sectionRef)

    return () => ctx.revert();
  }, [expCards])
  return (
    <section ref={sectionRef} id="experience" className=' w-full md:mt-40 mt-20 section-padding xl:px-0'>

      <div className='w-full h-full md:px-20 px-5'>
        <TitleHeader title="Projects & Work Experience" sub="Here's what I've been working on" />
      </div>

      <div className=' mt-32 md:mx-10 relative'>
        <div className=' relative z-50 xl:border-spac-y-32 space-y-10'>
          {expCards.map((card, index) => (
            <div className=" exp-card-wrapper" key={card.title}>
              <div className="xl:w-2/6 ">
                <a href={asset_server_base_url + card.imgPath} target='_blank'>
                <GlowCard card={card} index={index}>
                  <div>
                    <img className='size-64 object-contain bg-[#ffffffdf] rounded-lg backdrop-blur-2xl' src={asset_server_base_url + card.imgPath} alt={card.title} />
                  </div>
                </GlowCard>
                </a>
              </div>
              <div className='xl:w-4/6'>
                <div className="flex items-start">
                  <div className="timeline-wrapper">
                    <div className="timeline" />
                    <div className="gradient-line w-1 h-full" />
                  </div>

                  <div className='expText flex xl:gap-20 md:gap-10 gap-5 relative z-20'>
                    <div className="timeline-logo">
                      <img className='bg-white rounded-full p-1' src={asset_server_base_url + card.logoPath} alt="logo" />
                    </div>
                    <div>
                      <h1 className=' font-semibold text-3xl'>{card.title}</h1>
                      <p className='text-white-50 my-5'>🗓️ {card.date}</p>
                      <p className='text-[#839cb5] italic'>Responsibilities & Learnings</p>
                      <ul className=' list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50 '>

                        {card.bulletPoints.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection