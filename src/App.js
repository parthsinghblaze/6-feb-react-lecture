import { useState } from "react"
 import ArrayState from "./hooks/useState/ArrayState"
import BooleanState from "./hooks/useState/BooleanState"
import Main from "./hooks/useState/Main"
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

    const [userName, setUserName] = useState("parth")
    const [cart, setCart] = useState(2)

    return (
        <>
            <Header cart={cart} />
            <Footer cart={cart} />
            {/* <ArrayState user={userName} /> */}
        </>
    )
}

export default App