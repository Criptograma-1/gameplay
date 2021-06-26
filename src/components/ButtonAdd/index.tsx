import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function ButtonAdd({ ...rest }: RectButtonProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.heading}
        size={24}
      />
    </RectButton>
  )
}