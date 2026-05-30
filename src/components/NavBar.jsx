import React, { useEffect } from 'react'
import { navLinks, asset_server_base_url } from '../constants'
import Button from './Button';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setIsScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className='inner'>
            <div className='logo flex md:gap-4 gap-2 align-middle justify-center items-center'>
              <a href={asset_server_base_url+"/th.jpg"} target='_blank'>
                <img className='md:size-15 size-8 rounded-full' src="/th.jpg" alt="TH" />
              </a>
              <a href="#hero">
                Tatwadarshi Hota
              </a>
            </div>

            <nav className='desktop'>
                <ul>
                    {navLinks.map(({href, name}) => (
                        <li key={name} className='group'>
                            <a href={href}>
                                <span className='text-xl'>{name}</span>
                                <div className="underline" />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <Button
            className='contact-btn group rounded-sm' 
            id={"contactbtn"}
            action={()=>{
                  const target = document.getElementById("contact");
                  if (target) {
                    const offset = window.innerHeight * 0.15;
                    const top = target.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({
                      top,
                      behavior: 'smooth'
                    });
                  }
                }}
            text={`Contact me`}
            />
        </div>
    </header>
  )
}

export default NavBar