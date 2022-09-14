import React from 'react';
import { ImageBackground } from 'react-native';

import { styles } from './styles';

import backgroundImage from "../../assets/background-galaxy.png"

interface Props{
  children: React.ReactNode
}

export function Background({children}: Props) {
  return (
    <ImageBackground 
      source={backgroundImage} 
      style={styles.container}
      defaultSource={backgroundImage}
    >
      {children}
      
    </ImageBackground>
  );
}