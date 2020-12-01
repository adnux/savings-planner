import styled from 'styled-components';
import House from '../../../icons/house.svg';

export const Styled = styled.div`
  margin-bottom: 24px;
  text-align: left;
`;

export const Icon = styled(House)`
  width: 64px;
  height: 64px;
`;

export const Text = styled.span`
  display: inline-block;
  vertical-align: top;
  margin: 0 16px;
`;

export const Title = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;

  color: #1e2a32;
`;

export const SubTitle = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  text-align: left;

  color: #708797;
`;
