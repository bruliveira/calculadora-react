import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 50%;
  background-color: #700c8e;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 24px;
  font-family: "Roboto";

  input {
    width: 100%;
    height: 75px;
    background-color: #700c8e;
    border: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0 10px;
    font-size: 24px;
    font-family: "Roboto";
    color: #ffffff;
  }

  @media (max-width: 480px) {
    height: 50px;
    padding: 0%;
  }
`;
