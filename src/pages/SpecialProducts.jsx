

import SpecialProductCard from '../components/SpecialProductCard'
import UnderConstructionPage from '../components/UnderConstructionPage'
import {Link as RouterLink} from 'react-router-dom'



const SpecialProducts = () => {
   
  return (
    <div className='mt-24 flex flex-col items-center justify-center font-pro'>
      <RouterLink to='/'  className="md:hidden border border-solid border-black p-2 bg-transparent text-black font-thin rounded-md ">Volver a Home</RouterLink>
      
            <SpecialProductCard />
          
        
    </div>
  )
}

export default SpecialProducts