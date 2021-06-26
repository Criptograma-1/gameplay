import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from "react-native";

import { styles } from "./styles";
import { GuildIcon } from "../GuildIcon";
import { theme } from "../../global/styles/theme";

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

type Props = TouchableOpacityProps & {
  data: GuildProps;
}

export function Guild({ data, ...rest }: Props) {

  return (
    <TouchableOpacity style={styles.container}
      activeOpacity={0.7}
      {...rest}
    >
      <GuildIcon guildId={data.id} iconId={data.icon} />

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>
            {data.name}
          </Text>

          <Text style={styles.type}>
            {data.owner ? 'Administrador' : 'Convidado'}
          </Text>
        </View>
      </View>

      <Feather
        name='chevron-right'
        color={theme.colors.heading}
        size={24} />
    </TouchableOpacity>
  );
}