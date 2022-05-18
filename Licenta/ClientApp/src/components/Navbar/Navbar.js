import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import {FaBars} from 'react-icons/fa'
export const Nav = styled.nav`
background-image: linear-gradient(to right,#5DADE2 55%,#F2FBFB);
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
 
`;

export const NavLink = styled(Link)`

  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  margin-left:30px;
  height: 100%;
  cursor: pointer;
  &.active {
    color: black;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;



export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
 
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background:#1BE3EB;
  padding:10px 22px;
  color:#FFF;
  border:none;
  outline:none;
  cursor:pointer;
  transition: all 0.2s easi-in-out;
&:hover{
  transition: all 0.2s easi-in-out;
  background:#FFF;
  color:#101606;
}
`;