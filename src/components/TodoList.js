import React from "react";
import styled from "styled-components";
import Todo from "./Todo";

const Container = styled.ul`
  list-style-type: none;
  margin-top: 2rem;
`;

const TodoList = ({ todoList, onRemove, onCheck }) => {
  return (
    <Container>
      {todoList.map(({ title, done, id }) => (
        <Todo
          title={title}
          done={done}
          key={id}
          onRemove={() => onRemove(id)}
          onCheck={() => onCheck(id)}
        />
      ))}
    </Container>
  );
};

export default TodoList;
