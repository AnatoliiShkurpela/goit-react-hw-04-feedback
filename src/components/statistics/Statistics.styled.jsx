import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
`;

export const Item = styled.li`
  font-family: 'Trebuchet MS', 'Lucida Sans';
  padding: 7px 40px;
  margin-bottom: 10px;
  border-radius: 5px;
  border-left: 10px solid #82d18d;
  box-shadow: 2px -2px 5px 0 rgba(0, 0, 0, 0.1),
    -2px -2px 5px 0 rgba(0, 0, 0, 0.1), 2px 2px 5px 0 rgba(0, 0, 0, 0.1),
    -2px 2px 5px 0 rgba(0, 0, 0, 0.1);
  font-size: 20px;
  letter-spacing: 2px;
  transition: 0.3s all linear;
`;
