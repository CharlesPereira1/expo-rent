import React from "react";
import { ImageBackground, ImageProps, Text } from "react-native";

import { styles } from "./styles";

interface RecommendedProps {
  image: ImageProps;
  house: string;
  offer: string;
}

const Recommended: React.FC<RecommendedProps> = ({ image, offer, house }) => {
  return (
    <ImageBackground source={image} style={styles.container} blurRadius={3.5}>
      <Text style={[styles.house, styles.shadow]}>{house}</Text>

      <Text style={[styles.description, styles.shadow]}>{offer} OFF</Text>
    </ImageBackground>
  );
};

export default Recommended;
