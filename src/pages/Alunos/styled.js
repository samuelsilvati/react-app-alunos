import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../config/colors';

export const AlunoContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px 0;
  }
  div + div {
    border-top: 1px solid #eee;
  }
  #exclamation {
    color: red;
  }
`;
export const ProfilePicture = styled.div`
  .image {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: no-repeat center/150%;
  }
`;
export const NovoAluno = styled(Link)`
  cursor: pointer;
  background-color: ${colors.primaryColor};
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  font-weight: 700;
  transition: all 0.3s;

  &:hover {
    filter: brightness(85%);
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
