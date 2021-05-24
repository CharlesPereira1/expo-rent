import React from "react";
import { Image, View } from "react-native";
import Swiper from "react-native-swiper";

import house1 from "../../assets/house1.jpg";
import house2 from "../../assets/house2.jpg";
import house3 from "../../assets/house3.jpg";

import { styles } from "./styles";

const SwiperComponent: React.FC = () => {
  return (
    <Swiper
      style={styles.wrapper}
      dotStyle={{
        backgroundColor: "#000",
        borderColor: "#000",
        borderWidth: 3,
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
      <View style={styles.slide}>
        <Image source={house1} style={{ width: "100%", height: 400 }} />
      </View>
      <View style={styles.slide}>
        <Image source={house2} style={{ width: "100%", height: 400 }} />
      </View>
      <View style={styles.slide}>
        <Image source={house3} style={{ width: "100%", height: 400 }} />
      </View>
    </Swiper>
  );
};

export default SwiperComponent;
