import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export const Github = () => {
  const data = useLoaderData();
  // const [data , setData ] = useState([])
  // useEffect(()=>{
  //  fetch('https://api.github.com/users/Aman-m01')
  //  .then(response => response.json())
  //  .then(data => setData(data))
  // },[])
  return (
    <div className="text-center m-5 bg-gray-600 text-white p-5 text-3xl">
      <h3>Github Followers: {data.followers} </h3>
      <h3>Following:{data.following}</h3>
      <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  );
};

export const GithubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Aman-m01");
  return response.json();
};
