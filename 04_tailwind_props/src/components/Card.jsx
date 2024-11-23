import React from 'react'



function Card({userName = "card", newText= "this is a card component"}) {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-52 bg-center align-top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hK5q86yFD58YrDXZUOyW-AHaE8%26pid%3DApi%26h%3D160&f=1&ipt=980121fb003170ad2c26f2982d11baf616d596d3900923e43610362bae165f81&ipo=images"></img>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{userName}</div>
      <p class="text-gray-700 text-base">
        {newText}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    </div>
    </div>
  )
}

export default Card