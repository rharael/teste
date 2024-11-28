import { Platform, SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const SafeScreen = styled.SafeAreaView`
padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}
`;

export default function Screen({children}) {
 return (
   <SafeScreen>
	{children}
   </SafeScreen>
  );
}