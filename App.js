import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import Screen from './src/components/Screen'
export default function App() {
  return (
    <Screen>
      <View>
        <Text>Em edição...</Text>
        <StatusBar style="auto"/>
      </View>
    </Screen>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
