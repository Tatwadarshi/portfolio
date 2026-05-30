import React, { useState, useEffect, useRef, useEffectEvent } from 'react'
import { counterItems } from '../constants'
import ReactCountUp from 'react-countup'
const CountUp = ReactCountUp.default || ReactCountUp

const AnimatedCounter = ({ started }) => {
  const targetRef = useRef(null);
  const [animationStarted, setAnimationStarted] = useState(started);
  useEffect(()=>{
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.99 }
    );
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={targetRef} id='counter' className='z-20 relative padding-x-lg xl:mt-0 my-20'>
      <div className="mx-auto grid-4-cols ">
        {counterItems.map(item => (
          <div key={item.label} className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center hover:shadow-cyan-500 hover:shadow-2xl transition-all duration-300">
            <div className="counter-number text-white text-5xl font-bold mb-2 ">
              <CountUp 
                suffix={item.suffix}
                end={animationStarted ? item.value : 0}
                startOnMount={false}
                start={animationStarted ? undefined : 0}
              />
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedCounter