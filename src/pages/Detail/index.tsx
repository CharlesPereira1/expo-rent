import React from "react";
import { Text, View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
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
            <Stars
              default={4}
              count={5}
              half={true}
              starSize={20}
              fullStar={
                <Ionicons name="md-star" size={24} style={styles.myStarStyle} />
              }
              emptyStar={
                <Ionicons
                  name="md-star-outline"
                  size={24}
                  style={styles.myStarStyle}
                />
              }
              halfStar={
                <Ionicons
                  name="md-star-half"
                  size={24}
                  style={styles.myStarStyle}
                />
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Detail;
