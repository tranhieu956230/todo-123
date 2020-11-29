import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { generateId } from "./utils";
import SearchBox from "./components/SearchBox";
import TodoList from "./components/TodoList";
import TodoData from "./data/todoList";

const Container = styled.div`
  background: linear-gradient(0deg, #2193b0 0%, #6dd5ed 100%);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  color: #333;
  width: 30rem;
  height: 70vh;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: white;
  box-shadow: 5px 5px 15px 5px rgb(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 1rem;
`;

const Heading = styled.p`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const App = () => {
  const [todoList, setTodoList] = useState(TodoData);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (value) => {
    setSearchValue(value);
  };

  const handleAddTodo = () => {
    if (!searchValue.trim()) return;
    setTodoList((prev) => [
      { title: searchValue, done: false, id: generateId() },
      ...prev,
    ]);
    setSearchValue("");
  };

  const handleRemove = (itemId) => {
    setTodoList((prev) => prev.filter(({ id }) => id !== itemId));
  };

  const handleCheck = (itemId) => {
    setTodoList((prev) =>
      prev.reduce((total, item) => {
        let newItem = item;
        if (itemId === item.id) {
          newItem = {
            ...item,
            done: !item.done,
          };
        }
        return [...total, newItem];
      }, [])
    );
  };

  return (
    <Container>
      <Wrapper>
        <Heading>All Tasks</Heading>
        <SearchBox
          onChange={handleChange}
          onAddTodo={handleAddTodo}
          value={searchValue}
        />
        <TodoList
          todoList={todoList}
          onRemove={handleRemove}
          onCheck={handleCheck}
        />
      </Wrapper>
    </Container>
  );
};

export default App;
