import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Svg, Path } from 'react-native-svg';
import styled from 'styled-components/native';
import Icons from '../../assets/icons';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const CustomHeader = ({ title }) => {
	const navigation = useNavigation();
	return (
	  <Header>
		<BackButton onPress={() => navigation.goBack()} >
			<Icons.BackArrow width={20} height={16} color={'#4B4B4B'} />
		</BackButton>
		<TitleContainer>
			<Title>{title}</Title>
		</TitleContainer>
	  </Header>
	);
  };


const Header = styled.View`
	flex-direction: row;
	align-items: center;
	background-color: white;
	padding: 48px 0px 48px 10px;
`;

const BackButton = styled.TouchableOpacity`
	margin-left: ${screenWidth * 0.015}px;
	padding: 0px 10px;
`;

const TitleContainer = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: center;
	padding-right: ${screenWidth * 0.25}px;
`;

const Title = styled.Text`
	font-family: 'Urbanist-Medium';
	font-size: 18px;
	color: #1E1E1E;
`;

export default CustomHeader;