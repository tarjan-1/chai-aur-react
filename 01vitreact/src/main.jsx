import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function myApp(){
//   return <div>
//     <h1>Custom App | chai </h1>
//   </div>
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <myApp /> */}
  </React.StrictMode>,
)
