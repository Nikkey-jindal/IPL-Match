import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Inpagenavigation from "./Inpagenavigation";
function Matchdetails(){
     let {id}=useParams();
    console.log(id);
    let fixedData={
  "matchid": 91596,
  "seriesid": 7607,
  "seriesname": "Indian Premier League 2024",
  "matchdesc": "51st Match",
  "matchformat": "T20",
  "startdate": 1714744800000,
  "enddate": 1714758342415,
  "state": "Complete",
  "status": "Mumbai Indians opt to bowl",
  "team1": {
    "teamid": 62,
    "teamname": "Mumbai Indians",
    "teamsname": "MI",
    "isfullmember": false,
    "isassociated": false,
    "isleagueteam": false,
    "iswomenteam": false,
    "isheader": false,
    "isactive": false,
    "teampriority": "",
    "isvideopresent": false,
    "imageid": 0,
    "countryname": "",
    "belongsto": "",
    "teamcolor": ""
  },
  "team2": {
    "teamid": 63,
    "teamname": "Kolkata Knight Riders",
    "teamsname": "KKR",
    "isfullmember": false,
    "isassociated": false,
    "isleagueteam": false,
    "iswomenteam": false,
    "isheader": false,
    "isactive": false,
    "teampriority": "",
    "isvideopresent": false,
    "imageid": 0,
    "countryname": "",
    "belongsto": "",
    "teamcolor": ""
  },
  "umpire1": {
    "id": 8905,
    "name": "Jayaraman Madanagopal",
    "country": "IND"
  },
  "umpire2": {
    "id": 9608,
    "name": "Tapan Sharma",
    "country": "IND"
  },
  "umpire3": {
    "id": 8034,
    "name": "Michael Gough",
    "country": "ENG"
  },
  "referee": {
    "id": 1820,
    "name": "Pankaj Dharmani",
    "country": "IND"
  },
  "venueinfo": {
    "id": 81,
    "ground": "Wankhede Stadium",
    "city": "Mumbai",
    "country": "India",
    "timezone": "+05:30",
    "established": 1974,
    "capacity": "33,000",
    "knownas": "",
    "ends": "Garware Pavilion End, Tata End",
    "hometeam": "Mumbai, Mumbai Indians",
    "floodlights": false,
    "curator": "",
    "profile": "",
    "imageurl": "",
    "groundlength": 0,
    "groundwidth": 0,
    "othersports": "",
    "imageid": 0,
    "latitude": "",
    "longitude": ""
  },
  "currbatteamid": 0,
  "ismatchnotcovered": false,
  "appindex": {
    "seotitle": "Cricket match facts MI vs KKR 51st Match,Indian Premier League 2024 | Cricbuzz.com",
    "weburl": "http://www.cricbuzz.com/cricket-match-facts/91596/mi-vs-kkr-51st-match-indian-premier-league-2024"
  },
  "istournament": true,
  "tossstatus": "Mumbai Indians opt to bowl",
  "seriesstartdt": 1710979200000,
  "seriesenddt": 1716768000000,
  "istimeannounced": false,
  "statetitle": "",
  "replacematchid": 0,
  "livestreamenabled": false,
  "isfantasyenabled": true,
  "broadcastinfo": [],
  "daynight": false,
  "matchtype": "league",
  "seriestype": "IPL",
  "shortstatus": "KKR won",
  "boundarytrackervalues": {
    "boundarytrackervalue": []
  },
  "matchimageid": 402272,
  "islivestreamenabled": false,
  "isfantasyhandbookenabled": false,
  "isforecastenabled": false,
  "ispollenabled": false
}
      let [val,setval]=useState(null);
     async function fetchdetails(){
        const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key':  'x-rapidapi-key: 771e183869mshd69a544f01713b7p1a25cbjsnd8364d6febcf',
		'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	setval(result);
} catch (error) {
	console.error(error);
}
    }
    useEffect(()=>{
    fetchdetails();
    
},[])
    return (
        <>
        <div>Match Details</div>
    {(!val) ?
        (
         <h1>Loading...</h1>
        ):
        (
       <Inpagenavigation props={[val.team1.teamsname,val.team2.teamsname]}>
         <h1>{fixedData.team1.teamname}</h1>
         <h2>{fixedData.team2.teamname}</h2>
       </Inpagenavigation>
        )
    }
        </>
    )
}

export default Matchdetails;