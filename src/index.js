import React from "react";
import ReactDOM from 'react-dom'
import Page from './Page'
import Header from './Header'

// 1-> node js install
// 2-> To check the version of node user [node -v]
// 3-> to create react app use [npx create-react-app]
// 4-> to install all the dependance use [npm install]
// 5-> to start the react use [npm run start/ npm start]

// 1 
let htmlElement = document.getElementById('root')

// 2 
let root = ReactDOM.createRoot(htmlElement)

// 3
root.render(<section><Page /> <Header /></section>)