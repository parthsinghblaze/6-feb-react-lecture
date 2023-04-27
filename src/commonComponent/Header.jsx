import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { openMenu } from "../redux/menuSlice";

function Header() {
  const dispatch = useDispatch();

  return (
    <>
      <Navbar className="shadow">
        <Container>
          <button
            className="d-block d-md-none"
            onClick={() => dispatch(openMenu())}
          >
            Open
          </button>
          <Nav className="ms-auto"></Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
