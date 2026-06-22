import { useState, useEffect, useRef } from 'react'
import TitleHeader from '../components/TitleHeader'
import { asset_server_base_url } from '../constants'
import GlowCard from '../components/GlowCard'
import { db, databases } from '../appwriteConfig'
import Button from '../components/Button'
import { ID, TablesDB } from 'appwrite'
import { div } from 'three/tsl'

const Testimonials = () => {

  const [testimonials, setTestimonials] = useState([]);

  const formRef = useRef(null);
  const starRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    mentions: "",
    review: "",
    stars: 0,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTestimonials();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.stars == 0 || form.name == '' || form.review == '') {
      alert("Please fill all the reqired fields (with '*' at end)");
      return;
    }
    console.log(form);
    console.log(typeof(form.stars));
    setLoading(true)
    try {
      const response = await db.createRow({
        databaseId: import.meta.env.VITE_APPWRITE_DB_ID,
        tableId: import.meta.env.VITE_APPWRITE_TESTIMONIALS_TB_ID,
        rowId: ID.unique(),
        data: {
          "name": form.name,
          "mentions": form.mentions,
          "review": form.review,
          "stars": parseInt(form.stars)
        }
      })
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      alert("Thanks for giving rating and review !!! Your review will be visible in the Testimonial section shortly. Feel free to contact me for any thing releted to Tech.")
    }
  }

  const getTestimonials = async () => {
    try {
      const { total, rows } = await db.listRows({ databaseId: import.meta.env.VITE_APPWRITE_DB_ID, tableId: import.meta.env.VITE_APPWRITE_TESTIMONIALS_TB_ID });
      setTestimonials(rows.filter(t => t.show));

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

        {/* <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
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
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 items-start">
          {/* Loop exactly 3 times to create our vertical masonry tracks */}
          {[0, 1, 2].map((colIndex) => (
            <div 
              key={colIndex} 
              className={`flex flex-col gap-6 ${
                // Hide 3rd column on tablet (md), hide 2nd/3rd on mobile
                colIndex === 2 ? "hidden lg:flex" : colIndex === 1 ? "hidden md:flex" : "flex"
              }`}
            >
              {testimonials
                // Math trick: distribute items into columns sequentially (Left-to-Right order)
                .filter((_, index) => {
                  // On desktop, split into 3 columns
                  // (To make it perfectly responsive, you can also just let the grid handle 3 static column arrays)
                  return index % 3 === colIndex;
                })
                .map(({ name, mentions, review, imgPath, stars }, index) => (
                  <GlowCard key={index} card={{ desc: review }} stars={stars} index={index}>
                    <div className='flex flex-col items-start gap-3'>
                      <div className='flex gap-3'>
                        {imgPath == null ? <div className=' flex items-center justify-center text-black text-[2rem] rounded-full size-11 bg-purple-500'>{name[0].toUpperCase()}</div> :  <img className='rounded-full size-11' src={imgPath} alt={name} />}
                        <div>
                          <p className='font-bold'>{name}</p>
                          <p className='text-white-50'>{mentions}</p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))}
            </div>
          ))}
        </div>

        <div id='review-write' className=' my-3 mx-auto p-10 md:w-[70%] bg-black-100 rounded-xl'>
          <h2 className='text-3xl'>Give your review here</h2>
          <form
          ref={formRef}
          onSubmit={handleSubmit}
          className=' flex flex-col gap-8 my-8'
          >
            <div>
              <label htmlFor="stars">Give rating <span className='required'/></label>
              <div id='stars' className='flex gap-1 '>
                {
                  Array.from({ length: 5}, (_, i) => (
                    <button onClick={(e)=>{
                      e.preventDefault();
                      setForm({ ...form, ["stars"]: e.target.dataset.val });
                    }} 
                    ref={starRef} 
                    className='star cursor-pointer' 
                    key={i}
                    data-val={i+1}
                    >
                      {form.stars >= i+1 ? "★" : "☆"}
                    </button>
                  ))
                }
              </div>
            </div>

            <div>
              <label htmlFor="name">Your name <span className='required' /></label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What’s your good name?"
                required
              />
            </div>

            <div>
              <label htmlFor="mentions">Your mentions</label>
              <input
                type="text"
                id="mentions"
                name="mentions"
                value={form.mentions}
                onChange={handleChange}
                placeholder="Your mentions in social media (e.g. '@username at <PLATFORM NAME>')"
              />
            </div>

            <div>
              <label htmlFor="review">Your review <span className='required' /></label>
              <textarea
                id="review"
                name="review"
                value={form.review}
                onChange={handleChange}
                placeholder="Share your experiance or work with Tatwadarshi"
                rows="5"
                required
              />
            </div>

            <div>
              <Button 
                  arrow={true}
                  id={"submitreviewbtn"}
                  type={"submit"}
                  action={handleSubmit}
                  arrowDirection={"right"}
                  text={loading ? "Sending..." : "Submit Review"}
                  className='w-full'
              />
            </div>

          </form>
          {}
        </div>
      </div>
    </section>
  )
}

export default Testimonials