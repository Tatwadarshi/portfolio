import {useState, useEffect } from 'react'
import { db } from '../appwriteConfig';
import { asset_server_base_url } from '../constants'

const Footer = () => {

  const [socialImgs, setSocialImgs] = useState([]);

  useEffect(() => {
    getSocialImgs();
  }, []);

  const getSocialImgs = async () => {
    try {
      const { total, rows } = await db.listRows({ databaseId: import.meta.env.VITE_APPWRITE_DB_ID, tableId: import.meta.env.VITE_APPWRITE_SOCIALIMGS_TB_ID });
      setSocialImgs(rows);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className="flex flex-col justify-center items-center md:items-start">
          <a href="/blogs">Visit My Blogs</a>
        </div>
        <div className='socials'>
          {socialImgs.map((social) => (
            <a href={social.url} key={social.url} className='icon' target='_blank'>
              <img src={asset_server_base_url + social.imgPath} alt="" />
            </a>
          ))}

        </div>
        <div className=' flex flex-col justify-center'>
          <p className=' text-center md:text-end'>
            &copy; {new Date().getFullYear()} Tatwadarshi Hota. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer