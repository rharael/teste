import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cart from '../pages/Cart/cart';
import Payment from '../pages/Payment/payment';
import NewCard from '../pages/Payment/newcard';

const Stack = createNativeStackNavigator();

export default function PaymentStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name='Payment'
        component={Payment}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name='NewCard'
        component={NewCard}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}