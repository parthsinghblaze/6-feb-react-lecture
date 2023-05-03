import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { openMenu } from "../redux/menuSlice";
import { useLocation } from "react-router-dom";
import { setLogout } from "../redux/loginSlice";
import styled from "styled-components";

export const CustomButton = styled.button`
  color: white;
  background: ${(props) => props.color};
  // background: ${(props) => (props.$open ? "green" : "red")};
  border: none;
  border-radius: 4px;
  padding: 10px 16px;
`;

function Header() {
  const dispatch = useDispatch();

  const location = useLocation();

  if (location.pathname === "/login") {
    return null;
  }

  return (
    <>
      <Navbar className="shadow">
        <Container className="d-flex">
          <CustomButton
            color="green"
            className="d-block d-md-none"
            onClick={() => dispatch(openMenu())}
          >
            Open
          </CustomButton>
          <CustomButton color="red" onClick={() => dispatch(setLogout())}>
            Logout
          </CustomButton>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
