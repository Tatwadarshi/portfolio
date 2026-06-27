import { useState, useEffect } from 'react'
import { db } from '../appwriteConfig'
import TitleHeader from '../components/TitleHeader'
import { asset_server_base_url} from '../constants'
import { div } from 'three/tsl'
import TechIcon from '../components/Models/TechLogos/TechIcon'

const TechStack = () => {

  const [techStackIcons, setTechStackIcons] = useState([]);

  useEffect(() => {
    getTechStackIcons();
  }, []);

  const getTechStackIcons = async () => {
    try {
      const { total, rows } = await db.listRows({ databaseId: import.meta.env.VITE_APPWRITE_DB_ID, tableId: import.meta.env.VITE_APPWRITE_TECHSTACKICONS_TB_ID });
      setTechStackIcons(rows); 
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div id='skills' className=' flex-center section-padding '>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader
          title={"My Prefered Tech Stack"}
          sub="🤝 These are the technologies I enjoy working with the most"
        />

        <div className=" flex w-full gap-12 flex-wrap justify-center self-center place-self-center mt-6">
          {techStackIcons.map((icon) => (
            <div key={icon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-[48px] relative">
              <div className='tech-card-animated-bg' />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  {icon.modelPath && icon.load3D && (<TechIcon model={icon} />)}
                  {icon.imgPath && !icon.load3D && (<img className='w-30 mybounce' src={asset_server_base_url + icon.imgPath} alt={icon.name} />)}
                </div>

                <div className=' padding-x w-full'>
                  <p className=' text-lg px-4'>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default TechStack