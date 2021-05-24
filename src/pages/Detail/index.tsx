import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Stars from "react-native-stars";

import SwiperComponent from "../../components/Swiper";

import { styles } from "./styles";

const Detail: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.swiperContent}>
        <SwiperComponent />
      </View>

      <View style={styles.headerContent}>
        <View style={{ width: "75%" }}>
          <Text>Casa de praia</Text>
        </View>
        <View style={{ width: "35%" }}>
          <Text style={styles.rating}>Avaliações</Text>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Stars />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Detail;
