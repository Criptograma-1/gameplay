import React from "react";
import { View, Text } from 'react-native';
import { SvgProps } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  hasCheckBox?: boolean;
  checked?: boolean;
}

export function Category({
  title,
  icon: Icon,
  checked = false,
  hasCheckBox = true,
  ...rest
}: Props) {
  const { secondary50, secondary60, secondary70, secondary85 } = theme.colors;

  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary60, secondary70]}
      >
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[checked ? secondary85 : secondary60, secondary50]}
        >
          {
            hasCheckBox &&
            <View style={checked ? styles.checked : styles.check} />
          }

          <Icon width={48} height={48} />
          <Text style={styles.title}>{title}</Text>

        </LinearGradient>
      </LinearGradient>
    </RectButton>


  );
}