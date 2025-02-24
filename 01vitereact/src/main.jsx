// import React from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App'
import React from 'react'

// function MyApp(){
//   return(
//     <div>
//     <h1>Custom app!</h1>
//     </div>
//   )
// }
// const DemoElement =(
//  <a href='https://google.com'target='_blank'>Visit Google</a>
// )
const anotherUser="Chai aur React"
const ReactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_balnk'},
  'Click To Visit Google',
  anotherUser
)

createRoot(document.getElementById('root')).
render(

  // <App/>
  ReactElement

)

