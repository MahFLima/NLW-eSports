import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

import {
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text
} from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

export interface GameCardProps {
  id: string;
  title: string;
  _count: {
    ads: number;
  }
  bannerUrl: string;
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps
}

export function GameCard({ data, ...rest }: Props) {

  
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground
        style={styles.cover}
        source={{ uri: data.bannerUrl }}>
        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <Text style={styles.name}>
            {data.title}
          </Text>
          {data._count.ads == 0 ? (
            <Text style={styles.ads}>
              sem anúncios
            </Text>
          ) : (
            data._count.ads == 1 ? (
              <Text style={styles.ads}>
                {data._count.ads} anúncio
              </Text>
            ) : (
              <Text style={styles.ads}>
                {data._count.ads} anúncios
              </Text>
            )
          )}

        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}