import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github() {
    const data=useLoaderData()
//     const [data,setData] = useState([])
//   useEffect(() => {
//     fetch('https://api.github.com/users/iampriyanshu08')
//       .then(res => res.json())
//       .then(data => {
//         console.log(data)
//         setData(data)
//       }) 
      
//   }, []);
  return (
    <div className="text-center m-5 bg-gray-500 text-white p-4 text-4xl ">
        <h1>Username : {data.name}</h1>
        <p>bio : {data.bio}</p>
      Github Repos : {data.public_repos}
      <h4>location: {data.location}</h4>
      <img className="text-center" src={data.avatar_url} alt="profile pic" width={200}  />
    </div>
  );
}

export default Github;
export  const githubInfoLoader = async()=>{
    let response = await fetch('https://api.github.com/users/iampriyanshu08')
    return response.json();
}
