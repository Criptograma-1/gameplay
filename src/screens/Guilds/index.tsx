import React, { useState } from "react";
import { View, FlatList } from "react-native";

import { styles } from "./style";
import { theme } from "../../global/styles/theme";
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { Load } from "../../components/Load";
import { api } from "../../services/api";
import { useEffect } from "react";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}
export function Guilds({ handleGuildSelect }: Props) {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGuilds() {
    const response = await api.get('/users/@me/guilds');

    setGuilds(response.data);
    setLoading(false);

  }

  useEffect(() => {
    fetchGuilds();
  }, [])

  return (
    <View style={styles.container}>
      {loading ? <Load /> :
        <FlatList
          data={guilds}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Guild
              onPress={() => handleGuildSelect(item)}
              data={item} />
          )}
          contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => <ListDivider isCentered />}
          ItemSeparatorComponent={() => <ListDivider isCentered />}
          style={styles.guilds}
        />
      }
    </View>
  );
}