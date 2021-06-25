import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { ScrollView } from 'react-native';

import { Category } from "../Category";
import { style } from "./style";
import { categories } from "../../utils/categories";

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
}

export function CategorySelect({ categorySelected, setCategory, hasCheckBox = true }: Props) {
  return (
    <ScrollView
      horizontal
      style={style.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map(category => (
          <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySelected}
            onPress={() => setCategory(category.id)}
            hasCheckBox={hasCheckBox}
          />
        ))

      }
    </ScrollView>


  );
}