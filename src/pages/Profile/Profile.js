import { useState } from 'react';
import {Text, Switch, } from 'react-native';
import Screen from '../../components/Screen'
import Styles from './styles';
import Icons from '../../assets/icons';

export default function Profile() {
	const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
	const toggleSwitch = () => setIsNotificationsEnabled((prev) => !prev);

  return (
	<Screen>
    <Styles.Header>
		<Styles.ProfileName>João das Neves</Styles.ProfileName>
		<Styles.ProfileEmail>joao.neves@gemail.com</Styles.ProfileEmail>
		</Styles.Header>
	<Styles.MenuContainer>
		<Styles.MenuItem>
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

		<Styles.MenuItem>
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

		<Styles.MenuItem>
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
			<Switch
			trackColor={{ false: '#767676', true: '#FE724C' }}
			thumbColor={isNotificationsEnabled ? '#FFFFFF' : '#F1F1F1'}
			onValueChange={toggleSwitch}
			value={isNotificationsEnabled}
			/>
      </Styles.NotificationSwitch>
	  <Styles.LeaveButton>
		<Text>Sair do aplicativo</Text>
	</Styles.LeaveButton>
	</Styles.MenuContainer>
	</Screen>

  );
}