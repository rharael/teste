import styled from 'styled-components/native';

const Header = styled.View`
	align-items: center;
	justify-content: center;
	margin-bottom: 115px;
	margin-top: 114px;
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
	justify-content: space-arounddd;
`;

const MenuItem = styled.TouchableOpacity`
	width: 85%;
	flex-direction: row;
	align-items: center;
	margin-bottom: 20px;
	justify-content: space-between;
	border-bottom-color: #EBEDF3;
	borderBottomWidth: 1;
	padding-bottom: 16px;
`;

const MenuIcon = styled.View`
	width: 40px;
	height: 40px;
	border-radius: 20px;
	align-items: center;
	justify-content: center;
	background-color: #FE724C33;
`;

const MenuItemLeft = styled.View`
	display: flex;
	flex-direction: row;
`;

const MenuTextContainer = styled.View`
	margin-left: 22px;
`;

const MenuTitle = styled.Text`
	font-size: 15px;
	font-weight: 500px;
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

const NotificationSwitch = styled.View`
	width: 85%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const NotificationText = styled.Text`
	font-size: 14px;
	font-weight: 600px;
	color: #1E1E1E;
	align-items: center;
`;

const LeaveButton = styled.TouchableOpacity`
	margin-top: 100px;
	align-items: center;
	width: 85%;
	heght: 48px;
	padding: 16px;
	border-radius: 12px;
	background-color: #F2F2F2;
`;

const Styles = { Header, ProfileName, ProfileEmail,
	MenuContainer, MenuItem, MenuIcon,
	MenuTitle, MenuSubtitle, MenuTextContainer,
	Arrow, MenuItemLeft, NotificationSwitch,
	LeaveButton, NotificationText };

export default Styles