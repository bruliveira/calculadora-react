import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 2%;
  border: 2px solid #2a004a;
  background-color: #4d066c;
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  flex: 1;

  width: 90px;
  height: 70px;

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 480px) {
    padding: 0%;
  }
`;
