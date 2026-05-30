import { useState, useEffect } from 'react'
import TitleHeader from '../components/TitleHeader'
import { asset_server_base_url } from '../constants'
import GlowCard from '../components/GlowCard'
import { db } from '../appwriteConfig'

const Testimonials = () => {

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    getTestimonials();
  }, []);

  const getTestimonials = async () => {
    try {
      const { total, rows } = await db.listRows({ databaseId: import.meta.env.VITE_APPWRITE_DB_ID, tableId: import.meta.env.VITE_APPWRITE_TESTIMONIALS_TB_ID });
      setTestimonials(rows);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section id='testimonials' className='flex-center section-padding '>
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me"
          sub="⭐ Client Feedback and Testimonials Highlights"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {
            testimonials.map(({ name, mentions, review, imgPath, stars, show }, index) => (
              show &&
              <GlowCard key={index} card={{ desc: review }} stars={stars} index={index}>
                <div className=' flex flex-col items-start gap-3'>
                  <div className=' flex gap-3'>
                    <img className=' rounded-full size-11' src={imgPath} alt={name} />
                    <div >
                      <p className='font-bold'>{name}</p>
                      <p className='text-white-50'>{mentions}</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))
          }
        </div>
        {/* <div >
                <form action="">
                    
                </form>
            </div> */}
      </div>
    </section>
  )
}

export default Testimonials