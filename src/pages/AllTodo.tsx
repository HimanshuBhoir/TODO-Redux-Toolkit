import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { addTodo, toggleComplete, deleteTodo } from '../redux/todoSlice';
import styled from 'styled-components';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function Todo() {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('');

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      dispatch(
        addTodo({
          id: Date.now(),
          text: inputText,
          completed: false,
        })
      );
      setInputText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  const handleToggleComplete = (id: number) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <TodoContainer>
      <Title>Todos</Title>
        <TodoInput
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new todo"
        />
        <AddButton onClick={handleAddTodo}>Add Todo</AddButton>
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
            />
            <TodoText completed={todo.completed}>{todo.text}</TodoText>
            <DeleteButton onClick={() => handleDeleteTodo(todo.id)}><DeleteOutlineOutlinedIcon /></DeleteButton>
          </TodoItem>
        ))}
      </TodoList>
    </TodoContainer>
  );
}

export default Todo;

const TodoContainer = styled.div`
  margin: 20px auto;
  padding: 20px;
  max-width: 600px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 10px;
    width: 80vw;
    border-radius: 0;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const TodoInput = styled.input`
  width: 70%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  @media (max-width: 768px) {
    width: 70vw;
  }
`;

const AddButton = styled.button`
  padding: 8px 12px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #5cb85c;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4cae4c;
  }
`;

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
  max-height: 70vh;
  overflow-y: auto;
`;

const TodoItem = styled.li`
  display: flex;
  text-align: left;
  justify-content: space-between;
  padding: 10px;
  margin: 10px 0;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  input[type='checkbox'] {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    border: 2px solid #333;
    border-radius: 4px;
    cursor: pointer;
    outline: none;

    &:checked {
      background-color: #5cb85c;
      border-color: #5cb85c;
    }
  }
`;

const TodoText = styled.span<{ completed: boolean}>`
  flex: 1;
  color: #333;
  ${({ completed }) =>
    completed &&
    `
    text-decoration: line-through;
    color: #888;
  `}
`;

const DeleteButton = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
  width: 30px;
  height: 40px;
  border: none;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: #ff6347;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center; /* Aligns icon and text vertically */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cc4c39;
  }
`;