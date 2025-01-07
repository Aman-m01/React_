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
    <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-700 text-white rounded-lg shadow-lg">
      <div className="text-center">
        <img
          src={data.avatar_url}
          alt="Github profile picture"
          width={150}
          className="mx-auto rounded-full border-4 border-gray-500"
        />
        <h2 className="text-3xl font-bold mt-4">{data.name || data.login}</h2>
        <p className="text-gray-300 text-sm">
          {data.bio || "No bio available"}
        </p>
      </div>

      <div className="mt-6 space-y-4">
        <div className="bg-gray-800 p-4 rounded-md">
          <h3 className="text-xl font-semibold">Statistics</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <strong>Followers:</strong> {data.followers}
            </li>
            <li>
              <strong>Following:</strong> {data.following}
            </li>
            <li>
              <strong>Public Repositories:</strong> {data.public_repos}
            </li>
            <li>
              <strong>Public Gists:</strong> {data.public_gists}
            </li>
          </ul>
        </div>

        <div className="bg-gray-800 p-4 rounded-md">
          <h3 className="text-xl font-semibold">Contact</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <strong>Location:</strong> {data.location || "Not available"}
            </li>
            <li>
              <strong>Blog/Website:</strong>{" "}
              {data.blog ? (
                <a
                  href={data.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  {data.blog}
                </a>
              ) : (
                "Not available"
              )}
            </li>
            <li>
              <strong>Twitter:</strong>{" "}
              {data.twitter_username ? (
                <a
                  href={`https://twitter.com/${data.twitter_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  @{data.twitter_username}
                </a>
              ) : (
                "Not available"
              )}
            </li>
          </ul>
        </div>

        <div className="bg-gray-800 p-4 rounded-md">
          <h3 className="text-xl font-semibold">GitHub Profile</h3>
          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            {data.html_url}
          </a>
        </div>
      </div>
    </div>
  );
};

export const GithubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Aman-m01");
  return response.json();
};
