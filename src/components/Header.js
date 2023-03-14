import './header.css'

const Header = (props) => {
  // JSX => Javascript extension (it's use bebal compiler)

  let data = "hello world";
  // to enter in a JS world from JSX you need to use curly bracket's

    let internalCSSObject = {
        color: 'yellow',
        backgroundColor: 'green'
    }

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand">Navbar</a>
            <h4>You total item i</h4>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </nav>


        {/* <div>
          <h1>Adding CSS to the JSX</h1>
          <h2
            style={{
              color: "red",
              backgroundColor: "black",
            }}
          >
            Let's Apply CSS (in inline css)
          </h2>
          <h2 style={internalCSSObject}>internal CSS</h2>
          <h2 className='externalClass'>I am external CSS</h2>
        </div>

        <h1>Just adding JS variable in JSX {data} </h1>
        <h2>Hello world</h2> */}
      
    </>
  );
};

export default Header;
