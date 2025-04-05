import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const Card = ({ titulo, descricao }) => {
    return(
        <View style={styles.card}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.descricao}>{descricao}</Text>
        </View>
    );
};

export default function App() {
  const dados = [
    {
      id: '1',
      titulo: 'Red Dead Redemption 2',
      descricao: 'É um jogo eletrônico de ação e aventura desenvolvido e publicado pela Rockstar Games.',
      imageUrl: 'https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg'
    },
    {
      id: '2',
      titulo: 'Red Dead Redemption 2 - Sobre o jogo',
      descricao: 'Estados Unidos, 1899. Arthur Morgan e a gangue Van der Linde são bandidos em fuga. Com agentes federais e os melhores caçadores de recompensas no seu encalço, a gangue precisa roubar, assaltar e lutar para sobreviver no impiedoso coração dos Estados Unidos.',
      imageUrl: 'https://i.redd.it/wz05tdsmbc771.jpg'
    },
    {
      id: '3',
      titulo: 'Informações gerais',
      descricao: 'Orçamento: 170 milhões, Lançamento: 26 de outubro de 2018, Tempo médio da campanha (sem contar missões secundárias): 50 horas, Desenvolvedora: Rockstar Games.',
      imageUrl: ''
    },
  ];

  const atores = [
    { nome: 'Roger Clark', personagem: 'Arthur Morgan' },
    { nome: 'Rob Wiethoff', personagem: 'John Marston' },
    { nome: 'Benjamin Byron Davis', personagem: 'Dutch Van Der Linde' },
    { nome: 'Peter Blomquist', personagem: 'Micah Bell' },
    { nome: 'Curzon Dobell', personagem: 'Hosea Matthews' },
    { nome: 'Alex McKenna', personagem: 'Sadie Adler' },
  ];

  return(
    <View style={styles.bordacard}>
      <FlatList 
        data={dados}
        renderItem={({ item }) => (
          <View>
            {item.imageUrl ? <Image source={{ uri: item.imageUrl }} style={styles.image} /> : null}
            <Card titulo={item.titulo} descricao={item.descricao} />
          </View>
        )}
        keyExtractor={item => item.id}
      />
      
      <Text style={styles.sectionTitle}>Atores</Text>
      <FlatList 
        data={atores}
        renderItem={({ item }) => (
          <Text style={styles.atorText}>{item.nome}: {item.personagem}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      
    
      <Image 
        source={{ uri: 'https://i.redd.it/wz05tdsmbc771.jpg' }} 
        style={styles.image} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'red',
    shadowOffset: { width: 0, height: 3 },
    elevation: 7,
    marginBottom: 10,
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
    backgroundColor: 'white',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  atorText: {
    fontSize: 14,
    marginBottom: 5,
  },
});

