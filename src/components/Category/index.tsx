import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View, Text } from 'react-native';
import { SvgProps } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";

import { style } from "./style";
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
        style={style.container}
        colors={[secondary60, secondary70]}
      >
        <LinearGradient
          style={[style.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[checked ? secondary85 : secondary60, secondary50]}
        >
          {
            hasCheckBox &&
            <View style={checked ? style.checked : style.check} />
          }
          <Icon width={48} height={48} />

          <Text style={style.title}>{title}</Text>

        </LinearGradient>

      </LinearGradient>
    </RectButton>


  );
}