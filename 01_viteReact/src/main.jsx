import React, {  } from 'react';   //core library
import { createRoot } from 'react-dom/client'; // it is the implementation of react on browser just like react native is the implementation of of react for mobile apps 

import App from './App.jsx'

const reactElement = React.createElement(
  'a', {
    href: "https://google.com", 
    target: "_blank"
  }, 
  'click here to visit google.com'
)

createRoot(document.getElementById('root')).render(
  reactElement
)
