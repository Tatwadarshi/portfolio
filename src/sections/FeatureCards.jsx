import { useState, useEffect } from 'react'
import { asset_server_base_url } from '../constants'
import { db } from '../appwriteConfig';

const FeatureCards = () => {
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    getAbilities();
  }, []);

  const getAbilities = async () => {
    try {
      const { total, rows } = await db.listRows({ databaseId: import.meta.env.VITE_APPWRITE_DB_ID, tableId: import.meta.env.VITE_APPWRITE_ABILITIES_TB_ID });
      setAbilities(rows); 
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-full padding-x-lg'>
      <div className='mx-auto grid-3-cols'>
        {abilities.map(({ imgPath, title, desc }) => (
          <div key={title} className='card-border rounded-xl p-8 flex flex-col gap-4'>

            <div className=' size-14 flex items-center justify-center rounded-full'>
              <img className='w-full h-full object-cover' src={asset_server_base_url + imgPath} alt={title} />
            </div>
            <h3 className=' text-white text-2xl font-semibold'>{title}</h3>
            <p className='text-white-50 text-lg' >{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeatureCards