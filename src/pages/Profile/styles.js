import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const Container = styled.View`
  flex: 1;
  background-Color: #FFFFFF;
  padding: 0 20px;
`;

const Header = styled.View`
	align-items: center;
	justify-content: center;
	margin-bottom: ${height * 0.10};
	margin-top: ${height * 0.12};
`;

const ProfileName = styled.Text`
	font-family: 'Urbanist-SemiBold';
	font-size: 18px;
	color: #1E1E1E;
	margin-top: 10px;
`;

const ProfileEmail = styled.Text`
	font-family: 'Urbanist-Regular';
	font-size: 14px;
	color: #9D9D9D;
`;

const MenuContainer = styled.View`
	height: 70%;
	gap: ${height * 0.04};
	flex-direction: column;
	align-items: center;
	justify-content: center;

`;

const MenuItem = styled.TouchableOpacity`
	width: 95%;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	border-bottom-color: #EBEDF3;
	borderBottomWidth: 1;
	padding-bottom: 22px;
`;

const MenuIcon = styled.View`
	width: 44px;
	height: 44px;
	border-radius: 20px;
	align-items: center;
	justify-content: center;
	background-color: #FE724C33;
`;

const MenuItemLeft = styled.View`
	gap: 5px;
	display: flex;
	flex-direction: row;
`;

const MenuTextContainer = styled.View`
	gap: 8px;
	margin-left: 22px;
`;

const MenuTitle = styled.Text`
	font-family: 'Urbanist-Regular';
	font-size: 15px;
	color: #1E1E1E;
`;

const MenuSubtitle = styled.Text`
	font-family: 'Urbanist-Regular';
	font-size: 12px;
	color: #9D9D9D;
`;

const NotificationSwitch = styled.View`
	width: 95%;
	margin-top: ${height * 0.009};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const NotificationText = styled.Text`
	font-family: 'Urbanist-SemiBold';
	font-size: 14px;
	font-weight: 600px;
	color: #1E1E1E;
	align-items: center;
`;

const LeaveButton = styled.TouchableOpacity`
	margin-top: ${height * 0.10};
	margin-bottom: 30px;
	align-items: center;
	width: 95%;
	heght: 48px;
	padding: 16px;
	border-radius: 12px;
	background-color: #F2F2F2;
	justify-self: flex-end;
`;

const LeaveButtonText = styled.Text`
	font-family: 'Urbanist-Regular';
	font-size: 14px;
	font-weight: 600px;
	color: #1E1E1E;
	align-items: center;
`;

// profile user page

const HeaderUser = styled.Text`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 20px;
	text-align: center;
`;

const Label = styled.Text`
	font-size: 16px;
	margin-bottom: 8px;
	color: #333333;
`;

const Input = styled.TextInput`
	height: 40px;
	border: 1px solid #e6e6e6;
	border-radius: 4px;
	padding: 8px;
	margin-bottom: 16px;
	color: #333333;
`;


const Styles = { Container, Header, ProfileName, ProfileEmail,
	MenuContainer, MenuItem, MenuIcon,
	MenuTitle, MenuSubtitle, MenuTextContainer , MenuItemLeft, NotificationSwitch,
	LeaveButton, NotificationText, LeaveButtonText, HeaderUser, Label, Input };

export default Styles