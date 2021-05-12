import React from "react";
import { Text, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import house1 from "../../assets/house1.jpg";

import { styles } from "./styles";

const Home: React.FC = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#fff" }}
    >
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Feather name="search" size={24} color="#000" />
          <TextInput
            placeholder="O que está procurando?"
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.contentNew}>
        <Text style={styles.title}>Novidades</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        <New
          cover={house1}
          name="Casa na praia"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </ScrollView>
    </ScrollView>
  );
};

export default Home;
