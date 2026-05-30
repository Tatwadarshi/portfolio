import React from 'react'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { asset_server_base_url } from '../constants'
import { div } from 'three/tsl'
import { Item } from 'three/examples/jsm/inspector/ui/Item.js'
import { db } from '../appwriteConfig'

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item xl:size-30 md:size-20 size-12" >
      <img src={asset_server_base_url + icon.imgPath} alt={icon.name} className='w-full h-full object-contain' />
    </div>
  )
}

const LogoSection = () => {
  const [logoIconsList, setLogoIconsList] = useState([]);

  useEffect(()=>{
    getLogoIconsList();
  }, []);

  const getLogoIconsList = async () => {
    try {
      const {total, rows} = await db.listRows({databaseId:import.meta.env.VITE_APPWRITE_DB_ID, tableId:import.meta.env.VITE_APPWRITE_LOGOICONSLIST_TB_ID});
      setLogoIconsList(rows);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='md:my-20 my-10 relative'>
      <div className="gradient-edge"></div>
      <div className="gradient-edge"></div>

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.imgPath} icon={icon} />
          ))}
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.imgPath} icon={icon} />
          ))}
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.imgPath} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoSection