import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { Container, Content, Row } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faTimes,
  faDivide,
  faEquals,
  faBackspace,
  faC,
  faPlusMinus,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [currentNumber, setCurrentNumber] = useState("");
  const [operations, setOperations] = useState([]);

  const handleOnClear = () => {
    setCurrentNumber("0");
    setOperations([]);
  };

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => {
      if (!prev.includes(".") && number === ",") {
        return `${prev}${number}`;
      } else {
        return `${prev === "0" ? "" : prev}${number}`;
      }
    });
  };

  const handleOperation = (operator) => {
    if (operator === "CE") {
      setCurrentNumber("");
    } else if (currentNumber !== "") {
      setOperations((prev) => [...prev, currentNumber, operator]);
      setCurrentNumber("");
    }
  };

  const handleBackspace = () => {
    if (currentNumber !== "") {
      setCurrentNumber((prev) => prev.slice(0, -1) || "0");
    } else if (operations.length > 0) {
      const newOperations = operations.slice(0, -1);
      setCurrentNumber(newOperations.pop() || "0");
      setOperations(newOperations);
    }
  };

  const handleToggleSign = () => {
    setCurrentNumber((prev) => {
      if (prev === "0" || prev === "") return prev;
      return prev.startsWith("-") ? prev.slice(1) : "-" + prev;
    });
  };

  const calculateResult = (ops) => {
    let result = Number(ops[0]);
    for (let i = 1; i < ops.length; i += 2) {
      const operator = ops[i];
      const nextNumber = Number(ops[i + 1]);
      switch (operator) {
        case "+":
          result += nextNumber;
          break;
        case "−":
          result -= nextNumber;
          break;
        case "×":
          result *= nextNumber;
          break;
        case "÷":
          result /= nextNumber;
          break;
        default:
          break;
      }
    }
    return result;
  };

  const handleEquals = () => {
    if (currentNumber !== "") {
      const ops = [...operations, currentNumber];
      const result = calculateResult(ops);
      setCurrentNumber(String(result));
      setOperations([]);
    }
  };

  return (
    <Container>
      <Content>
        <Input
          value={
            operations.join(" ") + (currentNumber ? ` ${currentNumber}` : "")
          }
        />
        <Row>
          <Button label="CE" onClick={() => handleOperation("CE")} />
          <Button
            label={<FontAwesomeIcon icon={faC} />}
            onClick={handleOnClear}
          />
          <Button
            label={<FontAwesomeIcon icon={faBackspace} />}
            onClick={handleBackspace}
          />
          <Button
            label={<FontAwesomeIcon icon={faDivide} />}
            onClick={() => handleOperation("÷")}
          />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button
            label={<FontAwesomeIcon icon={faTimes} />}
            onClick={() => handleOperation("×")}
          />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button
            label={<FontAwesomeIcon icon={faMinus} />}
            onClick={() => handleOperation("−")}
          />
        </Row>
        <Row>
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button
            label={<FontAwesomeIcon icon={faPlus} />}
            onClick={() => handleOperation("+")}
          />
        </Row>
        <Row>
          <Button
            label={<FontAwesomeIcon icon={faPlusMinus} />}
            onClick={handleToggleSign}
          />
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="," onClick={() => handleAddNumber(".")} />
          <Button
            label={<FontAwesomeIcon icon={faEquals} />}
            onClick={handleEquals}
          />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
