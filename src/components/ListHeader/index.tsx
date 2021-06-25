import React, { useState } from "react";
import { View, Text } from 'react-native';
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";

import { Profile } from "../../components/Profile";
import { styles } from "./styles";

type Props = {
  title: string;
  subtitle: string;
}
export function ListHeader({ title, subtitle }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {title} </Text>
      <Text style={styles.subtitle}> {subtitle} </Text>
    </View>
  );
}