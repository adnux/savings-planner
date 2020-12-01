import styled from 'styled-components';
import OriginLogo from '../../icons/logo.svg';

export const Logo = styled(OriginLogo)`
  width: 75px;
  height: 24px;
  margin: 16px;
  @media (min-width: 768px) {
    width: 100px;
    height: 32px;
    margin: 24px 56px;
  }
`;

export default Logo;
