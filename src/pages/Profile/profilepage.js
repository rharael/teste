import React, { useState, useEffect, useContext } from 'react';
import { BackHandler } from 'react-native';
import Styles from './styles';
import Icons from '../../assets/icons';
import CustomSwitch from '../../components/Switch';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../utils/context/UserContext';

export default function Profile() {
	const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
	const toggleSwitch = () => setIsNotificationsEnabled((prev) => !prev);
	const navigation = useNavigation()
	const handleExit = () => {
		navigation.reset({
			index: 0,
			routes: [{ name: 'HomeStack' }],
		});
		BackHandler.exitApp();
		return true;
	};
	const { userData } = useContext(UserContext)

  return (
	<Styles.Container>
    <Styles.Header>
		<Styles.ProfileName>{userData.name}</Styles.ProfileName>
		<Styles.ProfileEmail>{userData.email}</Styles.ProfileEmail>
		</Styles.Header>
	<Styles.MenuContainer>
		<Styles.MenuItem onPress={() => navigation.navigate('ProfileUser', { headerTitle: 'Perfil' })}>
			<Styles.MenuItemLeft>
				<Styles.MenuIcon>
					<Icons.UserProfile />
				</Styles.MenuIcon>
				<Styles.MenuTextContainer>
					<Styles.MenuTitle>Perfil</Styles.MenuTitle>
					<Styles.MenuSubtitle>Informações pessoais</Styles.MenuSubtitle>
				</Styles.MenuTextContainer>
			</Styles.MenuItemLeft>
			<Icons.Arrow />
		</Styles.MenuItem>

		<Styles.MenuItem onPress={() => navigation.navigate('ProfileAddress', { headerTitle: 'Endereço' })}>
			<Styles.MenuItemLeft>
				<Styles.MenuIcon>
					<Icons.AddressPin />
				</Styles.MenuIcon>
				<Styles.MenuTextContainer>
					<Styles.MenuTitle>Endereço</Styles.MenuTitle>
					<Styles.MenuSubtitle>Suas definições de endereço</Styles.MenuSubtitle>
				</Styles.MenuTextContainer>
			</Styles.MenuItemLeft>
			<Icons.Arrow />
		</Styles.MenuItem>

		<Styles.MenuItem onPress={() => navigation.navigate('ProfileHelp', { headerTitle: 'Ajuda' })}>
			<Styles.MenuItemLeft>
				<Styles.MenuIcon>
					<Icons.Help />
				</Styles.MenuIcon>
				<Styles.MenuTextContainer>
					<Styles.MenuTitle>Ajuda</Styles.MenuTitle>
					<Styles.MenuSubtitle>Dicas de como usar o aplicativo</Styles.MenuSubtitle>
				</Styles.MenuTextContainer>
			</Styles.MenuItemLeft>
			<Icons.Arrow />
		</Styles.MenuItem>
		<Styles.NotificationSwitch>
			<Styles.NotificationText>Notificações</Styles.NotificationText>
			<CustomSwitch value={isNotificationsEnabled} onValueChange={toggleSwitch}/>
    	</Styles.NotificationSwitch>
		<Styles.LeaveButton onPress={handleExit}>
			<Styles.LeaveButtonText>Sair do aplicativo</Styles.LeaveButtonText>
		</Styles.LeaveButton>
	</Styles.MenuContainer>
	</Styles.Container>
  );
}