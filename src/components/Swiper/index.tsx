import React from "react";
import { View } from "react-native";
import Swiper from "react-native-swiper";

import { styles } from "./styles";

const SwiperComponent: React.FC = () => {
  return (
    <Swiper
      style={styles.wrapper}
      dotStyle={{
        backgroundColor: "#000",
        borderColor: "#000",
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10,
      }}
      activeDotColor="#fff"
      activeDotStyle={{
        borderColor: "#000",
        borderWidth: 1,
        width: 10,
        height: 10,
      }}
    >
      <View></View>
    </Swiper>
  );
};

export default SwiperComponent;
