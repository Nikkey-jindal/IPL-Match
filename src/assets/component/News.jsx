// import React from 'react'

//  function News() {
//   return (
//     <div>
      
//     </div>
//   )
// }
// export default News;
import { useEffect, useState } from "react";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    const url = "https://cricbuzz-cricket.p.rapidapi.com/news/v1/index";

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": ' 771e183869mshd69a544f01713b7p1a25cbjsnd8364d6febcf',
        "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      console.log(result);

      // Check the response structure first
      setNews(result.storyList);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-full bg-gray-900 text-white text-[10px] sm:[5px] lg:[10px] flex flex-col gap-2 border-2 border-gray-400/20">
      {news.map((item, index) => (
        <ul key={index} className="border-2 border-gray-400/20 flex flex-col">
        
          <li><i>{item.story?.hline}</i></li>
          <li> <i>{item.story?.intro}</i></li>
         
         
        </ul>
      ))}
    </div>
  );
}

export default News;