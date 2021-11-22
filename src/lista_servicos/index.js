import * as React from 'react';
import { Button, View } from 'react-native';
 function ListaServicos({navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Profile"
          onPress={()=>{navigation.navigate("HomeScreen")}}
        />
      </View>
    );
  }
export default ListaServicos;