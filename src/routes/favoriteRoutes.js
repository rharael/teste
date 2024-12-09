import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Favorite from '../pages/Favorites/favorites';
import Details from '../pages/Product_Details/details';

const Stack = createNativeStackNavigator();

export default function FavoriteStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name='Favorite'
        component={Favorite}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name='FavoriteDetails'
        component={Details}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}