import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  height: 80lvh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LinkList = styled.ul``;
export const LinkItem = styled.li`
  border-bottom: 1px solid #1e2d3d;
  padding: 18px 0 18px 18px;
`;

export const LinkPage = styled(NavLink)`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
`;
