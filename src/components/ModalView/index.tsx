import React from "react";
import { ReactNode } from "react";
import { Text, View, Modal, ModalProps } from "react-native";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { Background } from '../background'

type Props = ModalProps & {
  children: ReactNode;
}
export function ModalView({ children, ...rest }: Props) {
  return (
    <Modal
      transparent
      animationType='slide'
      {...rest}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar} />
            {children}
          </Background>
        </View>

      </View>
    </Modal>
  );
}