
import { createRoot } from 'react-dom/client'

import React from 'react'
const reactElement = {
    type: "a",
    props: {
      href: "https://www.google.com",
      target: "_blank",
    },
    children: "Click me to visit google",
  };
  

  const username = 'Mathew' 
function MyApp() {
return (
    <div>
<h1>My name is {username}</h1>
        
    </div>
)
}
const AnotherElement =(
    <a href="https://www.google.com" target='_blank'>Visit Google</a>
)
const areactElement = React.createElement(
    "a",
    {
        href: "https://www.google.com",
        target: "_blank",
    },
    "Click me to visit google",'Click me to visit google 2'
)
createRoot(document.getElementById('root')).render(

    areactElement

 
)
