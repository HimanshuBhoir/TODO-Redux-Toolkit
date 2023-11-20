import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const allTodos = useSelector((state: RootState) => state.todos.todos);
  const pendingTodos = allTodos.filter((todo) => !todo.completed);
  const completedTodos = allTodos.filter((todo) => todo.completed);


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <NavbarSection>
      <Title>My TODO</Title>
      <MenuButton onClick={toggleMenu}>Menu</MenuButton>
      <Itemset showMenu={showMenu}>
        <Item>
          <StyledLink to="/TODO-Redux-Toolkit/"> All Todos </StyledLink>
          <Badge>{allTodos.length}</Badge>
        </Item>
        <Item>
          <StyledLink to="/TODO-Redux-Toolkit/pending">Pending </StyledLink>
          <Badge>{pendingTodos.length}</Badge>
        </Item>
        <Item>
          <StyledLink to="/TODO-Redux-Toolkit/completed">Completed</StyledLink>
          <Badge>{completedTodos.length}</Badge>
        </Item>
      </Itemset>
    </NavbarSection>
  );
};

export default Navbar;

const NavbarSection = styled.div`
  display: flex;
  align-items: center;
  background-color: black;

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const Title = styled.section`
  font-family: fantasy;
  font-size: 30px;
  margin: 10px 20px;
  color: whitesmoke;
`;

const MenuButton = styled.button`
  display: none;

  @media (max-width: 700px) {
    display: block;
    color: whitesmoke;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

interface ItemsetProps {
  showMenu: boolean;
}

const Itemset = styled.div<ItemsetProps>`
  display: flex;
  align-items: center;
  margin-left: auto;

  

  @media (max-width: 700px) {
    flex-direction: column;
    display: ${(props) => (props.showMenu ? 'flex' : 'none')};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: whitesmoke;
`;

const Badge = styled.div`
  background-color: red;
  color: white;
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

  @media (max-width: 700px) {
    margin: 5px 0;
    font-size: medium;
  }
`;
