import * as React from 'react';
import styled from 'styled-components';

const Goal = styled.div`
  border-radius: 28px;
  margin-bottom: 32px;

  border: 1px solid #e9eef2;
  box-sizing: border-box;
  border-radius: 8px;
  background: #ffffff;
  color: #1e2a32;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  /* margin-bottom: 75px; */
`;

const Description = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;

  /* $blueGray900 */
  color: #1e2a32;
`;

const Value = styled.div`
  display: inline-block;
  text-align: right;

  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;

  color: #0079ff;
`;

const Footer = styled.footer`
  background: #f4f8fa;
  height: 80px;
  text-align: center;
  padding: 32px 24px;
  /*  */
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #1e2a32;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const MonthGoal = () => {
  return (
    <Goal>
      <Header>
        <Description>Monthly amount</Description>
        <Value>$521</Value>
      </Header>
      <Footer>
        You’re planning <b>48 monthly deposits</b> to reach your <b>$25,000</b>
        &nbsp; goal by <b>October 2020</b>.
      </Footer>
    </Goal>
  );
};

export default MonthGoal;
