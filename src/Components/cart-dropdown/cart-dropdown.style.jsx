import styled, { keyframes } from "styled-components";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.style";

const dropdownOpen = keyframes`
 0%{
      opacity: 0;
      transform: translateX(100%);
    }
    25%{
      opacity: 0;
      transform: translateX(20%);
    }
    100%{
      opacity: 1;
      transform: translateX(0);
    }
`;

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 270px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  animation: ${dropdownOpen} 0.3s ease-out;

  ${BaseButton},${GoogleSignInButton},${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
