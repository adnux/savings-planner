import * as React from 'react';
import styled from 'styled-components';
import House from '../../icons/house.svg';

const Styled = styled.div`
  margin-bottom: 24px;
  text-align: left;
`;

const Icon = styled(House)`
  width: 64px;
  height: 64px;
`;

const Text = styled.span`
  display: inline-block;
  vertical-align: top;
  margin: 0 16px;
`;

const Title = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;

  color: #1e2a32;
`;

const SubTitle = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  text-align: left;

  color: #708797;
`;

export const Header = () => {
  return (
    <Styled>
      <Icon />
      <Text>
        <Title>Buy a house</Title>
        <SubTitle>Saving goal</SubTitle>
      </Text>
    </Styled>
  );
};
