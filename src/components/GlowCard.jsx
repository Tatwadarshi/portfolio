import React, {useRef} from 'react'
import { div } from 'three/tsl'

const GlowCard = ({ card, stars, children, index }) => {

  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if(!card) return

    // Get the mouse position relative to the card and update the CSS variables for the glow effect
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // Calculate the angle of the mouse from the center of the card
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360; // Normalize angle to [0, 360]

    // Update the CSS variables for the glow effect based on the mouse position
    card.style.setProperty('--start', angle + 60);
  }

  const handleTouchMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if(!card) return

    const touch = e.touches[0];
    const rect = card.getBoundingClientRect();
    const touchX = touch.clientX - rect.left - rect.width / 2;
    const touchY = touch.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(touchY, touchX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty('--start', angle + 60);
  }

  return (
    <div ref={(el) => (cardRefs.current[index] = el)} onMouseMove={handleMouseMove(index)} onTouchMove={handleTouchMove(index)} className='card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column'>
        <div className='glow'/>
        <div className=' flex items-center gap-1 mb-5'>
          {
            Array.from({ length: stars}, (_, i) => (
              <p className='star' key={i}>★</p>
            ))
          }
          {
            Array.from({ length: 5-stars}, (_, i) => (
              <p className='star' key={i}>☆</p>
            ))
          }
        </div>
        <div className=" mb-5">
          <p className='text-white-50 text-lg'>{card.desc}</p>
        </div>
        {children}
    </div>
  )
}

export default GlowCard