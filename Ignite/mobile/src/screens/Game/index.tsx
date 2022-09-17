import React, {useState, useEffect} from 'react';
import {useRoute, useNavigation} from "@react-navigation/native"
import { Entypo } from "@expo/vector-icons"


import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { Background } from '../../components/Background';

import logoImg from '../../assets/logo-nlw-esports.png'

import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';


export function Game(){
  const [ duos, setDuos] = useState<DuoCardProps[]>([])
  const route = useRoute();
  const game = route.params as GameParams;
  const navigation = useNavigation();

  useEffect(() => {
    fetch(`http://192.168.15.6:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => {
        setDuos(data);
      })
  }, [])


  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
          >
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image 
            source={logoImg}
             style={styles.logo}
          />
          <View style={styles.right}/>
        </View>

        <Image source={{uri: game.bannerUrl}} style={styles.cover} resizeMode="cover"/>

        <Heading title={game.title} subtitle="Conecte-se e comece a jogar!"/>

        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <DuoCard data={item} onConnect={() =>{}}/>
          )}
          horizontal
          style={styles.containerList}
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    </Background>
  );
}