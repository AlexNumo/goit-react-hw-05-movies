import { NavLink, Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const Link = styled(NavLink)`
  &.active {
    color: tomato;
  }
`;

const Wrapper = styled.div`
  padding: 12px;
`;

export const Navigation = () => {
    return(
    <Wrapper>
        <Nav>
            <Link to="/home">Home</Link>
            <Link to="/movies">Movies</Link>
        </Nav>
        <Outlet />
        {/* <Toaster/> */}
    </Wrapper>
    )};