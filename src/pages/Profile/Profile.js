import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import Screen from './src/components/Screen';
import { Header, ProfileName, ProfileEmail, MenuContainer,
	MenuItem, MenuIcon, MenuTitle, MenuSubtitle, MenuTextContainer, Arrow, MenuItemLeft } from './styles'
export default function Profile() {
  return (
	<Screen>
    <Header>
		<ProfileName>João das Neves</ProfileName>
		<ProfileEmail>joao.neves@gemail.com</ProfileEmail>
    </Header>
	<MenuContainer>
		<MenuItem>
			<MenuItemLeft>
				<MenuIcon>
					<Text>👤</Text>
				</MenuIcon>
				<MenuTextContainer>
					<MenuTitle>Perfil</MenuTitle>
					<MenuSubtitle>Informações pessoais</MenuSubtitle>
				</MenuTextContainer>
			</MenuItemLeft>
			<Arrow>{'>'}</Arrow>
		</MenuItem>

		<MenuItem>
			<MenuItemLeft>
				<MenuIcon>
					<Text>📍</Text>
				</MenuIcon>
				<MenuTextContainer>
					<MenuTitle>Endereço</MenuTitle>
					<MenuSubtitle>Suas definições de endereço</MenuSubtitle>
				</MenuTextContainer>
			</MenuItemLeft>
			<Arrow>{'>'}</Arrow>
		</MenuItem>

		<MenuItem>
			<MenuItemLeft>
				<MenuIcon>
					<Text>?</Text>
				</MenuIcon>
				<MenuTextContainer>
					<MenuTitle>Ajuda</MenuTitle>
					<MenuSubtitle>Dicas de como usar o aplicativo</MenuSubtitle>
				</MenuTextContainer>
			</MenuItemLeft>
			<Arrow>{'>'}</Arrow>
		</MenuItem>
	</MenuContainer>
	</Screen>

  );
}
