import styles from "./Navbar.module.css";
import styled from "styled-components";
import Carticons from "./Carticons";


const Navbar = () => {
  return (
    <Navcontainer>
      <nav class="nav">
        <ul class="navlist">
          <li class="navitem">Logo</li>
          <li class="navitem">
            <input type="text" />
          </li>
          <li class="navitem">Sign In</li>
          <Carticons className="navitem" />
        </ul>
      </nav>
    </Navcontainer>
  );
};

const Navcontainer = styled.nav`
  padding: 15px;
  display: flex;
  background: #232f3e;

  .navlist {
    display: flex;
    list-style: none;
    justify-items: end;
    align-items: flex-end;
  }

  .navitem {
    margin-right: 2rem;
    justify-content: end;
    color: #f9efe2;
  }

  .navlist:first-child {
    margin-right: auto;
  }

  li input {
    width: 28rem;
    padding: 15px;
    border-radius: 9px;
    border: 1px solid #232f3e;
  }

  li input:focus {
    outline: none;
    border: 1px solid gold;
  }
`;

export default Navbar;
