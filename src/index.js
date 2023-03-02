import React from "react";
import ReactDOM from 'react-dom'

// 1 
let htmlElement = document.getElementById('root')

// 2 
let root = ReactDOM.createRoot(htmlElement)

// 3
root.render(<h1>Hello World</h1>)