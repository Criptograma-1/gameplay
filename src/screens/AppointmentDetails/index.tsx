import React, { useEffect, useState } from "react";
import {
  Alert,
  Share,
  Platform,
  ImageBackground,
  Text,
  View,
  FlatList
} from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import { Fontisto } from "@expo/vector-icons";
import * as Linking from 'expo-linking';

import { Background } from "../../components/background";
import { ListHeader } from "../../components/ListHeader";
import { Member, MemberProps } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/buttonicon";
import { Header } from "../../components/Header";
import { Load } from "../../components/Load";
import { AppointmentProps } from "../../components/Appointment";
import { theme } from "../../global/styles/theme";
import BannerImg from "../../assets/banner.png";
import { styles } from "./styles";
import { api } from "../../services/api";

type Params = {
  guildSelected: AppointmentProps
}

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
}

export function AppointmentDetails() {
  const [Widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);

  const route = useRoute();
  const { guildSelected } = route.params as Params;

  async function fetchGuildWidget() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);

      setWidget(response.data);

    } catch {
      Alert.alert('Verifique as configurações do servidor. Verifique se o Widget está habilitado')
    } finally {
      setLoading(false);
    }
  }

  function handleShareInvitation() {
    const message = Platform.OS === 'ios' ?
      `junte-se a ${guildSelected.guild.name}` :
      Widget.instant_invite;

    Share.share({
      message,
      url: Widget.instant_invite
    });
  }

  function handleOpenGuild() {
    Linking.openURL(Widget.instant_invite);
  }

  useEffect(() => {
    fetchGuildWidget();
  })

  return (
    <Background>
      <Header
        title='Detalhes'
        action={
          guildSelected.guild.owner &&
          <BorderlessButton onPress={handleShareInvitation}>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground
        style={styles.banner}
        source={BannerImg}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            {guildSelected.guild.name}
          </Text>

          <Text style={styles.subtitle}>
            {guildSelected.description}
          </Text>
        </View>
      </ImageBackground>

      {loading ? <Load /> :
        <>
          <ListHeader
            title="Jogadores"
            subtitle={`Total ${Widget.members.length}`}
          />

          <FlatList
            data={Widget.members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Member data={item} />
            )}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            style={styles.members}
          />
        </>}
      {
        guildSelected.guild.owner &&
        <View style={styles.footer}>
          <ButtonIcon
            onPress={handleOpenGuild}
            title='Entrar na partida' />
        </View>}
    </Background>
  );
}