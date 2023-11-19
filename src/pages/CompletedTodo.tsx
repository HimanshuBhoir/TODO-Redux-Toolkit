import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { deleteTodo } from '../redux/todoSlice';
import styled from 'styled-components';

function CompletedTodo() {
  const completedTodos = useSelector((state: RootState) =>
    state.todos.todos.filter((todo) => todo.completed)
  );
  const dispatch = useDispatch();

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <CompletedTodosContainer>
      <Title>Completed Todos</Title>
      <TodoList>
        {completedTodos.map((todo) => (
          <TodoItem key={todo.id}>
            <TodoText completed={todo.completed}>{todo.text}</TodoText>
            <DeleteButton onClick={() => handleDeleteTodo(todo.id)}>Delete</DeleteButton>
          </TodoItem>
        ))}
      </TodoList>
    </CompletedTodosContainer>
  );
}

export default CompletedTodo;

const CompletedTodosContainer = styled.div`
  margin: 20px auto;
  padding: 20px;
  max-width: 600px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 10px 0;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const TodoText = styled.span<{ completed:boolean }>`
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
  border: none;
  border-radius: 4px;
  background-color: #ff6347;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cc4c39;
  }
`;