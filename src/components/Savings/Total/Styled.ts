import styled from 'styled-components';
import Arrow from '../../../icons/arrow.svg';

export const Goal = styled.div`
  background: #ffffff;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    padding-left: 16px;
  }
`;

export const Selector = styled.div`
  border: 1px solid #e9eef2;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 7px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Left = styled(Arrow)`
  width: 24px;
  height: 24px;
  padding: 2px;
  margin: 10px;
`;

export const Right = styled(Arrow)`
  width: 24px;
  height: 24px;
  padding: 2px;
  margin: 10px;
  transform: rotate(180deg);
`;

export const Selected = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
`;

export const Month = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;

  text-align: center;

  color: #1e2a32;
`;

export const Year = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;

  text-align: center;

  color: #708797;
`;
