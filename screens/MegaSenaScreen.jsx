import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';

export default function MegaSenaScreen() {

  const [jogos, setJogos] = useState([]);

  const gerarJogo = () => {


    const jogo = [];
    while (jogo.length < 6) {
      const num = Math.floor(Math.random() * 60) + 1;
      if (!jogo.includes(num)) jogo.push(num);
    }


    const jogoOrdenado = jogo.sort((a, b) => a - b).join(' - ');
    setJogos([jogoOrdenado, ...jogos]);


  };

  return (


    <View style={{ padding: 16 }}>
      
      <Button mode="contained" onPress={gerarJogo}>
        Gerar Jogo
      </Button>


      <FlatList
        data={jogos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (


          <Card style={{ marginVertical: 8 }}>
            <Card.Content>
              <Text>{item}</Text>
            </Card.Content>
          </Card>

          
        )}
      />
    </View>
  );
}
