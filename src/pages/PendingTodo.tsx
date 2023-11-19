import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleComplete } from '../redux/todoSlice';
import styled from 'styled-components';



function PendingTodo() {
  const pendingTodos = useSelector((state: RootState) =>
    state.todos.todos.filter((todo) => !todo.completed)
  );
  const dispatch = useDispatch();

  const handleToggleComplete = (id: number) => {
    dispatch(toggleComplete(id));
  };

  return (
    <PendingTodosContainer>
      <Title>Pending Todos</Title>
      <TodoList>
        {pendingTodos.map((todo) => (
          <TodoItem key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
            />
            <TodoText completed={todo.completed}>{todo.text}</TodoText>
          </TodoItem>
        ))}
      </TodoList>
    </PendingTodosContainer>
  );
}

export default PendingTodo;

const PendingTodosContainer = styled.div`
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
  padding: 10px;
  margin: 10px 0;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const TodoText = styled.span<{completed: boolean}>`
  flex: 1;
  color: #333;
  ${({ completed }) =>
    completed &&
    `
    text-decoration: line-through;
    color: #888;
  `}
`;