import React, { useState } from 'react'

function Inpagenavigation({props,children}) {
    let [index,setindex]=useState(0);
  return (
  //   <div className='bg-blue-600 text-white p-4'>
  //     <h1 className='bg-red-400'>hello jindal</h1>
  //  {props.map((data,i)=>{
  //    return <button  id={i}onClick={()=>setindex(i)} >{data}</button>
  //  })}
  // {children[index]}
  
  // </div>
  <div className="bg-blue-600 text-white p-4">
  <div className="mb-4">
    {props.map((data, i) => (
      <button
        key={i}
        className="mr-2 bg-black px-3 py-1"
        onClick={() => setindex(i)}
      >
        {data}
      </button>
    ))}
  </div>

  <div>{children[index]}</div>
</div>
  );
}
export default Inpagenavigation