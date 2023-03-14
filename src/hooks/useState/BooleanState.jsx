import React, { useState } from 'react'

function BooleanState() {
    const[isimage,setIsImage]=useState(false)

    const [isLogin, setIsLogin] = useState(false)

    function auth() {
        setIsLogin(!isLogin)
    }

  return (
    <>
     <div className="card mb-5">
        <div className="card-header">
          <h2>Login/Logout Button</h2>
        </div>
        <div className="card-body">
          <button className={`btn ${isLogin ? 'btn-danger' : 'btn-primary'} `} onClick={auth}>
            {
                isLogin ? 'Logout' : 'Login'
            }
          </button>
        </div>
      </div>
    <div className="card mb-5">
        <div className="card-header">
          <h2>Boolean Example</h2>
        </div>
        <div className="card-body">
          <button className="btn btn-primary mb-3">
            Show Image
          </button>

          <button
            className="btn btn-warning mb-3 ms-3"
          >
            Hide Image
          </button>

          <button
            className="btn btn-dark mb-3 ms-3"
          >
            Hide/Show
          </button>

          <br />
            
            {isimage? <img
              src="https://img.freepik.com/free-vector/cute-panda-with-bamboo_138676-3053.jpg?w=2000"
              className="w-25"
            />:null}
            
        </div>
      </div>
      </>

  )
}

export default BooleanState