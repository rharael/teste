import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native'
import Icons from '../assets/icons';

import Favorite from '../pages/Favorites/favorites';
import ProfileStack from './profile';
import Cart from '../pages/Cart/cart'
import StackRoutes from './stackRoutes';

const Tab = createBottomTabNavigator();

export default function Routes(){
  return(
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarLabel: () => null,
        tabBarIcon: ({focused}) => {
          if(route.name === 'HomeStack') 
            return focused ? <NameNav>Início</NameNav> : <Icons.HomeIcon/>;
          else if(route.name === 'Favorite') 
            return focused ? <NameNav>Favoritos</NameNav> : <Icons.Favorite/>;
          else if(route.name === 'Profile') 
            return focused ? <NameNav>Perfil</NameNav> : <Icons.UserHome/>;
        },
        tabBarStyle: {
          height: 60,
        },
        tabBarIconStyle:{
          width: 76,
          height: 42,
          margin: 'auto',
        }
      })}
    >
      
      <Tab.Screen
        name='HomeStack'
        component={StackRoutes}
      />

      <Tab.Screen
        name='Favorite'
        component={Favorite}
      />

      <Tab.Screen
        name='Profile'
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
} 

const NameNav = styled.Text`
  font-size: 12px;
  font-family: 'Urbanist-SemiBold';
  color: #FE724C;
  border: 1px solid #fe724c;
  border-radius: 38px;
  background-color: #fff7f4;
  width: 100%;
  height: 100%;
  text-align: center;
  text-align-vertical: center;
`; 