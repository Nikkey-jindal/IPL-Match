import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';


 function STATS() {
    const [state, setstate] = useState({})
  async function stats(){
    

    const url = 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/topstats/0?statsType=mostRuns';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '771e183869mshd69a544f01713b7p1a25cbjsnd8364d6febcf',
		'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  setstate(result)
	console.log(result);
} catch (error) {
	console.error(error);
}

  }
  useEffect(() => {
  stats();
  }, [])
  
  return (
    <div className='bg-black min-w-screen min-h-screen text-white flex justify-center flex-wrap '>{
     state.values?.map((items,i)=>{
      return(
      <div className=' text-amber-50 sm:text-sm  overflow-x-hidden pl-2 pr-2 pt-2 pb-2  mt-2  w-full sm:w-[40%] border-4 border-white h-[60%] bg-gray-900 flex justify-center' >
        <div className='w-full h-[80%] transition-all hover:bg-gray-500/30 hover:h-[80%] pl-2'>
          <h1 className='text-orange-400 flex gap-4'>Matches:{items.values[0]}</h1>
        <h1 className='white flex gap-4 '>{items.values[1]}</h1>
        <h1 className='text-green-900 flex gap-4'>Innings:{items.values[2]}</h1>
        <h1 className='text-orange-500 flex gap-4'>Runs:{items.values[3]}</h1>
        <h1 className='flex gap-4'>StrikeRate:{items.values[4]}</h1>
        </div>
      </div>
      )


     })}
       <Outlet/>
    </div>
   
  )
}
export default STATS;
