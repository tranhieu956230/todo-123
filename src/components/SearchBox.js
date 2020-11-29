import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 60%;
  padding: 8px;
  color: #333;
  font-size: 1rem;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 8px;
  background-color: #ccc;
  border: 1px solid #ccc;
  transition: all 0.15s;
  cursor: pointer;
  &:hover {
    background-color: #bbb;
    border: 1px solid #bbb;
  }

  &:focus {
    outline: none;
  }
`;

const SearchBox = ({ value, onChange, onAddTodo }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  const handleAddToDo = (event) => {
    if (event.key === "Enter") {
      onAddTodo(event);
    }
  };

  return (
    <Wrapper>
      <Input
        onKeyPress={handleAddToDo}
        onChange={handleChange}
        value={value}
        placeholder="Todo..."
      />
      <Button onClick={onAddTodo}>Add</Button>
    </Wrapper>
  );
};

export default SearchBox;
