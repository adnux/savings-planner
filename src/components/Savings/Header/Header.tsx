import * as React from 'react';
import { Icon, Styled, SubTitle, Text, Title } from './Styled';

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
