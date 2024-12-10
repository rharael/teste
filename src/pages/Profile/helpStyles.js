import styled from "styled-components/native";

const Container = styled.ScrollView`
	flex: 1;
	background-color: #FFFFFF;
	padding: 20px;
`;

const Input = styled.TextInput`
	height: 50px;
	border-width: 1px;
	background-color: #F0F1F2;
	border-radius: 8px;
	padding: 10px;
	margin-bottom: 20px;
`;

const FAQContainer = styled.View`
	margin-bottom: 15px;
`;

const QuestionContainer = styled.TouchableOpacity`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: #F5F5F5;
	padding: 15px;
	border-radius: 8px;
`;

const Question = styled.Text`
	font-family: 'Urbanist-Medium';
	font-size: 13px;
	color: #0F100D;
`;

const Answer = styled.Text`
	font-family: 'Urbanist-Medium';
	font-size: 13px;
	color: #0F100D;
	margin-top: 10px;
	padding: 0 10px;
`;

const FAQList = styled.View`
	margin-top: 20px;
`;

const Icon = styled.View`
	margin-right: 5px;
`;

const Styles = {
	Container,
	Input,
	FAQContainer,
	QuestionContainer,
	Question,
	Answer,
	FAQList,
	Icon,
};

export default Styles;
