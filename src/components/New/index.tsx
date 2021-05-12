import React from "react";
import {
  Image,
  ImageProps,
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
    </TouchableOpacity>
  );
};

export default New;
