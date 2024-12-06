import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cart from '../pages/Cart/cart';
import Payment from '../pages/Payment/payment';
import NewCard from '../pages/Payment/newcard';
import PaymentFinish from '../pages/Payment/paymentfinish';
import Home from '../pages/Home/home';

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

      <Stack.Screen
        name='PaymentFinish'
        component={PaymentFinish}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}