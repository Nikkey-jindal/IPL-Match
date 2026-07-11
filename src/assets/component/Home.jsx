import { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
function Home() {
 let {id}=useParams();
 const [data, setdata] = useState([]);
async function fetchapi(){
const url = "https://cricbuzz-cricket.p.rapidapi.com/series/v1/9241";
const options = {
	method: 'GET',
	headers: {
	'x-rapidapi-key':' 771e183869mshd69a544f01713b7p1a25cbjsnd8364d6febcf',
	'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
	'Content-Type': 'application/json'
	}
};
try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  let filterdata=result.matchDetails.filter(item=> { return item.matchDetailsMap})
    setdata(filterdata);
} 
catch (error) {
    console.error(error);
}
  }
  useEffect(()=>{
  fetchapi();
  },[])

  return (
    <div className='flex justify-center bg-black '>
    <div className="w-full overflow-x-hidden sm:overflow-x-hidden justify-center sm:w-125 sm:justify-center bg-gray-900 text-white flex flex-wrap mt-2 mx-auto">
{
  
  data.map(({ matchDetailsMap }) => (
  
    <div key={matchDetailsMap.key} className='w-60 min-h-10 border-2 flex flex-wrap justify-center '>
   
      <div>
        
      <h1>{matchDetailsMap.key}</h1>
      </div>

      {matchDetailsMap.match.map(
        ({
          matchInfo: {
            team1: { teamSName: team1Name,imageId:image1},
            team2: { teamSName: team2Name,imageId:image2 },
            matchDesc,
            matchId,
            status,
            matchFormat
          },matchScore
        }) => (
         <Link
  key={matchId}
  // to={`/Matchdetails/${matchId}`}
  className="block w-full"
>
  <div className="bg-gray-800 hover:bg-gray-700 rounded-lg shadow-md p-4 m-2 transition-all duration-300">
    {/* Match Type */}
    <p className="text-xs text-gray-400 mb-3">
      {matchDesc} • {matchFormat}
    </p>

    
    <div className="flex justify-between items-center mb-2">
      
      <p className="font-semibold text-white">{team1Name}</p>

      <p className="text-green-400 font-medium">
        {matchScore?.team1Score?.inngs1?.runs ?? "-"}
        /
        {matchScore?.team1Score?.inngs1?.wickets ?? "-"}
        {" "}
        ({matchScore?.team1Score?.inngs1?.overs ?? "-"})
      </p>
    </div>

   
    <div className="flex justify-between items-center">
      <p className="font-semibold text-white">{team2Name}</p>

      <p className="text-green-400 font-medium">
        {matchScore?.team2Score?.inngs1?.runs ?? "-"}
        /
        {matchScore?.team2Score?.inngs1?.wickets ?? "-"}
        {" "}
        ({matchScore?.team2Score?.inngs1?.overs ?? "-"})
      </p>
    </div>

    {/* Status */}
    <div className="mt-4 border-t border-gray-700 pt-2">
      <p className="text-xs text-orange-400">{status}</p>
    </div>
  </div>
</Link>
        )
      )}
    </div>
  ))
}
    </div>
    </div>
  )
}
export default Home;
