import {createContext, useState} from 'react'
import ComponentA from "./ComponentWithContext/ComponentA"

// 1 => create a context
export const WrapperContext = createContext()


function App() {

    const [userName, setUserName] = useState("Rahul")
    const [product, setProduct] = useState([1,2,3,4,5])

    return (
        <>
        <WrapperContext.Provider value={{ userName, product, setProduct }}>
            <div className="container">
                <ComponentA />
            </div>
        </WrapperContext.Provider>
        </>
    )
}

export default App