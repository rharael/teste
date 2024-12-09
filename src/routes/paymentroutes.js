import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cart from '../pages/Cart/cart';
import Payment from '../pages/Payment/payment';
import NewCard from '../pages/Payment/newcard';
import PaymentFinish from '../pages/Payment/paymentfinish';
import { CardProvider } from '../utils/context/CardContext';


const Stack = createNativeStackNavigator();

export default function PaymentStack(){
  return(
    <CardProvider>
      <Stack.Navigator>
        <Stack.Screen
          name='CartPage'
          component={Cart}
          options={{
            headerShown: false
          }}
      />

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

      </Stack.Navigator>
	</CardProvider>
  );
}