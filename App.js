import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

const Card = ({titulo, descricao}) => {
    return(
      <View style={styles.card}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
      </View>
    );
};

export default function App() {
  return(
  <View style={styles.bordacard}>

<Image source={"https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg"}/>

 <Card titulo="Red Dead Redemption 2" descricao="É um jogo eletrônico de ação e aventura desenvolvido e publicado pela Rockstar Games."/>

<Card titulo="Red Dead Redemption 2" descricao="Sobre este jogo:
Estados Unidos, 1899. Arthur Morgan e a gangue Van der Linde são bandidos em fuga. Com agentes federais e os melhores caçadores de recompensas no seu encalço, a gangue precisa roubar, assaltar e lutar para sobreviver no impiedoso coração dos Estados Unidos"/>

<Card titulo={"Informações gerais" =
"Orçamento 170 milhões, Lançamento:26 de outubro de 2018,Tempo médio da campanha(sem contar missões secundarias): 50 horas, Desenvolvedora: RockstarGames" }/>
   
   
   <Image source={"https://i.redd.it/wz05tdsmbc771.jpg"}/>

<Text/>Atores 
    Roger Clark: Arthur Morgan   
    Rob Wiethoff: John Marston
    Benjamin Byron Davis: Dutch Van Der Linde
    Peter Blomquist: Micah Bell
    Curzon Dobell: Hosea Matthews
    Alex McKenna: Sadie Adler     
      </View>
  );
}

const styles = StyleSheet.create({
    card: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: 'red',
      shadowOffset: {width: 0, height: 3},
      elevation: 7,
    },
    titulo: {
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: 'Big Shoulders Stencil',
    },
    descricao: {
      fontSize: 12,
    },
    bordacard: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'red',
    },
});
