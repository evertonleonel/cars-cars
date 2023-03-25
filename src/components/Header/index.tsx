import { memo } from 'react';
import { icons, images } from '../../constants';
import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <img src={icons.logo_black} alt="Logotipo do site" />
      <p>SOU O HEADER</p>
    </Container>
  );
};

export default memo(Header);
