import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const screenWidth = Dimensions.get('window').width;

const Container = styled.View`
	flex: 1;
	background-color: #FFFFFF;
	padding: 0 20px;
	align-items: center;
`;

const Header = styled.View`
	align-items: center;
	justify-content: center;
	margin-bottom: ${height * 0.10}px;
	margin-top: ${height * 0.12}px;
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
	gap: ${height * 0.04}px;
	flex-direction: column;
	align-items: center;
	justify-content: center;

`;

const MenuItem = styled.TouchableOpacity`
	width: ${screenWidth *0.85}px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	border-bottom-color: #EBEDF3;
	borderBottomWidth: 1px;
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
	width: ${screenWidth *0.85}px;
	margin-top: ${height * 0.009}px;
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
	margin-top: ${height * 0.10}px;
	margin-bottom: 30px;
	align-items: center;
	width: ${screenWidth *0.85}px;
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
const HeaderUser = styled.View`
	align-items: center;
	justify-content: center;
	margin-bottom: ${height * 0.085}px;
`;

const LabelContainer = styled.View`
	width: 95%;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const Label = styled.Text`
	margin-bottom: 8px;
	color: #333333;
	font-family: 'Urbanist-Medium';
	font-size: 13px;
`;

const InputContainer = styled.View`
	width: ${screenWidth * 0.90}px;;
	margin-bottom: ${height * 0.03}px;
	border-width: 1px;
	border-color: #DCDCDC;
	border-radius: 12px;
	flex-direction: row;
	align-items: center;
	padding: 10px;
`;

const Input = styled.TextInput`
	flex: 1;
	padding-left: 10px;
	font-family: 'Urbanist-Regular';
	font-size: 13px;
	color: #1E1E1E;
`;

const InputScrollContainer = styled.ScrollView`
`;

const EmptySpace = styled.View`
	width: ${screenWidth *0.85}px;
	height: ${height * 0.17}px;
`;

const Styles = { Container, Header, ProfileName, ProfileEmail,
	MenuContainer, MenuItem, MenuIcon,
	MenuTitle, MenuSubtitle, MenuTextContainer , MenuItemLeft, NotificationSwitch,
	LeaveButton, NotificationText, LeaveButtonText, HeaderUser, Label, Input, InputContainer, LabelContainer, EmptySpace, InputScrollContainer };

export default Styles