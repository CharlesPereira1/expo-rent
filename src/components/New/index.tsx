import React from "react";
import {
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

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
        <View style={styles.dot} />

        <Text style={styles.badge}>Novo</Text>
      </View>
      <Text style={styles.badge}>{description}</Text>
    </TouchableOpacity>
  );
};

export default New;
