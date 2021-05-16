import React from "react";
import { View, Image, Text, ImageProps } from "react-native";

import { styles } from "./styles";

interface HouseProps {
  cover: ImageProps;
}

const House: React.FC<HouseProps> = ({ cover }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={cover} style={styles.cover} />
      </View>

      <View style={styles.content}>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </Text>
        <Text style={styles.price}>R$ 979,90</Text>
      </View>
    </View>
  );
};

export default House;
