import { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface SwiperProps {
  children: ReactNode;
}

function Swiper({ children }: SwiperProps) {
  return (
    <Container>
      <Text>Swiper</Text>
      {children}
    </Container>
  );
};

export default Swiper;
