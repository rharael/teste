import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from '../pages/Profile/Profile';
import ProfileUser from '../pages/Profile/profileuser';
import ProfileAddress from '../pages/Profile/profileaddress';
import ProfileHelp from '../pages/Profile/profilehelp';

const Stack = createNativeStackNavigator();

export default function ProfileStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name='Profile'
        component={Profile}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name='ProfileUser'
        component={ProfileUser}
        options={{
          headerShown: true
        }}
      />

      <Stack.Screen
        name='ProfileAddress'
        component={ProfileAddress}
        options={{
          headerShown: true,
        }}
      />

      <Stack.Screen
        name='ProfileHelp'
        component={ProfileHelp}
        options={{
          headerShown: true
        }}
      />
    </Stack.Navigator>
  );
}