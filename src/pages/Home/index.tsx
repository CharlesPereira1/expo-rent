import React from "react";
import { Text, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

const Home: React.FC = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#fff" }}
    >
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Feather size={24} color="#000" />
          <TextInput
            placeholder="O que está procurando?"
            style={styles.input}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
