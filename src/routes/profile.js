import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from '../pages/Profile/profilepage';
import ProfileUser from '../pages/Profile/profileuser';
import ProfileAddress from '../pages/Profile/profileaddress';
import ProfileHelp from '../pages/Profile/profilehelp';
import CustomHeader from '../components/Header';

const Stack = createNativeStackNavigator();

export default function ProfileStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name='ProfilePage'
        component={Profile}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name='ProfileUser'
        component={ProfileUser}
        options={({ route }) => ({
			header: () => <CustomHeader title={route.params?.headerTitle || ''} />,
			animation: 'slide_from_right',
		  })}
      />

      <Stack.Screen
        name='ProfileAddress'
        component={ProfileAddress}
        options={({ route }) => ({
			header: () => <CustomHeader title={route.params?.headerTitle || ''} />,
			animation: 'slide_from_right',
		  })}
      />

      <Stack.Screen
        name='ProfileHelp'
        component={ProfileHelp}
        options={({ route }) => ({
			header: () => <CustomHeader title={route.params?.headerTitle || ''} />,
			animation: 'slide_from_right',
		  })}
      />
    </Stack.Navigator>
  );
}