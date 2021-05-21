import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import SwiperComponent from "../../components/Swiper";

import { styles } from "./styles";

const Detail: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.swiperContent}>
        <SwiperComponent />
      </View>
    </View>
  );
};

export default Detail;
