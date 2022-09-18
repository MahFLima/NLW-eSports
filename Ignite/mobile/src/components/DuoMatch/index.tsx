import React, {useState} from 'react';

import * as Clipboard from 'expo-clipboard';

import {
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator
} from 'react-native';

import { MaterialIcons } from "@expo/vector-icons"
import { Activity, CheckCircle } from "phosphor-react-native"

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';

interface Props extends ModalProps {
  discord: string;
  onClose: () => void
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  const [isCopping, setIsCopping] = useState(false)
  
  async function handleClipboardDiscordUser(){
    setIsCopping(true)
    await Clipboard.setStringAsync(discord)
    Alert.alert("Discord copiado para area de transferencia")
    setIsCopping(false)
  }
  return (
    <Modal
      animationType="fade"
      transparent
      statusBarTranslucent
      {...rest}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={onClose}
          >
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>
          <CheckCircle
            size={64}
            color={THEME.COLORS.SUCCESS}
            weight="bold"
          />

          <Heading
            title="Lets Play"
            subtitle="Agora e só começar a jogar"
            style={{ alignItems: "center", marginTop: 24 }}
          />
          <Text style={styles.label}>
            Adicione no discord
          </Text>
          <TouchableOpacity disabled={isCopping} onPress={handleClipboardDiscordUser} style={styles.buttonDiscord}>
            <Text style={styles.discord}>
              {isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY}/> : discord}
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
}