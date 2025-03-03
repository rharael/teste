import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home/home';
import Details from '../pages/Product_Details/details';
import Buy from '../pages/Buy/buy';

const Stack = createNativeStackNavigator();

export default function HomeStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name='Details'
        component={Details}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name='BuyHome'
        component={Buy}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}