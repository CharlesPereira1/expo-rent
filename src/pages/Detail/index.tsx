import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Swiper from "../../components/Swiper";

import { styles } from "./styles";

const Detail: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.swiperContent}></View>
      <Swiper />
    </View>
  );
};

export default Detail;
