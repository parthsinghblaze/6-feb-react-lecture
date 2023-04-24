import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar className="shadow">
        <Container>
          <button className="d-block d-md-none">Open</button>
          <Nav className="ms-auto"></Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
