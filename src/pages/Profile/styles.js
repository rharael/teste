import styled from 'styled-components/native';

const Header = styled.View`
	align-items: center;
	margin-bottom: 30px;
`;

const ProfileName = styled.Text`
	font-size: 18px;
	font-weight: bold;
	color: #1E1E1E;
	margin-top: 10px;
`;

const ProfileEmail = styled.Text`
	font-size: 14px;
	color: #9D9D9D;
`;

const MenuContainer = styled.View`
	flex-direction: column;
	align-items: center;
`;

const MenuItem = styled.TouchableOpacity`
	width: 85%;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const MenuIcon = styled.View`
	width: 40px;
	height: 40px;
	border-radius: 20px;
	align-items: center;
	justify-content: center;
	background-color: #FE724C;
`;

const MenuItemLeft = styled.View`
	display: flex;
	flex-direction: row;
	
`;

const MenuTextContainer = styled.View`
	margin-left: 22px;
`;

const MenuTitle = styled.Text`
	font-size: 16px;
	color: #1E1E1E;
`;

const MenuSubtitle = styled.Text`
	font-size: 12px;
	color: #9D9D9D;
`;

const Arrow = styled.Text`
	color: #FE724C;
	font-size: 30px;
`;


export { Header, ProfileName, ProfileEmail, MenuContainer, MenuItem, MenuIcon, MenuTitle, MenuSubtitle, MenuTextContainer, Arrow, MenuItemLeft };