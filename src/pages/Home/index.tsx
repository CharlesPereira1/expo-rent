import React from "react";
import { Text, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import New from "../../components/New";
import House from "../../components/House";

import house1 from "../../assets/house1.jpg";
import house2 from "../../assets/house2.jpg";
import house3 from "../../assets/house3.jpg";
import house4 from "../../assets/house4.jpg";
import house5 from "../../assets/house5.jpg";
import house6 from "../../assets/house6.jpg";

import { styles } from "./styles";

const Home: React.FC = () => {
  const { navigate } = useNavigation();

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
          onPress={() => navigate("Detail")}
        />
        <New
          cover={house2}
          name="Casa na praia 2"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <New
          cover={house3}
          name="Casa na praia 3"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </ScrollView>

      <View
        style={{ flexDirection: "row", marginBottom: 10, alignItems: "center" }}
      >
        <Text style={[styles.title, { marginTop: 20 }]}>Próximo de você</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        <House cover={house4} />
        <House cover={house5} />
        <House cover={house6} />
      </ScrollView>
    </ScrollView>
  );
};

export default Home;
