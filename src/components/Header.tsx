import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
  return (
    <NavbarSection>

      <Title>
        My TODO
      </Title>

          <Itemset>
            <Item>
              <Link to="/" style={{textDecoration: 'none'}}>All Todos</Link>
            </Item>
            <Item>
              <Link to="/pending" style={{textDecoration: 'none'}}>Pending</Link>
            </Item>
            <Item>
              <Link to="/completed" style={{textDecoration: 'none'}}>Completed</Link>
            </Item>
          </Itemset>

    </NavbarSection>
  )
}

export default Navbar;

const NavbarSection = styled.div`
    display: flex;
`;

const Title = styled.section`
  font-size: 40px;
  margin: 15px 30px;
  ${({ theme }) => theme.mobile`
    font-size: 20px;
    margin: 10px;
  `}
`;

const Itemset = styled.div`
  position: absolute;
  display: flex;
  margin-top: 20px;
  right: 10%;
  ${({ theme }) => theme.mobile`
    margin-top: 5px;
  `} 
`;

const Item = styled.section`
  display: flex;
  margin: 7px;
  font-size: larger;
  ${({ theme }) => theme.mobile`
    font-size: small;
  `}
`;