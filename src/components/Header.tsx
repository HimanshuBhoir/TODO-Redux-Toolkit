import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

function Navbar() {
  const allTodos = useSelector((state: RootState) => state.todos.todos);
  const pendingTodos = allTodos.filter((todo) => !todo.completed);
  const completedTodos = allTodos.filter((todo) => todo.completed);

  return (
    <NavbarSection>
      <Title>My TODO</Title>
      <Itemset>
        <Item>
          <StyledLink to="/"> All Todos </StyledLink>
          <Badge>{allTodos.length}</Badge>
        </Item>
        <Item>
          <StyledLink to="/pending">Pending </StyledLink>
          <Badge>{pendingTodos.length}</Badge>
        </Item>
        <Item>
          <StyledLink to="/completed">Completed</StyledLink>
          <Badge>{completedTodos.length}</Badge>
        </Item>
      </Itemset>
    </NavbarSection>
  );
}

export default Navbar;

const NavbarSection = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
`;

const Title = styled.section`
  font-family: fantasy;
  font-size: 30px;
  margin: 10px 20px;
  color: whitesmoke;
`;

const Itemset = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  margin-left: auto;
  right: 5px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: whitesmoke;
`;

const Badge = styled.div`
  background-color: whitesmoke;
  color: black;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
  font-size: medium;
  margin-left: 5px;
`;

const Item = styled.section`
  display: flex;
  margin: 7px;
  font-size: large;
  &:hover ${StyledLink} {
    color: gray;
  }
  &:hover ${Badge} {
    background-color: gray;
  }
`;


