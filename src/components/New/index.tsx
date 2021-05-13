import React from "react";
import {
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

interface NewProps extends TouchableOpacityProps {
  cover: ImageProps;
  name: string;
  description: string;
}

const New: React.FC<NewProps> = ({ cover, name, description, ...rest }) => {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <Image source={cover} style={styles.cover} />

      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>

        <View style={styles.dotContent}>
          <View style={styles.dot} />

          <Text style={styles.badge}>Novo</Text>
        </View>
      </View>

      <Text style={styles.description}>{description}</Text>

      <View style={styles.footer}>
        {/* <View style={{ width: "80%" }}> */}
        <Text style={styles.price}>R$ 1.204,85</Text>
        <Ionicons name="ios-add-circle" size={24} />
        {/* </View> */}
      </View>
    </TouchableOpacity>
  );
};

export default New;
