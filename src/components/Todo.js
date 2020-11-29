import React from "react";
import styled from "styled-components";
import { ReactComponent as Checkmark } from "../assets/check-mark.svg";
import { ReactComponent as Closemark } from "../assets/close.svg";

const Item = styled.li`
  padding: 12px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.1);
  }

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Checkbox = styled.div(
  ({ done }) => `
    border-radius: 50%;
    height: 1.3rem;
    width: 1.3rem;
    border: 1px solid ${done ? "#32CD32" : "#ccc"};
    margin-right: 0.8rem;
  `
);
const End = styled.div`
  margin-left: auto;
  width: 1rem;
  height: 1rem;
  padding: 4px;
`;

const Text = styled.p(
  ({ done }) => `
    text-decoration: ${done ? "line-through" : "none"};
    color: ${done ? "#ccc" : "inherit"};
    user-select: none;
  `
);

const Todo = ({ title, done, onRemove, onCheck }) => {
  return (
    <Item onClick={onCheck}>
      <Checkbox done={done}>{done && <Checkmark fill="#32CD32" />}</Checkbox>
      <Text done={done}>{title}</Text>
      <End onClick={onRemove}>
        <Closemark width="1rem" height="1rem" fill="#aaa" />
      </End>
    </Item>
  );
};

export default Todo;
